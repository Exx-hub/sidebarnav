import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { IconContext } from "react-icons";

import About from "./components/About";
import Contact from "./components/Contact";
import Register from "./components/Register";

function App() {
  return (
    <IconContext.Provider value={{ color: "gray" }}>
      <div className="App">
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" />
            <Route exact path="/About" component={About} />
            <Route exact path="/Contact" component={Contact} />
            <Route exact path="/Register" component={Register} />
          </Switch>
        </Router>
      </div>
    </IconContext.Provider>
  );
}

export default App;
