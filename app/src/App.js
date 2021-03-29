import LoginHooks from './LoginHooks';
import LogoutHooks from './LogoutHooks';
import testRun from "./cartes/testRun.js";
import Boutons from "./boutons/script";
import React, { Component } from "react";

import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

export default function App() {
  return (
    <Router>
          <Route exact path="/home" component={testRun} />
          <Route exact path="/" component={Welcome} />
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

function Home() {
  return (
      <div className="Home">
        <testRun />
        <Boutons />
      </div>
    )
}