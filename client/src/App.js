import { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import NavBar from './components/NavBar';
import Signup from './components/Signup';

function App() {


  return (
    <BrowserRouter>
      <NavBar />
      <div className="App">
        <Switch>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <h1>Hello World!</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
