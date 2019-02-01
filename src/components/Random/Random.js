import React from 'react';

import BeginnerRandom from './BeginnerRandom';
import OptionsButton from '../home/Options/OptionsButton';
import ConversationButton from '../home/Options/ConversationButton';

const Random = (props) => {
    return ( 
        <div>
            <BeginnerRandom data={ props.data } />
            <OptionsButton />
            <ConversationButton />
        </div>
     );
  }
 
export default Random;
