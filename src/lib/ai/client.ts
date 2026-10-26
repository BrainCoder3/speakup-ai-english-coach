/** Browser-side client for /api/chat (streaming text or structured JSON). */
import { store } from "@/lib/store/store";

export type Msg = { role: "system" | "user" | "assistant"; content: string };

/** Removes reasoning tags and markdown symbols the voice would read aloud. */
export const cleanText = (s: string) => String(s || "").replace(/<think>[\s\S]*?<\/think>/g, "").replace(/[*_#`]/g, "").trim();

/** Where the AI lives: this site's own /api, or the server whose address is set in the settings (phone). */
export const aiBase = () => store.settings().aiUrl.trim().replace(/\/+$/, "");

async function post(body: object): Promise<Response> {
  const res = await fetch(`${aiBase()}/api/chat`, { method: "POST", body: JSON.stringify(body) });
  if (!res.ok) throw new Error(await res.text());
  return res;
}

/** Streams a reply; onText receives the full text so far. */
export async function chatStream(messages: Msg[], onText: (full: string) => void, opts: { temperature?: number; maxTokens?: number } = {}) {
  const res = await post({ messages, stream: true, temperature: opts.temperature ?? 0.7, maxTokens: opts.maxTokens ?? 160 });
  const reader = res.body!.getReader();
  const dec = new TextDecoder();
  let buf = "", full = "";
  for (;;) {
    const { value, done } = await reader.read();
    if (done) break;
    buf += dec.decode(value, { stream: true });
    let i: number;
    while ((i = buf.indexOf("\n")) >= 0) {
      const line = buf.slice(0, i).trim();
      buf = buf.slice(i + 1);
      if (!line) continue;
      const piece = (JSON.parse(line) as { message?: { content?: string } }).message?.content ?? "";
      if (piece) {
        full += piece;
        onText(cleanText(full));
      }
    }
  }
  return cleanText(full);
}

/** Structured output constrained by a JSON schema. */
export async function chatJSON<T>(prompt: string, schema: object, opts: { temperature?: number; maxTokens?: number } = {}): Promise<T> {
  const res = await post({ messages: [{ role: "user", content: prompt }], format: schema, temperature: opts.temperature ?? 0.2, maxTokens: opts.maxTokens ?? 420 });
  const j = (await res.json()) as { message: { content: string } };
  return JSON.parse(j.message.content) as T;
}
