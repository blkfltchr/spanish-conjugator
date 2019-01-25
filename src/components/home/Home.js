import React from 'react';
import BeginnerButton from './Levels/BeginnerButton'
import IntermediateButton from './Levels/IntermediateButton'
import AdvancedButton from './Levels/AdvancedButton'


const Home = () => {
    return ( 
        <div>
            <p><b>What level of Spanish speaker are you?</b></p>
            <BeginnerButton />
            <IntermediateButton />
            <AdvancedButton />
        </div>
     );
}
 
export default Home;