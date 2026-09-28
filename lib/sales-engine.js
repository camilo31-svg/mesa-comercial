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
export const normalize=(v)=>String(v||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/\s+/g," ").trim();
const special={
 ready:{id:"ready",title:"Quiere avanzar",say:"Perfecto. Antes de iniciar la solicitud, repasemos la modalidad, el importe, la duración y las condiciones que son importantes para ti.",ask:"¿Quieres que iniciemos la solicitud con esos datos, sujeta a valoración y aceptación de la compañía?",close:"Verifica las condiciones y registra la solicitud solo con su consentimiento.",follow:"Retomamos la solicitud que querías iniciar. ¿Siguen encajando las condiciones y quieres continuar?"},
 pending:{id:"pending",title:"No ha decidido",say:"Entiendo que aún no quieras decidir. Te dejo espacio para valorarlo.",ask:"¿Qué punto te falta aclarar o prefieres que no hagamos seguimiento?",close:"Acuerda un recontacto solo si el cliente lo acepta.",follow:"Quedamos en retomar tu valoración. ¿Has podido revisarla o prefieres dejar la propuesta aquí?"},
 callback:{id:"callback",title:"Momento de recontacto",say:"Claro. Respetemos tu tiempo y dejemos un momento concreto para hablar, si te parece bien.",ask:"¿Qué día y hora te vienen bien?",close:"Registra el recontacto únicamente si lo acepta.",follow:"Te llamo en el momento que acordamos. ¿Te vienen bien unos minutos?"}
 ,noNeed:{id:"no_need",title:"No ve una necesidad",say:"Puede que ahora no necesites otro seguro. Antes de proponerte nada, quiero saber si hay algún servicio o situación que tu cobertura actual no resuelva como quisieras.",ask:"¿Hay algo concreto que hoy te cueste conseguir o que prefieras cubrir de otra forma?",close:"Si no identifica una necesidad, agradece su tiempo y no fuerces una solicitud.",follow:"La última vez no veías una necesidad. ¿Ha cambiado algo que quieras revisar o prefieres que dejemos la propuesta cerrada?"}
 ,pressure:{id:"pressure",title:"Se siente presionado",say:"Perdona si he dado esa impresión. La decisión es tuya y podemos detenernos aquí.",ask:"¿Prefieres que cerremos la conversación o que te deje la información para consultarla cuando quieras?",close:"Respeta su respuesta; no encadenes otro cierre.",follow:"Solo retoma el contacto si lo pidió expresamente."}
 ,guarantee:{id:"guarantee",title:"Pide una garantía",say:"No puedo garantizar una cobertura, aceptación ni precio que no estén confirmados en las condiciones aplicables. Comprobemos el punto exacto antes de decidir.",ask:"¿Qué resultado necesitas que esté garantizado por escrito?",close:"Verifica la condición con la aseguradora y vuelve con la respuesta documentada.",follow:"Retomo la condición que querías confirmar. ¿Quieres que repasemos la respuesta escrita?"}
 ,privacy:{id:"privacy",title:"Datos personales",say:"No compartas aquí datos bancarios, identificativos ni información clínica. Si decides solicitar el seguro, utilizaremos el canal autorizado para recabarlos.",ask:"¿Quieres que primero repasemos las condiciones de la propuesta?",close:"No copies datos sensibles en la guía de llamada.",follow:"Si quieres continuar, utilizaremos el canal autorizado para los datos necesarios."}
 ,conditional:{id:"conditional",title:"Aceptación condicionada",say:"Entiendo que quieres avanzar si se cumple esa condición. Antes de iniciar nada, vamos a comprobarla y dejar claro si aplica a esta modalidad.",ask:"¿Qué condición exacta debe cumplirse para que te encaje?",close:"No registres la solicitud como aceptada hasta verificar esa condición y obtener una decisión expresa.",follow:"Quedaba una condición antes de decidir. ¿Revisamos la respuesta documentada?"}
 ,stop:{id:"stop",title:"No contactar",say:"Entendido. No volveremos a llamarte por esta propuesta. Registraré tu petición en el sistema autorizado.",ask:"",close:"Registra la petición de no contacto y no programes seguimiento.",follow:"No hagas otra llamada comercial."},
 decline:{id:"decline",title:"No quiere continuar",say:"Entendido, gracias por decírmelo. Dejamos la propuesta aquí.",ask:"",close:"Cierra esta propuesta sin insistir ni programar seguimiento.",follow:"No retomes esta propuesta sin iniciativa del cliente."},
 payment:{id:"payment",title:"Forma de pago",say:"Aclaremos cada cuánto se cobra la prima y cuál es la duración del contrato: son cosas distintas. Te diré ambas según esta propuesta.",ask:"¿Quieres confirmar el importe de cada recibo o durante cuánto tiempo se mantiene el contrato?",close:"Comprueba modalidad, periodicidad e importe antes de solicitar.",follow:"Quedó pendiente confirmar el importe y la periodicidad de pago. ¿Los repasamos?"},
 delivery:{id:"delivery",title:"No recibió la información",say:"Siento que no te haya llegado. Primero comprobaré por el canal autorizado si se envió y a qué dirección, sin pedirte datos sensibles por esta guía.",ask:"¿Prefieres que revisemos el envío antes de seguir?",close:"Verifica el envío; no afirmes que el cliente recibió documentación sin comprobarlo.",follow:"Quedó pendiente confirmar que recibiste la información. ¿Ha llegado ya?"}
};
const exactitud={id:"exactitud",title:"Cuestionario de salud",say:"Es importante responder el cuestionario de salud con exactitud. Si una pregunta no está clara, la consultamos antes de enviarlo.",ask:"¿Qué pregunta necesitas aclarar?",close:"Consulta el procedimiento antes de continuar.",follow:"Primero resuelve la duda del cuestionario por el procedimiento autorizado."};
const fallback={id:"descubrir",title:"Aclarar la frase",say:"Quiero responder a lo que acabas de comentar, pero necesito concretarlo para no suponer algo distinto.",ask:"¿Qué parte de la propuesta te preocupa o qué necesitas que compruebe?",close:"Averigua el punto concreto antes de recomendar o cerrar.",follow:"¿Qué punto de la propuesta quieres revisar ahora?"};
const rule=(t,re,o)=>re.test(t)?o:null;
function explicitMatch(t){
 return rule(t,/\b(no me (llames|contactes)|no (me )?(llames|contactes|vuelvas a llamar)|no vuelvas a contactarme|no quiero (mas|más) llamadas|deja de llamarme|borra mis datos|elimina mis datos)\b/,special.stop)
 ||rule(t,/\b(no me presiones|me estas presionando|deja de insistir|no insistas|me siento presionad[oa])\b/,special.pressure)
 ||rule(t,/\b(ocult(ar|emos)|mentir|no (lo |la )?(declare|declaro|declaramos)|no pongas (la enfermedad|el tratamiento))\b/,exactitud)
 ||rule(t,/\b(te (doy|paso) (mi )?(iban|dni|nif|cuenta|tarjeta)|mi (iban|dni|nif) es)\b/,special.privacy)
 ||rule(t,/\b(no quiero contratar (todavia|aun|ahora)|no me interesa (por ahora|de momento))\b/,special.pending)
 ||(!/\b(no quiero (el seguro|contratar|seguir)|no me interesa)\b.{0,35}\b(si|con copagos|porque)\b/.test(t)&&rule(t,/\b(no quiero (el seguro|contratar|seguir)|no me interesa|descarto la propuesta)\b/,special.decline))
 ||rule(t,/\b(no (he|me ha) (recibido|llegado) (el |tu )?(correo|email|resumen|propuesta)|no (recibi|me llego) (el |tu )?(correo|email|resumen|propuesta))\b/,special.delivery)
 ||rule(t,/\b(quiero contratar|contratemos|iniciemos la solicitud|adelante)\b.{0,110}\b(pero|si|siempre que|con la condicion de)\b/,special.conditional)
 ||rule(t,/\b(me garantizas|puedes garantizar|garantizame|me aseguras que)\b/,special.guarantee)
 ||rule(t,/\b(llamame luego|ahora no puedo hablar|estoy trabajando|no tengo tiempo ahora|hablamos (manana|luego))\b/,special.callback)
 ||rule(t,/\b(no lo necesito|no necesito (otro|un) seguro|no veo (la )?necesidad|estoy bien como estoy|no tengo ningun problema)\b/,special.noNeed)
 ||rule(t,/\b(quiero contratar|contratemos|iniciemos la solicitud|hagamoslo|me interesa contratar)\b[.! ]*$/,special.ready)
 ||rule(t,/\b(es (mensual|anual)|pago (mensual|anual)|cada cuanto (pago|cobrais)|cuando se cobra|en cuantos recibos)\b/,special.payment);
}
const patterns={
 presupuesto:/\b(no (puedo|podria|me lo puedo) pagar(lo)?|no (me l[ao] )?puedo permitir|no llego|no tengo dinero|sin dinero|presupuesto (maximo|es de|de)|tope mensual|se sale de mi presupuesto)\b/,
 anuncio:/\b(anuncio|publicidad|precio anunciado|ponia desde)\b/,
 comparar:/\b(otra compania|otra aseguradora|sanitas|dkv|asisa|otras ofertas|otra oferta|oferta mas barata|mas barato|mas barata|comparar)\b/,
 precio:/\b((me )?(parece|pareciendome) (muy )?caro|es (muy )?caro|muy caro|sale caro|caro para mi|se me hace (alto|cara)|precio (es alto|alto|final|no me cuadra|no me convence|compensa)|no me cuadra el precio|me preocupa el precio|importe (alto|no me encaja)|no me encaja el importe|cuota (alta|elevada|no me encaja|mensual se me hace alta)|prima mensual|cuanto cuesta|cuanto vale|cuesta mucho dinero|demasiado costoso)\b/,
 descuento:/\b(descuento|rebaja|bajame|mejor precio)\b/,
 copago:/\b(copagos?|pagar por (consulta|uso)|sin copagos)\b/,
 pareja:/\b(mi (pareja|mujer|marido|espos[ao]) (quiere (revisarlo|verlo|decidir)|tiene (dudas|que decidir)|debe decidir|va a decidir|no esta convencid[oa]|tambien decide)|mi familia (quiere verlo|tiene dudas|debe decidir|debe valorarlo)|consultarlo( con (mi )?(pareja|mujer|marido|espos[ao]|familia))?|lo consulto con (mi )?(pareja|mujer|marido|espos[ao]|familia)|hablar(lo)? con (mi )?(pareja|mujer|marido|espos[ao]|familia)|lo hablare con mi pareja)\b/,
 pensar:/\b(quiero pensarlo|necesito pensar(lo)?|tengo que pensar(lo)?( mas)?|me lo pienso|dejame pensarlo|prefiero evaluarlo|voy a (valorar|evaluar) la propuesta|lo voy a evaluar|necesito (mas )?tiempo para decidir|necesito decidir con calma|quiero (evaluarlo|valorarlo)|tengo que (evaluarlo|valorarlo|decidirlo)|no he decidido)\b/,
 correo:/\b(mandamelo|enviamelo|por escrito|mandame (el|las)|enviame (el|las)|quiero verlo en un email|por correo|por whatsapp)\b/,
 tiempo:/\b(no tengo tiempo|estoy ocupado|estoy en una reunion|estoy trabajando)\b/,
 publica:/\b(sanidad publica|seguridad social|ya tengo la publica)\b/,
 uso:/\b(no lo uso|no voy al medico|nunca voy|tirar el dinero|tiro el dinero|estoy sano)\b/,
 medico:/\b(mi medico|mi hospital|cuadro medico|mi clinica|mi especialista|el (medico|hospital|centro) que quiero)\b/,
 patologia:/\b(enfermedad|patologia|medicacion|medicamento|tratamiento previo|diabetes|hipertension|cancer|operacion previa|pastillas?|tomo .{3,40}(para|cada dia))\b/,
 urgente:/\b(ya mismo|lo necesito ya|prueba ya|inmediato|urgente|operarme|resonancia (manana|esta semana))\b/,
 carencias:/\b(carencias?|periodo de espera|cuanto (tiempo )?tengo que esperar|me preocupa esperar|evitar la carencia)\b/,
 subidas:/\b(subida|subir(a|an)? (el|la) (precio|prima|cuota)|renovacion|ipc|proximo ano)\b/,
 duracion:/\b(cancelar|permanencia|compromiso (de|temporal)|salirme|darme de baja|cuando puedo darme de baja|dura (un|dos|tres) anos)\b/,
 confianza:/\b(no me fio|estafa|no confio|no tengo confianza|quien me llama|datos bancarios|iban|cuenta bancaria|verificar (tu identidad|el telefono)|dudo de la agencia|por telefono no)\b/,
 experiencia:/\b(mala experiencia|no pagan|reclamacion|denegaron|no me atendieron)\b/,
 actual:/\b(ya tengo (seguro|poliza)|tengo (otro )?seguro|mi seguro( actual| me cubre)|cambiarme( de seguro)?|cambiar de (compania|seguro)|por que cambiarme)\b/,
 dental:/\b(implantes?|dental|dentista|ortodoncia)\b/,
 coberturas:/\b(cubre todo|cobertura|incluye|cubierto|cubre|incluido|incluida)\b/,
 hogar:/\b(comunidad de vecinos|inquilino|seguro de hogar|mi vivienda)\b/,
 decesos:/\b(decesos|entierro|funerario)\b/,
 viaje:/\b(seguro de viaje|viajo|viajar|extranjero|repatriacion)\b/,
 mascotas:/\b(mascota|mi perro|mi gato|veterinari)\b/,
 accidentes:/\b(accidente|baja laboral|autonomo|incapacidad)\b/,
 negocio:/\b(mi negocio|cerrar el local|conflicto legal|proteccion juridica|abogado)\b/,
 welcome:/\b(visado|nie|extranjeria|permiso de residencia|adeslas welcome)\b/,
 noentiende:/\b(no entiendo|explica|confuso|es un lio)\b/
};
const order=["presupuesto","anuncio","comparar","descuento","precio","copago","pareja","pensar","correo","tiempo","publica","uso","patologia","medico","urgente","carencias","subidas","duracion","confianza","experiencia","actual","dental","hogar","decesos","viaje","mascotas","accidentes","negocio","welcome","coberturas","noentiende"];
export function detectObjections(text){
 const t=normalize(text);if(!t)return [];
 const matches=id=>patterns[id].test(t)&&!(id==="precio"&&/\b(no es caro|no me parece caro|no lo veo caro)\b/.test(t));
 const explicit=explicitMatch(t);
 if(explicit)return [explicit,...order.filter(matches).map(id=>objections.find(o=>o.id===id)).filter(Boolean).filter(o=>o.id!==explicit.id)].slice(0,4);
 const found=order.filter(matches).map(id=>objections.find(o=>o.id===id)).filter(Boolean);
 if(found.length)return found.slice(0,4);
 if(/\b(no lo se|no estoy segur[oa]|no se si|no lo tengo claro|aun no|todavia no)\b/.test(t))return [special.pending];
 return [];
}
export function scriptFor(text,selectedId,mode,context={}){
 const t=normalize(text),matches=detectObjections(text);
 const selected=matches[0]||objections.find(x=>x.id===selectedId);
 const o=selected||fallback,need=context.need?.trim(),product=context.product?.trim();
 const secondary=[...new Set(matches.slice(1).map(x=>x.title))].slice(0,3);
 let say=o.say,ask=o.ask;
 const prior=[...(context.turns||[])].reverse().find(x=>x.topicId===o.id);
 if(o.id==="conditional"){
  const condition=String(text).match(/\b(?:pero|siempre que|con la condici[oó]n de|(?:solo )?si)\b\s*(.{3,130})/i)?.[1]?.trim().replace(/[.!?]+$/,"");
  if(condition&&!/\b(dni|iban|nif|cuenta|tarjeta)\b/i.test(condition))say="Entiendo que solo quieres avanzar si se cumple esto: «"+condition+"». Antes de solicitarlo, comprobaré esa condición en la modalidad concreta y te diré qué consta por escrito.";
 }else if(o.id==="ready"&&(!product||!context.quote)){
  say="Me alegra que quieras avanzar. Antes de iniciar la solicitud necesito concretar la modalidad, el importe y las condiciones para que puedas decidir con toda la información.";
  ask="¿Revisamos primero esos datos?";
 }else if(o.id==="precio"&&context.quote){
  say="Entiendo que la cuota de "+context.quote+" te resulte alta. Revisemos el coste total, incluidos copagos y duración, y si existe una modalidad que cubra lo imprescindible con un importe más adecuado.";
  if(/\b(cuanto cuesta|cuanto vale|precio final)\b/.test(t))say="La propuesta que tengo anotada es "+context.quote+". Antes de confirmarla, revisaré modalidad, copagos, duración y campañas vigentes para darte el coste completo.";
 }else if(o.id==="precio"&&prior){
  say="Entiendo que el coste sigue sin encajarte. Antes de repetir cifras, separemos cuota, copagos y coste total para ver qué habría que cambiar.";
  ask="¿Cuál de esos importes es el que supera tu límite mensual?";
 }else if(o.id==="copago"&&/\b(no quiero|no lo quiero|sin|cero|no acepto|me frenan)\b/.test(t)){
  say="Entiendo que no quieres pagar por cada uso. Revisemos una modalidad sin copagos si está disponible para tu caso y comparemos su cuota total con esta propuesta.";
  ask="¿La cuota de esa modalidad encajaría en el límite que quieres mantener?";
 }else if(o.id==="copago"&&/\b(cuanto|hay|tiene)\b/.test(t)){
  say="Voy a comprobar si esta modalidad tiene copagos y cuánto corresponde a los servicios que más usarías. No quiero darte una cifra de otra modalidad.";
  ask="¿Qué consultas o pruebas necesitas comparar?";
 }else if(o.id==="carencias"&&/\b(cuanto|esperar|para pruebas|evitar)\b/.test(t)){
  say="La espera depende de la prestación y de las condiciones aplicables. Comprobaré el plazo exacto antes de decirte cuándo podrías utilizarla.";
  ask="¿Qué prestación necesitas y para qué fecha?";
 }else if(o.id==="dental"&&/\b(implantes?|ortodoncia)\b/.test(t)){
  say="Para ese tratamiento dental comprobaré la tarifa de la modalidad y el presupuesto de la clínica; que exista cobertura dental no significa que el tratamiento sea gratuito.";
  ask="¿Tienes ya un presupuesto de la clínica para compararlo con el coste completo?";
 }else if(o.id==="coberturas"&&/\b(cubre|cubierto|incluido|incluida|incluye)\b/.test(t)){
  say="No quiero decirte que sí sin comprobar esa prestación en la modalidad concreta. Revisaré cobertura, límites, carencias y autorizaciones y te daré la respuesta documentada.";
 }else if(o.id==="correo"&&/\b(no he|no me ha|no me)\b/.test(t)){
  say=special.delivery.say;ask=special.delivery.ask;
 }else if(o.id==="descubrir"&&/^(si|vale|de acuerdo|no|quizas|tal vez)[.! ]*$/.test(t)){
  const last=[...(context.turns||[])].reverse().find(x=>x.ask);
  if(last){say="Gracias. Quiero asegurarme de haber entendido tu respuesta sobre "+last.topic.toLowerCase()+".";ask="¿Me confirmas a qué parte te refieres antes de seguir?";}
 }
 if(secondary.length&&!["stop","decline","pressure","privacy","ready"].includes(o.id)){
  ask=ask||"¿Cuál de esos puntos quieres revisar primero?";
 }
 return {...o,say,ask,matches,otherConcerns:secondary,contextLine:need?"Tu prioridad: "+need:"Aún falta identificar la necesidad principal.",proposal:product?"Propuesta en revisión: "+product:"Selecciona una propuesta después de conocer la necesidad."};
}
