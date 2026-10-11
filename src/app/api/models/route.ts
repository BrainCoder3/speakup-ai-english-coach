/**
 * GET /api/models — tells the UI which model is used and warms it up on the GPU.
 * Calls the local Ollama daemon, so it always runs at request time.
 */
import { connection } from "next/server";
import { ollamaChat, resolveModel } from "@/lib/ai/ollama-server";
import { CONFIG } from "@/lib/config";

export async function GET() {
  await connection();
  try {
    const model = await resolveModel();
    if (!model) return Response.json({ ok: false, error: `Modèle introuvable. Lance : ollama pull ${CONFIG.models[0]}` });
    // Warm-up: loads the weights into VRAM and keeps them there (keep_alive).
    await (await ollamaChat({ messages: [{ role: "user", content: "hi" }], maxTokens: 1 })).text();
    return Response.json({ ok: true, model });
  } catch {
    return Response.json({ ok: false, error: "Ollama ne répond pas. Ouvre l'application Ollama puis recharge la page." });
  }
}
