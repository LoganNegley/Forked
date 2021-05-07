import React, {useState, useEffect} from 'react';
import './user-favorites.css';
import axios from 'axios';
import {Link, useParams} from 'react-router-dom';
import FavoriteCard from './FavoriteCard';

function UserFavorite(){
    const {userId} = useParams();
    const [recipes, setRecipes] = useState('')
    const [deletedRecipe, setDeletedRecipe] = useState('')


    useEffect(() =>{
        axios.get(`http://localhost:5000/favorites/user/${userId}`)
        .then(res =>{
            setRecipes(res.data)
            console.log(res)
        })
        .catch(error =>{
            console.log(error)
        })
    },[])

    console.log(recipes)


    const handleDelete =(recipeId) =>{
        axios.delete(`http://localhost:5000/favorites/recipe/${recipeId}`)
        .then(res =>{
            console.log(res)
            // setDeletedRecipe(recipeId)
        })
        .catch(error =>{
            console.log(error)
        })

    };

    if(!recipes){
       return( <div>You don't have any favorite recipes saved YET!!!</div>)
    }


    return (
        <div className='favorite-container'>
            <div className='triangle-box'>
                <div className='heading-triangle'></div>
                <h1>F<span>avorite Recipes</span></h1>
            </div>
            {
                recipes.map((item, index) =>(
                    <FavoriteCard key={index} item={item} index={index} handleDelete={handleDelete}/>
                ))
            }
        </div>
    )
};

export default UserFavorite;