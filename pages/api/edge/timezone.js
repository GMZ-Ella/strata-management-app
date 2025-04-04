export const config = {
    runtime: 'edge',
  };
  
  export default async function handler(req) {
    const now = new Date().toLocaleString();
    return new Response(`🕒 Current time: ${now}`, {
      status: 200,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }