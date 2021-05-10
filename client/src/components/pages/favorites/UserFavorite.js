import React, {useState, useEffect} from 'react';
import './user-favorites.css';
import axios from 'axios';
import {Link, useParams} from 'react-router-dom';
import FavoriteCard from './FavoriteCard';

function UserFavorite(){
    const {userId} = useParams();
    const [recipes, setRecipes] = useState('');
    const [deleted, setDeleted] = useState(false);


    useEffect(() =>{
        axios.get(`https://forked-application.herokuapp.com/favorites/user/${userId}`)
        .then(res =>{
            setRecipes(res.data)
            setDeleted(false)
        })
        .catch(error =>{
            console.log(error)
        })
    },[deleted])



    const handleDelete =(recipeId) =>{
        axios.delete(`https://forked-application.herokuapp.com/favorites/recipe/${recipeId}`)
        .then(res =>{
            setDeleted(true);
            console.log(res)

        })
        .catch(error =>{
            console.log(error)
        })

    };




    return (
        <div className='favorite-container'>
            <div className='triangle-box'>
                <div className='heading-triangle'></div>
                <h1>F<span>avorite Recipes</span></h1>
            </div>
                {!recipes ?
                    <div className='no-recipes'>You don't have any favorite recipes saved YET!!!</div> :
    
            
                recipes.map((item, index) =>(
                    <FavoriteCard key={index} setDeleted={setDeleted} item={item} index={index} handleDelete={handleDelete}/>
                ))
                }
        </div>
    )
};

export default UserFavorite;