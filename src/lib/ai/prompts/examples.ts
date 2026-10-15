/** Language-specific examples injected into the prompts (a small model copies their shape). */
import { lang } from "@/lib/course/lang";

const EN = {
  quickError: `learner "Yesterday I go to the market" -> {"has_error":true,"corrected":"Yesterday I went to the market.","fix_en":"We say went, not go, because it happened yesterday."}`,
  quickOk: `learner "I really like football" -> {"has_error":false,"corrected":"I really like football.","fix_en":""}`,
  answer: `question "What did you do yesterday?", answer "yesterday I go to work" -> {"score":55,"relevant":true,"corrected":"Yesterday I went to work.","feedback_fr":"Bonne idée, mais il faut le prétérit : go devient went.","fix_en":"Say I went, not I go, because it was yesterday."}`,
  feedbackSentence: "He go to school every days",
  feedback: `{"corrected":"He goes to school every day.","natural":"He goes to school every day.","mistakes":[{"wrong":"go","right":"goes","type":"grammaire","explication":"Au présent simple, avec he/she/it, le verbe prend un -s : he goes."},{"wrong":"every days","right":"every day","type":"pluriel","explication":"Après « every », le nom reste au singulier : every day."}],"is_correct":false,"vocab":{"word":"commute","meaning_fr":"faire le trajet quotidien","example":"He commutes to school by bus."},"tip_fr":"Pense au -s des verbes avec he, she et it au présent.","score":65}`,
  listenWrong: `question "How does she go to work?", expected "She takes the bus.", answer "she goes to work by car" -> {"learner_fact":"by car","expected_fact":"by bus","same_fact":false,"understood":false,"score":30,"feedback_fr":"Ce n'est pas le bon moyen de transport. Réécoute la fin du passage.","corrected":"She takes the bus to work."}`,
  listenRight: `question "What time does she get up?", expected "At half past five.", answer "she get up at five thirty" -> {"learner_fact":"five thirty","expected_fact":"half past five","same_fact":true,"understood":true,"score":85,"feedback_fr":"Bonne information ! Attention : she gets, avec un -s.","corrected":"She gets up at half past five."}`,
  pieceError: `"and I have 25 years old" -> {"has_error":true,"corrected":"and I am 25 years old","explication":"Pour l'âge on utilise be : I am 25 years old."}`,
  pieceOk: `"then I live in Paris with my wife" -> {"has_error":false,"corrected":"then I live in Paris with my wife","explication":""}`,
  traps: "",
  rules: "présent simple : -s avec he / she / it (he works) ; hier / moment passé terminé → prétérit (I went) ; expérience → present perfect (I have been) ; âge → be (I am 25) ; articles a / an / the ; prépositions (in, on, at) ; pluriel des noms ; ordre des mots (adjectif avant le nom).",
  explain: `said "they works in a bank" / correct "they work in a bank" -> {"explication":"Avec they, le verbe au présent ne prend pas de -s : they work."}`,
  fix: `"and I have 25 years old" -> {"fixed":"and I am 25 years old"}
"she go to work by bus every days" -> {"fixed":"she goes to work by bus every day"}
"then I live in Paris with my wife" -> {"fixed":"then I live in Paris with my wife"}`,
};

const ES: typeof EN = {
  quickError: `learner "ayer yo como en un restaurante" -> {"has_error":true,"corrected":"Ayer comí en un restaurante.","fix_en":"Decimos comí, no como, porque fue ayer."}`,
  quickOk: `learner "me gusta mucho el fútbol" -> {"has_error":false,"corrected":"Me gusta mucho el fútbol.","fix_en":""}`,
  answer: `question "¿Cuántos años tienes?", answer "yo soy 25 años" -> {"score":50,"relevant":true,"corrected":"Tengo 25 años.","feedback_fr":"Bonne idée, mais pour l'âge on utilise tener : tengo 25 años.","fix_en":"Para la edad decimos tengo, no soy."}`,
  feedbackSentence: "me gusta los libros y la museo es grande",
  feedback: `{"corrected":"Me gustan los libros y el museo es grande.","natural":"Me encantan los libros y el museo es enorme.","mistakes":[{"wrong":"me gusta los libros","right":"me gustan los libros","type":"grammaire","explication":"Gustar s'accorde avec ce qui plaît : les livres (pluriel) → gustan."},{"wrong":"la museo","right":"el museo","type":"article","explication":"Museo est masculin : el museo."}],"is_correct":false,"vocab":{"word":"la biblioteca","meaning_fr":"la bibliothèque","example":"Voy a la biblioteca los sábados."},"tip_fr":"Vérifie le genre des noms et l'accord de gustar.","score":60}`,
  listenWrong: `question "¿Cómo va a trabajar?", expected "En autobús.", answer "va a trabajar en coche" -> {"learner_fact":"en coche","expected_fact":"en autobús","same_fact":false,"understood":false,"score":30,"feedback_fr":"Ce n'est pas le bon moyen de transport. Réécoute la fin du passage.","corrected":"Va a trabajar en autobús."}`,
  listenRight: `question "¿A qué hora se levanta?", expected "A las cinco y media.", answer "se levanta a las cinco y treinta" -> {"learner_fact":"cinco y treinta","expected_fact":"cinco y media","same_fact":true,"understood":true,"score":85,"feedback_fr":"Bonne information ! On dit plutôt « y media » pour la demie.","corrected":"Se levanta a las cinco y media."}`,
  pieceError: `"y yo soy 25 años" -> {"has_error":true,"corrected":"y yo tengo 25 años","explication":"Pour l'âge, on utilise tener : tengo 25 años."}
"me gusta mucho las películas" -> {"has_error":true,"corrected":"me gustan mucho las películas","explication":"Gustar s'accorde avec ce qui plaît : pluriel, donc gustan."}`,
  pieceOk: `"luego vivo en Madrid con mi mujer" -> {"has_error":false,"corrected":"luego vivo en Madrid con mi mujer","explication":""}`,
  traps: "Typical beginner traps: gender and number agreement (el problema, la mano), ser vs estar (location = estar), gustar agrees with the thing liked, age with tener, verb endings for each person.",
  rules: "localisation (où se trouve quelque chose) → estar (está en) ; identité, origine, métier → ser ; âge → tener ; gustar s'accorde avec ce qui plaît ; genre et accord des articles (el museo, la casa) ; terminaison du verbe selon la personne (comemos, comen) ; hier / moment passé terminé → passé simple (ayer fui), expérience → pretérito perfecto (he ido).",
  explain: `said "ellos come en casa" / correct "ellos comen en casa" -> {"explication":"Avec ellos, le verbe en -er se termine par -en au présent : comen."}`,
  fix: `"yo soy 25 años" -> {"fixed":"yo tengo 25 años"}
"me gusta mucho las películas" -> {"fixed":"me gustan mucho las películas"}
"Lima es en Perú y nosotros comen arroz" -> {"fixed":"Lima está en Perú y nosotros comemos arroz"}
"vivo en Madrid con mi mujer" -> {"fixed":"vivo en Madrid con mi mujer"}`,
};

export const ex = () => (lang().id === "es" ? ES : EN);
