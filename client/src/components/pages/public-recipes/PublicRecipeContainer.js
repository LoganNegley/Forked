import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './public.css';
import axios from 'axios';
import PublicCard from './PublicCard';

function PublicRecipeContainer(props){
    const [publicRecipes, setPublicRecipes] = useState()
    const {user} = props.user;

    useEffect(()=>{
        axios.get('https://forked-application.herokuapp.com/public/recipes')
        .then(res =>{
            setPublicRecipes(res.data)
        })
        .catch(error =>{
            console.log(error)
        })
    },[]);
    // console.log(publicRecipes)

    if(!publicRecipes){
        return <div>....Loading Recipe Information</div>
    }

    return (
        <div className='public-recipes-container'>
        <div className='triangle-box'>
            <div id='triangle'></div>
            <h1>P<span>ublic Recipes</span></h1>
        </div>
        <div className='public-card-container'>
            <PublicCard publicRecipes={publicRecipes} user={user}/>
        </div>
        </div>
    )
};

export default PublicRecipeContainer;