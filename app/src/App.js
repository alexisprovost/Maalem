import Login from './Login';
import testRun from "./cartes/testRun.js";
import React, { Component } from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
       {/*All our Routes goes here!*/}
       <Route exact path="/" component={Login} />
       <Route exact path="/home" component={testRun} />
      </Router>
    );
  }
}

export default App;