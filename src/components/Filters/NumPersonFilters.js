export function latamSpanish(data) {
  return data.map(verb => ({
    infinitive: verb.infinitive,
    infinitive_english: verb.infinitive_english,
    mood: verb.mood,
    mood_english: verb.mood_english,
    tense: verb.tense,
    tense_english: verb.tense_english,
    verb_english: verb.verb_english,
    form_1s: verb.form_1s,
    form_2s: verb.form_2s,
    form_3s: verb.form_3s,
    form_1p: verb.form_1p,
    form_3p: verb.form_3p,
    gerund: verb.gerund,
    gerund_english: verb.gerund_english,
    pastparticiple: verb.pastparticiple,
    pastparticiple_english: verb.pastparticiple_english
  }));
}

export function spainSpanish(data) {
  return data.map(verb => ({
    infinitive: verb.infinitive,
    infinitive_english: verb.infinitive_english,
    mood: verb.mood,
    mood_english: verb.mood_english,
    tense: verb.tense,
    tense_english: verb.tense_english,
    verb_english: verb.verb_english,
    form_1s: verb.form_1s,
    form_2s: verb.form_2s,
    form_3s: verb.form_3s,
    form_1p: verb.form_1p,
    form_2p: verb.form_2p,
    form_3p: verb.form_3p,
    gerund: verb.gerund,
    gerund_english: verb.gerund_english,
    pastparticiple: verb.pastparticiple,
    pastparticiple_english: verb.pastparticiple_english
  }));
}
