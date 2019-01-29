import React from 'react';
import { Link } from 'react-router-dom'

const ConversationButton = () => {
    return ( 
        <div>
            <Link to='/conversation/one' style={{color: 'grey', textDecoration: 'none'}}>
                <div className='box'>
                    <b style={{color: 'blue', textDecoration: 'underline'}}>Start a simple conversation</b>
                    <p>What's your name? Where are you from?</p>
                </div>
            </Link>
        </div>
     );
}
 
export default ConversationButton;