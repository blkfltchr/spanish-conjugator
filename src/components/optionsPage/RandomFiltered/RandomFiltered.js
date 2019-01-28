import React from 'react';

import BeginnerRandom from '../../Random/BeginnerRandom';
import OptionsButton from '../../home/Options/OptionsButton';
import ConversationButton from '../../home/Options/OptionsButton';

const RandomFiltered = (props) => {
    console.log('randomFiltered', props)
    console.log('NumberPerson', props.NumberPerson)
    return ( 
        <div>
            {/* <BeginnerRandom data={ props.data } /> */}
            {/* <OptionsButton /> */}
            {/* <ConversationButton /> */}
            <h1>HEYYYYY</h1>
        </div>
     );
  }
 
export default RandomFiltered;
