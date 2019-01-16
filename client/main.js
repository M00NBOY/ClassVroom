import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
 
import "./assets/stylesheets/main.scss";

import App from '../imports/ui/App.js';
 
Meteor.startup(() => {
  render(<App />, document.getElementById('root'));
});