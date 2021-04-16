import LoginHooks from './LoginHooks';
import LogoutHooks from './LogoutHooks';
import React from "react";
import MainPage from './MainPage';

import './App.css';

import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

export default function App() {
  return (
    <Router>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/home" component={HomePage} />
    </Router>
  );
}

function Welcome() {
  return(
    <div className="App">
      <LoginHooks />
      <LogoutHooks />      
    </div>    
  ) 
}

function HomePage() {
  return (
    <MainPage />
  )
}