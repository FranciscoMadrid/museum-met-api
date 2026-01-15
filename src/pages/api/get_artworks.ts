import type { APIRoute } from "astro";

export const GET: APIRoute = async({request}) => {
  try {
    const body = await request.json();
    
    return new Response(JSON.stringify('All good'), {
      status: 200,
    })
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error ?? "Internal error" }),
        { status: 500 }
    );
  }
}