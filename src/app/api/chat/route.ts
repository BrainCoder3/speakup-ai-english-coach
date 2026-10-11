/**
 * POST /api/chat — proxies a chat request to the local Ollama server.
 * Streaming responses are piped through unchanged (NDJSON).
 */
import { ollamaChat, type ChatRequest } from "@/lib/ai/ollama-server";

export async function POST(request: Request) {
  const body = (await request.json()) as ChatRequest;
  try {
    const upstream = await ollamaChat(body);
    if (!upstream.ok || !upstream.body) {
      const text = await upstream.text();
      return new Response(text || "Ollama error", { status: upstream.status || 502 });
    }
    return new Response(upstream.body, {
      headers: { "Content-Type": body.stream ? "application/x-ndjson" : "application/json" },
    });
  } catch {
    return Response.json({ error: "Ollama ne répond pas. Ouvre l'application Ollama." }, { status: 503 });
  }
}
