# 🎙️ SpeakUp — Coach d'anglais et d'espagnol oral (Next.js, gratuit, 100 % local)

**SpeakUp** t'oblige à **parler anglais ou espagnol** et te fait progresser **niveau par niveau**.
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
| 🗣️ **Parle longtemps** | Monologue avec un **nombre de mots minimum** (40 → 170 selon le niveau) et **5 expressions imposées** par sujet (au moins 4 à placer, cochées en direct). L'IA découpe ton discours et **vérifie chaque phrase**, tu **répètes les phrases corrigées**, puis tu **reparles du sujet, 25 % plus longtemps**. Validé au 2ᵉ essai avec 75/100 **et seulement quand toutes tes erreurs sont corrigées**. |
| 🔁 **Mes erreurs** | Chaque phrase fausse est gardée et revient (1, 3, 7, 16, 35 jours) : tu vois ce que tu avais dit et tu dois dire la bonne version **de mémoire**. Au-delà de 10 erreurs en attente, les leçons attendent. |
| ⏹️ **« I'm done recording »** | Pour les réponses longues, le micro ne coupe pas pendant tes pauses : tu dis *« I'm done recording »* (ou *« I'm done »*, *« end of recording »*) pour terminer. |
| 🎯 **Mission** | Jeu de rôle (entretien, négociation, débat…) de 5 à 7 échanges, moyenne **75/100** exigée. |
| 🗣️ **Correction orale** | Faute en conversation → *« Almost! … Repeat after me: … »* → tu dois répéter avant de continuer. |
| 📝 **Corrections détaillées** | Diff (barré / ajouté), version native, explications **en français**, astuce, nouveau mot. |
| 💬 **Conversation libre** | 8 situations × 3 niveaux, avec correction orale. |
| 📒 **Carnet + flashcards** | Répétition espacée (boîtes de Leitner). |
| 📈 **Suivi & sauvegarde** | XP, série 🔥, moyennes, points faibles. Sauvegarde auto + export/import `.json`. |

---

## 🎮 Pour rester motivé

- **Rangs et XP** : 10 rangs (Curieux → Polyglotte). Tout rapporte des XP : réponses d'entraînement, expressions, textes, épreuves.
- **Série 🔥** : toute pratique du jour compte, même sans micro.
- **Objectif du jour** (page Parcours) : séance d'entraînement + thème d'expressions + Défi éclair = bonus de 30 XP.
- **⚡ Défi éclair** (Entraînement ciblé) : 60 secondes, un maximum de réponses tapées, combo jusqu'à 40 points par réponse, record sauvegardé.
- **🏆 Mes succès** : 16 succès à débloquer, annoncés par une notification ; confettis pour les records et les niveaux validés.

## 📚 Expressions utiles (écrit, sans micro)

112 expressions d'anglais courant en 14 thèmes (conversation, avis, politesse, connecteurs, travail, émotions,
argent, idiomes, verbes à particule, voyage, emails, conseils). Pour chaque thème :

1. **Lire et écouter** : sens en français, exemple avec l'expression surlignée, quand l'employer.
2. **Retaper de mémoire** : phrase à trou ; une erreur montre la correction, la règle, et il faut recopier la bonne version.
3. **Les utiliser** : un petit texte à écrire avec au moins 3 expressions ; le coach (Ollama) corrige chaque phrase.

Les thèmes étudiés rejoignent l'**entraînement ciblé** : les expressions ratées reviennent plus tôt (répétition espacée).

## 🤫 Mode silencieux (sans micro)

Réglages → « Mode silencieux ». Le parcours anglais se valide alors à l'écrit, avec les mêmes corrections :
compréhension orale (réponses tapées) → conversation au clavier → rédaction → mission. Les épreuves orales
(écoute & répète, parle longtemps) restent disponibles en option.

## 🧠 Entraînement ciblé (anglais et espagnol)

Ce qui fait progresser vite dans **tous les domaines**, appliqué aux langues :

