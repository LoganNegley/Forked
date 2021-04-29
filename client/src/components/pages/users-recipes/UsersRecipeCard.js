import React from 'react';
import {Link, useParams} from 'react-router-dom';

function UsersRecipeCard({item}){
    const {id} = useParams()
    console.log(item)
    return(
        <div className='recipe-card-container'>
            <div className='recipe-card'>
                <div className='recipe-card-wrapper'>
                    <img src='/images/utensils.png'/>
                    <div className='recipe-card-info'>
                        <h3>{item.recipeName}</h3>
                        <p>Prep Time:  {item.prep_time}</p>
                        <p>Cook Time: {item.cook_time}</p>
                        <div className='recipe-card-btn'>
                            <Link to={`/view/recipe/${item.recipe_id}`}><button>View</button></Link>
                            <button>Update</button>
                            <button>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default UsersRecipeCard;