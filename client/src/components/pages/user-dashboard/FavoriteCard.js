import React, {useEffect} from 'react';

function FavoriteCard({data}){

    return (
        <>
      {      data.map(item =>(

        <div key={item.favorite_id} className='favorite-card'>
        <div className='favorite-card-info'>
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

export default FavoriteCard;