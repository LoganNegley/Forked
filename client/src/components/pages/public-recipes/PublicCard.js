import React from 'react';
import './public.css';


function PublicCard(props){
    const publicRecipesData = props.publicRecipes;

    return(
        <div className='public-card-wrapper'>
            {publicRecipesData.map((recipe)=>(
                <div className='public-card' key={recipe.recipe_id}>
                    {recipe.image === '' ? <img src='/images/utensils.png' alt='recipe'/> : <img src='/images/heart_icon_V3.png' alt='not available logo'/>}
                    <h3>{recipe.recipeName}</h3>
                    <p>Prep Time: {recipe.prep_time}</p>
                    <p>Cook Time: {recipe.cook_time}</p>
                    <button>View</button>
                </div>
            ))}
        </div>

    )
};

export default PublicCard;