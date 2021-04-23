import React, {useState, useEffect} from 'react';
import axios from 'axios';


function DashboardPublic(){
    const [publicRecipe, setPublicRecipe] = useState('');

    useEffect(() =>{
        axios.get('http://localhost:5000/public/recipes/')
        .then(res =>{
            setPublicRecipe(res.data);
        })
        .catch(error =>{
            console.log(error)
        })
    },[]);

    if(!publicRecipe){
        return(<h3>...Loading Public Recipes</h3>)
    }

    return(
        <div className='dashboard-section-container'>
            <div className='dashboard-section-heading'>
                <div className='circle-div'></div>
                <h3>Get Inspired</h3>
            </div>
                {publicRecipe.map((item, index) =>(
                    <img style={{'width':'50%', 'height':'200px'}} src='/images/utensils.png'/>
                ))}
        </div>
    )
};

export default DashboardPublic;