import React from 'react';
import HeroBanner from './HeroBanner';
import InfoCards from './InfoCards';
import GetStarted from './GetStarted';
import './landing.css';


function LandingPageContainer() {
  return (
    <div className="landing-page-container">
        <HeroBanner/>
        <InfoCards/>
        <GetStarted/>
    </div>
  );
}

export default LandingPageContainer;