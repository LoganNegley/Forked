import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

function ViewIngredients(){
    const {id} = useParams();
    const [ingredients, setIngredients] = useState('')

    useEffect(() =>{
        axios.get(`https://forked-application.herokuapp.com/ingredient/recipe/${id}`)
        .then(res =>{
            setIngredients(res.data)

        })
        .catch(error =>{
            console.log(error)
        })
    },[])


    if(!ingredients){
        return(<p>...Loading Ingredients</p>)
    }

    return (
        <div className='view-ingredients-container'>
            <p>Quantity</p>
            {ingredients.map(item =>(

                <div key={item.ingredient_id} className="row">
                    <div className="column">
                        <p>{item.ingredient_name}</p>
                    </div>
             
                    <div className="column" >
                        <p>{item.quantity}</p>
                    </div>
                </div>
            ))}
           
        </div>
    )
};

export default ViewIngredients;