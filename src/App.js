import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import Home from "./pages/Home";
import Detail from "./pages/Details";

import "./App.css";
import "bulma/css/bulma.css";

function App() {
  return (
    <Router className="App">
      <Route exact path="/" component={Home} />
      <Route path="/detail/:movieId" component={Detail} />
    </Router>
  );
}

export default App;
