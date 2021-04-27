import React, {useState, useEffect} from 'react';
import './view-recipe.css';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';

function ViewRecipe(){
    const [recipe, setRecipe] = useState('')
    const {id} = useParams();

    useEffect(() =>{
        axios.get(`http://localhost:5000/recipes/${id}`)
        .then(res =>{
            setRecipe(res.data)
        })
        .catch(error =>{
            console.log(error)
        })
    },[])

    console.log(recipe )
    return(
        <div className='view-recipe-container'>
            <img src='/images/utensils.png'/>
            <div className='view-details'>
                <h3>{recipe.recipeName}</h3>
                <p>Prep Time: {recipe.prep_time}</p>
                <p>Cook Time: {recipe.cook_time}</p>
                <div className='details-btn'>
                    <button>Edit</button>
                    <button>Share</button>
                </div>
                <div className='recipe-details-btn'>
                    <Link to={`/view/recipe/ingredients/${recipe.recipe_id}`}><p>Ingredients</p></Link>
                    <Link to={`/view/recipe/steps/${recipe.recipe_id}`}><p>Instructions</p></Link>
                </div>
                <div className='recipe-details-section'>
                    {/* UL goes here */}
                </div>
                {/* Bring in component */}
            </div>
        </div>
    )
};

export default ViewRecipe;