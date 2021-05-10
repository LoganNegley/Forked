import React,{useState, useEffect} from 'react';
import './users-recipes.css';
import {Link, useParams} from 'react-router-dom';
import UsersRecipeCard from './UsersRecipeCard';
import axios from 'axios';


function UsersRecipes(){
    const [userRecipes, setUserRecipe] = useState([])
    const {id} = useParams();

    useEffect(() =>{
        axios.get(`https://forked-application.herokuapp.com/recipes/user/${id}`)
        .then(res =>{
            setUserRecipe(res.data)
        })
        .catch(error =>{
            console.log(error)
        })
    },[id])

    return(
        <div className='users-recipe-container'>
            <div className='heading-container'>
                <div className='heading-triangle'></div>
                <h1>Y<span>our Recipes</span></h1>
            </div>
            <div className='search-wrapper'>
                {/* <form>
                    <label htmlFor='search'>
                        Find A Recipe
                    </label>
                    <input type='text'
                        id='search'
                        name='search'
                    />
                    <button><img src='/images/search-iconV2.png'/></button>
                </form> */}
                <Link to={`/user/${id}/recipe/add`}><button className='add-recipe-btn'>Add Recipe</button></Link>
            </div>

            {userRecipes.length === 0 ? <h3>Make sure to add some recipes!</h3> :
                userRecipes.map((item, index) =>(
                    <UsersRecipeCard key={index} item={item}/>
                ))
            }
        </div>
    )
};

export default UsersRecipes;