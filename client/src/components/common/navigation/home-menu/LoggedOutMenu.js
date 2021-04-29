import React from 'react';
import './loggedOut.css';
import {Link} from 'react-router-dom';

function LoggedOutMenu(props){

    const closeMenu = ()=>{
        props.setToggled(false);
    };

    return(
        <div id='menu-container'>
            <div id='half-circle'>
                <div onClick= {closeMenu} className='close-out'>X</div>
                <div className='link-items'>
                    <ul>
                        <Link to='/' onClick={closeMenu} className='menu-link'>Home</Link>
                        {/* <Link to='/public-recipes' onClick={closeMenu} className='menu-link'>Recipes</Link> */}
                        <Link to='/sign-up' onClick={closeMenu} className='menu-link'>Sign Up</Link>
                        <Link to='/login' onClick={closeMenu} className='menu-link'>Login</Link>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default LoggedOutMenu;