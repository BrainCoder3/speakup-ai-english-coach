/** Server-side helpers to talk to the local Ollama daemon (used by route handlers). */
import { CONFIG } from "@/lib/config";

export interface ChatRequest {
  messages: { role: string; content: string }[];
  stream?: boolean;
  format?: unknown;
  temperature?: number;
  maxTokens?: number;
}

let cachedModel: string | null = null;

/** First model from CONFIG.models that is installed in Ollama. */
export async function resolveModel(): Promise<string | null> {
  if (cachedModel) return cachedModel;
  const res = await fetch(`${CONFIG.ollamaUrl}/api/tags`, { cache: "no-store" });
  const tags = (await res.json()) as { models?: { name: string }[] };
  const names = (tags.models ?? []).map((m) => m.name);
  cachedModel = CONFIG.models.find((m) => names.includes(m)) ?? null;
  return cachedModel;
}

/** Forwards a chat request to Ollama with GPU options; returns the raw response. */
export async function ollamaChat(req: ChatRequest): Promise<Response> {
  const model = await resolveModel();
  if (!model) return Response.json({ error: `Modèle introuvable. Lance : ollama pull ${CONFIG.models[0]}` }, { status: 503 });
  return fetch(`${CONFIG.ollamaUrl}/api/chat`, {
    method: "POST",
    cache: "no-store",
    body: JSON.stringify({
      model,
      messages: req.messages,
      stream: !!req.stream,
      format: req.format,
      keep_alive: CONFIG.keepAlive,
      options: { ...CONFIG.gpuOptions, temperature: req.temperature ?? 0.7, num_predict: req.maxTokens ?? 200 },
    }),
  });
}
