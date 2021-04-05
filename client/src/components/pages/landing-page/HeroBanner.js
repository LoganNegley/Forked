import React from 'react';
import StartedButton from './GetStartedButton';

function HeroBanner(){
    return(
        <div className="hero-banner-container">
            <div className='hero-wrapper'>
                <h4>Stick A Fork In It</h4>
                <h2>The only place to store your recipes</h2>
                <StartedButton/>
            </div>
        </div>
    )
};

export default HeroBanner;