import React from 'react';
import {Link} from 'react-router-dom';

function UsersRecipeCard(){
    return(
        <div className='recipe-card-container'>
            <div className='recipe-card'>
                <div className='recipe-card-wrapper'>
                    <img src='/images/utensils.png'/>
                    <div className='recipe-card-info'>
                        <h3>Recipe Name</h3>
                        <p>Prep Time:</p>
                        <p>Cook Time:</p>
                        <div className='recipe-card-btn'>
                            <button>View</button>
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