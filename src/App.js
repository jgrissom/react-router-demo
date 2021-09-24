// Repository:  react-router-demo
// Author:      Jeff Grissom
// Version:     1.xx

import './App.css';
import Home from "./components/Home";
import Products from "./components/Products";
import About from "./components/About";
import NoMatch from "./components/NoMatch";

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>&nbsp;|&nbsp;
        <Link to="/products">Products</Link>&nbsp;|&nbsp;
        <Link to="/about">About</Link>
      </div>
      <h2>
        Super Cool Products for Sale!
      </h2>
      <hr />
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
      <hr />
      <h5>
        &copy; 2021 Super Cool Products, LLC
      </h5>
    </Router>
  );
}

export default App;
