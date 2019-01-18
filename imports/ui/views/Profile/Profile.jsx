import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Meteor } from 'meteor/meteor';
import WithMenu from '../../hoc/WithMenu'
import IsLogged from '../../hoc/IsLogged'

class Profile extends Component {



  render () {
    const { firstname, lastname, github } = this.props.currentUser ? this.props.currentUser.profile : {}

    return(
      <div>
        <p>{`Bonjour ${firstname} ${lastname}!`}</p>
        {github && (<p>Github: <a href={github}>{github}</a></p>)}
        <Link to="/profile/edit">Editer</Link>
        <Link to="/profile/changepassword">Changer votre mot de passe</Link>
        <Link to="/profile/deleteaccount">Fermer le compte</Link>
      </div>
    )
  }
}

export default IsLogged(WithMenu(Profile))