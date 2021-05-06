import React,{useEffect, useState} from 'react';
import axios from 'axios';
import InstructionForm from './InsructionForm';

function Ingredients(props){
    const recipeId = props.recipeId;
    const [recipe, setRecipe] = useState('')
    const [inputs, setInputs] = useState([{
        ingredient_name:'',
        quantity:''
    }])
    const [submitted, setSubmitted] = useState(false)



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

    const handleSubmit=(event) =>{
        event.preventDefault();
        inputs.map(item =>{
            axios.post(`http://localhost:5000/ingredient/recipe/${recipeId}`, item)
            .then(res =>{
                setInputs([{
                    ingredient_name:'',
                    quantity:''
                    }])
                setSubmitted(true)
            })
            .catch(error =>{
                console.log(error)
            })
        })

 
    };
    if(submitted){
        return (
            <InstructionForm recipeId={recipeId} recipe={recipe}/>
        )
    }
    return(
        <div className='add-ingredients-form'>
            <p>Add Ingredients for <span>{recipe.recipeName}</span></p>
            <div className='ingredient-form-container'>
                <form onSubmit={handleSubmit}>
                    {inputs.map((item, index) =>(
                        <div key={index} className='ingredient-input'>
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
                        <button className='submit-btn'>Submit</button>
                </form>
                <div className='ingredient-btn-container'>
                    <button onClick={handleAdd}>+</button>
                </div>
            </div>
        </div>
    )
};

export default Ingredients;