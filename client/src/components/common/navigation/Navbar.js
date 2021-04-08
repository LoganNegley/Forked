import React from 'react';
import './navbar.css';


function Navbar(){
    return (
        <div className='navbar-container'>
            <button>
                <img className='burger-menu-icon' src='images/menu-icon.png' alt='burger-menu-icon'/>
            </button>
            <h1 className='logo'>FORKED</h1>
            <div className='nav-links'>
                <ul>
                    <li>Home</li>
                    <li>Recipes</li>
                    <li>Sign Up</li>
                    <li>Login</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;