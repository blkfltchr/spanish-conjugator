import React from 'react';
import VerbFrequency from './VerbFrequency';
import VerbTenses from './VerbTenses';
import NumberPerson from './NumberPerson';

const OptionsContainer = () => {
  return (
    <div>
      <div>
        <h3>Verb Frequency</h3>
        <VerbFrequency />
      </div>
      <div>
        <h3>Verb Tenses</h3>
        <VerbTenses />
      </div>
      <div>
        <h3>Number and Person</h3>
        <NumberPerson />
      </div>
      <input type="submit" />
    </div>
  );
};

export default OptionsContainer;
