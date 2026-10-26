/** The published site (GitHub Pages) may call a SpeakUp server running on the learner's own PC. */
export const CORS = {
  "Access-Control-Allow-Origin": "https://braincoder3.github.io",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Private-Network": "true",
  Vary: "Origin",
};

export const preflight = () => new Response(null, { status: 204, headers: CORS });
