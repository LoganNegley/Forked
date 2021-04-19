import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import DashboardFaves from './DashboardFaves';
import DashboardPublic from './DashboardPublic';
import DashboardMyRecipes from './DashboardMyRecipes';
import './user-dashboard.css';

function UserDashboard(props){
    console.log(props.user)



    return(
        <div className='dashboard-container'>
            <div className='dashboard-heading'>
                <h1>User's</h1>
                <p>Dashboard</p>
            </div>
            <div className='dashboard-heading-btn'>
                <button>Shopping Cart</button>
                <button>Add A Recipe</button>
            </div>
            <div className='sections'>
                <DashboardFaves/>
                <DashboardPublic/>
                <DashboardMyRecipes/>
            </div>
        </div>
    )
};

export default UserDashboard;