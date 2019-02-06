import React from 'react';
import FilteredBegRandom from './FilteredBegRandom';

import BeginnerRandom from '../../Random/BeginnerRandom';
import OptionsButton from '../../home/Options/OptionsButton';
import ConversationButton from '../../home/Options/OptionsButton';

const RandomFiltered = props => {
  console.log('randomFiltered', props);
  console.log('DATA from random filtered', props.location.state.data);
  return (
    <div>
      <FilteredBegRandom data={props.location.state.data} />
    </div>
  );
};

export default RandomFiltered;
