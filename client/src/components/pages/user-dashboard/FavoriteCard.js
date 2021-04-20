import React from 'react';

function FavoriteCard({index,data}){
    // const {cook_time, favorite_id, image, prep_time, recipeId, recipeName} = activeRecipe;

    return (
        <>
      {      data.map(item =>(
        <div key={item.favorite_id} id={`card-${index}`} className='favorite-card'>
          {item.image !== '' ? <img src='/images/utensils.png' alt='recipe holder'/> : <img src={item.image} alt='recipe'/> }
            <div className='favorite-card-info'>
                <p>{item.recipeName}</p>
                <p>Prep Time: {item.prep_time}</p>
                <p>Cook Time: {item.cook_time}</p>
            </div>
        </div>

      ))
      }
      </>
    )
};

export default FavoriteCard;