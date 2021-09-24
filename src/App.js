// Repository:  react-router-demo
// Author:      Jeff Grissom
// Version:     1.xx

import './App.css';
import Home from "./components/Home";
import Products from "./components/Products";
import About from "./components/About";
import NoMatch from "./components/NoMatch";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route>
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
