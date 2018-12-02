import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/header";
import AnimatedRoute from "./hoc/animatedSwitch";

//components
import { Home } from "./pages/home";
import About from "./pages/about";
import Skills from "./pages/skills";
import Unknown from "./pages/unknown";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <AnimatedRoute>
            {location => (
              <Switch location={location}>
                <Route exact path="/" render={props => <Home {...props} />} />
                <Route
                  exact
                  path="/about"
                  render={props => <About {...props} />}
                />
                <Route
                  exact
                  path="/skills"
                  render={props => <Skills {...props} />}
                />
                <Route render={props => <Unknown />} />
              </Switch>
            )}
          </AnimatedRoute>
        </div>
      </Router>
    );
  }
}

export default App;
