import React from 'react';
import { Link } from 'react-router-dom'

const RandomButton = () => {
    return ( 
        <div>
            <Link to='/random' style={{color: 'grey', textDecoration: 'none'}}>
                <div className='box'>
                    <b style={{textDecoration: 'underline'}}>Practice with random verbs</b>
                    <p>Translate randoms verbs, tenses, and forms</p>
                </div>
            </Link>
        </div>
     );
}
 
export default RandomButton;