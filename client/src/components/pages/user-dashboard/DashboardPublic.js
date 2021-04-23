import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function DashboardPublic(){
    const [publicRecipe, setPublicRecipe] = useState('');

    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    cssEase:'linear'
  };

    useEffect(() =>{
        axios.get('http://localhost:5000/public/recipes/')
        .then(res =>{
            setPublicRecipe(res.data);
        })
        .catch(error =>{
            console.log(error)
        })
    },[]);

    return(
        <div className='dashboard-section-container'>
            <div className='dashboard-section-heading'>
                <div className='circle-div'></div>
                <h3>Get Inspired</h3>
            </div>
            <Slider {...settings}>
                {publicRecipe.map(item =>(
                    <div className='public-card-wrapper'>
                        <img src='/images/utensils.png'/>
                    </div>
                ))}
            </Slider>
        </div>
    )
};

export default DashboardPublic;