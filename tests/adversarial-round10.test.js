import test from 'node:test';
import assert from 'node:assert/strict';
import {scriptFor} from '../lib/sales-engine.js';

const startingConcerns=[
 'No puedo pagar esta cuota',
 'El precio me parece caro',
 'Otra compañía me ofrece algo más barato',
 'Quiero pensarlo',
 'No me fío por teléfono',
 'No quiero copagos',
 'Me preocupa la carencia',
 'Debo hablarlo con mi pareja',
 'Ya tengo seguro',
 'No veo la necesidad'
];
const contexts=[
 'consultas', 'hospitalización', 'especialistas', 'pruebas', 'urgencias',
 'medicina familiar', 'una clínica', 'viajes', 'dental', 'una segunda opinión'
];

function rounds(start){
 const concerns=[
  start,
  'Me preocupan las subidas en renovación',
  'No quiero copagos',
  'Me preocupa la carencia',
  'Quiero confirmar mi médico y hospital',
  'No sé si cubre el tratamiento',
  'No sé cuánto subirá en la renovación',
  'Tengo que hablarlo con mi pareja'
 ];
 return [
  concerns[0],
  concerns.slice(0,2).join('. '),
  concerns.slice(0,3).join('. '),
  concerns.slice(0,5).join('. '),
  'Quiero contratar, pero solo si se cumplen estas condiciones: '+concerns.slice(0,5).join('. '),
  '¿Me garantizas todo esto? '+concerns.slice(0,6).join('. '),
  concerns.slice(0,7).join('. '),
  concerns.join('. '),
  'No me presiones. '+concerns.join('. '),
  'No me llames más.'
 ];
}

test('100 conversaciones avanzan hasta la décima ronda sin cerrar con objeciones pendientes',()=>{
 let simulations=0,interventions=0;
 for(const start of startingConcerns){
  for(const need of contexts){
   const history=[];
   const dialogue=rounds(start);
   assert.equal(dialogue.length,10);
   for(const [index,utterance] of dialogue.entries()){
    assert.ok(utterance.length<=2000);
    const answer=scriptFor(utterance,'','sale',{need,product:'Modalidad por confirmar',quote:'75 € / mes',turns:history});
    assert.ok(answer.say?.trim(),`Sin respuesta en caso ${simulations+1}, ronda ${index+1}`);
    assert.ok(answer.ask!==undefined);
    assert.notEqual(answer.id,'ready',`Cierre prematuro en caso ${simulations+1}, ronda ${index+1}`);
    if(index>=1&&index<=7)assert.ok(answer.otherConcerns.length>=1,`Faltan objeciones secundarias en caso ${simulations+1}, ronda ${index+1}`);
    if(index===4)assert.equal(answer.id,'conditional');
    if(index===5)assert.equal(answer.id,'guarantee');
    if(index===8)assert.equal(answer.id,'pressure');
    if(index===9){assert.equal(answer.id,'stop');assert.equal(answer.ask,'');}
    history.push({topicId:answer.id,topic:answer.title});
    interventions++;
   }
   simulations++;
  }
 }
 assert.equal(simulations,100);
 assert.equal(interventions,1000);
});

