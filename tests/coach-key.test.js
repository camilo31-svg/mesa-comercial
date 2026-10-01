import test from 'node:test';
import assert from 'node:assert/strict';
import {hasCoachKey,resolveCoachKey} from '../lib/coach-key.js';
import {generateCoach} from '../lib/coach.js';
test('server accepts a direct credential and reports absent configuration',async()=>{
 assert.equal(hasCoachKey({}),false);assert.equal(await resolveCoachKey({}),'');
 assert.equal(await resolveCoachKey({OPENAI_API_KEY:'test-only'}),'test-only');
});
test('encrypted credential is authenticated and rejects tampered material',async()=>{
 const raw=crypto.getRandomValues(new Uint8Array(32)),iv=crypto.getRandomValues(new Uint8Array(12));
 const key=await crypto.subtle.importKey('raw',raw,'AES-GCM',false,['encrypt']);
 const ciphertext=new Uint8Array(await crypto.subtle.encrypt({name:'AES-GCM',iv,additionalData:new TextEncoder().encode('mesa-coach-key-v1')},key,new TextEncoder().encode('sk-fixture-only')));
 const b64=value=>Buffer.from(value).toString('base64');
 const config={COACH_KEY_WRAP:b64(raw),COACH_KEY_ENVELOPE:JSON.stringify({v:1,nonce:b64(iv),body:b64(ciphertext)})};
 assert.equal(hasCoachKey(config),true);assert.equal(await resolveCoachKey(config),'sk-fixture-only');
 ciphertext[0]^=1;
 await assert.rejects(resolveCoachKey({...config,COACH_KEY_ENVELOPE:JSON.stringify({v:1,nonce:b64(iv),body:b64(ciphertext)})}),/Configuración segura/);
 await assert.rejects(resolveCoachKey({...config,COACH_KEY_WRAP:'bad'}),/Configuración segura/);
});
test('API quota exhaustion stays distinct from temporary rate limiting',async()=>{
 for(const code of ['credit_balance_exhausted','insufficient_quota','rate_limit_exceeded']){
  await assert.rejects(generateCoach('¿Cuál es el coste?',{},[],{key:'test-only',fetcher:async()=>({ok:false,status:429,json:async()=>({error:{code,message:'never render provider messages'}})})}),error=>error.code===code&&error.status===429&&error.message==='Proveedor no disponible');
 }
});
