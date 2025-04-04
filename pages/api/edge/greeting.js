export const config = {
    runtime: 'edge',
  };
  
  export default async function handler(req) {
    return new Response("👋 Welcome to HarborView Apartments!", {
      status: 200,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }