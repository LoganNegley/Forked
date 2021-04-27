import React, {useState, useEffect} from 'react';
import axios from 'axios';

function InstructionForm(props){
    const recipeId = props.recipeId;
    const recipe = props.recipe;
    const [stepNum, setStepNum] = useState(1)
    const [steps, setSteps] = useState([{
        step_number:stepNum,
        instruction:''
    }])

    useEffect(() =>{
        setStepNum(stepNum + 1)
    },[steps])

    const addStep=()=>{
        setSteps([...steps, {step_number:stepNum, instruction:''}])
    };

    const handleSubmit =(event)=>{
        event.preventDefault();
        steps.map(item =>{
            axios.post(`http://localhost:5000/steps/recipe/${recipeId}`, item)
            .then(res =>{
                console.log(res)
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

    return (
        <div className='instruction-container'>
            <h3>Steps for {recipe.recipeName}</h3>
            <div className='instruction-form-container'>
                <form onSubmit={handleSubmit}>
                    {steps.map((item,index) =>(
                        <div key={index} className='step-input'>
                            <p>{index + 1}</p>
                                <input
                                    placeholder='Next Step'
                                    type='text'
                                    name='instruction'
                                    value={item.instruction}
                                    onChange={(e) => handleChange(e,index)}
                                />
                        </div>
                    ))}
                    <button>Submit</button>
                </form>
                <button onClick={addStep}>+</button>
            </div>
        </div>
    )
};

export default InstructionForm;