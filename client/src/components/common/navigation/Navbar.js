import React, {useState} from 'react';
import './navbar.css';
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import LoggedOutMenu from './home-menu/LoggedOutMenu';
import UserNavMenu from './user-menu/UserNavMenu';


function Navbar(props){
    const [toggled, setToggled] = useState(false)
    const user = props.user;

    const toggleMenu = ()=>{
        if(toggled === false){
            setToggled(true)
        }else{
            setToggled(false)
        }
    };

            //     {toggled
            //     ? if(user){
            //         return(<UserNavMenu/>)
            //     }else{
            //         return(<LoggedOutMenu setToggled={setToggled}/>)
            //         }
            //     :
            // <button onClick={toggleMenu}>
            // <FontAwesomeIcon className='burger-icon' icon={faBars}/>
            // </button>
            // }




    return (
        <div className='navbar-container'>
        {toggled ?
            !user ?
            <LoggedOutMenu setToggled={setToggled}/>
            : <UserNavMenu/>
            :
            <button onClick={toggleMenu}>
            <FontAwesomeIcon className='burger-icon' icon={faBars}/>
            </button>
        }
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

