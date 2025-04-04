export const config = {
    runtime: 'edge',
  };
  
  export default async function handler(req) {
    const url = new URL(req.url);
    const name = url.searchParams.get("name");
  
    if (!name) {
      return new Response("❌ No contact name provided.", { status: 400 });
    }
  
    return new Response(`✅ Contacting ${name}...`, { status: 200 });
  }