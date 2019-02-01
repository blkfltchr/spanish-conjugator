import React from 'react';
import { Link } from 'react-router-dom'

const RandomButton = () => {
    return ( 
        <div>
            <Link to='/options' style={ { color: 'grey', textDecoration: 'none' } }>
                <div className='box'>
                    <b style={ { color: 'blue', textDecoration: 'underline' } }>Choose the verbs you want</b>
                    <p>Select your verbs, tenses, and forms</p>
                </div>
            </Link>
        </div>
     );
}
 
export default RandomButton;