import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Carousel from './Carousel';
import axios from 'axios';

function DashboardFaves({loggedUser}){
    const [userFavorite, setUserFavorite] = useState('')

    useEffect(()=>{
        axios.get(`https://forked-application.herokuapp.com/favorites/user/${loggedUser.user_id}`)
        .then(res =>{
            // if(res.data >= 5){
            //     setUserFavorite(shuffle(res.data));
            // }else{
            //     setUserFavorite(res.data)
            // }
            setUserFavorite(shuffle(res.data))
            
        })
        .catch(error =>{
            console.log(error)
        })
    },[])

    console.log(userFavorite)


    const shuffle = (recipes) =>{
        const used = [];
        const random =[];
        // if(recipes.length === 0)
        let i = 0;
        for(; i < 7; i++){
            const index = Math.floor(Math.random() * recipes.length)
            if(used.includes(index) === false){
                used.push(index)
                const item = recipes[index]
                random.push(item)
            }else{
                i--
            }
        }
        return random;
    }

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