import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';
import { Router, Route, Switch, Redirect } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

// WithMenu
import WithMenu from "./hoc/WithMenu.jsx";

// views
import Home from "./views/Home/Home.jsx"
import Students from "./views/Students/Students.jsx"
import Login from "./views/Login/Login.jsx"
import Register from "./views/Register/Register.jsx"

// Browser history
const history = createBrowserHistory();

// App component - represents the whole app
class App extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const { user } = this.props
    
    return (
      <Router history={history}>
        <Switch>
        <Route exact path="/" render={() => (
            user ? (
              WithMenu(<Home/>)
            ) : (
              <Redirect to="/login"/>
            )
          )}/>
          <Route exact path="/students" render={() => (
            user ? (
              WithMenu(<Students students={this.props.students} />)
            ) : (
              <Redirect to="/login"/>
            )
          )}/>
          <Route exact path="/" render={() => (
            user ? (
              WithMenu(<Home/>)
            ) : (
              <Redirect to="/login"/>
            )
          )}/>
          <Route exact path="/register" render={() => (
            !user ? (
              <Register/>
            ) : (
              <Redirect to="/"/>
            )
          )}/>
          <Route exact path="/login" render={() => (
            !user ? (
              <Login/>
            ) : (
              <Redirect to="/"/>
            )
          )}/>
        </Switch>
      </Router>
    );
  }
}

export default withTracker(() => {
  console.log()
  console.log("logging",Meteor.loggingIn())
  if (Meteor.userId()) {
    Meteor.subscribe('users')
  }
  return {
    isLogging: Meteor.loggingIn(),
    user: Meteor.user(),
    students: Meteor.users.find().fetch()
  };
})(App);