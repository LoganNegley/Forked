import React, {useState} from 'react';
import './navbar.css';


function Navbar(){
    const [toggled, setToggled] = useState(false)

    const toggleMenu = ()=>{
        console.log('button clicked')
        if(toggled === false){
            setToggled(true)
        }else{
            setToggled(false)
        }
            
    };
    console.log(toggled)


    return (
        <div className='navbar-container'>
            <button 
            className='button' 
            onClick={toggleMenu}>
                <img className='burger-menu-icon' src='images/menuIcon.png' alt='burger-menu-icon'
                />
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

