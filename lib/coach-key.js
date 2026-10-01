// This module is used only by the server. Secret values never reach the client.
const decode=value=>Uint8Array.from(atob(value),char=>char.charCodeAt(0));
export function hasCoachKey(config={}) {
 return !!config.OPENAI_API_KEY||!!(config.COACH_KEY_ENVELOPE&&config.COACH_KEY_WRAP);
}
export async function resolveCoachKey(config={}) {
 if(config.OPENAI_API_KEY)return config.OPENAI_API_KEY;
 if(!hasCoachKey(config))return '';
 try {
  const envelope=JSON.parse(config.COACH_KEY_ENVELOPE);
  const raw=decode(config.COACH_KEY_WRAP),iv=decode(envelope.nonce),body=decode(envelope.body);
  if(envelope.v!==1||raw.length!==32||iv.length!==12||body.length<17)throw new Error();
  const key=await crypto.subtle.importKey('raw',raw,'AES-GCM',false,['decrypt']);
  const decrypted=await crypto.subtle.decrypt({name:'AES-GCM',iv,additionalData:new TextEncoder().encode('mesa-coach-key-v1')},key,body);
  const apiKey=new TextDecoder().decode(decrypted);
  if(!/^sk-[A-Za-z0-9_-]+$/.test(apiKey))throw new Error();
  return apiKey;
 }catch{throw new Error('Configuración segura de IA no válida');}
}
