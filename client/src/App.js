import { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import NavBar from './components/NavBar';
import Signup from './components/Signup';
import Home from './components/Home';
import Profile from './components/Profile';

function App() {

  const [currentUser, setCurrentUser] = useState({})
  const [loggedIn, setLoggedIn] = useState(false)
  const [visible, setVisible] = useState(false)

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
      <NavBar
        loggedIn={loggedIn}
        currentUser={currentUser}
        setLoggedIn={setLoggedIn}
        setCurrentUser={setCurrentUser}
        visible={visible}
        setVisible={setVisible} />
      <div className="app">
        <Switch>
          <Route path="/signup">
            <Signup
              setCurrentUser={setCurrentUser}
              setLoggedIn={setLoggedIn} />
          </Route>
          <Route path="/login">
            <Login
              setCurrentUser={setCurrentUser}
              setLoggedIn={setLoggedIn}
              visible={visible}
              setVisible={setVisible} />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
