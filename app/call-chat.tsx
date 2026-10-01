"use client";
import {useEffect,useRef,useState} from "react";
import {Send,Copy,MessageSquare,RefreshCw} from "lucide-react";
import {localCoachFor,toneFor} from "../lib/coach";
export type CoachSource={id:string;title:string;page:number;text:string};
export type CallTurn={id:string;client:string;say:string;ask:string;next:string;topic:string;topicId?:string;otherConcerns?:string[];mode:string;blocked:boolean;tone?:string;pace?:string;source?:string;verification?:string[];sources?:CoachSource[]};
type Props={turns:CallTurn[];draft:string;context:Record<string,unknown>;follow:boolean;blocked:boolean;saving:boolean;onDraft:(s:string)=>void;onSend:(turn:CallTurn)=>void;onReplace:(turn:CallTurn)=>void;onCopy:(s:string)=>void};
export default function CallChat(p:Props){
 const [busy,setBusy]=useState(false),[notice,setNotice]=useState(""),[error,setError]=useState(""),[aiReady,setAiReady]=useState(false),[opening,setOpening]=useState<any>(null);
 const [aiState,setAiState]=useState("guide"),[billingNeeded,setBillingNeeded]=useState(false);
 const bottom=useRef<HTMLDivElement>(null),input=useRef<HTMLTextAreaElement>(null),request=useRef<AbortController|null>(null),lock=useRef(false);
 const context={...p.context,turns:p.turns,follow:p.follow,blocked:p.blocked};
 useEffect(()=>{const life=new AbortController();fetch("/api/coach",{signal:life.signal}).then(async r=>{if(!r.ok)return;const d:any=await r.json();setAiReady(d.aiReady===true);setAiState(d.aiReady===true?"configured":"guide");}).catch(()=>{});return()=>{life.abort();request.current?.abort();};},[]);
 useEffect(()=>{if(p.turns.length)bottom.current?.scrollIntoView({block:"nearest",behavior:"smooth"});},[p.turns.length]);
 useEffect(()=>{setOpening(null);},[p.context.followDate,p.context.consent,p.context.notes,p.context.product,p.turns.length,p.blocked]);
 const currentOpening=opening||localCoachFor("",{...context,intent:"opening"});
 async function answer(message:string,replaceId?:string,isOpening=false){
  if(lock.current||p.saving||(!isOpening&&!message.trim())||(!isOpening&&!replaceId&&p.turns.length>=60))return;
  lock.current=true;setBusy(true);setError("");setNotice("");
  const controller=new AbortController();request.current=controller;
  try{
   const r=await fetch("/api/coach",{method:"POST",headers:{"Content-Type":"application/json"},signal:controller.signal,body:JSON.stringify({message,context:{...context,intent:isOpening?"opening":"reply",turns:replaceId?p.turns.slice(0,p.turns.findIndex(t=>t.id===replaceId)):p.turns}})});
   const d:any=await r.json();if(!r.ok)throw new Error(d.error||"No se ha podido obtener la respuesta.");
   if(controller.signal.aborted)return;
   const a=d.answer;setNotice(d.notice||"");if(d.aiState)setAiState(d.aiState);setBillingNeeded(d.billingNeeded===true);
   if(isOpening){setOpening(a);return;}
   const t:CallTurn={id:replaceId||crypto.randomUUID(),client:message,say:a.say,ask:a.ask,next:a.close,topic:a.title,topicId:a.id,otherConcerns:a.otherConcerns||[],mode:p.follow?"Recontacto":"Llamada",blocked:!!a.blocked,tone:a.tone,pace:a.pace,source:a.source,verification:a.verification||[],sources:a.sources||[]};
   if(replaceId)p.onReplace(t);else p.onSend(t);
  }catch(e){if(!controller.signal.aborted)setError(e instanceof Error?e.message:"No se ha podido responder. El mensaje sigue en el cuadro; pulsa Enviar para reintentar.");}
  finally{if(!controller.signal.aborted){lock.current=false;setBusy(false);request.current=null;input.current?.focus();}}
 }
 return <>
 {p.follow&&<section className="opening coach-opening"><div className="panel-title"><b>Apertura de recontacto</b><button type="button" className="secondary compact" disabled={busy||p.blocked||p.saving} onClick={()=>void answer("",undefined,true)}><RefreshCw size={14}/> Preparar apertura</button><button type="button" className="ghost compact" onClick={()=>p.onCopy(currentOpening.say)}><Copy size={14}/> Copiar</button></div><p>{currentOpening.say}</p><div className="coach-tone"><b>Tono: {currentOpening.tone}</b><span>{currentOpening.pace}</span></div></section>}
 <section className="panel call-chat"><div className="panel-title"><h2><MessageSquare size={20}/> Conversación</h2><span className="badge">{aiState==="billing"?"IA pendiente de saldo":aiState==="ready"?"IA conectada":aiState==="configured"?"IA configurada":aiState==="unavailable"?"IA no disponible":"Guía contextual"}</span><span className="muted">{p.turns.length}/60</span></div>
 <div className="chat-history" role="log" aria-label="Conversación de la llamada" aria-live="polite" aria-relevant="additions">
 {!p.turns.length&&<div className="chat-empty"><h3>¿Qué te acaba de decir el cliente?</h3><p>Escribe su frase y pulsa Enviar.</p></div>}
 {p.turns.map((t,i)=>{const voice=toneFor(t.topicId||"");return <article className="chat-exchange" key={t.id}><div className="chat-client"><span>CLIENTE · {i+1}</span><p>{t.client}</p></div><div className={"chat-answer"+(t.blocked?" stopped":"")}><div className="panel-title"><b>{t.blocked?"RESPETAR LA DECISIÓN":"DI ESTO"}</b><button type="button" className="secondary compact" aria-label={"Copiar respuesta "+(i+1)} onClick={()=>p.onCopy([t.say,t.ask].filter(Boolean).join(" "))}><Copy size={15}/> Copiar</button></div><p className="chat-say">{[t.say,t.ask].filter(Boolean).join(" ")}</p><div className="coach-tone"><b>Tono: {t.tone||voice.tone}</b><span>{t.pace||voice.pace}</span></div>{!!t.otherConcerns?.length&&<div className="chat-question"><b>También queda pendiente</b><p>{t.otherConcerns.join(" · ")}</p></div>}{!!t.verification?.length&&<div className="coach-verification"><b>Antes de confirmarlo</b><ul>{t.verification.map((v,j)=><li key={j}>{v}</li>)}</ul></div>}<details><summary>Siguiente paso · {t.topic}</summary><p>{t.next}</p><small>{t.mode} · {t.source==="ai"?"Respuesta generada con IA":"Guía contextual"}</small></details>{!!t.sources?.length&&<details><summary>Documentos consultados</summary>{t.sources.map(s=><div className="coach-source" key={s.id}><b>{s.title} · página {s.page}</b><p>{s.text}</p></div>)}</details>}{aiReady&&i===p.turns.length-1&&t.source!=="ai"&&!t.blocked&&<button type="button" className="ghost compact" disabled={busy||p.saving} onClick={()=>void answer(t.client,t.id)}><RefreshCw size={14}/> Reintentar con IA</button>}</div></article>})}
 <div ref={bottom}/></div>
 {notice&&<p className="coach-status" role="status">{notice}</p>}
 {billingNeeded&&<p className="coach-status"><a href="https://platform.openai.com/settings/organization/billing" target="_blank" rel="noopener noreferrer">Abrir facturación de la API</a> · Después de añadir saldo, pulsa Reintentar con IA.</p>}
 {error&&<p className="coach-error" role="alert">{error}</p>}
 <form className="chat-composer" onSubmit={e=>{e.preventDefault();void answer(p.draft.trim());}}><label htmlFor="client-message">Lo que dice el cliente</label><textarea id="client-message" ref={input} disabled={busy} value={p.draft} maxLength={2000} rows={3} onChange={e=>p.onDraft(e.target.value)} placeholder="Ej.: Me da reparo añadir otro recibo fijo." onKeyDown={e=>{if(e.key==="Enter"&&!e.shiftKey&&!e.nativeEvent.isComposing){e.preventDefault();void answer(p.draft.trim());}}}/>
 <div className="chat-send-row"><small>Enter: enviar · Mayús + Enter: nueva línea</small><button type="submit" className="primary" disabled={!p.draft.trim()||p.turns.length>=60||p.saving||busy}><Send size={17}/>{busy?"Preparando respuesta…":"Enviar"}</button></div>
 {p.turns.length>=60&&<p role="status">Has llegado a 60 intercambios. Guarda este caso antes de abrir otro.</p>}
 <small className="muted">Usa un alias y evita DNI, cuentas bancarias y otros identificadores. El historial se conserva al guardar el caso.</small></form></section></>;
}
