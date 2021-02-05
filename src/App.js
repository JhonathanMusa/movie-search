import React, { Component } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom"; 

import Home from "./pages/Home";
import { Detail } from "./pages/Details";

import "./App.css";
import "bulma/css/bulma.css";

class App extends Component {
  render() {
    return (
      <Router className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/detail/:movieId" component={Detail} />
        </Switch>
      </Router>
    );
  }
}

export default App;
