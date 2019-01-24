import React from 'react';
import { Link } from 'react-router-dom'

const AdvancedButton = () => {
    return ( 
        <div>
            <Link to='/beginner' style={{color: 'grey', textDecoration: 'none'}}>
                <div className='box'>
                    <b style={{color: 'blue', textDecoration: 'underline'}}>Advanced</b>
                    <p>You are very comfortable with the language, you enjoy talking about complex subjects, and you want a real challenge.</p>
                </div>
            </Link>
        </div>
     );
}
 
export default AdvancedButton;