import React,{useEffect, useState} from 'react';
import axios from 'axios';

function Ingredients(props){
    const recipeId = props.recipeId;
    const [recipe, setRecipe] = useState('')
    const [fieldInputs, setFieldInputs] = useState([{
        ingredient_name:'This is one',
        quantity:'this is one'
    }])



    useEffect(()=>{
        axios.get(`http://localhost:5000/recipes/${recipeId}`)
        .then(res =>{
            setRecipe(res.data[0])
        })
        .catch(error =>{
            console.log(error)
        })
    },[])


    const handleChange=(i,event)=>{
        const inputs = [...fieldInputs];
        inputs[i].value = event.target.value;
        setFieldInputs(inputs)

    };

    const handleAdd=()=>{
        const inputs = [...fieldInputs]
        inputs.push({ingredien_name:'', quantity:''})
        setFieldInputs(inputs)
    };

    return(
        <div className='add-ingredients-form'>
            <h1 style={{'color':'white'}}>Ingredients for {recipe.recipeName}</h1>
            <div className='ingredient-form-container'>
                <form>
                    {fieldInputs.map((item, index) =>(
                        <div>
                            <label>
                                Ingredient
                            <input
                                type='text'
                                placeholder='Ingredient'
                                value={fieldInputs.ingredient_name}
                                onChange={(e) => handleChange(index, e)}
                            />
                            </label>
                            <input
                                type='text'
                                placeholder='Quantity'
                                value={fieldInputs.quantity}
                                onChange={(e) => handleChange(index,e)}
                            />
                        </div>
                    ))}
                    
                </form>
                <button onClick={handleAdd}>Add Another</button>
            </div>
        </div>
    )
};

export default Ingredients;