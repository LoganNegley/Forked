import React, {useState, useEffect} from 'react';
import axios from 'axios';
import RecipeSubmit from './RecipeSubmit';

function InstructionForm(props){
    const recipeId = props.recipeId;
    const recipe = props.recipe;
    const [stepNum, setStepNum] = useState(0);
    const [submit, setSubmit] = useState(false);
    const [steps, setSteps] = useState([{
        step_number:1,
        instruction:''
    }]);

    const addOne=(arr)=>{
        const lastIndex = arr.length - 1
        const num = arr[lastIndex].step_number
        return num + 1
    }


    const addStep=()=>{
        const newNum = addOne(steps)
        setSteps([...steps, {step_number:newNum, instruction:''}])
    };


    const handleSubmit =(event)=>{
        event.preventDefault();
        steps.map(item =>{
            axios.post(`https://forked-application.herokuapp.com/steps/recipe/${recipeId}`, item)
            .then(res =>{
                setSubmit(true)
            })
            .catch(error =>{
                console.log(error)
            })
        })

    };

    const handleChange = (event,index)=>{
        const {name, value} = event.target;
        const newSteps = [...steps]
        steps[index][name]= value;
        setSteps(newSteps)
    };

    if(submit){
        return(
            <RecipeSubmit recipe={recipe}/>
        )
    }

    return (
        <div className='instruction-container'>
            <h3>Steps for <span>{recipe.recipeName}</span></h3>
            <div className='instruction-form-container'>
                <form onSubmit={handleSubmit}>
                    {steps.map((item,index) =>(
                        <div key={index} className='step-input'>
                            <p>{index + 1}</p>
                                <textarea
                                    placeholder='Next Step'
                                    type='textfield'
                                    name='instruction'
                                    value={item.instruction}
                                    onChange={(e) => handleChange(e,index)}
                                />
                        </div>
                    ))}
                    <div onClick={addStep} className='ingredient-btn-container'>+</div>
                    <button className='submit-btn'>Submit</button>
                </form>
            </div>
        </div>
    )
};

export default InstructionForm;