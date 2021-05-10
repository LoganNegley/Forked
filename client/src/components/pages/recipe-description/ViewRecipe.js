import React, {useState, useEffect} from 'react';
import './view-recipe.css';
import {Link, useParams, useHistory} from 'react-router-dom';
import axios from 'axios';
import ViewIngredients from './ViewIngredients';
import ViewSteps from './ViewSteps';

function ViewRecipe(props){
 
    const [recipe, setRecipe] = useState('')
    const {id} = useParams();
    const [toggle, setToggle] = useState(true);
    const userId = props.user.user.user_id;
    const history = useHistory();
    const [shared, setShared] = useState(false);
    const [favorited, setFavorited] = useState(false);

    console.log(props)


    useEffect(() =>{
        axios.get(`https://forked-application.herokuapp.com/recipes/${id}`)  //get recipe by ID
        .then(res =>{
            setRecipe(res.data[0])
        })
        .catch(error =>{
            console.log(error)
        })
    },[shared, favorited])

    const handleDelete=() =>{
        axios.delete(`https://forked-application.herokuapp.com/recipes/${id}`)
        .then(res =>{

            history.push(`/recipes/user/${userId}`)
        })
        .catch(error =>{
            console.log(error)
        })
    };

    const handleToggle =() =>{
        if(toggle){
            setToggle(false)
        }else{
            setToggle(true)
        }
    };

    const shareToPublic=() =>{
        axios.put(`https://forked-application.herokuapp.com/public/recipes/${id}`)
        .then(res =>{
            setShared(true)
        })
        .catch(error =>{
            console.log(error)
        })
    };

    const handleAddFavorite =() =>{
        axios.post(`https://forked-application.herokuapp.com/favorites/user/${userId}/recipe/${id}`)
        .then(res =>{
            setFavorited(true)
        })
        .catch(error =>{
            console.log(error)
        })
    };


    return(
        <div className='view-recipe-container'>
        {recipe.image === null ? <img src='/images/utensils.png'/> : 
            <img src={recipe.image}/>}
            
            <div className='view-details'>
                <h3>{recipe.recipeName}</h3>
                <p>Prep Time: {recipe.prep_time}</p>
                <p>Cook Time: {recipe.cook_time}</p>
                {recipe.userId === userId ?
                    <div className='details-btn'>
                        {recipe.isPublic != 1 ?
                            <button onClick={shareToPublic}>Share</button>
                            : <div style={{display:'none'}}></div>
                        }
                        {recipe.isFavorite != 1 ? <button onClick={handleAddFavorite} className='fave-btn'>Add Favorite</button> : <div style={{display: 'none'}}></div>}
                        <button onClick={handleDelete}>Delete</button>
                    </div>
                : <div></div>
                }
            </div>
                <div className='recipe-details-btn'>
                    <p className={toggle ? `${toggle}` : 'none'} onClick={handleToggle}>Ingredients</p>
                    <p className={!toggle ? `${toggle}` : 'none'} onClick={handleToggle}>Instructions</p>
                </div>
                <div className='recipe-details-section'>
                    {toggle ? <ViewIngredients/> :
                        <ViewSteps/>
                    }
                </div>
        </div>
    )
};

export default ViewRecipe;