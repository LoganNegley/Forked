import React from 'react';
import {Link} from 'react-router-dom';

function RecipeSubmit({recipe}){
    // console.log(props)
    return(
        <div className='add-recipe-success-message'>
            Your {recipe.recipeName} Recipe was successfully uploaded!
            <Link to={`/view/recipe/${recipe.recipe_id}`}><button>Check it out!</button></Link>
        </div>
    )
};

export default RecipeSubmit;