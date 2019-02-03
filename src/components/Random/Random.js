import React from 'react';

import BeginnerRandom from './BeginnerRandom';
import OptionsButton from '../home/Options/OptionsButton';

const Random = (props) => {
    return ( 
      <div>
        <BeginnerRandom data={props.data} />
        <OptionsButton />
      </div>
     );
  }
 
export default Random;
