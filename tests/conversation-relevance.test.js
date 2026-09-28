import test from 'node:test';
import assert from 'node:assert/strict';
import {scriptFor} from '../lib/sales-engine.js';

const examples=[
 ['No es caro, pero no quiero copagos','copago',/no quieres pagar por cada uso/i],
 ['Mi mujer es médica y dice que no cubre implantes','dental',/tratamiento dental/i],
 ['Tengo tarjeta sanitaria, no necesito seguro de viaje','viaje',/destino/i],
 ['Quiero esperar a hablarlo con mi marido','pareja',/decidáis juntos/i],
 ['La prima es alta y no me la puedo permitir','presupuesto',/límite/i],
 ['Vi otro precio en el anuncio','anuncio',/precio anunciado/i],
 ['¿Cuánto es cada copago?','copago',/comprobar.*copagos/i],
 ['¿Cuánto tiempo tengo que esperar para una prueba?','carencias',/plazo exacto/i],
 ['¿Cubre implantes?','dental',/tratamiento dental/i],
 ['¿Está incluido el servicio?','coberturas',/comprobar esa prestación/i],
 ['No recibí el correo','delivery',/no te haya llegado/i],
 ['Quiero contratar si el precio final es ese','conditional',/precio final es ese/i],
 ['No quiero contratar todavía','pending',/aún no quieras decidir/i],
 ['No quiero contratar','decline',/dejamos la propuesta aquí/i],
 ['No me llames más','stop',/no volveremos a llamarte/i],
 ['Sí, pero si hay copagos no lo quiero','copago',/no quieres pagar por cada uso/i],
 ['No me interesa, deja de insistir','pressure',/perdona/i],
 ['No voy a dar mi IBAN por teléfono','confianza',/verificar la identidad/i],
 ['¿Es mensual el pago?','payment',/cada cuánto se cobra/i],
 ['Mi seguro actual me cubre','actual',/antes de cambiar/i]
];

test('la respuesta aborda la intención y el detalle expresados en cada frase',()=>{
 for(const [phrase,id,content] of examples){
  const answer=scriptFor(phrase,'','sale',{product:'Adeslas Plena',quote:'75 € / mes'});
  assert.equal(answer.id,id,phrase);
  assert.match(answer.say,content,phrase);
 }
});

test('la elección manual no tapa una intención reconocida y una respuesta breve no equivale a contratar',()=>{
 assert.equal(scriptFor('No quiero copagos','precio','sale').id,'copago');
 const yes=scriptFor('Sí','','sale',{turns:[{topicId:'precio',topic:'Precio alto',ask:'¿Se sale de tu presupuesto?'}]});
 assert.equal(yes.id,'descubrir');
 assert.match(yes.say,/precio alto/i);
});

test('una condición verificable no se presenta como aceptación definitiva',()=>{
 const answer=scriptFor('Quiero contratar, pero solo si cubre la operación mañana','','sale');
 assert.equal(answer.id,'conditional');
 assert.match(answer.say,/cubre la operación mañana/i);
 assert.match(answer.close,/verificar/i);
});
