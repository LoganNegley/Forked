import React from 'react';
import {Link} from 'react-router-dom';

function RecipeSubmit({recipe}){
    // console.log(props)
    return(
        <div className='add-recipe-success-message'>
            <p>Your <span>{recipe.recipeName}</span> Recipe was successfully uploaded!</p>
            <Link to={`/view/recipe/${recipe.recipe_id}`}><button>Check it out here!</button></Link>
        </div>
    )
};

export default RecipeSubmit;