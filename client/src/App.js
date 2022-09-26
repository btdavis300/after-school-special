import { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import NavBar from './components/NavBar';
import Signup from './components/Signup';
import Home from './components/Home';
import Profile from './components/Profile';
import MyPrograms from './components/MyPrograms';
import MyConnections from './components/MyConnections';
import Programs from './components/Programs';

function App() {

  const [programs, setPrograms] = useState([])
  const [currentUser, setCurrentUser] = useState({})
  const [loggedIn, setLoggedIn] = useState(false)
  const [visible, setVisible] = useState(false)
  const [profileCard, setProfileCard] = useState(true)
  const [programComp, setProgramComp] = useState(false)
  const [connectionComp, setConnectionComp] = useState(false)
  const [myPrograms, setMyPrograms] = useState([])

  useEffect(() => {
    fetch("/programs")
      .then(r => r.json())
      .then(programsArr => setPrograms(programsArr))
  }, [])

  useEffect(() => {
    fetch(`/logged_in`)
      .then(res => {
        if (res.ok) {
          setLoggedIn(true)
          res.json()
            .then(
              user => {
                setCurrentUser(user)
                setMyPrograms(user.programs)
              }
            )
        }
      }
      )
  }, [loggedIn]);


  function onEnroll(enrolledProgram) {
    const enroll = {
      user_id: currentUser.id,
      program_id: enrolledProgram.id,
      enrolled: true
    }
    fetch('/enrolled_programs', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(enroll),
    })
      .then((res) => res.json())
      .then(setMyPrograms([...myPrograms, enrolledProgram]))

  }

  function onUnenrollment(unerolledProgram) {
    console.log(unerolledProgram)
  }

  return (
    <BrowserRouter>
      <NavBar
        loggedIn={loggedIn}
        currentUser={currentUser}
        setLoggedIn={setLoggedIn}
        setCurrentUser={setCurrentUser}
        visible={visible}
        setVisible={setVisible}
        setProfileCard={setProfileCard}
        setProgramComp={setProgramComp}
        setConnectionComp={setConnectionComp} />
      <div className="app">
        <Switch>
          <Route path="/signup">
            <Signup
              setCurrentUser={setCurrentUser}
              setLoggedIn={setLoggedIn}
              setVisible={setVisible}
              visible={visible}
            />
          </Route>
          <Route exact path="/login">
            <Login
              setCurrentUser={setCurrentUser}
              setLoggedIn={setLoggedIn}
              visible={visible}
              setVisible={setVisible} />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/profile">
            <Profile
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
              setProfileCard={setProfileCard}
              setProgramComp={setProgramComp}
              setConnectionComp={setConnectionComp}
              programComp={programComp}
              connectionComp={connectionComp}
              myPrograms={myPrograms}
              onUnenrollment={onUnenrollment} />
          </Route>
          {/* <Route exact path="/profile/my_programs">
            <MyPrograms
              currentUser={currentUser}
              myPrograms={myPrograms} />
          </Route> */}
          <Route exact path="/profile/my_connections">
            <MyConnections currentUser={currentUser} />
          </Route>
          <Route exact path="/programs">
            <Programs
              currentUser={currentUser}
              programs={programs}
              setPrograms={setPrograms}
              loggedIn={loggedIn}
              onEnroll={onEnroll} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
