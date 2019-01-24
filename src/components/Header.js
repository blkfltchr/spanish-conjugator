import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return ( 
        <div>
            <h2>Bienvenidos, a la <Link to="/" className='logo'>Spanish Conjugator</Link></h2>
        </div>
     );
}
 
export default Header;