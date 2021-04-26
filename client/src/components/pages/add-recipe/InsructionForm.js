import React, {useState, useEffect} from 'react';

function InstructionForm(props){
    const recipeId = props.recipeId;
    const recipe = props.recipe;
    const [stepNum, setStepNum] = useState(1)
    const [steps, setSteps] = useState([{
        step_number:{stepNum},
        instruction:''
    }])

    const addStep=()=>{

    };

    const handleSubmit =()=>{

    };

    const handleChange = ()=>{

    }

    return (
        <div className='instruction-container'>
            <h3>Instruction for {recipe.recipeName}</h3>
            <div className='instruction-form-container'>
                <form>
                    {steps.map(item =>(
                        <div className='step-input'>
                            
                        </div>
                    ))}
                </form>
            </div>
        </div>
    )
};

export default InstructionForm;