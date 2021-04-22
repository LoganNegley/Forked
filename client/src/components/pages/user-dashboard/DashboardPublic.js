import React, {useState, useEffect} from 'react';
import Carousel from './Carousel';
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

    return(
        <div className='dashboard-section-container'>
            <div className='dashboard-section-heading'>
                <div className='circle-div'></div>
                <h3>Get Inspired</h3>
            </div>
            <div className='public-section-wrapper'>
                {/* <Carousel recipeData={publicRecipe}/> */}
            </div>
        </div>
    )
};

export default DashboardPublic;