import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './public.css';
import axios from 'axios';

function PublicRecipeContainer(){
    const [publicRecipes, setPublicRecipes] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:5000/public/recipes')
        .then(res =>{
            console.log(res)
        })
        .catch(error =>{
            console.log(error)
        })
    },[]);

    return (
        <div className='public-recipes-container'>
        <div className='triangle-box'>
            <div id='triangle'></div>
            <h1>P<span>ublic Recipes</span></h1>
        </div>
        <div className='public-card-container'>

        </div>
        </div>
    )
};

export default PublicRecipeContainer;