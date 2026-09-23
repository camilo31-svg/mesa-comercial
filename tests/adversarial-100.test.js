import test from 'node:test';
import assert from 'node:assert/strict';
import {scriptFor} from '../lib/sales-engine.js';

const openings=[
 ['presupuesto', ['No puedo pagarlo','No me lo puedo permitir','No tengo dinero','No llego a fin de mes','Estoy sin dinero','No puedo pagar esa cuota','No llego con mis gastos','No me lo puedo permitir ahora','No puedo pagar tanto','No tengo dinero para eso']],
 ['precio', ['Es caro','El precio es alto','Me parece muy caro','Cuesta mucho dinero','El precio no me convence','Es demasiado costoso','Caro para mí','No sé si el precio compensa','Me preocupa el precio','Parece caro']],
 ['comparar', ['Estoy mirando otra compañía','Sanitas me ha dado otra oferta','DKV parece mejor','Asisa me ofrece otra opción','Quiero comparar','Hay otras ofertas','Otra aseguradora me cobra menos','Primero voy a comparar','Tengo una oferta más barata','Otra compañía tiene mejor precio']],
 ['pensar', ['Quiero pensarlo','Necesito pensar','Prefiero evaluarlo','Voy a valorar la propuesta','Necesito decidir con calma','Déjame pensarlo','Tengo que pensar más','Lo voy a evaluar','Me lo pienso','Quiero valorarlo']],
 ['confianza', ['No me fío por teléfono','¿Esto es una estafa?','No tengo confianza','Me pides datos bancarios','No doy mi IBAN','Prefiero verificar el teléfono','No me fío','Dudo de la agencia por teléfono','No compartiré mi cuenta bancaria','No confío en esta llamada']],
 ['copago', ['No quiero copagos','¿Hay copago?','Me preocupan los copagos','No acepto copago','Quiero cero copagos','Los copagos me frenan','No entiendo el copago','Copagos no','¿Cuánto es cada copago?','Prefiero sin copago']],
 ['carencias', ['¿Hay carencias?','No quiero esperar por carencia','La carencia me preocupa','¿Cuánto tiempo tengo que esperar?','¿Hay una carencia para pruebas?','No entiendo la carencia','Me preocupa esperar','Quiero saber las carencias','Una carencia me frena','¿Puedo evitar la carencia?']],
 ['pareja', ['Lo hablaré con mi pareja','Tengo que hablar con mi mujer','Mi marido debe decidir','Lo consulto con mi familia','Mi esposo quiere revisarlo','Mi esposa tiene dudas','Mi pareja no está convencida','Quiero consultarlo','Debo hablarlo con mi marido','Mi familia quiere verlo']],
 ['actual', ['Ya tengo seguro','Tengo seguro actualmente','Mi seguro actual me vale','¿Por qué cambiarme?','No quiero cambiar de seguro','Ya tengo otro seguro','Mi seguro me cubre','Estoy pensando cambiarme','No sé si cambiar de seguro','Tengo seguro con otra empresa']],
 ['no_need', ['No lo necesito','No necesito otro seguro','No veo la necesidad','Estoy bien como estoy','No tengo ningún problema','No veo necesidad de contratar','No necesito un seguro más','Ahora estoy bien como estoy','No tengo ningún problema que resolver','No lo necesito de momento']]
];

const escalations=[
 'Quiero contratar, pero solo si cubre la operación',
 'Sí, pero si hay copagos no lo quiero',
 '¿Me garantizas que nunca subirá?',
 'No quiero contratar todavía',
 'No me presiones',
 'No me llames más'
];
const expectedEscalations=['conditional','copago','guarantee','pending','pressure','stop'];

test('100 llamadas adversariales: la respuesta se ajusta a la objeción y no fuerza un cierre',()=>{
 let calls=0,turns=0;
 for(const [category,phrases] of openings){
  for(const phrase of phrases){
   const history=[];
   for(const [step,utterance] of [phrase,...escalations].entries()){
    const answer=scriptFor(utterance,'','sale',{need:'valorar una cobertura útil',product:'Adeslas Plena',quote:'75 € / mes',turns:history});
    assert.equal(answer.id,step===0?category:expectedEscalations[step-1],`caso ${calls+1}, turno ${step+1}: ${utterance}`);
    assert.ok(answer.say?.trim(),`respuesta vacía: ${utterance}`);
    assert.ok(answer.close?.trim(),`siguiente paso vacío: ${utterance}`);
    if(answer.id==='stop')assert.equal(answer.ask,'');
    history.push({topicId:answer.id,topic:answer.title});
    turns++;
   }
   calls++;
  }
 }
 assert.equal(calls,100);
 assert.equal(turns,700);
});

