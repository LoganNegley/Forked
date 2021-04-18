import React, {useState} from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
// Context Data
import UserContext from '../src/state/UserContext';
// Components
import Navbar from '../src/components/common/navigation/Navbar';
import LandingPageContainer from '../src/components/pages/landing-page/LandingPageContainer';
import OnboardingForm from '../src/components/pages/onboarding/OnboardingForm';
import LoginForm from '../src/components/pages/user-login/LoginForm';
import PublicRecipeContainer from '../src/components/pages/public-recipes/PublicRecipeContainer';
import UsersRecipes from '../src/components/pages/users-recipes/UsersRecipes';

function App() {
  const [user, setUser] = useState({});

  return (
    <div className="App">
      <UserContext.Provider value={user}>

      <Navbar/>

      {/* Routes */}
      <Switch>
        <Route exact path='/' component={LandingPageContainer}/>
        <Route path='/sign-up' component={OnboardingForm}/>
        <Route path='/login' component={LoginForm}/>
        <Route path='/public-recipes' component={PublicRecipeContainer}/>
        <Route path='/recipes/' component={UsersRecipes}/>
      </Switch>

      </UserContext.Provider>
    </div>
  );
}

export default App;
