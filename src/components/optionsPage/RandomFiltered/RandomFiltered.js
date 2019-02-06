import React from 'react';
import FilteredBegRandom from './FilteredBegRandom';

const RandomFiltered = props => {
  return (
    <div>
      <FilteredBegRandom data={props.location.state.data} />
    </div>
  );
};

export default RandomFiltered;
