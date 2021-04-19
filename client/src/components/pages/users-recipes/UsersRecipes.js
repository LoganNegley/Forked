import React,{useContext} from 'react';
import './users-recipes.css';
import {Link} from 'react-router-dom';
import UsersRecipeCard from './UsersRecipeCard';

function UsersRecipes(props){


    return(
        <div className='users-recipe-container'>
            <div className='heading-container'>
                <div className='heading-triangle'></div>
                <h1>Y<span>our Recipes</span></h1>
            </div>
            <div className='search-wrapper'>
                <form>
                    <label htmlFor='search'>
                        Find A Recipe
                    </label>
                    <input type='text'
                        id='search'
                        name='search'
                    />
                    <button><img src='/images/search-iconV2.png'/></button>
                </form>
                <button className='add-recipe-btn'>Add Recipe</button>
            </div>

            <UsersRecipeCard/>
        </div>
    )
};

export default UsersRecipes;