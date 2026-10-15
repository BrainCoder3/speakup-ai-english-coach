/** Theory of every unit, in book order. */
import type { Learn } from "../../learnTypes";
import { learn0 } from "./u0";
import { learn1 } from "./u1";
import { learn2 } from "./u2";
import { learn3 } from "./u3";
import { learn4 } from "./u4";
import { learn5 } from "./u5";
import { learn6 } from "./u6";
import { learn7 } from "./u7";
import { learn8 } from "./u8";
import { learn9 } from "./u9";

export const LEARN_PARTS: Omit<Learn, "quiz">[] = [learn0, learn1, learn2, learn3, learn4, learn5, learn6, learn7, learn8, learn9];
