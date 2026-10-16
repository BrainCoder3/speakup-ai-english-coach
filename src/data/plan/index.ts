/** The 30 days of the intensive programme, in order. */
import type { PlanDay } from "./types";
import { d01 } from "./days/d01";
import { d02 } from "./days/d02";
import { d03 } from "./days/d03";
import { d04 } from "./days/d04";
import { d05 } from "./days/d05";
import { d06 } from "./days/d06";
import { d07 } from "./days/d07";
import { d08 } from "./days/d08";
import { d09 } from "./days/d09";
import { d10 } from "./days/d10";
import { d11 } from "./days/d11";
import { d12 } from "./days/d12";
import { d13 } from "./days/d13";
import { d14 } from "./days/d14";
import { d15 } from "./days/d15";
import { d16 } from "./days/d16";
import { d17 } from "./days/d17";
import { d18 } from "./days/d18";
import { d19 } from "./days/d19";
import { d20 } from "./days/d20";
import { d21 } from "./days/d21";
import { d22 } from "./days/d22";
import { d23 } from "./days/d23";
import { d24 } from "./days/d24";
import { d25 } from "./days/d25";
import { d26 } from "./days/d26";
import { d27 } from "./days/d27";
import { d28 } from "./days/d28";
import { d29 } from "./days/d29";
import { d30 } from "./days/d30";

export const DAYS: PlanDay[] = [d01, d02, d03, d04, d05, d06, d07, d08, d09, d10, d11, d12, d13, d14, d15, d16, d17, d18, d19, d20, d21, d22, d23, d24, d25, d26, d27, d28, d29, d30];

export const WEEKS = [
  { n: 1, title: "Fondations solides", goal: "B1 → B2 : les temps et les pièges des francophones", days: [1, 7] },
  { n: 2, title: "Aisance", goal: "B2 : futur, hypothèses, modaux, nuances de structure", days: [8, 14] },
  { n: 3, title: "Structures complexes", goal: "B2+ : passif, discours indirect, regrets, argumentation", days: [15, 21] },
  { n: 4, title: "Nuance et naturel", goal: "C1 : inversion, mise en relief, phrasal verbs, présentation", days: [22, 30] },
];
