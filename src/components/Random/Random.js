import React from 'react';

import BeginnerRandom from './BeginnerRandom';
import OptionsButton from '../home/Options/OptionsButton';
import ConversationButton from '../home/Options/ConversationButton';

const Random = (props) => {
    return ( 
      <div>
        <h3>Based on the verb, tense, and form...<br /> submit your answer below.</h3>
        <BeginnerRandom data={props.data} />
        <OptionsButton />
        <ConversationButton />
      </div>
     );
  }
 
export default Random;
