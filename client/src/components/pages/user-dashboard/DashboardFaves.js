import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Carousel from './Carousel';
import axios from 'axios';

function DashboardFaves({loggedUser}){
    const [userFavorite, setUserFavorite] = useState('')

    useEffect(()=>{
        axios.get(`http://localhost:5000/favorites/user/${loggedUser.user_id}`)
        .then(res =>{
            setUserFavorite(res.data);
        })
        .catch(error =>{
            console.log(error)
        })
    },[])

    if(!userFavorite){
        return (<div></div>)
    }else if(userFavorite.length === 0){
        return (
            <img src='/images/utensils.png'/>

        )
    }


    return(
        <div className='dashboard-section-container'>
            <div className='dashboard-section-heading'>
                <div className='circle-div'></div>
                <h3>My Favorites</h3>
            </div>
            <div className='faves-wrapper'>
                <Carousel recipeData={userFavorite}/>
            </div>
        </div>
    )
};

export default DashboardFaves;