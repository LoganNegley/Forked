import React, {useState} from 'react';
import './addRecipe.css';
import axios from 'axios';
import Recipe from './Recipe';
import Ingredients from './Ingredients';

function AddForm(){
    const [recipeId, setRecipeId] = useState('')

    return(
        <div className='add-recipe-container'>
            <div className='add-triangle-box'>
                <div id='add-triangle'></div>
                <h1>C<span>reate Your Recipe</span></h1>
            </div>
            <div className='add-form-wrapper'>
            {recipeId ? <Ingredients recipeId={recipeId}/> :
                <Recipe recipeId={recipeId} setRecipeId={setRecipeId}/>
            }
            </div>
        </div>
    )
};

export default AddForm;