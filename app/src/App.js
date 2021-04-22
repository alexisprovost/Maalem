import LoginHooks from './LoginHooks';
import LogoutHooks from './LogoutHooks';
import React from "react";
import MainPage from './MainPage';
import HomePage from './HomePage';

import {
  BrowserRouter as Router,
  Route,
  Redirect
} from "react-router-dom";
import Switch from 'react-bootstrap/esm/Switch';

export default function App() {
  return (
    <Switch>     
      <Router>
          <Redirect exact from="/" to="/home" />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/app" component={MainPage} />
      </Router>
    </Switch>
  );
}