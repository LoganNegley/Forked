import React, {useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';

function UsersRecipeCard({item}){
    const {id} = useParams();
    const [faveToggle, setFaveToggle] = useState('')


    const handleAddFave =()=>{
        axios.post(`http://localhost:5000/favorites/user/${id}/recipe/${item.recipe_id}`)
        .then(res =>{
            console.log(res)
        })
        .catch(error =>{
            console.log(error)
        })
    };


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
                            {/* <button onClick={handleAddFave}>Add Favorite</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default UsersRecipeCard;