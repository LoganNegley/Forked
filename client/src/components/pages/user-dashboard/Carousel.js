import React,{useState, useEffect} from 'react';
import './user-dashboard.css';
import  FavoriteCard from './FavoriteCard';

function Carousel({userRecipeData}){
    const [data, setData] = useState(userRecipeData);
    const [index, setIndex] = useState(0);
    const [activeRecipe, setActiveRecipe] = useState('');
    const [offset, setOffset] = useState(0)



    useEffect(()=>{
        setActiveRecipe(data[index])
    },[index])


    const handleNext = ()=>{
        setIndex(index + 1)
        setOffset(-Math.abs(index*(100/data.length)))
    };

    console.log(offset)

    const handlePrev = ()=>{
        setIndex(index - 1)
        setOffset(index*(100/data.length))
    };

    return (
        <div className='carousel-container'>
            <div className='carousel-btns'>
                <button onClick={handlePrev}>Prev</button>
                <button onClick={handleNext}>Next</button>
            </div>
            <div className='card-slider'>
                <div className='card-slider-wrapper' style={{'transform':`translateX(${offset}%)`}}>
                    <FavoriteCard data={data} index={index}/>
                </div>
            </div>
        </div>
    )
};

export default Carousel;