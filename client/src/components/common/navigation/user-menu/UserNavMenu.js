import React from 'react';
import {Link} from 'react-router-dom';
import './user-nav.css';

function UserNavMenu(props){
    const user = props.user;
    const setToggled = props.setToggled;

    const handleClose = ()=>{
        setToggled(false)
    };
    

    return(
        <div className='user-menu-container'>
            <div className='menu-wrapper'>
                <div className='close-menu'>
                    <p onClick={handleClose}>X</p>
                </div>
                <div className='menu-heading'>
                    <p>Welcome</p>
                    <p>{user.user.username}</p>
                </div>
                <div className='menu-items'>
                    <div className='menu-card'>
                        <img src=''/>
                        <p>My Recipes</p>
                    </div>
                    <div className='menu-card'>
                        <img src=''/>
                        <p>Favorites</p>
                    </div>
                    <Link to='/public-recipes'>
                        <div className='menu-card'>
                            <img src=''/>
                            <p>Public Recipes</p>
                        </div>
                    </Link>
                    <div className='menu-card'>
                        <img src=''/>
                        <p>Logout</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default UserNavMenu;