import React,{useContext} from 'react';
import './users-recipes.css';
import {Link} from 'react-router-dom';
import UsersRecipeCard from './UsersRecipeCard';
import UserContext from '../../../state/UserContext';

function UsersRecipes(props){
    const user = useContext(UserContext)

    
    return(
        <div className='users-recipe-container'>
            <div className='heading-container'>
                <div className='heading-triangle'></div>
                <h1>Y<span>our Recipes</span></h1>
            </div>
            <form>
                <label>
                    Find A Recipes
                    <input type='text'
                        name='search'
                    />
                </label>
                <button>Search</button>
            </form>
            <button className='add-recipe-btn'>Add Recipe</button>
            {/* {<UsersRecipeCard/>} */}
        </div>
    )
};

export default UsersRecipes;