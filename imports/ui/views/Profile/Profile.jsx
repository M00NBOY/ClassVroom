import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Meteor } from 'meteor/meteor';
import WithMenu from '../../hoc/WithMenu'
import IsLogged from '../../hoc/IsLogged'

class Profile extends Component {

  render () {
    const {
      currentUser = {}
    } = this.props

    const { profile: { firstname, lastname } = {} } = currentUser

    return(
      <div>
        {`Bonjour ${firstname} ${lastname}!`}
      </div>
    )
  }
}

export default IsLogged(WithMenu(Profile))