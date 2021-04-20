import React from 'react';

function FavoriteCard({activeRecipe, index}){
    const {cook_time, favorite_id, image, prep_time, recipeId, recipeName} = activeRecipe;

    return (
        <div id={`card-${index}`} className='favorite-card'>
            {image !== '' ? <img src='/images/utensils.png' alt='recipe holder'/> : <img src={image} alt='recipe'/> }
            <div className='favorite-card-info'>
                <p>{recipeName}</p>
                <p>Prep Time: {prep_time}</p>
                <p>Cook Time: {cook_time}</p>
            </div>
        </div>
    )
};

export default FavoriteCard;