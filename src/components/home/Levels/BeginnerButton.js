import React from 'react';
import { Link } from 'react-router-dom'

const BeginnerButton = () => {
    return ( 
        <div>
            <Link to='/beginner' style={{color: 'grey', textDecoration: 'none'}}>
                <div className='box'>
                    <b style={{color: 'blue', textDecoration: 'underline'}}>Beginner</b>
                    <p>You've just started learning Spanish and you want to build a strong foundation by practicing basic words and phrases.</p>
                </div>
            </Link>
        </div>
     );
}
 
export default BeginnerButton;