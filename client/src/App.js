import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Navbar from '../src/components/common/navigation/Navbar';
import LandingPageContainer from '../src/components/pages/landing-page/LandingPageContainer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <LandingPageContainer/>
    </div>
  );
}

export default App;
