import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Meteor } from 'meteor/meteor';

class Login extends Component {
  submit = (e) => {
    e.preventDefault()

    const {
      email: { value: email },
      password: { value: password }
    } = e.target
    console.log("test")
    Meteor.loginWithPassword(email, password, err =>{
      if(err){
        console.error(err)
      } else {
        console.log("pas d'erreur")
      }
    })
  }

  render () {
    return(
      <div>
        <h3>Connexion</h3>
        <form onSubmit={ this.submit }>
          <label htmlFor="email">Adresse e-mail</label>
          <input name="email" id="email" type="email"/>
          <label htmlFor="password">Mot de passe</label>
          <input name="password" id="password" type="password"/>
          <input type="submit" value="Se connecter"/>
        </form>
        <Link to="/register">Créer un compte</Link>
      </div>
    )
  }
}

export default Login