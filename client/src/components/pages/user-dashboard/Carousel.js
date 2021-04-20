import React,{useState, useEffect} from 'react';
import './user-dashboard.css';
import  FavoriteCard from './FavoriteCard';

function Carousel({userRecipeData}){
    const [data, setData] = useState(userRecipeData);
    const [index, setIndex] = useState(0);
    const [activeRecipe, setActiveRecipe] = useState('');



    useEffect(()=>{
        setActiveRecipe(data[index])
    },[index])


    const handleNext = ()=>{
        setIndex(index + 1)

    };

    const handlePrev = ()=>{
        setIndex(index - 1)
    };




    return (
        <div className='carousel-container'>
            <div className='carousel-wrapper'>
                <button onClick={handlePrev}>Prev</button>
                    <FavoriteCard activeRecipe={activeRecipe} index={index}/>
                <button onClick={handleNext}>Next</button>
            </div>
        </div>
    )
};

export default Carousel;