import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

// components
import Friends from './components/Friends';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <nav>
        <Link to='/login'>Login</Link>
        <Link to='/friends'>Friends</Link>
      </nav>
      <Switch>
        <PrivateRoute exact path='/friends' component={Friends} />
        <Route component={Login} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
