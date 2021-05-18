import React from 'react';
import {Link, useParams} from 'react-router-dom';
import './public.css';


function PublicCard(props){
    const publicRecipesData = props.publicRecipes;

    return(
        <div className='public-card-wrapper'>
            {publicRecipesData.map((recipe)=>(
                <div className='public-card' key={recipe.recipe_id}>
                    <div className='col-1 recipe-image'>
                        {recipe.image === "" ? <img src='/images/utensils.png' alt='recipe'/> : <img src={recipe.image} alt='not available logo'/>}
                    </div>
                        
                    <div className='recipe-details col-2'>
                        <h3>{recipe.recipeName}</h3>
                        <p>Prep Time: {recipe.prep_time}</p>
                        <p>Cook Time: {recipe.cook_time}</p>
                    </div>
                    <div className='col-3 view-btn'>
                        <Link to={`/view/recipe/${recipe.recipe_id}`}>
                            <button>View</button>
                        </Link>
                    </div>
                </div>
            ))}
        </div>

    )
};

export default PublicCard;