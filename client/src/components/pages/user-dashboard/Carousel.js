import React,{useState, useEffect} from 'react';
import './user-dashboard.css';
import  Card from './Card';

function Carousel({recipeData}){
    const [data, setData] = useState(recipeData);
    const [index, setIndex] = useState(0);
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


    return (
        <div className='carousel-container'>
            <div className='card-slider'>
                <div className='card-slider-wrapper' style={{'transform':`translateX(-${offset}px)`, 'transition': '1s linear'}}>
                    <Card data={data} />
                </div>
            </div>
        </div>
    )
};

export default Carousel;