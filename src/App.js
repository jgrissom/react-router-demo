// Repository:  react-router-demo
// Author:      Jeff Grissom
// Version:     1.xx

import './App.css';
import Home from "./components/Home";
import Products from "./components/Products";
import About from "./components/About";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
