import test from 'node:test';
import assert from 'node:assert/strict';
import {followOpeningFor,followOutcomeResponse} from '../lib/follow-up.js';
import {scriptFor} from '../lib/sales-engine.js';

const base={status:'Seguimiento',consent:true,followDate:'2026-10-01T10:00',need:'consultar especialistas',product:'Adeslas Plena',quote:'75 € / mes'};

test('la apertura solo afirma una llamada acordada si hay consentimiento y fecha',()=>{
 assert.match(followOpeningFor(base),/acordamos retomar/i);
 assert.match(followOpeningFor({...base,consent:false}),/no hay un recontacto acordado/i);
 assert.match(followOpeningFor({...base,followDate:''}),/no hay un recontacto acordado/i);
 assert.match(followOpeningFor({...base,status:'No contactar'}),/no debe recibir otra llamada/i);
 assert.match(followOpeningFor({...base,chatTurns:[{topicId:'precio',blocked:false}]}),/mencionaste el coste/i);
});

test('la respuesta a una objeción nueva no vuelve a abrir la llamada',()=>{
 const answer=scriptFor('No quiero copagos','','sale',{...base,turns:[]});
 assert.equal(answer.id,'copago');
 assert.match(answer.say,/comparar una cuota/i);
 assert.doesNotMatch(answer.say,/retomar los copagos/i);
});

test('una aceptación condicionada prevalece sobre una objeción elegida manualmente',()=>{
 const answer=scriptFor('Quiero contratar, pero solo si cubre esto','precio','sale',base);
 assert.equal(answer.id,'conditional');
});

test('cerrar una propuesta no equivale a pedir que no le contacten',()=>{
 assert.match(followOutcomeResponse('No desea continuar',base),/cerramos esta propuesta/i);
 assert.doesNotMatch(followOutcomeResponse('No desea continuar',base),/no volveremos a contactarte/i);
 assert.match(followOutcomeResponse('Pide no ser contactado',base),/no volveremos a contactarte/i);
});

test('una solicitud de contratación sin datos no produce un cierre con huecos',()=>{
 const answer=followOutcomeResponse('Solicita iniciar contratación',{...base,product:'',quote:''});
 assert.match(answer,/necesitamos concretar/i);
 assert.doesNotMatch(answer,/undefined|\[modalidad/i);
});

