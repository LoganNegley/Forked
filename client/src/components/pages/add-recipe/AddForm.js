import React from 'react';
import './addRecipe.css';

function AddForm(){
    return(
        <div className='add-recipe-container'>
            <div className='add-triangle-box'>
                <div id='add-triangle'></div>
                <h1>C<span>reate Your Recipe</span></h1>
            </div>
            <div className='add-form-wrapper'>
                <form>

                </form>
            </div>
        </div>
    )
};

export default AddForm;