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
            <div className='carousel-btns'>
                <button onClick={handlePrev}>Prev</button>
                <button onClick={handleNext}>Next</button>
            </div>
            <div className='card-slider'>
                <div className='card-slider-wrapper'>
                    <FavoriteCard data={data} index={index}/>
                </div>
            </div>
        </div>
    )
};

export default Carousel;