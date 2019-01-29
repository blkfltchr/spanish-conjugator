import React from 'react';
import FilteredBegRandom from './FilteredBegRandom';

import BeginnerRandom from '../../Random/BeginnerRandom';
import OptionsButton from '../../home/Options/OptionsButton';
import ConversationButton from '../../home/Options/OptionsButton';

const RandomFiltered = (props) => {
    console.log('randomFiltered', props)
    console.log('Data from random filtered', props.location.state.data)
    return ( 
        <div>
            {/* <BeginnerRandom data={ props.data } /> */}
            {/* <OptionsButton /> */}
            {/* <ConversationButton /> */}
            <FilteredBegRandom data={props.location.state.data} />
            <h1>HEYYYYY</h1>
        </div>
     );
  }
 
export default RandomFiltered;
