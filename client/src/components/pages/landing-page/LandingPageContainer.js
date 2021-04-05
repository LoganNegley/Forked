import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HeroBanner from './HeroBanner';



function LandingPageContainer() {
  return (
    <div className="landing-page-container">
        <HeroBanner/>
    </div>
  );
}

export default LandingPageContainer;