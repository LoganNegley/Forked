import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Navbar from '../src/components/common/navigation/Navbar';
import LandingPageContainer from '../src/components/pages/landing-page/LandingPageContainer';
import OnboardingContainer from '../src/components/pages/onboarding/OnboardingContainer';


function App() {
  return (
    <div className="App">
      <Navbar/>

      <Switch>
        <Route exact path='/'>
          <LandingPageContainer/>
        </Route>

        <Route path='/sign-up'>
          <OnboardingContainer/>
        </Route>
        
      </Switch>
    </div>
  );
}

export default App;
