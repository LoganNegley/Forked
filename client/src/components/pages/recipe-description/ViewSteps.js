import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';


function ViewSteps(){
    const {id} = useParams();
    const [steps, setSteps] = useState('')


    useEffect(() =>{
        axios.get(`https://forked-application.herokuapp.com/steps/recipe/${id}`)
        .then(res =>{
            setSteps(res.data)
        })
        .catch(error =>{
            console.log(error)
        })
    },[])

    if(!steps){
        return(<p>...loading steps for you</p>)
    }

    return (
        <div className='view-steps-container'>
            {steps.map((item, index) =>(
                <div key={item.stepId} className='step-detail'>
                    <p>{item.step_number}: {item.instruction}</p>
                </div>
            ))}
        </div>
    )
};

export default ViewSteps;