/**
 * Spanish speech recognisers write numbers and times as digits ("25", "3:30", "1.º").
 * These helpers turn them back into the words a learner actually said.
 */
const UNITS = ["cero", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "diez",
  "once", "doce", "trece", "catorce", "quince", "dieciséis", "diecisiete", "dieciocho", "diecinueve",
  "veinte", "veintiuno", "veintidós", "veintitrés", "veinticuatro", "veinticinco", "veintiséis", "veintisiete", "veintiocho", "veintinueve"];
const TENS = ["", "", "", "treinta", "cuarenta", "cincuenta", "sesenta", "setenta", "ochenta", "noventa"];
const HUNDREDS = ["", "ciento", "doscientos", "trescientos", "cuatrocientos", "quinientos", "seiscientos", "setecientos", "ochocientos", "novecientos"];
const ORD = ["", "primero", "segundo", "tercero", "cuarto", "quinto", "sexto", "séptimo", "octavo", "noveno", "décimo"];

function below100(n: number): string {
  if (n < 30) return UNITS[n];
  return TENS[Math.floor(n / 10)] + (n % 10 ? " y " + UNITS[n % 10] : "");
}

/** 0-999 999 in Spanish words. */
export function spellNumberEs(n: number): string {
  if (n < 100) return below100(n);
  if (n === 100) return "cien";
  if (n < 1000) return `${HUNDREDS[Math.floor(n / 100)]}${n % 100 ? " " + below100(n % 100) : ""}`;
  const k = Math.floor(n / 1000);
  return `${k === 1 ? "mil" : spellNumberEs(k) + " mil"}${n % 1000 ? " " + spellNumberEs(n % 1000) : ""}`;
}

/** Rewrites digits inside a lowercase Spanish sentence as spoken words. */
export function spellDigitsEs(text: string): string {
  return text
    .replace(/\b(\d{1,2}):00\b/g, (_, h) => spellNumberEs(+h))
    .replace(/\b(\d{1,2}):15\b/g, (_, h) => `${spellNumberEs(+h)} y cuarto`)
    .replace(/\b(\d{1,2}):30\b/g, (_, h) => `${spellNumberEs(+h)} y media`)
    .replace(/\b(\d{1,2}):(\d{2})\b/g, (_, h, m) => `${spellNumberEs(+h)} y ${spellNumberEs(+m)}`)
    .replace(/\b(\d{1,3})(?:\.(\d{3}))+\b/g, (m) => m.replace(/\./g, ""))
    .replace(/\b(\d{1,2})\s*\.?\s*[ºª°]/g, (_, n) => ORD[+n] ?? spellNumberEs(+n))
    .replace(/(\d+)\s*%/g, "$1 por ciento")
    .replace(/(\d+)\s*€/g, "$1 euros")
    .replace(/\b\d{1,6}\b/g, (n) => spellNumberEs(+n));
}
