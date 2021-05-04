import React from 'react';
import {Link, useParams} from 'react-router-dom';
import './public.css';


function PublicCard(props){
    const publicRecipesData = props.publicRecipes;
    console.log(publicRecipesData)

    return(
        <div className='public-card-wrapper'>
            {publicRecipesData.map((recipe)=>(
                <div className='public-card' key={recipe.recipe_id}>
                    <div className='recipe-info'>
                    {recipe.image === '' ? <img src='/images/utensils.png' alt='recipe'/> : <img src={recipe.image} alt='not available logo'/>}
                        <h3>{recipe.recipeName}</h3>
                        <div className='recipe-details'>
                            
                            <p>Prep Time: {recipe.prep_time}</p>
                            <p>Cook Time: {recipe.cook_time}</p>
                            <Link to={`/view/recipe/${recipe.recipe_id}`}>
                                <button>View</button>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    )
};

export default PublicCard;