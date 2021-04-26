import React,{useState} from 'react';
import axios from 'axios';

function Recipe({recipeId, setRecipeId}){
    const [newRecipe, setNewRecipe] = useState({
        recipeName:'',
        prep_time:'',
        cook_time:''
    })

    const handleSubmit= (event)=>{
        event.preventDefault();
        axios.post('http://localhost:5000/recipes/user/5', newRecipe)
        .then(res =>{
            setRecipeId(res.data[0])
        })
        .catch(error =>{
            console.log(error)
        })
    };

    const handleChange=(event)=>{
        setNewRecipe({...newRecipe, [event.target.name]: event.target.value})
    };


    return(
        <div className='recipe-form-container'>
            <form onSubmit={handleSubmit}>
                <label>
                    Recipe Name
                    <input
                        required
                        type='text'
                        name='recipeName'
                        value={newRecipe.recipeName}
                        onChange={handleChange}
                    />
                </label>
                <div className='recipe-time-container'>
                <label>
                    Prep Time
                    <input
                        placeholder='In Mins'
                        required
                        type='text'
                        name='prep_time'
                        value={newRecipe.prep_time}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Cook Time
                    <input
                        placeholder='In Mins'
                        required
                        type='text'
                        name='cook_time'
                        value={newRecipe.cook_time}
                        onChange={handleChange}
                    />
                </label>
                </div>
                    <button>Create Recipe</button>
            </form>
        </div>
    )
};

export default Recipe;