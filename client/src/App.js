import React, {useState} from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';

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

      <Navbar/>

      {/* Routes */}
      <Switch>
        <Route exact path='/'>
          <LandingPageContainer/>
        </Route>

        <Route path='/sign-up'>
          <OnboardingForm/>
        </Route>

        <Route path='/login'>
          <LoginForm user={user} setUser={setUser}/>
        </Route>

        <Route path='/public-recipes'>
          <PublicRecipeContainer/>
        </Route>

        <Route path='/recipes/'>
          <UsersRecipes/>
        </Route>
      </Switch>


    </div>
  );
}

export default App;
