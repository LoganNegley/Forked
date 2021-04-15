import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Navbar from '../src/components/common/navigation/Navbar';
import LandingPageContainer from '../src/components/pages/landing-page/LandingPageContainer';
import OnboardingForm from '../src/components/pages/onboarding/OnboardingForm';
import LoginForm from '../src/components/pages/user-login/LoginForm';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <Switch>
        <Route exact path='/'>
          <LandingPageContainer/>
        </Route>

        <Route path='/sign-up'>
          <OnboardingForm/>
        </Route>

        <Route path='/login'>
          <LoginForm/>
        </Route>
        
      </Switch>
    </div>
  );
}

export default App;
