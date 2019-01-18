import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';
import { Router, Route, Switch, Redirect } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

// views
import Home from "./views/Home/Home.jsx"
import Students from "./views/Students/Students.jsx"
import StudentProfile from "./views/Students/StudentProfile"
import Login from "./views/Login/Login.jsx"
import Register from "./views/Register/Register.jsx"
import Exercice from "./views/Exercice/Exercice.jsx"

import Profile from "./views/Profile/Profile.jsx"
import ProfileEdit from "./views/Profile/ProfileEdit.jsx"
import ProfileChangePassword from "./views/Profile/ProfileChangePassword.jsx"
import ProfileDeleteAccount from "./views/Profile/ProfileDeleteAccount.jsx"

// Browser history
const history = createBrowserHistory();

// const WithRouterProps = props => (

// )

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
          {/* <Route exact path="/"                       component={Home} /> */}
          <Route exact path="/"                       render={props => <Home {...props} /> }/>

          <Route exact path="/students"               component={Students}/>
          <Route exact path="/students/:studentId"    render={props => <StudentProfile  {...props} /> }/>
          <Route exact path="/exercice"               render={props => <Exercice />}/>
          <Route exact path="/profile"                render={props => <Profile        currentUser={user}/>}/>
          <Route exact path="/profile/edit"           render={props => <ProfileEdit    currentUser={user}/>}/>
          <Route exact path="/profile/changepassword" render={props => <ProfileChangePassword />}/>
          <Route exact path="/profile/deleteaccount"  render={props => <ProfileDeleteAccount />}/>

          <Route exact path="/register"               render={props => !userId ? <Register/> : <Redirect to="/"/>}/>
          <Route exact path="/login"                  render={props => !userId ? <Login/> : <Redirect to="/"/>}/>
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