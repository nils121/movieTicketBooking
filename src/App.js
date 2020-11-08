import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/login/Login';
import Register from './components/register/Register';
import SeatBookComponent from './components/seatbook/SeatBookComponent';

import './App.css';

function App() {
  console.log("env", process.env.REACT_APP_TOT_SEATS)
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/seatbook">
            <SeatBookComponent />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
