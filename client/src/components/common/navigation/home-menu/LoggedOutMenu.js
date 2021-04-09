import React from 'react';
import './loggedOut.css';
import {Link} from 'react-router-dom';

function LoggedOutMenu(props){

console.log(props)

    const closeMenu = ()=>{
        props.setToggled(false);
    };

    return(
        <div id='menu-container'>
            <div id='half-circle'>
                <div onClick= {closeMenu} className='close-out'>X</div>
                <div className='link-items'>
                    <ul>
                        <Link to='/' className='menu-link'>Home</Link>
                        <li className='menu-link'>Recipes</li>
                        <Link to='/sign-up' className='menu-link'>Sign Up</Link>
                        <li className='menu-link'>Login</li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default LoggedOutMenu;