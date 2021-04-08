import React from 'react';

function LoggedOutMenu(){
    return(
        <div id='menu-container' display='visible'>
            <div id='half-circle'>
                <div className='link-items'>
                    <ul>
                        <li>Home</li>
                        <li>Recipes</li>
                        <li>Sign Up</li>
                        <li>Login</li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default LoggedOutMenu;