import React,{useState, useEffect} from 'react';
import axios from 'axios';
import {Link, useParams} from 'react-router-dom';
import DashboardFaves from './DashboardFaves';
import DashboardPublic from './DashboardPublic';
import DashboardMyRecipes from './DashboardMyRecipes';
import './user-dashboard.css';

function UserDashboard(props){
    const loggedUser = props.user.user;

    return(
        <div className='dashboard-container'>
            <div className='dashboard-heading'>
                <h1>{loggedUser.username}'s</h1>
                <p>Dashboard</p>
            </div>
            <div className='dashboard-heading-btn'>
                {/* <button>Shopping Cart</button> */} 
                <Link to={`/user/${loggedUser.user_id}/recipe/add`}>
                    <button>Add A Recipe</button>
                </Link>
            </div>
            <div className='main-sections'>
                <DashboardFaves loggedUser={loggedUser}/>
                <DashboardPublic/>
                <DashboardMyRecipes user={loggedUser}/>
            </div>
        </div>
    )
};

export default UserDashboard;