// Repository:  react-router-demo
// Author:      Jeff Grissom
// Version:     1.xx

import './App.css';
import Home from "./components/Home";
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Route path="/home">
        <Home />
      </Route>
    </Router>
  );
}

export default App;
