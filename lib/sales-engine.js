export const objections = [
  {
    "id": "precio",
    "title": "Precio alto",
    "words": [
      "caro",
      "precio",
      "costoso",
      "mucho dinero",
      "importe",
      "cuota",
      "prima mensual"
    ],
    "say": "Entiendo que el importe es importante. Para comparar bien, miremos la cuota y los gastos al utilizarlo.",
    "ask": "¿Se sale de tu presupuesto o lo comparas con otra propuesta?",
    "close": "Si resolvemos la diferencia de coste y mantiene lo que necesitas, ¿te encajaría iniciar la solicitud?",
    "follow": "En nuestra última conversación quedó pendiente el coste. He preparado la comparación entre cuota, copagos y duración. ¿Qué parte quieres revisar primero?"
  },
  {
    "id": "presupuesto",
    "title": "No puede pagarlo",
    "words": [
      "no puedo pagar",
      "no me lo puedo permitir",
      "no tengo dinero",
      "no llego",
      "sin dinero",
      "presupuesto maximo",
      "tope mensual"
    ],
    "say": "Necesitamos respetar lo que puedes mantener con comodidad. Veamos si hay una opción que conserve lo imprescindible dentro de ese límite.",
    "ask": "¿Qué importe máximo podrías asumir sin que te genere dificultad?",
    "close": "Si ninguna opción encaja en ese presupuesto, lo dejamos aquí.",
    "follow": "La propuesta anterior se salía de tu presupuesto. Antes de volver a ofrecértela, ¿ha cambiado ese límite o prefieres que cerremos el seguimiento?"
  },
  {
    "id": "comparar",
    "title": "Otra compañía",
    "words": [
      "otra compania",
      "otra aseguradora",
      "sanitas",
      "dkv",
      "asisa",
      "mas barato",
      "mas barata",
      "comparar",
      "otras ofertas"
    ],
    "say": "Puede ser una propuesta interesante. Comparemos el mismo nivel de cobertura, médicos, copagos, duración y precio tras la promoción.",
    "ask": "¿Qué producto y condiciones te han ofrecido?",
    "close": "Una vez comprobadas las diferencias, ¿cuál responde mejor a lo que buscas?",
    "follow": "Quedamos en comparar propuestas. ¿Qué diferencias has encontrado en las coberturas, los médicos o el coste completo?"
  },
  {
    "id": "pareja",
    "title": "Consultar con su pareja",
    "words": [
      "pareja",
      "mujer",
      "marido",
      "espos",
      "consultarlo",
      "familia"
    ],
    "say": "Tiene sentido que lo decidáis juntos. Dejemos claras las condiciones que ambos necesitáis valorar.",
    "ask": "¿Qué punto crees que va a querer comprobar la otra persona?",
    "close": "¿Os viene bien revisar juntos las dudas en una llamada acordada?",
    "follow": "La última vez querías comentarlo en casa. ¿Qué os ha parecido y qué duda os queda para poder decidir?"
  },
  {
    "id": "pensar",
    "title": "Quiere evaluarlo",
    "words": [
      "pensar",
      "pienso",
      "pensarlo",
      "evaluar",
      "valorar",
      "decidir",
      "no he decidido",
      "seguro todavia"
    ],
    "say": "Por supuesto. Para que puedas valorarlo, identifiquemos qué información te falta y qué parte ya te encaja.",
    "ask": "¿Qué aspecto concreto necesitas revisar con más calma?",
    "close": "Si ese punto queda claro, ¿estarías en disposición de decidir o hay algo más pendiente?",
    "follow": "Quedamos en que revisarías la propuesta. ¿Qué conclusión has sacado y qué punto te impide tomar una decisión?"
  },
  {
    "id": "correo",
    "title": "Por escrito",
    "words": [
      "correo",
      "email",
      "escrito",
      "whatsapp",
      "mandamelo",
      "enviamelo"
    ],
    "say": "Te preparo un resumen con la cuota, la duración, las coberturas relevantes y sus límites.",
    "ask": "¿Qué quieres comprobar especialmente al leerlo?",
    "close": "¿Quieres que acordemos cuándo revisar las dudas que te surjan?",
    "follow": "Te contacta Camilo para retomar la propuesta. ¿Has podido revisarla? Si aún no, podemos fijar otro momento o dejarlo pendiente de tu iniciativa."
  },
  {
    "id": "tiempo",
    "title": "No tiene tiempo",
    "words": [
      "no tengo tiempo",
      "ocupado",
      "reunion",
      "trabajando",
      "llamame luego"
    ],
    "say": "Te dejo continuar. Podemos hablar en una franja que te venga mejor.",
    "ask": "¿Qué día y hora prefieres?",
    "close": "De acuerdo, lo anotamos para esa franja.",
    "follow": "Te llamo en el momento que habíamos acordado. ¿Te vienen bien unos minutos para resolver lo pendiente?"
  },
  {
    "id": "publica",
    "title": "Tiene sanidad pública",
    "words": [
      "seguridad social",
      "sanidad publica",
      "publica"
    ],
    "say": "Podemos valorar el seguro como complemento para los servicios privados que busques, si hay alguno que te aporte valor.",
    "ask": "¿Hay algo de cómo accedes ahora a la atención que te gustaría mejorar?",
    "close": "Si tu situación actual ya resuelve lo que necesitas, no hace falta forzar otra cobertura.",
    "follow": "La última vez querías valorar si te aporta algo además de la sanidad pública. ¿Hay algún servicio concreto por el que te interese contratar?"
  },
  {
    "id": "uso",
    "title": "No lo utilizará",
    "words": [
      "no lo uso",
      "no voy al medico",
      "nunca voy",
      "tiro el dinero",
      "tirar el dinero",
      "estoy sano"
    ],
    "say": "Conviene distinguir entre pagar consultas puntuales y disponer de cobertura ante determinados gastos. Podemos hacer un escenario de poco uso.",
    "ask": "¿Buscas consultas concretas o también protección hospitalaria?",
    "close": "¿Ese alcance justifica para ti el coste que hemos revisado?",
    "follow": "Quedó pendiente si lo utilizarías. ¿Quieres valorar el coste con un uso bajo o la cobertura que tendrías ante otros servicios?"
  },
  {
    "id": "copago",
    "title": "No quiere copagos",
    "words": [
      "copago"
    ],
    "say": "Podemos comparar una cuota más previsible con una modalidad que cobre por uso. Lo importante es entender el gasto total y los límites.",
    "ask": "¿Prefieres una cuota fija mayor o una menor con importes por servicio?",
    "close": "Con ambos escenarios claros, ¿cuál se ajusta mejor a tu presupuesto?",
    "follow": "Vamos a retomar los copagos. ¿Lo que te frena es no saber cuánto pagarías o prefieres descartarlos en las opciones disponibles?"
  },
  {
    "id": "medico",
    "title": "Médico u hospital concreto",
    "words": [
      "mi medico",
      "mi hospital",
      "cuadro medico",
      "clinica",
      "especialista"
    ],
    "say": "Comprobemos primero el profesional, el centro y el servicio dentro de esta modalidad. Es una condición importante antes de decidir.",
    "ask": "¿Qué profesional o centro es imprescindible para ti?",
    "close": "Cuando esté confirmado el centro, revisamos si queda alguna otra duda.",
    "follow": "La decisión dependía de tu médico o centro. Revisemos la comprobación actual antes de avanzar."
  },
  {
    "id": "patologia",
    "title": "Patología o medicación",
    "words": [
      "enfermedad",
      "patologia",
      "medicacion",
      "medicamento",
      "tratamiento",
      "diabetes",
      "hipertension",
      "cancer",
      "operacion",
      "pastilla"
    ],
    "say": "La cobertura de una situación previa debe valorarse con el cuestionario y las condiciones de la aseguradora. El buscador aporta referencias, no una aceptación del caso.",
    "ask": "¿La contratación busca cubrir precisamente una situación o tratamiento ya existente?",
    "close": "Antes de solicitar el seguro para esa necesidad, confirmemos por escrito cómo se trataría.",
    "follow": "Quedaba pendiente la valoración médica. ¿Tenemos ya una respuesta escrita de la aseguradora? Si no, primero hay que resolverla."
  },
  {
    "id": "urgente",
    "title": "Necesita usarlo ya",
    "words": [
      "ya mismo",
      "prueba ya",
      "inmediato",
      "urgente",
      "operarme",
      "resonancia"
    ],
    "say": "Antes de plantearlo como solución inmediata, debemos comprobar la prestación concreta, carencias, prescripción y autorización.",
    "ask": "¿Para qué fecha necesitarías el servicio?",
    "close": "Solo avanzamos con esa expectativa cuando esté comprobada.",
    "follow": "La necesidad tenía una fecha concreta. Vamos a verificar si las condiciones permiten atenderla; no quiero que decidas con una fecha sin confirmar."
  },
  {
    "id": "carencias",
    "title": "Carencias",
    "words": [
      "carencia",
      "esperar"
    ],
    "say": "No todas las prestaciones empiezan en las mismas condiciones. Revisemos el plazo de la que te interesa y cualquier excepción documentada.",
    "ask": "¿Qué prestación necesitas y cuándo?",
    "close": "¿Ese plazo encaja con tu necesidad?",
    "follow": "Quedamos en aclarar la carencia de una prestación. Repasemos el plazo confirmado y si sigue encajando contigo."
  },
  {
    "id": "subidas",
    "title": "Subidas de prima",
    "words": [
      "subida",
      "subir",
      "renovacion",
      "ipc",
      "proximo ano"
    ],
    "say": "Te indicaré qué precio está garantizado, durante qué periodo y qué establece el contrato al renovar. No puedo anticipar una subida que no esté fijada.",
    "ask": "¿Te preocupa el primer periodo o lo que suceda después?",
    "close": "¿Conocer ese compromiso y su duración te permite decidir?",
    "follow": "Quedaba por valorar la evolución del precio. Veamos por separado el periodo garantizado y las condiciones de renovación."
  },
  {
    "id": "duracion",
    "title": "Cancelar o permanencia",
    "words": [
      "cancelar",
      "baja",
      "permanencia",
      "compromiso",
      "salirme",
      "darme de baja"
    ],
    "say": "El pago mensual no significa que el contrato sea mensual. Debemos revisar la duración y las vías de terminación de esta modalidad.",
    "ask": "¿Qué flexibilidad necesitas y qué periodo estás dispuesto a asumir?",
    "close": "¿Esa duración te encaja o necesitamos revisar otra opción?",
    "follow": "La duración era el punto pendiente. ¿Encaja el periodo de esta propuesta o prefieres comparar una alternativa?"
  },
  {
    "id": "confianza",
    "title": "Desconfianza telefónica",
    "words": [
      "no me fio",
      "estafa",
      "telefono",
      "confianza",
      "no confio",
      "quien me llama",
      "datos bancarios",
      "iban",
      "cuenta bancaria"
    ],
    "say": "Puedes revisar la propuesta y verificar la identidad de la agencia antes de aportar datos para contratar. Utilizaremos el canal autorizado.",
    "ask": "¿Qué comprobación te daría más confianza?",
    "close": "Cuando hayas podido verificarlo, ¿quieres que retomemos las condiciones?",
    "follow": "La última vez preferías verificar la información. ¿Has podido hacerlo y qué duda queda pendiente?"
  },
  {
    "id": "experiencia",
    "title": "Mala experiencia",
    "words": [
      "mala experiencia",
      "no pagan",
      "reclamacion",
      "denegaron",
      "no me atendieron"
    ],
    "say": "Necesito entender qué ocurrió para comprobar si esta propuesta resuelve ese problema o si seguiría existiendo.",
    "ask": "¿Qué pasó exactamente y qué necesitarías que fuera diferente?",
    "close": "Si no podemos acreditar esa diferencia, no te propondré avanzar por ese motivo.",
    "follow": "Retomo el problema que nos comentaste. Revisemos qué solución concreta y verificable existe antes de decidir."
  },
  {
    "id": "descuento",
    "title": "Pide descuento",
    "words": [
      "descuento",
      "rebaja",
      "bajame",
      "mejor precio"
    ],
    "say": "Comprobaré qué condición comercial autorizada puede aplicarse y cuánto tiempo se mantiene.",
    "ask": "¿El precio es el único punto pendiente o queda alguna condición por revisar?",
    "close": "Con la condición confirmada, ¿te encaja iniciar la solicitud?",
    "follow": "Habíamos quedado en verificar el precio. Revisemos la condición disponible hoy, su duración y lo que incluye."
  },
  {
    "id": "anuncio",
    "title": "Precio del anuncio",
    "words": [
      "anuncio",
      "publicidad",
      "desde"
    ],
    "say": "Revisemos las condiciones del precio anunciado y las de tu propuesta para explicar la diferencia con exactitud.",
    "ask": "¿Qué precio y modalidad aparecían en el anuncio?",
    "close": "Con la diferencia aclarada, ¿encaja esta propuesta en lo que buscabas?",
    "follow": "Quedó pendiente contrastar el anuncio. Vamos a revisar qué condiciones eran aplicables y cuál es tu propuesta."
  },
  {
    "id": "actual",
    "title": "Ya tiene seguro",
    "words": [
      "ya tengo",
      "tengo seguro",
      "mi seguro",
      "cambiarme",
      "cambiar de"
    ],
    "say": "Antes de cambiar, debemos comprobar qué mantienes, qué mejora y qué podrías perder, además de las fechas y aceptación de la nueva póliza.",
    "ask": "¿Qué te ha llevado a buscar otra opción?",
    "close": "Con la aceptación y las fechas confirmadas, ¿la mejora justifica el cambio?",
    "follow": "Quedamos en comparar con tu póliza actual. ¿Qué condición es decisiva para cambiar y qué fecha de vencimiento has confirmado?"
  },
  {
    "id": "coberturas",
    "title": "Coberturas y límites",
    "words": [
      "cubre todo",
      "cobertura",
      "incluye",
      "cubierto",
      "cubre",
      "incluido",
      "incluida"
    ],
    "say": "La póliza cubre prestaciones definidas con sus condiciones. Revisemos lo que de verdad necesitas, incluidos límites y exclusiones.",
    "ask": "¿Qué prestación concreta quieres comprobar?",
    "close": "Una vez confirmada, ¿queda algún servicio imprescindible por revisar?",
    "follow": "La decisión dependía de una cobertura. Revisemos la respuesta documentada y si resuelve tu necesidad."
  },
  {
    "id": "dental",
    "title": "Tratamientos dentales",
    "words": [
      "implante",
      "dental",
      "dentista",
      "ortodoncia"
    ],
    "say": "Hay actos sin importe adicional y otros con coste. Para un tratamiento concreto conviene comparar presupuesto, tarifa y coste del seguro.",
    "ask": "¿Qué tratamiento y clínica quieres valorar?",
    "close": "¿El presupuesto completo te aporta la ventaja que buscabas?",
    "follow": "Retomemos el tratamiento dental. ¿Ya tenemos presupuesto completo y las condiciones de la clínica para compararlo?"
  },
  {
    "id": "hogar",
    "title": "Hogar y comunidad",
    "words": [
      "comunidad",
      "inquilino",
      "hogar",
      "vivienda"
    ],
    "say": "Separemos lo que cubre la comunidad, lo que corresponde al propietario y tus bienes y responsabilidades.",
    "ask": "¿Qué necesitas proteger y qué seguro existe ya?",
    "close": "Con los capitales y huecos comprobados, ¿quieres revisar la propuesta?",
    "follow": "Quedó pendiente comprobar las coberturas que ya existen. ¿Tenemos la póliza actual para evitar huecos o duplicidades?"
  },
  {
    "id": "decesos",
    "title": "Decesos y ahorros",
    "words": [
      "decesos",
      "entierro",
      "ahorros",
      "funerario"
    ],
    "say": "Podemos valorar por separado el coste del servicio y la gestión para la familia, teniendo en cuenta cualquier póliza actual.",
    "ask": "¿Buscas cubrir el coste, organizar el servicio o ambas cosas?",
    "close": "¿Las condiciones y el coste de esta modalidad responden a esa prioridad?",
    "follow": "Retomemos qué querías dejar resuelto y comparemos el coste y la gestión con lo que ya tienes previsto."
  },
  {
    "id": "viaje",
    "title": "Seguro de viaje",
    "words": [
      "viaje",
      "tarjeta",
      "extranjero",
      "repatriacion"
    ],
    "say": "Comparemos destino, duración, límites de asistencia, repatriación y requisitos de cualquier cobertura que ya tengas.",
    "ask": "¿A dónde viajas, cuántos días y qué protección tienes ya?",
    "close": "Cuando estén comprobadas esas condiciones, ¿quieres solicitar la propuesta?",
    "follow": "Antes de retomar la decisión, confirmemos que las fechas y el destino no han cambiado."
  },
  {
    "id": "mascotas",
    "title": "Seguro de mascotas",
    "words": [
      "mascota",
      "perro",
      "gato",
      "veterinari"
    ],
    "say": "Conviene distinguir servicios veterinarios incluidos, precios reducidos e indemnizaciones. No todas las facturas se reembolsan.",
    "ask": "¿Buscas responsabilidad civil, asistencia veterinaria o ambas?",
    "close": "¿La modalidad y sus límites cubren la necesidad que has descrito?",
    "follow": "Quedaba por comparar lo que incluye tu clínica y lo que aporta la póliza. ¿Qué servicio te importa más?"
  },
  {
    "id": "accidentes",
    "title": "Accidentes y baja laboral",
    "words": [
      "accidente",
      "baja laboral",
      "autonomo",
      "incapacidad"
    ],
    "say": "Diferenciemos el seguro de accidentes de la cobertura de enfermedad o incapacidad temporal. Debe coincidir con la situación que quieres proteger.",
    "ask": "¿Qué ingreso o gasto quieres cubrir y ante qué contingencia?",
    "close": "Cuando confirmemos esa garantía y sus límites, ¿encaja en tu necesidad?",
    "follow": "La decisión dependía de la contingencia cubierta. Revisemos esa garantía y cómo se calcula la prestación."
  },
  {
    "id": "negocio",
    "title": "Negocio y protección jurídica",
    "words": [
      "negocio",
      "cerrar el local",
      "conflicto",
      "juridic",
      "abogado"
    ],
    "say": "Debemos comprobar qué causas activan la garantía, sus límites, franquicias y cómo se tratan los hechos anteriores a contratar.",
    "ask": "¿Qué situación concreta quieres proteger?",
    "close": "Con ese supuesto comprobado, ¿quieres que revisemos la propuesta?",
    "follow": "Quedó pendiente confirmar un supuesto concreto. Revisemos la respuesta documentada antes de decidir."
  },
  {
    "id": "welcome",
    "title": "Extranjería",
    "words": [
      "residencia",
      "visado",
      "nie",
      "extranjeria",
      "welcome"
    ],
    "say": "Comprobemos los requisitos del trámite y la documentación del seguro. La decisión sobre la residencia corresponde a la autoridad.",
    "ask": "¿Qué trámite y fecha necesitas atender?",
    "close": "Si el seguro cumple los requisitos verificados y encaja contigo, ¿iniciamos la solicitud?",
    "follow": "Retomemos el trámite: ¿han cambiado la fecha o los documentos que te solicitan?"
  },
  {
    "id": "noentiende",
    "title": "Necesita explicación",
    "words": [
      "no entiendo",
      "explica",
      "confuso",
      "lio"
    ],
    "say": "Lo explico por partes: qué pagarías de cuota, qué pagarías al utilizarlo y qué condiciones afectan a lo que necesitas.",
    "ask": "¿Por cuál de esos tres puntos empezamos?",
    "close": "¿Cómo lo explicarías con tus palabras para comprobar que he sido claro?",
    "follow": "La última vez había una condición poco clara. Podemos revisarla con un ejemplo sencillo antes de tomar una decisión."
  }
];
export const normalize=(v)=>String(v||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase();
const includesPhrase=(text,phrase)=>text.includes(phrase);
const special={
 ready:{id:"ready",title:"Quiere avanzar",say:"Perfecto. Antes de iniciar la solicitud, repasemos la modalidad, el importe, la duración y las condiciones que son importantes para ti.",ask:"¿Quieres que iniciemos la solicitud con esos datos, sujeta a valoración y aceptación de la compañía?",close:"Verifica las condiciones y registra la solicitud solo con su consentimiento.",follow:"Retomamos la solicitud que querías iniciar. ¿Siguen encajando las condiciones y quieres continuar?"},
 pending:{id:"pending",title:"Dato pendiente",say:"Gracias por señalarlo. No quiero darte una respuesta sin comprobarla. Verificaré esa condición en la documentación vigente y te diré qué consta exactamente.",ask:"¿Esa respuesta es lo único que necesitas para decidir?",close:"No cierres basándote en una cobertura, precio o fecha sin verificar.",follow:"Quedaba una condición por verificar. Te explico la respuesta documentada y después decides si te encaja."},
 callback:{id:"callback",title:"Momento de recontacto",say:"Claro. Respetemos tu tiempo y dejemos un momento concreto para hablar, si te parece bien.",ask:"¿Qué día y hora te vienen bien?",close:"Registra el recontacto únicamente si lo acepta.",follow:"Te llamo en el momento que acordamos. ¿Te vienen bien unos minutos?"}
 ,noNeed:{id:"no_need",title:"No ve una necesidad",say:"Puede que ahora no necesites otro seguro. Antes de proponerte nada, quiero saber si hay algún servicio o situación que tu cobertura actual no resuelva como quisieras.",ask:"¿Hay algo concreto que hoy te cueste conseguir o que prefieras cubrir de otra forma?",close:"Si no identifica una necesidad, agradece su tiempo y no fuerces una solicitud.",follow:"La última vez no veías una necesidad. ¿Ha cambiado algo que quieras revisar o prefieres que dejemos la propuesta cerrada?"}
 ,pressure:{id:"pressure",title:"Se siente presionado",say:"Perdona si he dado esa impresión. La decisión es tuya y podemos detenernos aquí.",ask:"¿Prefieres que cerremos la conversación o que te deje la información para consultarla cuando quieras?",close:"Respeta su respuesta; no encadenes otro cierre.",follow:"Solo retoma el contacto si lo pidió expresamente."}
 ,guarantee:{id:"guarantee",title:"Pide una garantía",say:"No puedo garantizar una cobertura, aceptación ni precio que no estén confirmados en las condiciones aplicables. Comprobemos el punto exacto antes de decidir.",ask:"¿Qué resultado necesitas que esté garantizado por escrito?",close:"Verifica la condición con la aseguradora y vuelve con la respuesta documentada.",follow:"Retomo la condición que querías confirmar. ¿Quieres que repasemos la respuesta escrita?"}
 ,privacy:{id:"privacy",title:"Datos personales",say:"No compartas aquí datos bancarios, identificativos ni información clínica. Si decides solicitar el seguro, utilizaremos el canal autorizado para recabarlos.",ask:"¿Quieres que primero repasemos las condiciones de la propuesta?",close:"No copies datos sensibles en la guía de llamada.",follow:"Si quieres continuar, utilizaremos el canal autorizado para los datos necesarios."}
 ,conditional:{id:"conditional",title:"Aceptación condicionada",say:"Entiendo que quieres avanzar si se cumple esa condición. Antes de iniciar nada, vamos a comprobarla y dejar claro si aplica a esta modalidad.",ask:"¿Qué condición exacta debe cumplirse para que te encaje?",close:"No registres la solicitud como aceptada hasta verificar esa condición y obtener una decisión expresa.",follow:"Quedaba una condición antes de decidir. ¿Revisamos la respuesta documentada?"}
 ,stop:{id:"stop",title:"Rechazo explícito",say:"Entendido. Gracias por decírmelo. Dejamos aquí la propuesta y respetamos tu petición.",ask:"",close:"No insistir. Registra la petición y tramítala en el sistema autorizado.",follow:"No hagas otra llamada comercial si ha pedido no ser contactado."}
};
export function detectObjections(text){
 const t=normalize(text);
 if(/no (me )?(llam|contact)|\b(no|nunca) (me )?(llames|contactes)\b|no quiero mas llamadas|no vuelvas a (llamar|contactar)|borr(a|e).*datos/.test(t))return [special.stop];
 if(/\b(no quiero contratar (todavia|aun|ahora)|no me interesa (por ahora|de momento)|todavia no quiero contratar)\b/.test(t))return [special.pending];
 if(/no quiero (el seguro|contratar)|no me interesa/.test(t))return [special.stop];
 if(/no (lo )?(pong|declar)|ocultar|mentir/.test(t))return [{id:"exactitud",title:"Cuestionario de salud",say:"Debemos contestar con exactitud a lo que pregunta el cuestionario. Si algo no está claro, lo consultamos antes de enviarlo.",ask:"¿Qué pregunta necesitas aclarar?",close:"Consulta el procedimiento antes de continuar.",follow:"Primero resuelve la duda del cuestionario por el procedimiento autorizado."}];
 if(/\b(no me presiones|me estas presionando|deja de insistir|no insistas)\b/.test(t))return [special.pressure];
 if(/\b(iban|numero de cuenta|numero de tarjeta|mi dni|mi nif)\b/.test(t)&&!/\b(no doy|no compart|no quiero dar|no voy a dar|no dare|me pides|me piden)\b/.test(t))return [special.privacy];
 if(/\b(me garantizas|puedes garantizar|garantizame|me aseguras que)\b/.test(t))return [special.guarantee];
 if(/\b(quiero contratar|contratemos|iniciemos la solicitud)\b.*\b(pero|si|siempre que)\b/.test(t))return [special.conditional];
 if(/^(si|vale|de acuerdo|adelante|contratemos|quiero contratar|hagamoslo|me interesa contratar|iniciemos la solicitud)[.! ]*$/.test(t))return [special.ready];
 if(/\b(llamame luego|ahora no puedo hablar|estoy trabajando|no tengo tiempo ahora)\b/.test(t))return [special.callback];
 if(/\b(no lo necesito|no necesito (otro|un) seguro|no veo (la )?necesidad|estoy bien como estoy|no tengo ningun problema)\b/.test(t))return [special.noNeed];
 const scores=objections.map(o=>({o,score:o.words.reduce((n,w)=>n+(includesPhrase(t,w)&&!(o.id==="precio"&&/\bno (es|me parece|lo veo) caro\b/.test(t))?w.length:0),0)})).filter(x=>x.score>0).sort((a,b)=>(a.o.id==="noentiende")-(b.o.id==="noentiende")||(a.o.id==="pensar"&&b.o.id==="pareja"?1:a.o.id==="pareja"&&b.o.id==="pensar"?-1:0)||b.score-a.score);
 if(scores.length)return scores.map(x=>x.o).slice(0,3);
 if(/\b(no lo se|no estoy seguro|no estoy segura|no se si|no lo tengo claro)\b/.test(t))return [special.pending];
 return [];
}
export function scriptFor(text,selectedId,mode,context={}){
 const matches=detectObjections(text);
 const selected=["stop","exactitud","pressure","privacy"].includes(matches[0]?.id)?matches[0]:objections.find(x=>x.id===selectedId)||matches[0];
 const fallback={id:"descubrir",title:"Aclara la necesidad",say:"Quiero asegurarme de entenderte bien antes de proponerte una opción.",ask:"¿Qué es lo más importante para ti en esta decisión?",close:"Resume lo que ha dicho y acuerda el siguiente paso.",follow:"Te llamo para retomar la propuesta que querías revisar. ¿Qué has podido valorar y qué duda te queda?"};
 const o=selected||fallback;const need=context.need?.trim();const product=context.product?.trim();
 const prior=[...(context.turns||[])].reverse().find(x=>x.topicId===o.id||x.topic===o.title);
 const secondary=o.id==="stop"?[]:objections.filter(x=>x.id!==o.id&&x.words.some(w=>includesPhrase(normalize(text),w))&&!(x.id==="precio"&&/\bno (es|me parece|lo veo) caro\b/.test(normalize(text)))).slice(0,12).map(x=>x.title);
 let say=mode==="follow"?o.follow:o.say;
 let ask=o.ask;
 if(o.id==="ready"&&(!product||!context.quote)){
  say="Me alegra que quieras avanzar. Antes de iniciar la solicitud necesito concretar la modalidad, el importe y las condiciones para que puedas decidir con toda la información.";
  ask="¿Revisamos primero esos datos?";
 }else if(prior&&!["stop","exactitud","pressure","privacy","ready"].includes(o.id)){
  say="Veo que este punto sigue sin resolverse. No quiero repetirte la misma explicación: vamos a identificar qué dato o condición falta para que puedas decidir.";
  ask="¿Qué parte concreta de "+o.title.toLowerCase()+" sigue sin encajarte?";
 }
 return {...o,say,ask,matches,otherConcerns:secondary,contextLine:need?"Tu prioridad: "+need:"Aún falta identificar la necesidad principal.",proposal:product?"Propuesta en revisión: "+product:"Selecciona una propuesta después de conocer la necesidad."};
}

