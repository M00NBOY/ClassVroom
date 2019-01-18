import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Meteor } from 'meteor/meteor';
import classNames from 'classnames'

import Input from "../../components/Input"

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      error: false
    }
  }

  updateValue = (label, value) => {
    this.setState({
      [label]: value
    })
  }

  submit = (e) => {
    e.preventDefault()

    const { email, password } = this.state
    Meteor.loginWithPassword(email, password, err => {
      if(err){
        this.setState({
          error: err.reason === "User not found" ? "user" : "password"
        })
      }
    })
  }

  render () {
    const {email, password, error} = this.state
    return(
      <div>
        <h3>Connexion</h3>
        <form onSubmit={ this.submit }>
          <label htmlFor="email">Adresse e-mail</label>
          <Input label="email" value={email} type="text" placeholder="eric.priou@mail.fr" error={error==="user"} errormessage="Votre adresse mail n’est pas valide" onUpdate={ this.updateValue }/>
          <label htmlFor="password">Mot de passe</label>
          <Input label="password" value={password} type="password" placeholder="8 caractères ou +" error={error==="password"} errormessage="Votre mot de passe est incorrecte" onUpdate={ this.updateValue }/>
          <input type="submit" value="Se connecter"/>
        </form>
        <Link to="/register">Créer un compte</Link>
      </div>
    )
  }
}

export default Login