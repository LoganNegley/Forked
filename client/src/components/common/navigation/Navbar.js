import React from 'react';
import './navbar.css';


function Navbar(){
    return (
        <div className='navbar-container'>
            <img 
            className='burger-menu-icon' src='images/menu-icon.png' alt='burger-menu-icon'
            />
            <h1 className='logo'>FORKED</h1>
        </div>
    );
};

export default Navbar;