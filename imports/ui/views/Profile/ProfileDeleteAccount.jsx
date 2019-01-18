import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Meteor } from 'meteor/meteor';
import WithMenu from '../../hoc/WithMenu'
import IsLogged from '../../hoc/IsLogged'

// components
import Input from "../../components/Input"

class ProfileEdit extends Component {
  constructor (props) {
    super(props)

    this.state= {
      lastname: "",
      firstname: "",
      github: "",
      submitted:false
    }
  }

  validate = (e) => {
    e.preventDefault()
    Meteor.users.remove(this.props.userId);
  }

  render () {
    return(
      <div>
        <p>U rly want to delete Ur account dood?</p>
        <a href="#" onClick={this.validate}>Yes dood</a>
        <Link to="/profile">Hell no!</Link>
      </div>
    )
  }
}

export default IsLogged(WithMenu(ProfileEdit))