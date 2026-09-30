import test from 'node:test';import assert from 'node:assert/strict';import fs from 'node:fs';
import {coachCases} from './coach-cases.js';
import {localCoachFor,prepareContext,redactIdentifiers,generateCoach,parseCoachResponse,COACH_INSTRUCTIONS} from '../lib/coach.js';
import {searchDocuments} from '../lib/document-search.js';
const context={need:'consultar especialistas',product:'Adeslas Plena',quote:'75 € / mes',budget:'80',duration:'12',follow:true,consent:true,followDate:'2026-10-02T10:00'};
for(const [i,row] of coachCases.entries())test(`Simulación ${String(i+1).padStart(2,'0')}: ${row[0]}`,()=>{
 const history=[];let blocked=false;
 for(const [phrase,id,content] of [[...row.slice(0,3)],[...row.slice(3,6)]]){
  const a=localCoachFor(phrase,{...context,turns:history,blocked});
  const aliases={compare:'comparar',duration:'duracion',medical:'patologia',family:'pareja',price:'precio',budget:'presupuesto',trust:'confianza',written:'correo',doctor:'medico',carencia:'carencias'};assert.equal(aliases[a.id]||a.id,aliases[id]||id,phrase);assert.match(a.say+' '+a.ask,content,phrase);
  assert.ok(a.tone.length>3&&a.pace.length>10);assert.doesNotMatch(a.say,/Quiero responder a lo que acabas de comentar|venta garantizada|imposible no vender/i);
  if(a.blocked){assert.equal(a.ask,'');blocked=true;}
  history.push({client:phrase,say:a.say,ask:a.ask,topic:a.title,topicId:a.id,blocked:a.blocked});
 }
 const opener=localCoachFor('',{...context,turns:history,blocked,intent:'opening'});
 assert.ok(opener.say&&opener.tone&&opener.pace);
 if(blocked)assert.match(opener.say,/no debe recibir/i);else if(row[4]==='privacy')assert.doesNotMatch(opener.say,/IBAN/);else assert.ok(opener.say.includes(row[3])||opener.say.includes('mencionaste')); 
 const exit=localCoachFor('No quiero que me contactes más',{...context,turns:history});assert.equal(exit.blocked,true);assert.equal(exit.ask,'');
});
test('las 50 simulaciones son distintas',()=>{assert.equal(coachCases.length,50);assert.equal(new Set(coachCases.map(x=>x[0])).size,50);});
test('contexto y datos identificativos minimizados',()=>{
 const x=prepareContext({alias:'Nombre real',cp:'38007',secret:'no enviar',need:'ES12 3456 7890 1234 5678 9012, 12345678Z, prueba@example.com, 612345678',turns:[]});
 assert.equal(x.alias,undefined);assert.equal(x.cp,undefined);assert.equal(x.secret,undefined);assert.doesNotMatch(x.need,/12345678|example|612345678|3456/);
 assert.match(redactIdentifiers('Mi NIE X1234567L'),/omitido/);
});
test('sin acuerdo ni fecha no inventa la apertura',()=>{assert.match(localCoachFor('',{...context,consent:false,intent:'opening'}).say,/no hay un recontacto/i);});
test('sí/no conserva la pregunta del turno anterior',()=>{
 const c={...context,turns:[{topic:'Presupuesto',ask:'¿El coste supera tu presupuesto?',topicId:'budget'}]};
 assert.match(localCoachFor('Sí',c).say,/coste|límite/);assert.match(localCoachFor('No',c).say,/presupuesto no es/);assert.notEqual(localCoachFor('Sí',c).id,'ready');
});
test('recuperación aísla el producto exacto y excluye instrucciones internas',()=>{
 const records=JSON.parse(fs.readFileSync('lib/documents-data.json','utf8'));
 const r=searchDocuments(records,'hospital y autorizaciones',{product:'Adeslas Plena',forCoach:true});
 assert.ok(r.length>0);for(const x of r){assert.match(x.source,/\/4\. Plena\//);assert.doesNotMatch(x.source,/Argumentario|PREGUNTAS|Intern/i);}
 assert.equal(searchDocuments(records,'hospital',{forCoach:true}).length,0);
});
test('contrato con proveedor, historial, redacción y fuentes verificables',async()=>{
 let body;
 const a=await generateCoach('Me da reparo el precio',{...context,turns:[{client:'Tengo dudas',say:'Las revisamos',ask:'¿Cuál?',topic:'Dudas'}]},[{id:'1',title:'Condiciones Plena',page:2,text:'Texto de consulta'}],{key:'test-only',fetcher:async(url,req)=>{
  body=JSON.parse(req.body);assert.equal(url,'https://api.openai.com/v1/responses');return {ok:true,json:async()=>({status:'completed',output:[{type:'reasoning'},{type:'message',content:[{type:'output_text',text:JSON.stringify({say:'Revisemos ese importe y el coste completo.',ask:'¿Qué importe te encaja?',next:'Compara el coste total.',topic:'Precio',tone:'Comprensivo',pace:'Pausa después del importe.',intent:'compare',verification:['Confirmar cuota'],sourceIds:['1','inventada']})}]}]})};
 }});
 assert.equal(body.store,false);assert.equal(body.text.format.strict,true);assert.ok(body.input.includes('Tengo dudas'));assert.equal(a.source,'ai');assert.equal(a.sources.length,1);assert.ok(COACH_INSTRUCTIONS.includes('no fiables'));
});
test('una salida inválida del proveedor nunca se muestra como respuesta',()=>{
 for(const output of [{status:'incomplete',output:[]},{status:'completed',output:[{type:'message',content:[{type:'refusal',refusal:'No'}]}]},{status:'completed',output:[{type:'message',content:[{type:'output_text',text:'{}'}]}]}])assert.throws(()=>parseCoachResponse(output));
});
