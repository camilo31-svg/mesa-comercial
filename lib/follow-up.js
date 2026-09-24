export function followOpeningFor(caseData){
 if(caseData.contactDeclined||caseData.status==="No contactar")return "Este caso no debe recibir otra llamada comercial.";
 if(!caseData.consent||!caseData.followDate)return "Todavía no hay un recontacto acordado. Confirma con el cliente si desea otra llamada y en qué fecha.";
 const focusByTopic={precio:"el coste",presupuesto:"el presupuesto",comparar:"la comparación con otra propuesta",pareja:"la decisión en casa",pensar:"la propuesta",copago:"los copagos",carencias:"las carencias",medico:"el profesional o centro",subidas:"la renovación",duracion:"la duración",coberturas:"la cobertura que preguntaste",confianza:"la verificación de la información"};
 const lastTopic=[...(caseData.chatTurns||[])].reverse().find(turn=>!turn.blocked&&focusByTopic[turn.topicId])?.topicId;
 const focus=lastTopic?" La última vez mencionaste "+focusByTopic[lastTopic]+".":"";
 return "Hola, soy Camilo. Acordamos retomar la propuesta."+focus+" ¿Te viene bien hablar ahora? ¿Qué has podido revisar?";
}

export function followOutcomeResponse(outcome,caseData){
 switch(outcome){
  case "Quiere resolver una duda":return "¿Qué condición concreta necesitas aclarar? La comprobamos antes de decidir.";
  case "No ha revisado la propuesta":return "Gracias por decírmelo. ¿Prefieres acordar otro momento para revisarla o que espere a que me contactes?";
  case "Necesita otra persona para decidir":return "Tiene sentido decidirlo juntos. ¿Qué punto quiere revisar esa persona? Si os conviene, acordamos un momento para hablar los tres.";
  case "Solicita iniciar contratación":return caseData.need?.trim()&&caseData.product?.trim()&&caseData.quote?.trim()
   ?"Antes de iniciar la solicitud, repasemos "+caseData.product+", el importe de "+caseData.quote+", la duración y las condiciones que afectan a "+caseData.need+". ¿Quieres continuar con estos datos, sujeto a valoración y aceptación de la compañía?"
   :"Perfecto. Antes de iniciar la solicitud, necesitamos concretar la necesidad, la modalidad, el importe y las condiciones relevantes. ¿Los revisamos?";
  case "No desea continuar":return "Entendido. Cerramos esta propuesta. Gracias por tu tiempo.";
  case "Pide no ser contactado":return "Entendido. No volveremos a contactarte por esta propuesta. Registraré tu petición en el sistema autorizado.";
  default:return "";
 }
}

