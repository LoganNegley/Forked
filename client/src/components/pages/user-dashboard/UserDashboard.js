import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

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
        </div>
    )
};

export default UserDashboard;