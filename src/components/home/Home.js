import React from 'react';
import RandomButton from './RandomButton'
import OptionsButton from './OptionsButton'

const Home = () => {
    return ( 
        <div>
            <p><b>What would you like to do?</b></p>
            <RandomButton />
            <OptionsButton />
        </div>
     );
}
 
export default Home;