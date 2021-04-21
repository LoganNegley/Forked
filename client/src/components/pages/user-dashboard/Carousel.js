import React,{useState, useEffect} from 'react';
import './user-dashboard.css';
import  FavoriteCard from './FavoriteCard';

function Carousel({userRecipeData}){
    const [data, setData] = useState(userRecipeData);
    // const [sliderData, setSlider]
    // const [index, setIndex] = useState(0);
    // const [activeRecipe, setActiveRecipe] = useState('');
    const [offset, setOffset] = useState(0)

console.log(data)

const sliderData = [...data]


const infiniteSlide =() =>{
    sliderData.push(sliderData[0])
    sliderData.shift()
    console.log(sliderData)
};




    // useEffect(()=>{
    //     setActiveRecipe(data[index])
    // },[index])

    // setInterval(()=>{
    //     setOffset(offset - 330)
    //     infiniteSlide()
    // },3000)


    // const handleNext = ()=>{
    //     setIndex(index + 1)
    //     setOffset(-Math.abs(index*(100/data.length)))
    // };


    // const handlePrev = ()=>{
    //     setIndex(index - 1)
    //     setOffset(index*(100/data.length))
    // };

    return (
        <div className='carousel-container'>
            <div className='card-slider'>
                <div className='card-slider-wrapper' style={{'transform':`translateX(${offset}px)`, 'transition': '2s'}}>
                    <FavoriteCard data={sliderData}/>
                </div>
            </div>
            <button onClick={infiniteSlide}></button>
        </div>
    )
};

export default Carousel;