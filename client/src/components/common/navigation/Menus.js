import React from 'react';
import LoggedOutMenu from '../navigation/home-menu/LoggedOutMenu';
import UserNavMenu from '../navigation/user-menu/UserNavMenu';

function Menus(props){
    const setToggled = props.setToggled;
    const user = props.user;

    return(
        <div className='menu-container'>
            {!user ?
                <LoggedOutMenu setToggled={setToggled}/>
            : <UserNavMenu setToggled={setToggled} user={user}/>
            }
        </div>
    )
};

export default Menus;