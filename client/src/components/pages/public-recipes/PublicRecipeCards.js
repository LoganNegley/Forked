import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import './public.css';

function PublicRecipeCards(){
    return (
        <div className='public-recipes-container'>
        <div className='triangle-box'>
            <div id='triangle'></div>
            <h1>P<span>ublic Recipes</span></h1>
        </div>
        </div>
    )
};

export default PublicRecipeCards;