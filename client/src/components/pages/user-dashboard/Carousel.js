import React,{useState, useEffect} from 'react';
import './user-dashboard.css';

function Carousel({userFavorite}){
    const [data, setData] = useState(userFavorite);
    const [index, setIndex] = useState(0);
    const [activeRecipe, setActiveRecipe] = useState('');



    useEffect(()=>{
        setActiveRecipe(data[index])
        // console.log(activeRecipe)s
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

                <button onClick={handleNext}>Next</button>
            </div>
        </div>
    )
};

export default Carousel;