import test from 'node:test';
import assert from 'node:assert/strict';
import {scriptFor} from '../lib/sales-engine.js';

const rounds=[
 {expected:['pending','pending','pending','pensar','pensar'],phrases:['No sé si me conviene','No lo tengo claro','No estoy seguro','Necesito más tiempo para decidir','Aún no he decidido']},
 {expected:'precio',phrases:['No me encaja el importe','La cuota mensual se me hace alta','Me sale caro','No me cuadra el precio','La prima mensual es demasiado alta']},
 {expected:'presupuesto',phrases:['Mi presupuesto máximo es 50 €','No puedo pagar esa cantidad','No llego a esa cuota','No me lo puedo permitir cada mes','Mi tope mensual son 50 €']},
 {expected:'coberturas',phrases:['Antes necesito saber si cubre esa prestación','¿Está incluido el servicio que necesito?','No sé si esta cobertura me sirve','¿Eso está cubierto?','Quiero comprobar lo que incluye']},
 {expected:'confianza',phrases:['No voy a dar mi IBAN por teléfono','No confío en esta llamada','Prefiero verificar quién me llama','No me fío de dar datos bancarios','No compartiré mi cuenta bancaria']},
 {expected:'correo',phrases:['Mándamelo por correo','Envíame las condiciones por escrito','Quiero verlo en un email','Prefiero un resumen por escrito','Envíamelo antes de decidir']},
 {expected:'pareja',phrases:['Lo consulto con mi pareja','Mi mujer quiere revisarlo','Tengo que hablarlo con mi marido','Mi familia debe valorarlo','Mi esposo también decide']},
 {expected:'conditional',phrases:['Quiero contratar, pero solo si cubre eso','Quiero contratar si el precio final es ese','Contratemos siempre que no haya copagos','Iniciemos la solicitud, pero antes confirma la carencia','Quiero contratar, pero necesito confirmación escrita']},
 {expected:'guarantee',phrases:['¿Me garantizas que me aceptan?','¿Puedes garantizar que estará cubierto?','Garantízame que no subirá','¿Me aseguras que el precio no cambia?','¿Me garantizas esa condición por escrito?']},
 {expected:'stop',phrases:['No me contactes de nuevo','No me llames más','Borra mis datos y no me llames','No quiero más llamadas','No me interesa; no vuelvas a contactarme']}
];
const needs=['consultas','hospitalización','pediatría','traumatología','pruebas diagnósticas','dermatología','dental','medicina familiar','rehabilitación','viajes','urgencias','segunda opinión','oftalmología','fisioterapia','ginecología','cardiología','un centro concreto','reembolso','cobertura familiar','seguimiento médico'];

test('100 nuevas conversaciones con matices completan diez rondas sin confundir dudas con consentimiento',()=>{
 let cases=0,turns=0;
 for(const [variant] of rounds[0].phrases.entries()){
  for(const need of needs){
   const history=[];
   for(const [round,fixture] of rounds.entries()){
    const phrase=fixture.phrases[variant];
    const answer=scriptFor(phrase,'','sale',{need,product:'Modalidad por confirmar',quote:'75 € / mes',turns:history});
    assert.equal(answer.id,Array.isArray(fixture.expected)?fixture.expected[variant]:fixture.expected,`caso ${cases+1}, ronda ${round+1}: ${phrase}`);
    assert.ok(answer.say?.trim());
    assert.notEqual(answer.id,'ready');
    if(round===9)assert.equal(answer.ask,'');
    history.push({topicId:answer.id,topic:answer.title});
    turns++;
   }
   cases++;
  }
 }
 assert.equal(cases,100);
 assert.equal(turns,1000);
});

