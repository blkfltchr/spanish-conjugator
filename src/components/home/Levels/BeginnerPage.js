import React from 'react';
import RandomButton from '../Options/RandomButton'
import OptionsButton from '../Options/OptionsButton'
import ConversationButton from '../Options/ConversationButton'


const BeginnerPage = () => {
    return ( 
        <div>
            <p><b>What would you like to do?</b></p>
            <RandomButton />
            <OptionsButton />
            <ConversationButton />
        </div>
     );
}
 
export default BeginnerPage;