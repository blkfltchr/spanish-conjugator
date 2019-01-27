import React from 'react';

const Text = props => {
  const randomVerb = props.data[Math.floor(Math.random() * props.data.length)];
  const number = Math.floor(Math.random() * 7); // conjugated verbs range from index 0-6 in the object
  const person = {
    form_1s: 'Singular, 1st person',
    form_2s: 'Singular, 2nd person',
    form_3s: 'Singular, 3rd person',
    form_1p: 'Plural, 1st person',
    form_2p: 'Plural, 2nd person',
    form_3p: 'Plural, 3rd person',
    gerund: 'Gerund'
  }; // another option would be to edit the database and replace the keys with the values in this object
  return (
    <div>
      <div>
        <p>Verb: {randomVerb.infinitive}</p>
        <p>Translation: {randomVerb.infinitive_english}</p>
        <p>
          Tense: {randomVerb.tense} ({randomVerb.tense_english})
        </p>
        <p>Person: {Object.values(person)[number]}</p>
      </div>
    </div>
  );
};

export default Text;