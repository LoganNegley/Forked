import React,{useEffect, useState} from 'react';
import axios from 'axios';

function Ingredients(props){
    const recipeId = props.recipeId;
    const [recipe, setRecipe] = useState('')
    const [inputs, setInputs] = useState([{
        ingredient_name:'',
        quantity:''
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


    const handleChange=(event, index)=>{
        const {name, value} = event.target;
        const newList = [...inputs];
        newList[index][name] = value
        setInputs(newList);
    };

    const handleAdd=()=>{
        setInputs([...inputs, {ingredient_name:'', quantity:''}])
    };

    return(
        <div className='add-ingredients-form'>
            <h1 style={{'color':'white'}}>Ingredients for {recipe.recipeName}</h1>
            <div className='ingredient-form-container'>
                <form>
                    {inputs.map((item, index) =>(
                        <div>
                            <label>
                                Ingredient
                            <input
                                type='text'
                                name='ingredient_name'
                                value={item.ingredient_name}
                                onChange={(e) => handleChange(e, index)}
                            />
                            </label>
                            <label>
                                Quantity
                            <input
                                type='text'
                                name='quantity'
                                value={item.quantity}
                                onChange={ (e) => handleChange(e, index)}
                            />
                            </label>
                        </div>
                    ))}
                    
                </form>
                <button onClick={handleAdd}>Add Another</button>
            </div>
        </div>
    )
};

export default Ingredients;