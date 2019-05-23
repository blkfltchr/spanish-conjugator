import { latamSpanish, spainSpanish } from '../NumPersonFilters';

const correr = [
  {
    infinitive: 'correr',
    infinitive_english: 'to run',
    mood: 'Indicativo',
    mood_english: 'Indicative',
    tense: 'Presente',
    tense_english: 'Present',
    verb_english: 'I run, am running',
    form_1s: 'corro',
    form_2s: 'corres',
    form_3s: 'corre',
    form_1p: 'corremos',
    form_2p: 'corréis',
    form_3p: 'corren',
    gerund: 'corriendo',
    gerund_english: 'running',
    pastparticiple: 'corrido',
    pastparticiple_english: 'run',
  },
];

test('returns all forms excluding vosotros', () => {
  const latam = latamSpanish(correr);
  expect(latam).toMatchSnapshot();
});

test('returns all forms including vosotros', () => {
  const spain = spainSpanish(correr);
  expect(spain).toMatchSnapshot();
});
