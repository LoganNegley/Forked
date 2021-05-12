import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { CarouselProvider, Slider, Slide} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {Link} from 'react-router-dom';

function DashboardMyRecipes(props){
    const [recipes,  setRecipes] = useState('');
    const user = props.user;
    const [slide, setSlide] = useState(1);

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
        axios.get(`https://forked-application.herokuapp.com/recipes/user/${user.user_id}`)
        .then(res =>{
            setRecipes(res.data)
        })
        .catch(error =>{
            console.log(error)
        })
    },[])


    return(
        <div className='dashboard-section-container'>
            <div className='dashboard-section-heading'>
                <div className='circle-div'></div>
                <h3>My Recipes</h3>
            </div>
            <div className='my-recipe-dash-section'>
                {recipes.length === 0 ? <div className='no-recipe-container'><p>You do not have any saved recipes yet!</p></div> :
                <CarouselProvider {...settings}>
                    <Slider>
                        {recipes.map((item, index) =>(
                            <Slide key={index} index={index + 1}>
                                <div className='my-recipe-card'>
                                    <Link to={`/view/recipe/${item.recipe_id}`}>
                                        <div className='my-recipe-card-info'>
                                        {item.image ? <img src={item.image} alt='recipe'/> :
                                            <img src={'/images/utensils.png'} alt='recipe'/>}
                                                <div className='detail-info'>
                                                    <p>{item.recipeName}</p>
                                                    <p>Prep Time: {item.prep_time}</p>
                                                    <p>Cook Time: {item.cook_time}</p>
                                                </div>
                                        </div>
                                    </Link>
                                </div>
                        
                            </Slide>
                        ))}
                    </Slider>
                </CarouselProvider>
                }
            </div>
        </div>
    )
};

export default DashboardMyRecipes;