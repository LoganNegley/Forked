import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { CarouselProvider, Slider, Slide} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';



function DashboardPublic(){
    const [publicRecipe, setPublicRecipe] = useState('');

    const settings={
        naturalSlideWidth:100, 
        naturalSlideHeight:100, 
        totalSlides:7, 
        isPlaying:true,
        interval:5000, 
        infinite:true,
        visibleSlides:2
    }

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
                <CarouselProvider {...settings}>
                    <Slider>
                        {publicRecipe.map((item, index) =>(
                        <Slide index={index +1} key={index}> 
                            <img src='/images/utensils.png'/>
                        </Slide>
                    ))}
                    </Slider>
                </CarouselProvider>
        </div>
    )
};

export default DashboardPublic;