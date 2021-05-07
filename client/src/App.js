import React, {useState} from 'react';
import './App.css';
import {Route, Switch,Redirect} from 'react-router-dom';

// Components
import Navbar from '../src/components/common/navigation/Navbar';
import LandingPageContainer from '../src/components/pages/landing-page/LandingPageContainer';
import OnboardingForm from '../src/components/pages/onboarding/OnboardingForm';
import LoginForm from '../src/components/pages/user-login/LoginForm';
import PublicRecipeContainer from '../src/components/pages/public-recipes/PublicRecipeContainer';
import UsersRecipes from '../src/components/pages/users-recipes/UsersRecipes';
import UserDashboard from '../src/components/pages/user-dashboard/UserDashboard';
import AddForm from '../src/components/pages/add-recipe/AddForm';
import Ingredients from '../src/components/pages/add-recipe/Ingredients';
import ViewRecipe from '../src/components/pages/recipe-description/ViewRecipe';
import ViewIngredients from '../src/components/pages/recipe-description/ViewIngredients';
import ViewSteps from '../src/components/pages/recipe-description/ViewSteps';
import UserFavorite from '../src/components/pages/favorites/UserFavorite';

function App() {
  const [user, setUser] = useState('');

  return (
    <div className="App">

      <Navbar user={user}/>

      {/* Routes */}
      <Switch>
        <Route exact path='/'>
          {user ? <Redirect to={`/dashboard/${user.user.username}`}/> : 
          <LandingPageContainer/>}
        </Route>

        <Route path='/sign-up'>
          <OnboardingForm/>
        </Route>

        <Route path='/login'>
          <LoginForm user={user} setUser={setUser}/>
        </Route>
        
        <Route path='/favorites/:userId'>
          <UserFavorite/>
        </Route>

        <Route path='/public-recipes'>
          <PublicRecipeContainer user={user}/>
        </Route>

        <Route path='/recipes/user/:id'>
          <UsersRecipes/>
        </Route>

        <Route path='/dashboard/:username'>
          <UserDashboard user={user}/>
        </Route>

        <Route path='/user/:id/recipe/add'>
          <AddForm/>
        </Route>

        <Route path='/view/recipe/:id'>
          <ViewRecipe user={user}/>
        </Route>

      </Switch>


    </div>
  );
}

export default App;
