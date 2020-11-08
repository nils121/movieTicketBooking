import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/login/Login';
import Register from './components/register/Register';
import SeatBookComponent from './components/seatbook/SeatBookComponent';
import CheckOutComponent from './components/seatbook/CheckOutComponent';

import './App.css';

function App() {
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
          <Route path="/checkout">
            <CheckOutComponent />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
