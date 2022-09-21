// import { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import NavBar from './components/NavBar';
import Signup from './components/Signup';
import Home from './components/Home';

function App() {


  return (
    <BrowserRouter>
      <NavBar />
      <div className="app">
        <Switch>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
