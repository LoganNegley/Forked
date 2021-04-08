import React, {useState} from 'react';
import './navbar.css';
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


function Navbar(){
    const [toggled, setToggled] = useState(false)

    const toggleMenu = ()=>{
        if(toggled === false){
            setToggled(true)
        }else{
            setToggled(false)
        }
    };


    return (
        <div className='navbar-container'>
            <button onClick={toggleMenu}>
            <FontAwesomeIcon className='burger-icon' icon={faBars}/>
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

