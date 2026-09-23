import test from 'node:test';
import assert from 'node:assert/strict';
import {scriptFor} from '../lib/sales-engine.js';

const reply=(phrase,context={})=>scriptFor(phrase,'','sale',context);

test('cliente sin necesidad no recibe un cierre inventado',()=>{
 const answer=reply('Estoy bien como estoy. No veo la necesidad.');
 assert.equal(answer.id,'no_need');
 assert.match(answer.ask,/hay algo concreto/i);
 assert.match(answer.close,/no fuerces/i);
});

test('cliente con presupuesto insuficiente obtiene una pregunta de límite real',()=>{
 const answer=reply('No puedo pagarlo; estoy comparando con otra compañía.');
 assert.equal(answer.id,'presupuesto');
 assert.match(answer.ask,/importe máximo/i);
});

test('una objeción repetida conduce al dato pendiente',()=>{
 const first=reply('Es muy caro.');
 const second=reply('Sigue pareciéndome caro.',{turns:[{topicId:first.id,topic:first.title}]});
 assert.equal(second.id,'precio');
 assert.match(second.say,/sigue sin resolverse/i);
 assert.doesNotMatch(second.say,/miremos la cuota/i);
});

test('sin precio y producto confirmados, aceptar no inicia la solicitud',()=>{
 const answer=reply('Quiero contratar');
 assert.equal(answer.id,'ready');
 assert.match(answer.say,/necesito concretar/i);
});

test('aceptación condicionada no se trata como un sí definitivo',()=>{
 const answer=reply('Quiero contratar, pero solo si cubre la operación');
 assert.equal(answer.id,'conditional');
 assert.match(answer.close,/decisión expresa/i);
});

test('todavía no no bloquea el recontacto como rechazo permanente',()=>{
 const answer=reply('No quiero contratar todavía');
 assert.equal(answer.id,'pending');
});

test('petición de garantía no promete aceptación ni cobertura',()=>{
 const answer=reply('¿Me garantizas que me cubre la operación mañana?');
 assert.equal(answer.id,'guarantee');
 assert.match(answer.say,/no puedo garantizar/i);
});

test('petición de no contacto bloquea la insistencia',()=>{
 const answer=reply('No me llames más, por favor');
 assert.equal(answer.id,'stop');
 assert.equal(answer.ask,'');
});

test('no contacto prevalece sobre un aplazamiento en la misma frase',()=>{
 const answer=reply('No quiero contratar todavía. No me llames más.');
 assert.equal(answer.id,'stop');
 assert.equal(answer.ask,'');
});

test('un cliente presionado recibe una salida libre',()=>{
 const answer=reply('No me presiones más');
 assert.equal(answer.id,'pressure');
 assert.match(answer.say,/decisión es tuya/i);
});

test('datos bancarios se remiten al canal autorizado',()=>{
 const answer=reply('Te doy mi IBAN ahora');
 assert.equal(answer.id,'privacy');
 assert.match(answer.say,/canal autorizado/i);
});

