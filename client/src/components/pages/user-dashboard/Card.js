import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';

function Card({data}){
  console.log(data)

    return (
        <>
      {      data.map((item, index) =>(

        <div key={index} className='dash-card-container'>
        <Link to={`/view/recipe/${item.recipeId}`}><div className='dash-card-info'>
          {item.image !== '' ? <img src='/images/utensils.png' alt='recipe holder'/> : <img src={item.image} alt='recipe'/> }
                <p>{item.recipeName}</p>
                <p>Prep Time: {item.prep_time}</p>
                <p>Cook Time: {item.cook_time}</p>
            </div>
          </Link>
        </div>
      ))
      }
      </>
    )
};

export default Card;