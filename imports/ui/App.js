import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';
import { Router, Route, Switch, Redirect } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

// views
import Home from "./views/Home/Home.jsx"
import Students from "./views/Students/Students.jsx"
import Login from "./views/Login/Login.jsx"
import Register from "./views/Register/Register.jsx"
import Exercice from "./views/Exercice/Exercice.jsx"

import Profile from "./views/Profile/Profile.jsx"
import ProfileEdit from "./views/Profile/ProfileEdit.jsx"
import ProfileChangePassword from "./views/Profile/ProfileChangePassword.jsx"
import ProfileDeleteAccount from "./views/Profile/ProfileDeleteAccount.jsx"

// Browser history
const history = createBrowserHistory();

// App component - represents the whole app
class App extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const { user, userId, students } = this.props
    
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" render={() => <Home userId={userId} />}/>
          <Route exact path="/students" render={() => <Students userId={userId} students={students} /> }/>
          <Route exact path="/exercice" render={() => <Exercice userId={userId} />}/>
          <Route exact path="/profile" render={() => <Profile userId={userId} currentUser={user}/>}/>
          <Route exact path="/profile/edit" render={() => <ProfileEdit userId={userId} currentUser={user}/>}/>
          <Route exact path="/profile/changepassword" render={() => <ProfileChangePassword userId={userId}/>}/>
          <Route exact path="/profile/deleteaccount" render={() => <ProfileDeleteAccount userId={userId}/>}/>

          <Route exact path="/register" render={() => !userId ? <Register/> : <Redirect to="/"/>}/>
          <Route exact path="/login" render={()=> !userId ? <Login/> : <Redirect to="/"/>}/>
        </Switch>
      </Router>
    );
  }
}

export default withTracker(() => {
  console.log("loading",Meteor.loggingIn())
  if (Meteor.userId()) {
    Meteor.subscribe('users')
  }
  return {
    isLogging: Meteor.loggingIn(),
    user: Meteor.user(),
    userId: Meteor.userId(),
    students: Meteor.users.find().fetch()
  };
})(App);