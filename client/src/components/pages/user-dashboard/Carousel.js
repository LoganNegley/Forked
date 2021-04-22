import React,{useState, useEffect} from 'react';
import './user-dashboard.css';
import  FavoriteCard from './FavoriteCard';

function Carousel({userRecipeData}){
    const [data, setData] = useState(userRecipeData);
    const [index, setIndex] = useState(0);
    // const [activeRecipe, setActiveRecipe] = useState('');
    const [offset, setOffset] = useState(0)

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //     if(index < data.length - 1){
    //         setIndex(index + 1)
    //     }else{
    //         setIndex(0)
    //     }

    // }, 3000);
    //     setOffset(index * 330)

    // return () => clearInterval(interval);
    // }, [index]);

console.log(offset)

    return (
        <div className='carousel-container'>
            <div className='card-slider'>
                <div className='card-slider-wrapper' style={{'transform':`translateX(-${offset}px)`, 'transition': '2s linear'}}>
                    <FavoriteCard data={data} />
                </div>
            </div>
        </div>
    )
};

export default Carousel;