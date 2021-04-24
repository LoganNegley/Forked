import React, {useEffect} from 'react';

function Card({data}){

    return (
        <>
      {      data.map((item, index) =>(

        <div key={index} className='dash-card-container'>
        <div className='dash-card-info'>
          {item.image !== '' ? <img src='/images/utensils.png' alt='recipe holder'/> : <img src={item.image} alt='recipe'/> }
                <p>{item.recipeName}</p>
                <p>Prep Time: {item.prep_time}</p>
                <p>Cook Time: {item.cook_time}</p>
            </div>
        </div>
      ))
      }
      </>
    )
};

export default Card;