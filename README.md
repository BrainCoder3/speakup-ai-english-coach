# 🎙️ SpeakUp — Coach d'anglais oral (Next.js, gratuit, 100 % local)

**SpeakUp** t'oblige à **parler anglais** et te fait progresser **niveau par niveau**.
Tu parles au micro, une IA qui tourne **sur ton propre PC** (carte graphique, via [Ollama](https://ollama.com)) te répond à l'oral,
**te corrige à voix haute dès que tu fais une faute** et te fait **répéter** jusqu'à ce que ce soit juste.
Impossible de passer au niveau suivant tant que tu n'as pas le score requis.

> Aucun compte, aucune clé API, aucun abonnement.

![Next.js](https://img.shields.io/badge/Next.js-16-black) ![React](https://img.shields.io/badge/React-19-61dafb) ![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178c6) ![Ollama](https://img.shields.io/badge/IA-Ollama%20local-0f6e64) ![Fichiers](https://img.shields.io/badge/fichiers-%E2%89%A4%20100%20lignes-2e8b57)

---

## ✨ Fonctionnalités

| | |
|---|---|
| 🗺️ **8 niveaux (A1 → C1)** | Se présenter, routine, passé, futur, travail, opinions, business, expressions natives. |
| 🔒 **Progression verrouillée** | 5 épreuves par niveau, dans l'ordre. Le niveau suivant ne s'ouvre que si tout est validé (même en tapant l'URL). |
| 🎧 **Écoute & répète** | 8 phrases / niveau, **85/100** de prononciation sur **chaque** phrase. Mots ratés en rouge, clic = réécoute lente. |
| 👂 **Compréhension orale** | 16 textes (monologues, dialogues, messages vocaux, podcasts, débats, journal radio) avec **12 accents** : américain, britannique, australien, indien, irlandais, sud-africain, nigérian, canadien, kényan, néo-zélandais, singapourien, philippin. Texte caché (lisible après 3 écoutes), réponses **à l'oral**. |
| 🎤 **Réponds à l'oral** | 5 questions / niveau notées par l'IA. **La moindre faute de grammaire = à refaire.** |
| 🗣️ **Parle longtemps** | Monologue avec un **nombre de mots minimum** (40 → 170 selon le niveau). L'IA corrige **chaque phrase**, tu **répètes les phrases corrigées**, puis tu **reparles du sujet, 25 % plus longtemps**. Validé seulement au 2ᵉ essai. |
| 🔁 **Mes erreurs** | Chaque phrase fausse est gardée et revient (1, 3, 7, 16, 35 jours) : tu vois ce que tu avais dit et tu dois dire la bonne version **de mémoire**. Au-delà de 10 erreurs en attente, les leçons attendent. |
| ⏹️ **« I'm done recording »** | Pour les réponses longues, le micro ne coupe pas pendant tes pauses : tu dis *« I'm done recording »* (ou *« I'm done »*, *« end of recording »*) pour terminer. |
| 🎯 **Mission** | Jeu de rôle (entretien, négociation, débat…) de 5 à 7 échanges, moyenne **75/100** exigée. |
| 🗣️ **Correction orale** | Faute en conversation → *« Almost! … Repeat after me: … »* → tu dois répéter avant de continuer. |
| 📝 **Corrections détaillées** | Diff (barré / ajouté), version native, explications **en français**, astuce, nouveau mot. |
| 💬 **Conversation libre** | 8 situations × 3 niveaux, avec correction orale. |
| 📒 **Carnet + flashcards** | Répétition espacée (boîtes de Leitner). |
| 📈 **Suivi & sauvegarde** | XP, série 🔥, moyennes, points faibles. Sauvegarde auto + export/import `.json`. |

---

## 🚀 Installation

**Prérequis** : [Node.js 20+](https://nodejs.org), [Ollama](https://ollama.com/download), **Microsoft Edge** (meilleures voix) ou Chrome. Une carte graphique de 4 Go suffit.

```bash
# 1. Modèle d'IA (une seule fois, ~2,5 Go) — prends bien la version "instruct"
ollama pull qwen3:4b-instruct-2507-q4_K_M

# 2. Dépendances
npm install

# 3a. Développement
npm run dev            # http://localhost:5173

# 3b. Production
npm run build && npm start
```

**Windows** : double-clique simplement sur **`DEMARRER.bat`** (installe, construit, lance Ollama, le serveur et Edge).

> ⚠️ N'utilise pas `qwen3:4b` (version « Thinking ») : elle réfléchit ~30 s avant chaque réponse.

---

## 🧠 Évaluation

| Épreuve | Mesure | Seuil |
|---|---|---|
| Écoute & répète | Transcription du navigateur alignée mot à mot (LCS) avec la phrase cible ; contractions, nombres, heures (« 1:00 » = « one o'clock »), ordinaux et homophones (to/two/too…) normalisés ; bonus de confiance. | 85 / phrase |
| Compréhension orale | IA : extrait l'information donnée et l'information attendue, puis les compare (mauvaise information = échec, même en bon anglais). | 70 / question |
| Réponds à l'oral | IA : grammaire 40 %, pertinence 30 %, phrase complète 30 %. **Si un seul mot doit être corrigé → échec.** < 3 mots ou hors sujet → refusé. | 70 / question |
| Parle longtemps | IA : grammaire 50 %, vocabulaire 25 %, fluidité 25 % ; −7 points par erreur ; minimum de mots. | 75 au 2ᵉ essai |
| Mission | Moyenne des corrections détaillées de chaque échange. | 75 de moyenne |
| Correction orale | Répéter la phrase corrigée (3 essais). | 80 |

> Le navigateur ne mesure pas l'accent phonème par phonème : il vérifie que **ta phrase est comprise** par une reconnaissance entraînée sur des anglophones (intelligibilité). Les mots non reconnus sont ceux à travailler.

Tous les seuils se règlent dans [`src/lib/config.ts`](src/lib/config.ts).

---

## 🏗️ Architecture

App Router + TypeScript strict. **Chaque fichier fait 100 lignes maximum** (vérifié par `npm run check:lines`).

```
src/
├── app/                         # Routes (Server Components fins)
│   ├── layout.tsx               # Polices + barre latérale
│   ├── page.tsx                 # Parcours
│   ├── lesson/[level]/[step]/   # 40 pages statiques (generateStaticParams)
│   ├── free/ notebook/ errors/ settings/
│   └── api/
│       ├── chat/route.ts        # Proxy streaming → Ollama (GPU)
│       └── models/route.ts      # Détection du modèle + préchargement GPU
├── data/                        # 📚 Contenu
│   ├── levels/l1.ts … l8.ts     # Un fichier par niveau
│   ├── levels/index.ts          # LEVELS + STEPS
│   ├── listening/l1.ts … l8.ts  # Textes d'écoute multi-accents + questions
│   ├── speaking/index.ts        # Sujets de prise de parole longue
│   └── scenarios.ts             # Conversation libre
├── lib/                         # Logique pure (sans React)
│   ├── config.ts                # ⚙️ Modèle, GPU, seuils
│   ├── ai/                      # client.ts, prompts/, tasks/, ollama-server.ts
│   ├── scoring/                 # normalize, numbers, equivalents, pronunciation, diff
│   ├── errors/bank.ts           # Banque d'erreurs (répétition espacée)
│   ├── speech/                  # tts, stt (mode long), stopPhrase, accents, useListening
│   ├── store/                   # Store persistant + useStore (useSyncExternalStore)
│   ├── progress/                # rules.ts (verrous, étoiles, XP), stats.ts
│   └── vocab.ts                 # Répétition espacée
├── components/                  # UI (Client Components)
│   ├── shell/                   # Sidebar, StatusBadge, MiniStats, TranslateDialog
│   ├── path/                    # PathView, LevelCard
│   ├── lesson/                  # LessonView, StepTabs, Repeat/Answer/MissionStep…
│   ├── conversation/            # useConversation, turn, coachReply, Composer…
│   ├── drill/                   # Drill + useDrill (écoute & répète)
│   ├── listen/                  # Compréhension orale (lecteur multi-voix, questions)
│   ├── speak/                   # Parle longtemps (tours, corrections, répétitions)
│   ├── errors/                  # Mes erreurs + ReviewGate
│   ├── feedback/                # PanelContext, CorrectionsPanel, FeedbackCard
│   ├── free/ notebook/ settings/
│   └── ui/                      # Icon, ScoreRing, DiffText
└── styles/                      # CSS par zone (≤ 100 lignes chacun)
```

### Flux d'un échange

```
micro → transcription → /api/chat (contrôle rapide, ~2-3 s)
          ├─ faute ? → correction À L'ORAL → l'apprenant répète (≥ 80) → continue
          └─ réponse du coach (streamée + prononcée phrase par phrase)
                  └─ en arrière-plan : correction détaillée en français → panneau de droite
```

### Scripts

| Commande | Rôle |
|---|---|
| `npm run dev` | Développement sur http://localhost:5173 |
| `npm run build` / `npm start` | Production |
| `npm run check` | TypeScript + ESLint + limite de 100 lignes |
| `npm run check:lines` | Vérifie qu'aucun fichier ne dépasse 100 lignes |

### Personnaliser

- **Ajouter un niveau** : crée `src/data/levels/l9.ts` (même forme que les autres) et ajoute-le dans `levels/index.ts`.
- **Changer de modèle** : ajoute-le en tête de `models` dans `src/lib/config.ts`, puis `ollama pull <modèle>`.
- **Autre machine pour Ollama** : variable d'environnement `OLLAMA_URL`.

---

## 🔒 Vie privée

L'IA tourne **entièrement en local** (Ollama). La reconnaissance vocale et les voix « Natural » viennent du navigateur (services Microsoft / Google). La progression reste dans le **localStorage** de ton navigateur.

## 🛠️ Dépannage

| Problème | Solution |
|---|---|
| « Ollama ne répond pas » | Ouvre l'application Ollama puis recharge. |
| Réponses lentes | `ollama ps` doit afficher `100% GPU`. |
| Micro inactif | Edge ou Chrome, sur `http://localhost`, micro autorisé. |
| Voix robotique | Réglages → choisis une voix ★ Natural (Edge). |

## 📄 Licence

Projet personnel — ajoute une licence (ex. MIT) avant de le rendre public.
"# speakup-ai-english-coach" 
