import { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import NavBar from './components/NavBar';
import Signup from './components/Signup';
import Home from './components/Home';
import Profile from './components/Profile';
import Programs from './components/Programs';
import ASFooter from './components/ASFooter';
import Connectivity from './components/Connectivity';
import Messages from './components/Messages';

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
  const [profPhoto, setProfPhoto] = useState([])
  const [friendRequests, setFriendRequests] = useState([])

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
                fetchProfPhoto(user.id)
                setFriendRequests(user.senders)
              }
            )
        }
      }
      )
  }, [loggedIn]);

  function fetchProfPhoto(id) {
    fetch(`/current_user_photos?id=${id}`)
      .then(r => r.json())
      .then(photosArr => {
        setProfPhoto(photosArr)
      })
  }


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
    fetch(`/unfriend?friend_id=${user.id}&requester_id=${currentUser.id}`, { method: "DELETE" })
      .then(res => {
        if (res.ok) {
          setMyFriends(myFriends.filter(friend => friend.id !== user.id))
        }
      })
    fetch(`/unfriend?friend_id=${currentUser.id}&requester_id=${user.id}`, { method: "DELETE" })
  }

  function onFriend(user) {
    fetch(`/delete_request?sender=${user.id}&receiver=${currentUser.id}`, { method: "DELETE" })
      .then(res => {
        if (res.ok) {
          setFriendRequests(friendRequests.filter(request => request.id !== user.id))
        }
      })
  }

  function newFriendRequest(user) {
    const request = {
      sender_id: currentUser.id,
      receiver_id: user.id
    }
    fetch('/friend_requests', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(request)
    })
  }

  function reciprocateFriend(user) {
    const newFriend = {
      friend_id: currentUser.id,
      requester_id: user.id
    }
    fetch('/friendships', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFriend),
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
        errorsFunction={errorsFunction}
        profPhoto={profPhoto} />
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
          {currentUser &&
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
                onUnfriend={onUnfriend}
                profPhoto={profPhoto}
                friendRequests={friendRequests}
                onFriend={onFriend}
                toAddFriend={toAddFriend}
                reciprocateFriend={reciprocateFriend} />
            </Route>
          }
          <Route exact path="/messages">
            <Messages currentUser={currentUser} myFriends={myFriends} />
          </Route>
          <Route exact path="/connectivity">
            <Connectivity publicUsers={publicUsers} newFriendRequest={newFriendRequest} currentUser={currentUser} />
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
