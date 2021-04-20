import React,{useState, useEffect} from 'react';
import axios from 'axios';
import {Link, useParams} from 'react-router-dom';
import DashboardFaves from './DashboardFaves';
import DashboardPublic from './DashboardPublic';
import DashboardMyRecipes from './DashboardMyRecipes';
import './user-dashboard.css';

function UserDashboard(props){
    const loggedUser = props.user.user;
    console.log(loggedUser)
    const [favorite, setFavorite] = useState('');

    useEffect(()=>{
        axios.get(`http://localhost:5000/favorites/user/${loggedUser.user_id}`)
        .then(res =>{
            setFavorite(res.data);
        })
        .catch(error =>{
            console.log(error)
        })
    },[])


    return(
        <div className='dashboard-container'>
            <div className='dashboard-heading'>
                <h1>{loggedUser.username}'s</h1>
                <p>Dashboard</p>
            </div>
            <div className='dashboard-heading-btn'>
                <button>Shopping Cart</button>
                <button>Add A Recipe</button>
            </div>
            <div className='main-sections'>
                <DashboardFaves favorites={favorite}/>
            </div>
        </div>
    )
};

export default UserDashboard;