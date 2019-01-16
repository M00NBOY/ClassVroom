import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';
 
// App component - represents the whole app
class App extends Component {
  constructor(props) {
    super(props)
  }
 
  render() {
    return (
      <div className="container">
        <p>test</p>
      </div>
    );
  }
}

export default withTracker(() => {
    return {

    };
  })(App);