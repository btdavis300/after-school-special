import { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import NavBar from './components/NavBar';
import Signup from './components/Signup';
import Home from './components/Home';

function App() {

  const [currentUser, setCurrentUser] = useState({})
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    fetch(`/logged_in`)
      .then(res => {
        if (res.ok) {
          setLoggedIn(true)
          res.json().then(user => setCurrentUser(user))
        }

      }
      )
  }, [loggedIn]);


  return (
    <BrowserRouter>
      <NavBar loggedIn={loggedIn} currentUser={currentUser} setLoggedIn={setLoggedIn} setCurrentUser={setCurrentUser} />
      <div className="app">
        <Switch>
          <Route path="/signup">
            <Signup setCurrentUser={setCurrentUser} setLoggedIn={setLoggedIn} />
          </Route>
          <Route path="/login">
            <Login setCurrentUser={setCurrentUser} setLoggedIn={setLoggedIn} />
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
