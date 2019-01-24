import React from 'react';
import { Link } from 'react-router-dom'

const RandomButton = () => {
    return ( 
        <div>
            <Link to='/random' style={{color: 'grey', textDecoration: 'none'}}>
                <div className='box'>
                    <b style={{color: 'blue', textDecoration: 'underline'}}>Practice with random verbs</b>
                    <p>Translate random verbs, tenses, and forms</p>
                </div>
            </Link>
        </div>
     );
}
 
export default RandomButton;