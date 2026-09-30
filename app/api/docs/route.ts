import records from "../../../lib/documents-data.json";
import meta from "../../../lib/documents-meta.json";
import {searchDocuments} from "../../../lib/document-search";
import {getChatGPTUser} from "../../chatgpt-auth";
export const dynamic="force-dynamic";
export async function GET(req:Request){
 if(!await getChatGPTUser())return Response.json({error:"Inicia sesión"},{status:401});
 const q=new URL(req.url).searchParams.get("q")||"";
 if(q.length>200)return Response.json({error:"Consulta demasiado larga"},{status:400});
 const results=q.trim()?searchDocuments(records,q,{limit:15}):[];
 return Response.json({results,meta},{headers:{"Cache-Control":"no-store"}});
}
