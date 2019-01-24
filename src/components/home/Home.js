import React from 'react';
import RandomButton from './RandomButton'
import OptionsButton from './OptionsButton'
import ConversationButton from './ConversationButton'


const Home = () => {
    return ( 
        <div>
            <p><b>What would you like to do?</b></p>
            <RandomButton />
            <OptionsButton />
            <ConversationButton />
        </div>
     );
}
 
export default Home;