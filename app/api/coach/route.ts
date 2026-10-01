import {env} from "cloudflare:workers";
import {getChatGPTUser} from "../../chatgpt-auth";
import {db} from "../../../lib/db";
import records from "../../../lib/documents-data.json";
import {generateCoach,localCoachFor,prepareContext} from "../../../lib/coach";
import {searchDocuments} from "../../../lib/document-search";
import {hasCoachKey,resolveCoachKey} from "../../../lib/coach-key";
export const dynamic="force-dynamic";
type CoachEnv={OPENAI_API_KEY?:string;COACH_KEY_ENVELOPE?:string;COACH_KEY_WRAP?:string;OPENAI_MODEL?:string;COACH_ALLOWED_USER_IDS?:string};
const config=()=>env as unknown as CoachEnv;
const response=(data:unknown,status=200)=>Response.json(data,{status,headers:{"Cache-Control":"no-store"}});
function allowed(userId:string){return (config().COACH_ALLOWED_USER_IDS||"").split(",").map(x=>x.trim()).filter(Boolean).includes(userId);}
export async function GET(){
 const user=await getChatGPTUser();if(!user)return response({error:"Inicia sesión para abrir el asistente."},401);
 return response({aiReady:hasCoachKey(config())&&allowed(user.userId)});
}
async function reserveCalls(userId:string){
 const database=db(),now=new Date(),day=now.toISOString().slice(0,10),minute=now.toISOString().slice(0,16);
 const expires=new Date(now.getTime()+2*86400000).toISOString();
 const buckets:[[string,number],[string,number],[string,number]]=[["minute:"+userId+":"+minute,12],["day:"+userId+":"+day,150],["global:"+day,500]];
 for(const [bucket,max] of buckets){const row=await database.prepare("INSERT INTO coach_usage (bucket,requests,expires_at) VALUES (?,1,?) ON CONFLICT(bucket) DO UPDATE SET requests=coach_usage.requests+1 WHERE coach_usage.requests < ? RETURNING requests").bind(bucket,expires,max).first();if(!row)return false;}
 await database.prepare("DELETE FROM coach_usage WHERE expires_at < ?").bind(now.toISOString()).run();return true;
}
export async function POST(req:Request){
 const user=await getChatGPTUser();if(!user)return response({error:"Inicia sesión para usar el asistente."},401);
 if(req.headers.get("origin")&&req.headers.get("origin")!==new URL(req.url).origin)return response({error:"Origen no permitido"},403);
 let data;
 try{const text=await req.text();if(text.length>60000)return response({error:"El mensaje es demasiado largo."},400);data=JSON.parse(text);
  if(typeof data.message!=="string"||data.message.length>2000||(!data.message.trim()&&data.context?.intent!=="opening")||!data.context||typeof data.context!=="object"||Array.isArray(data.context)||data.context.turns!==undefined&&(!Array.isArray(data.context.turns)||data.context.turns.some((t:unknown)=>!t||typeof t!=="object")))return response({error:"Revisa el mensaje y el contexto."},400);
 }catch{return response({error:"No se ha podido leer el mensaje."},400);}
 const context=prepareContext(data.context),fallback=localCoachFor(data.message,context);
 if(fallback.blocked||["decline","pressure","privacy","exactitud"].includes(fallback.id))return response({answer:fallback,notice:""});
 if(!hasCoachKey(config())||!allowed(user.userId))return response({answer:fallback,aiState:"guide",notice:"Guía contextual. La generación con IA todavía no está activada para este espacio."});
 try{
  const key=await resolveCoachKey(config());
  if(!await reserveCalls(user.userId))return response({answer:fallback,notice:"Se ha alcanzado el límite de IA. Esta respuesta procede de la guía contextual."});
  const evidence=searchDocuments(records,data.message+" "+context.need,{product:context.product,branch:context.branch,forCoach:true,limit:5}).map(({id,title,page,text})=>({id:String(id),title,page,text}));
  const answer=await generateCoach(data.message,context,evidence,{key,model:config().OPENAI_MODEL||"gpt-5.4-mini",signal:AbortSignal.timeout(25000)});
  return response({answer,aiState:"ready",notice:""});
 }catch(e){
  const code=(e as {code?:string}).code;
  const billingNeeded=["credit_balance_exhausted","insufficient_quota","billing_hard_limit_reached"].includes(code||"");
  return response({answer:fallback,aiState:billingNeeded?"billing":"unavailable",billingNeeded,notice:billingNeeded?"La IA está configurada, pero la cuenta de API necesita saldo o revisar su límite de gasto. Esta respuesta procede de la guía contextual.":code==="invalid_api_key"?"La clave de IA necesita renovarse o revisarse. Esta respuesta procede de la guía contextual.":code==="rate_limit_exceeded"?"La IA ha alcanzado su límite temporal. Espera un momento antes de reintentar; esta respuesta procede de la guía contextual.":"La IA no ha podido responder. Esta respuesta procede de la guía contextual; puedes reintentar."});
 }
}
