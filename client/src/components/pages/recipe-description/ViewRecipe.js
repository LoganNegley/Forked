import React, {useState, useEffect} from 'react';
import './view-recipe.css';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';
import ViewIngredients from './ViewIngredients';
import ViewSteps from './ViewSteps';

function ViewRecipe(props){
    const [recipe, setRecipe] = useState('')
    const {id} = useParams();
    const [toggle, setToggle] = useState(true);
    const userId = props.user.user.user_id;


    useEffect(() =>{
        axios.get(`http://localhost:5000/recipes/${id}`)  //get recipe by ID
        .then(res =>{
            setRecipe(res.data[0])
        })
        .catch(error =>{
            console.log(error)
        })
    },[])

    const handleToggle =() =>{
        if(toggle){
            setToggle(false)
        }else{
            setToggle(true)
        }
    };

    const shareToPublic=() =>{
        axios.put(`http://localhost:5000/public/recipes/${id}`)
        .then(res =>{
            console.log(res)
        })
        .catch(error =>{
            console.log(error)
        })
    };

    return(
        <div className='view-recipe-container'>
            <img src='/images/utensils.png'/>
            <div className='view-details'>
                <h3>{recipe.recipeName}</h3>
                <p>Prep Time: {recipe.prep_time}</p>
                <p>Cook Time: {recipe.cook_time}</p>
                {recipe.userId === userId ?
                <div className='details-btn'>
                    {/* <button>Edit</button> */}
                    <button onClick={shareToPublic}>Share</button>
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