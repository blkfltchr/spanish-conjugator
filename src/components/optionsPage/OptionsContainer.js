import React from 'react';
import VerbFrequency from './VerbFrequency';
import VerbTenses from './VerbTenses';
import NumberPerson from './NumberPerson';
import RandomButton from '../home/RandomButton'
import ConversationButton from '../home/ConversationButton'

const OptionsContainer = props => {
  return (
    <div>
      <form onSubmit={props.filterData}>
        <button type="submit">Start</button>
      </form>
      <div>
        <h3>Verb Frequency</h3>
        <VerbFrequency />
      </div>
      <div>
        <h3>Verb Tenses</h3>
        <VerbTenses setTenses={props.setTenses} />
      </div>
      <div>
        <h3>Number and Person</h3>
        <NumberPerson />
      </div>
      <RandomButton />
      <ConversationButton />
    </div>
  );
};

export default OptionsContainer;
