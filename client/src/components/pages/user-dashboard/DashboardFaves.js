import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import FavoriteCard from './FavoriteCard';

function DashboardFaves(){
    return(
        <div className='dashboard-faves-container'>
            <div className='dashboard-section-heading'>
                <div className='circle-div'></div>
                <h3>My Favorites</h3>
            </div>
            <div className='faves-wrapper'>
                <p>Carousel Here</p>
            </div>
        </div>
    )
};

export default DashboardFaves;