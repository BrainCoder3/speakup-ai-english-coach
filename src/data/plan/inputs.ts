/**
 * Free, real-world English to listen to every day (comprehensible input, 45-60 min).
 * Method each time: 1) listen without text, 2) listen with the transcript and note 5 expressions,
 * 3) listen again and shadow a 1-minute passage.
 */
export interface InputSource {
  name: string;
  url: string;
  level: string;
  what: string;
}

export const INPUTS: InputSource[] = [
  { name: "BBC Learning English — 6 Minute English", url: "https://www.bbc.co.uk/learningenglish/english/features/6-minute-english", level: "B1-B2", what: "2 épisodes de 6 min avec transcription : un sujet, du vocabulaire utile, deux présentateurs britanniques." },
  { name: "VOA Learning English", url: "https://learningenglish.voanews.com/", level: "B1", what: "Infos en anglais américain un peu ralenti, avec le texte : lis et écoute 3 articles." },
  { name: "BBC Learning English — The English We Speak", url: "https://www.bbc.co.uk/learningenglish/english/features/the-english-we-speak", level: "B2", what: "Expressions idiomatiques du quotidien en 3 minutes : fais-en 4 et réutilise-les à l'oral." },
  { name: "TED Talks", url: "https://www.ted.com/talks", level: "B2-C1", what: "Un talk de 10-15 min sur un sujet qui te plaît, avec sous-titres anglais puis sans." },
  { name: "Luke's English Podcast", url: "https://teacherluke.co.uk/", level: "B2-C1", what: "Un épisode (ou 30 min) : un prof britannique qui parle naturellement, beaucoup d'humour et d'expressions." },
  { name: "NPR — Up First", url: "https://www.npr.org/podcasts/510318/up-first", level: "C1", what: "Le journal américain du matin, vitesse native : écoute-le deux fois et résume-le à voix haute." },
  { name: "Rachel's English", url: "https://rachelsenglish.com/", level: "Tous", what: "Prononciation américaine : une vidéo sur l'intonation ou les sons réduits, puis imite-la." },
  { name: "BBC Sounds — Global News Podcast", url: "https://www.bbc.co.uk/sounds", level: "C1", what: "Infos internationales en anglais britannique natif : 20-30 min, note 10 mots nouveaux." },
];
