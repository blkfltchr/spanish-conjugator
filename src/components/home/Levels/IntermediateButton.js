import React from 'react';
import { Link } from 'react-router-dom'

const IntermediateButton = () => {
    return ( 
        <div>
            <Link to='/beginner' style={{color: 'grey', textDecoration: 'none'}}>
                <div className='box'>
                    <b style={{color: 'blue', textDecoration: 'underline'}}>Intermediate</b>
                    <p>You've been speaking Spanish for a while, feel comfortable in conversation, but want to improve to the next level.</p>
                </div>
            </Link>
        </div>
     );
}
 
export default IntermediateButton;