import {normalize} from './sales-engine.js';
const stops=new Set('a al algo antes cada como con cuando de del donde el en es esa ese esta este esto ha hay la las le lo los mas me mi muy no para pero por que se si sin su te tiene tu un una usar seguro adeslas quiero necesito saber cuanto puedo cubre incluye'.split(' '));
const concepts=[
 [/autoriz|denieg|dicen que no|pega|tirad/,'autorización autorizaciones exclusiones'],
 [/espera|primer dia|pronto|fecha|empie|efecto/,'carencia carencias efecto'],
 [/recibo|cuota|precio|coste|dinero/,'prima pago copago'],
 [/visita|cada vez|copag/,'copagos consulta'],
 [/hospital|operacion|cirug/,'hospitalización cirugía'],
 [/baja|cancel|atad|duracion|compromiso/,'duración renovación vencimiento'],
 [/diagnost|medic|enfermed|cuestionario/,'preexistencias cuestionario exclusiones'],
 [/dent|implante/,'dental implantes franquicias']
];
export function searchDocuments(records,query,{product='',branch='',limit=6,forCoach=false}={}) {
 const q=normalize(query);const expanded=q+' '+concepts.filter(([re])=>re.test(q)).map(([,v])=>normalize(v)).join(' ');
 const terms=[...new Set(expanded.split(/[^a-z0-9]+/).filter(w=>w.length>2&&!stops.has(w)))];
 if(!terms.length)return [];
 const p=normalize(product).replace(/^adeslas\s+/,'').trim();
 if(forCoach&&!p)return [];
 const scored=[];
 for(const r of records) {
  const source=normalize(r.source),folder=source.split('/').at(-2)?.replace(/^\d+\.\s*/,'');
  if(forCoach){
   if(!/condiciones|ipid|nota informativa|copagos|carencias|tarifas/.test(normalize(r.title)))continue;
   if(/preguntas|argumentario|intern|suscripcion/.test(source))continue;
   if(folder!==p&&!folder?.startsWith(p+' ('))continue;
  }
  const text=normalize(r.text),title=normalize(r.title);
  let score=terms.reduce((n,w)=>n+(text.includes(w)?1:0)+(title.includes(w)?2:0),0);
  if(!score)continue;
  if(p&&folder===p)score+=4;
  if(branch&&source.includes(normalize(branch)))score+=1;
  const first=terms.map(w=>text.indexOf(w)).filter(n=>n>=0).sort((a,b)=>a-b)[0]||0;
  const start=Math.max(0,first-200);const snippet=(start?'…':'')+r.text.slice(start,start+(forCoach?1800:6000))+(r.text.length>start+(forCoach?1800:6000)?'…':'');
  scored.push({score,record:{...r,text:snippet}});
 }
 return scored.sort((a,b)=>b.score-a.score||String(a.record.id).localeCompare(String(b.record.id))).slice(0,limit).map(x=>x.record);
}
