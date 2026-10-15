"use client";
/** Step 1 (Spanish) — understand the unit: goals, grammar, vocabulary, phonetics, then a quiz. */
import { useState } from "react";
import { CONFIG } from "@/lib/config";
import { itemScore, recordItem } from "@/lib/progress/rules";
import { ES_LEARN } from "@/data/es";
import type { Level } from "@/data/types";
import { Celebrate } from "@/components/lesson/Celebrate";
import { completeStep, type Celebration } from "@/components/lesson/completion";
import { Icon } from "@/components/ui/Icon";
import { Quiz } from "./Quiz";
import { TheoryCard } from "./TheoryCard";
import { PhoneticsCard, VocabCard } from "./VocabCard";

const PASS = CONFIG.pass.learn;

export function LearnStep({ level }: { level: Level }) {
  const learn = ES_LEARN[level.id];
  const [quiz, setQuiz] = useState(0);
  const [score, setScore] = useState<number | null>(null);
  const [done, setDone] = useState<Celebration | null>(null);
  if (done) return <Celebrate c={done} />;
  if (!learn) return <p className="muted">Leçon indisponible.</p>;
  const best = itemScore(level.id, "learn", 0);

  return (
    <>
      <div className="stephead">
        <div>
          <h2>📖 Comprendre la leçon</h2>
          <p>
            Tout le programme de l&apos;unité {level.book?.unit} du livre <i>Aula Internacional Plus 1</i>
            {level.book ? ` (p. ${level.book.page})` : ""}, expliqué en français. Lis, écoute les exemples, puis réussis le quiz
            avec <b>{PASS} %</b> minimum{best ? ` · ton meilleur score : ${best} %` : ""}.
          </p>
        </div>
      </div>
      <section className="card goal">
        <h3>🎯 {learn.goal}</h3>
        <ul>{learn.can.map((c) => <li key={c}>✓ {c}</li>)}</ul>
      </section>
      {learn.theory.map((t, k) => <TheoryCard key={t.title} point={t} n={k + 1} />)}
      <VocabCard vocab={learn.vocab} />
      <PhoneticsCard p={learn.phonetics} culture={learn.culture} />

      <div className="stephead">
        <div>
          <h2>✍️ Quiz de l&apos;unité</h2>
          <p>{learn.quiz.length} questions, dans un ordre différent à chaque essai. Chaque réponse est expliquée.</p>
        </div>
        {!quiz && <button className="btn primary" onClick={() => setQuiz(1)}><Icon name="arrow" />Je suis prêt : passer le quiz</button>}
      </div>
      {quiz > 0 && (
        <Quiz
          key={quiz}
          questions={learn.quiz}
          pass={PASS}
          onFinish={(s) => {
            recordItem(level.id, "learn", 0, s);
            setScore(s);
          }}
        />
      )}
      {score !== null && score >= PASS && (
        <button className="btn primary next" onClick={() => setDone(completeStep(level, "learn", score))}>
          <Icon name="arrow" />Valider l&apos;épreuve
        </button>
      )}
    </>
  );
}
