import React, {useState} from 'react';
import './App.css';
import {Route, Switch,Redirect, useParams} from 'react-router-dom';

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

function App() {
  const [user, setUser] = useState('');
  const {username,recipeId} = useParams();

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

        <Route path='/public-recipes'>
          <PublicRecipeContainer/>
        </Route>

        <Route path='/recipes/'>
          <UsersRecipes/>
        </Route>

        <Route path='/dashboard/:username'>
          <UserDashboard user={user}/>
        </Route>

        <Route path='/username/recipe/add'>
          <AddForm/>
        </Route>

        <Route path='/view/recipe/:id'>
          <ViewRecipe/>
        </Route>

        <Route path='view/recipe/ingredients/:id'>
          <ViewIngredients/>
        </Route>

        <Route path='view/recipe/steps/:id'>
          <ViewSteps/>
        </Route>

      </Switch>


    </div>
  );
}

export default App;
