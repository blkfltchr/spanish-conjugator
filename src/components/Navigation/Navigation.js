import React from 'react';
import { NavLink } from 'react-router-dom';

import './navigation.css';

const Navigation = props => {
    return (
        <div className='top-bar'>
            <h1>Spanish Conjugator</h1>
            <div className='default-menu'>
                <nav>
                    <a href='#'>Log In</a>
                    <a href='#'>Sign Up</a>
                </nav>
            </div>
            <div className='user-menu'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/learn'>Go Learn</NavLink>
            </div>
        </div>

    )
}

export default Navigation;