import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import './user-nav.css';
import axios from 'axios';

function UserNavMenu(props){
    const user = props.user;
    const setToggled = props.setToggled;
    const history = useHistory();

    const handleClose = ()=>{
        setToggled(false)
    };

    const closeMenu = ()=>{
        props.setToggled(false);
    };

    const handleLogout =()=>{
        axios.get('http://localhost:5000/auth/logout')
        .then(res =>{
            history.push('/login')
            setToggled(false)
        })
        .catch(error =>{
            console.log(error)
        })
    }
    

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
                    <Link to='/public-recipes' onClick={closeMenu}>
                        <div className='menu-card'>
                            <img src=''/>
                            <p>Public Recipes</p>
                        </div>
                    </Link>
                    <div className='menu-card' onClick={handleLogout}>
                        <img src=''/>
                        <p>Logout</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default UserNavMenu;