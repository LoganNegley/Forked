import React from 'react';
import {Link} from 'react-router-dom';


function UsersRecipeCard({item}){
    console.log(item)

    return(
        <div className='recipe-card-container'>
            <div className='recipe-card'>
                <div className='recipe-card-wrapper'>
                {item.image === null ? <img src='/images/utensils.png'/> :
                <img src={item.image}/>}
                    
                    <div className='recipe-card-info'>
                        <h3>{item.recipeName}</h3>
                        <p>Prep Time:  {item.prep_time} mins</p>
                        <p>Cook Time: {item.cook_time} mins</p>
                        <div className='recipe-card-btn'>
                            <Link to={`/view/recipe/${item.recipe_id}`}><button>View</button></Link>
                            {/* <button>Update</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default UsersRecipeCard;