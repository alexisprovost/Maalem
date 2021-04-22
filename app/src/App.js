import LoginHooks from './LoginHooks';
import LogoutHooks from './LogoutHooks';
import React from "react";
import MainPage from './MainPage';
import HomePage from './HomePage';

import './App.css';

import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

export default function App() {
  return (
    <Router>
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/app" component={MainPage} />
    </Router>
  );
}