| Les meilleurs… | font comme ça | Ici |
|---|---|---|
| 🎻 Musicien | répète la mesure qu'il rate (pratique délibérée, [Ericsson](https://www.jimdavies.org/summaries/ericsson1993.html)) | la séance cible d'abord tes questions ratées |
| 🩺 Étudiant en médecine | révise juste avant d'oublier | chaque question a sa propre révision espacée (1, 3, 7, 15, 30, 60 jours) |
| ♟️ Joueur d'échecs | résout des problèmes mélangés ([interleaving](https://retrievalpractice.org/archive/2017/interleaving)) | grammaire, vocabulaire et erreurs de semaines différentes mélangés |
| 🏃 Athlète | séries courtes, coach immédiat ([effet test](https://www.frontiersin.org/articles/10.3389/fpsyg.2014.00286/full)) | 20 questions tapées de mémoire, correction immédiate |
| ✈️ Pilote | répète la manœuvre de plus en plus vite | **fluidité 4/3/2** ([Nation](https://americanenglish.state.gov/files/ae/resource_files/63_3_p02-08.pdf)) : même histoire en 4, 3, 2 min, débit mesuré |

La page affiche aussi **tes points faibles** (taux d'erreur par thème) avec un lien vers la leçon à retravailler.

---

## 🚀 Anglais intensif en 30 jours (B1 → vers C1)

Un programme quotidien d'environ **3 h**, construit à partir de la recherche :

| Ce que dit la recherche | Ce que fait le programme |
|---|---|
| ~200 h guidées par niveau CECRL ; C1 ≈ 700-800 h depuis zéro ([Cambridge](https://support.cambridgeenglish.org/hc/en-gb/articles/202838506-Guided-learning-hours)) | ~90 h en 30 jours : objectif réaliste = un demi à un niveau ; C1 en un mois seulement depuis un B2 solide |
| La révision espacée bat la répétition massée ([revue](https://riset.unisma.ac.id/index.php/JREALL/article/view/25562)) | Mots du jour → carnet en répétition espacée ; erreurs → « Mes erreurs » |
| Le shadowing améliore fluidité et prononciation ([NJLTL](https://journal.uia.no/index.php/NJLTL/article/view/1139)) | 4 phrases par jour à répéter à vitesse native (85/100 exigé) |
| C1 ≈ 5 000-6 000 mots, liste Oxford 5000 ([Victoria Univ.](https://wgtn.ac.nz/lals/resources/paul-nations-resources/vocabulary-lists/vocabulary-cefr-and-word-family-size/vocabulary-and-the-cefr-docx)) | 360 expressions C1 (collocations, phrasal verbs, idiomes) écrites de mémoire |
| Input quotidien + production | 45 min d'écoute réelle (BBC, TED, NPR, podcasts) + parole et écriture corrigées chaque jour |

**Chaque jour, 7 tâches** : 🔁 révision espacée · 📚 grammaire (explication en français + 8 exercices tapés) · 🔤 12 expressions · 🎧 shadowing · 🗣️ parler 2-4 min avec expressions imposées (correction phrase par phrase) · 📻 écoute authentique guidée · ✍️ écriture corrigée. Les 5 tâches ★ valident la journée et débloquent la suivante.

**4 semaines** : fondations (temps, « depuis », articles, pièges des francophones) → aisance B2 (futur, conditionnels, modaux, -ing/to, relatives) → structures complexes (conditionnel 3, passif, discours indirect, déduction, wish, connecteurs) → C1 (inversion, phrases clivées, phrasal verbs, collocations, nuance, propositions participiales, présentation). **Test de niveau** au début et **test final** à la fin (estimation indicative, pas une certification).

---

## 🇪🇸 Cours d'espagnol — programme *Aula Internacional Plus 1* (A1)

Le cours d'espagnol suit **unité par unité** le programme du manuel *Aula Internacional Plus 1* (Difusión) : mêmes objectifs, même grammaire, même vocabulaire, même phonétique. Les phrases, dialogues et exercices sont **originaux** (le texte du livre n'est pas reproduit) : il est conseillé d'avoir le livre à côté, chaque unité indique sa page.

| Unité | Thème | Grammaire principale |
|---|---|---|
| 0 · En el aula | Se présenter, la classe | llamarse, alphabet, nombres 1-10 |
| 1 · Nosotros y nosotras | Données personnelles | ser, tener, llamarse, genre des nationalités / métiers, nombres 0-100 |
| 2 · Quiero aprender español | Motivations, loisirs | articles, présent régulier, hacer, por / para / porque, querer |
| 3 · ¿Dónde está Santiago? | Pays, climat | hay / estar / ser, superlatif, muy / mucho, qué / cuál / cuántos |
| 4 · ¿Cuál prefieres? | Achats, vêtements | démonstratifs, tener que, ir, preferir, nombres > 100 |
| 5 · Tus amigos son mis amigos | Famille, caractère, goûts | gustar, también / tampoco, possessifs, accents diacritiques |
| 6 · Día a día | Habitudes, heure | verbes pronominaux et irréguliers (o>ue, e>ie, e>i, -go), fréquence |
| 7 · ¡A comer! | Restaurant, cuisine | poner, traer, lo / la / los / las, de / con |
| 8 · El barrio ideal | Quartier, itinéraire | quantificateurs (ningún, algún…), localisation, lo que más me gusta |
| 9 · ¿Sabes conducir? | Expériences, compétences | pretérito perfecto, participes, saber / poder |

Le cours d'espagnol est centré sur **la compréhension des règles et l'écrit sans faute**. Chaque unité a **5 épreuves obligatoires** :

| Épreuve | Contenu | Validation |
|---|---|---|
| 📖 Comprendre la leçon | Toute la grammaire expliquée en français (tableaux de conjugaison), fiches **« Quand utiliser quoi ? »** (ser / estar / hay, por / para, muy / mucho, qué / cuál, gusta / gustan, saber / poder…) avec les pièges classiques, vocabulaire, phonétique, culture, puis un quiz (129 questions au total) | 80 % au quiz |
| 🔤 Vocabulaire | Le mot est donné en français, tu l'écris en espagnol **avec l'article et les accents** (240 mots) | 80 % du premier coup |
| ✍️ Exercices | Phrases à trous : conjugaisons, articles, prépositions… avec la règle à chaque réponse (154 exercices) | 80 % du premier coup |
| 🔁 Traduction | Phrases françaises à écrire en espagnol ; une autre formulation correcte est acceptée (vérifiée par l'IA) | 75 % du premier coup |
| 📝 Rédaction | Petit texte avec expressions imposées, corrigé phrase par phrase ; tu recopies les corrections puis tu réécris le texte | 75/100 au 2ᵉ brouillon, 0 erreur restante |

Règles d'écriture : majuscules et ponctuation ne comptent pas, mais **chaque lettre et chaque accent compte** (un message précise quand seul l'accent manque). Après une erreur, il faut **recopier la bonne réponse** pour continuer, et la question revient en fin de série. Des boutons **á é í ó ú ü ñ ¿ ¡** sont sous chaque zone de saisie. Les erreurs de traduction et de rédaction vont dans « Mes erreurs », révisées **à l'écrit**.

Les épreuves orales (écoute & répète, compréhension orale avec 10 accents, réponses orales, parole longue, mission) restent disponibles en **facultatif**.

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
| Parle longtemps | Discours découpé en morceaux (pauses, ponctuation, début de proposition), chacun vérifié par l'IA ; précision 70 % + richesse/fluidité 30 % ; −7 points par erreur ; minimum de mots et d'expressions. | 75 au 2ᵉ essai, 0 erreur restante |
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
│   ├── speaking/a.ts, b.ts      # Sujets de parole longue + expressions imposées
│   └── scenarios.ts             # Conversation libre
├── lib/                         # Logique pure (sans React)
│   ├── config.ts                # ⚙️ Modèle, GPU, seuils
│   ├── ai/                      # client.ts, prompts/, tasks/, ollama-server.ts
│   ├── scoring/                 # normalize, numbers, equivalents, expressions, sentences, pronunciation, diff
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
