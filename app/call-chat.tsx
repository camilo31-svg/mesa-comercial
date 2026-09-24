"use client";
import {useEffect,useRef,useState} from "react";
import {Send,Copy,MessageSquare} from "lucide-react";
import {objections,scriptFor} from "../lib/sales-engine";
export type CallTurn={id:string;client:string;say:string;ask:string;next:string;topic:string;topicId?:string;otherConcerns?:string[];mode:string;blocked:boolean};
type Props={turns:CallTurn[];draft:string;need:string;product:string;quote:string;follow:boolean;blocked:boolean;saving:boolean;onDraft:(s:string)=>void;onSend:(turn:CallTurn)=>void;onCopy:(s:string)=>void};
export default function CallChat(p:Props){
 const [topic,setTopic]=useState("");const bottom=useRef<HTMLDivElement>(null);const input=useRef<HTMLTextAreaElement>(null);
 useEffect(()=>{if(p.turns.length)bottom.current?.scrollIntoView({block:"nearest",behavior:"smooth"});},[p.turns.length]);
 function send(){const text=p.draft.trim();if(!text||p.turns.length>=60||p.saving)return;
 const answer=scriptFor(text,topic,"sale",{need:p.need,product:p.product,quote:p.quote,turns:p.turns});
 const blocked=p.blocked||answer.id==="stop";
 p.onSend({id:crypto.randomUUID(),client:text,say:blocked?"Entendido. Respetamos tu decisión y dejamos aquí la propuesta.":answer.say,ask:blocked?"":answer.ask,next:blocked?"Registra la petición de no contacto en el sistema autorizado.":answer.close,topic:blocked?"Rechazo explícito":answer.title,topicId:answer.id,otherConcerns:blocked?[]:answer.otherConcerns,mode:p.follow?"Recontacto":"Llamada",blocked});
 setTopic("");input.current?.focus();}
 return <section className="panel call-chat"><div className="panel-title"><h2><MessageSquare size={20}/> Conversación</h2><span className="muted">{p.turns.length}/60</span></div>
 <div className="chat-history" role="log" aria-label="Conversación de la llamada" aria-live="polite" aria-relevant="additions">
 {!p.turns.length&&<div className="chat-empty"><h3>¿Qué te acaba de decir el cliente?</h3><p>Escribe su frase y pulsa Enviar.</p></div>}
 {p.turns.map((t,i)=><article className="chat-exchange" key={t.id}><div className="chat-client"><span>CLIENTE · {i+1}</span><p>{t.client}</p></div><div className={"chat-answer"+(t.blocked?" stopped":"")}><div className="panel-title"><b>{t.blocked?"RESPETAR LA DECISIÓN":"DI ESTO"}</b><button type="button" className="secondary compact" aria-label={"Copiar respuesta "+(i+1)} onClick={()=>p.onCopy([t.say,t.ask].filter(Boolean).join("\n\n"))}><Copy size={15}/> Copiar</button></div><p className="chat-say">{t.say}</p>{t.ask&&<div className="chat-question"><b>Después, pregunta</b><p>{t.ask}</p></div>}{!!t.otherConcerns?.length&&<div className="chat-question"><b>También queda pendiente</b><p>{t.otherConcerns.join(" · ")}</p></div>}<details><summary>Siguiente paso · {t.topic}</summary><p>{t.next}</p><small>{t.mode}</small></details></div></article>)}
 <div ref={bottom}/></div>
 <form className="chat-composer" onSubmit={e=>{e.preventDefault();send();}}><label htmlFor="client-message">Lo que dice el cliente</label><textarea id="client-message" ref={input} value={p.draft} maxLength={2000} rows={3} onChange={e=>p.onDraft(e.target.value)} placeholder="Ej.: Me parece caro, quiero pensarlo." onKeyDown={e=>{if(e.key==="Enter"&&!e.shiftKey&&!e.nativeEvent.isComposing){e.preventDefault();send();}}}/>
 <div className="chat-send-row"><small>Enter: enviar · Mayús + Enter: nueva línea</small><button type="submit" className="primary" disabled={!p.draft.trim()||p.turns.length>=60||p.saving}><Send size={17}/> Enviar</button></div>
 <details className="chat-topic"><summary>Elegir una objeción manualmente</summary><label>Tema de la próxima respuesta<select value={topic} onChange={e=>setTopic(e.target.value)}><option value="">Detectar por la frase</option>{objections.map((o:any)=><option key={o.id} value={o.id}>{o.title}</option>)}</select></label></details>
 {p.turns.length>=60&&<p role="status">Has llegado a 60 intercambios. Guarda este caso antes de abrir otro.</p>}
 <small className="muted">Respuestas de la biblioteca de guiones; no es IA generativa. El historial se conserva al guardar el caso.</small></form></section>;
}

