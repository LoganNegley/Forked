import React from 'react';


function FavoriteCard(props){
    const recipe = props.item;
    const handleDelete = props.handleDelete;
    const index = props.index;

    return(
        <div className='favorite-card-container'>
            <div id='fav-col-1'>
                {recipe.image === null ? <img src='/images/utensils.png' alt='not available' /> :
                <img src={recipe.image} alt='recipe'/>}
            </div>
            <div id='fav-col-2'>
                <h3>{recipe.recipeName}</h3>
                <p>Prep Time: {recipe.prep_time}</p>
                <p>Cook Time: {recipe.cook_time}</p>
            </div>
            <div id='fav-col-3'>
                <button>View</button>
                <button onClick={() => handleDelete(recipe.recipeId)}>Remove</button>
            </div>
        </div>
    )
};

export default FavoriteCard;