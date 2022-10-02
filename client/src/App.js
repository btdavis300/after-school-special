import { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/Login';
import NavBar from './components/NavBar';
import Signup from './components/Signup';
import Home from './components/Home';
import Profile from './components/Profile';
import MyConnections from './components/MyConnections';
import Programs from './components/Programs';
import ASFooter from './components/ASFooter';
import Connectivity from './components/Connectivity';

function App() {

  const [programs, setPrograms] = useState([])
  const [currentUser, setCurrentUser] = useState({})
  const [loggedIn, setLoggedIn] = useState(false)
  const [visible, setVisible] = useState(false)
  const [profileCard, setProfileCard] = useState(true)
  const [programComp, setProgramComp] = useState(false)
  const [connectionComp, setConnectionComp] = useState(false)
  const [myPrograms, setMyPrograms] = useState([])
  const [myFriends, setMyFriends] = useState([])
  const [publicUsers, setPublicUsers] = useState([])
  const [searchErrors, setSearchErrors] = useState([])
  const [redirect, setRedirect] = useState(false)

  useEffect(() => {
    fetch("/programs")
      .then(r => r.json())
      .then(programsArr => setPrograms(programsArr))
  }, [])

  useEffect(() => {
    fetch('/public_users')
      .then(r => r.json())
      .then(publicArr => setPublicUsers(publicArr))
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
                setMyFriends(user.friends)
              }
            )
        }
      }
      )
  }, [loggedIn]);


  function fetchCategory(cat) {
    fetch(`/${cat}`)
      .then(r => r.json())
      .then(data => {
        setPrograms(data)
      })
  }


  function searchFunction(search) {
    setPrograms(search);
    setSearchErrors([])
    setRedirect(true)
  }

  function errorsFunction(errors) {
    setSearchErrors(errors)
    setRedirect(false);
  }

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
    fetch(`/unenrollment?program=${unerolledProgram.id}&user=${currentUser.id}`, { method: "DELETE" })
      .then(res => {
        if (res.ok) {
          setMyPrograms(myPrograms.filter(prog => prog.id !== unerolledProgram.id))
        }
      })

  }

  function toAddFriend(user) {
    const newFriend = {
      friend_id: user.id,
      requester_id: currentUser.id
    }
    fetch('/friendships', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFriend),
    })
      .then(r => r.json())
      .then(setMyFriends([...myFriends, user]))
  }

  function onUnfriend(user) {
    console.log(user)
    fetch(`/unfriend?friend_id=${user.id}&requester_id=${currentUser.id}`, { method: "DELETE" })
      .then(res => {
        if (res.ok) {
          setMyFriends(myFriends.filter(friend => friend.id !== user.id))
        }
      })
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
        setConnectionComp={setConnectionComp}
        searchFunction={searchFunction}
        searchErrors={searchErrors}
        errorsFunction={errorsFunction} />
      <div className="app">
        <Switch>
          <Route path="/signup">
            <Signup
              setCurrentUser={setCurrentUser}
              setLoggedIn={setLoggedIn}
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
              onUnenrollment={onUnenrollment}
              myFriends={myFriends}
              onUnfriend={onUnfriend} />
          </Route>
          <Route exact path="/profile/my_connections">
            <MyConnections currentUser={currentUser} />
          </Route>
          <Route exact path="/connectivity">
            <Connectivity publicUsers={publicUsers} toAddFriend={toAddFriend} />
          </Route>
          <Route exact path="/programs">
            <Programs
              currentUser={currentUser}
              programs={programs}
              loggedIn={loggedIn}
              onEnroll={onEnroll}
              fetchCategory={fetchCategory}
            />
          </Route>
        </Switch>
      </div>
      <ASFooter />
    </BrowserRouter>
  );
}

export default App;
