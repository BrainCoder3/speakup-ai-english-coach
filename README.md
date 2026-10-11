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
| 🔒 **Progression verrouillée** | 3 épreuves par niveau, dans l'ordre. Le niveau suivant ne s'ouvre que si tout est validé (même en tapant l'URL). |
| 🎧 **Écoute & répète** | 8 phrases / niveau, **85/100** de prononciation sur **chaque** phrase. Mots ratés en rouge, clic = réécoute lente. |
| 🎤 **Réponds à l'oral** | 5 questions / niveau notées par l'IA. **La moindre faute de grammaire = à refaire.** |
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
| Écoute & répète | Transcription du navigateur alignée mot à mot (LCS) avec la phrase cible ; contractions et nombres normalisés ; bonus de confiance. | 85 / phrase |
| Réponds à l'oral | IA : grammaire 40 %, pertinence 30 %, phrase complète 30 %. **Si un seul mot doit être corrigé → échec.** < 3 mots ou hors sujet → refusé. | 70 / question |
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
│   ├── lesson/[level]/[step]/   # 24 pages statiques (generateStaticParams)
│   ├── free/ notebook/ settings/
│   └── api/
│       ├── chat/route.ts        # Proxy streaming → Ollama (GPU)
│       └── models/route.ts      # Détection du modèle + préchargement GPU
├── data/                        # 📚 Contenu
│   ├── levels/l1.ts … l8.ts     # Un fichier par niveau
│   ├── levels/index.ts          # LEVELS + STEPS
│   └── scenarios.ts             # Conversation libre
├── lib/                         # Logique pure (sans React)
│   ├── config.ts                # ⚙️ Modèle, GPU, seuils
│   ├── ai/                      # client.ts, prompts/, tasks/, ollama-server.ts
│   ├── scoring/                 # normalize, pronunciation, diff
│   ├── speech/                  # tts.ts, stt.ts, useListening.ts
│   ├── store/                   # Store persistant + useStore (useSyncExternalStore)
│   ├── progress/                # rules.ts (verrous, étoiles, XP), stats.ts
│   └── vocab.ts                 # Répétition espacée
├── components/                  # UI (Client Components)
│   ├── shell/                   # Sidebar, StatusBadge, MiniStats, TranslateDialog
│   ├── path/                    # PathView, LevelCard
│   ├── lesson/                  # LessonView, StepTabs, Repeat/Answer/MissionStep…
│   ├── conversation/            # useConversation, turn, coachReply, Composer…
│   ├── drill/                   # Drill + useDrill (écoute & répète)
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
