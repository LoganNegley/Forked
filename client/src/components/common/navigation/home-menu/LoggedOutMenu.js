import React from 'react';
import './loggedOut.css';

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
                        <li className='menu-link'>Home</li>
                        <li className='menu-link'>Recipes</li>
                        <li className='menu-link'>Sign Up</li>
                        <li className='menu-link'>Login</li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default LoggedOutMenu;