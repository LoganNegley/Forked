import React, {useState, useEffect} from 'react';
import './user-favorites.css';
import axios from 'axios';
import {Link, useParams} from 'react-router-dom';
import FavoriteCard from './FavoriteCard';

function UserFavorite(){
    const {userId} = useParams();
    const [recipes, setRecipes] = useState('')


    useEffect(() =>{
        axios.get(`http://localhost:5000/favorites/user/${userId}`)
        .then(res =>{
            setRecipes(res.data)
        })
        .catch(error =>{
            console.log(error)
        })
    },[])

    console.log(recipes)

    if(!recipes){
        return(
            <div>You don't have any favorite recipes saved YET!!!</div>
        )
    }


    return (
        <div className='favorite-container'>
            <div className='triangle-box'>
                <div className='heading-triangle'></div>
                <h1>P<span>ublic Recipes</span></h1>
            </div>
            {recipes.map((item, index) =>(
                <FavoriteCard key={index} item={item}/>
            ))}
            
        </div>
    )
};

export default UserFavorite;