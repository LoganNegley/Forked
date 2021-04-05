import React from 'react';

function InfoCards() {
  return (
    <div className="cards-container">
        <h3>Why Forked</h3>
        <div className='card'>
            <img src='images/checklist_icon.png'/>
            <p>Create shopping lists with ingredients from your favorite recipes</p>
        </div>
        <div className='card'>
            <img src='images/share_icon_V2.png'/>
            <p>Share your recipes with others and get inspiration from shared recipes</p>
        </div>
        <div className='card'>
            <img src='images/heart_icon_V3.png'/>
            <p>Easily add your recipes to a list of favorites for easy access.</p>
        </div>
    </div>
  );
}

export default InfoCards;