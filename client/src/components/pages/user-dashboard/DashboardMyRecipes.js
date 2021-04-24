import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { CarouselProvider, Slider, Slide} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

function DashboardMyRecipes(props){
    const [recipes,  setRecipes] = useState('');
    const user = props.user;

    const settings={
        naturalSlideWidth:100, 
        naturalSlideHeight:75, 
        totalSlides:3, 
        isPlaying:true,
        interval:4000, 
        infinite:true,
        visibleSlides:1
    }

    useEffect(()=>{
        axios.get(`http://localhost:5000/recipes/user/${user.user_id}`)
        .then(res =>{
            setRecipes(res.data)
        })
        .catch(error =>{
            console.log(error)
        })
    },[])

    console.log(recipes)

    if(!recipes){
        return(<h1>...Loading Your Recipes</h1>)
    }

    return(
        <div className='dashboard-section-container'>
            <div className='dashboard-section-heading'>
                <div className='circle-div'></div>
                <h3>My Recipes</h3>
            </div>
            <div className='my-recipe-dash-section'>
                <CarouselProvider {...settings}>
                    <Slider>
                         
                        {recipes.map((item, index) =>(
                            <Slide index={index + 1}>
                                <div className='my-recipe-card'>
                                    <div className='my-recipe-card-info'>
                                        <img src={'/images/utensils.png'} alt='recipe'/>
                                        <div className='detail-info'>
                                            <p>{item.recipeName}</p>
                                            <p>Prep Time: {item.prep_time}</p>
                                            <p>Cook Time: {item.cook_time}</p>
                                        </div>
                                    </div>
                                </div>
                            </Slide>
                        ))}
                        
                    </Slider>
                </CarouselProvider>
            </div>
        </div>
    )
};

export default DashboardMyRecipes;