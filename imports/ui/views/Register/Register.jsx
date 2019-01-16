import React, {Component} from "react"
import { Accounts } from 'meteor/accounts-base'
import { Link } from "react-router-dom";

class Register extends Component {

  submit = (e) => {
    e.preventDefault()
    const {
      email: { value: email },
      password: { value: password },
      confirmpassword: { value: confirmpassword },
      firstname: { value: firstname },
      lastname: { value: lastname }
    } = e.target

    if (password !== confirmpassword) return
    

    Accounts.createUser({
      email,
      password,
      profile: {
        firstname,
        lastname
      }
    }), err => err ? console.log(err) : console.log("No error")
  }

  render () {
    return (
    <div className="register">
      <h3>Créer un compte</h3>
      <form onSubmit={ this.submit }>
        <label htmlFor="email">Email</label>
        <input name="email" id="email" type="email"/>
        <label htmlFor="lastname">Nom</label>
        <input name="lastname" id="lastname" type="text"/>
        <label htmlFor="firstname">Prénom</label>
        <input name="firstname" id="firstname" type="text"/>
        <label htmlFor="password">Mot de passe</label>
        <input name="password" id="password" type="password"/>
        <label htmlFor="confirm-password">Confirmer mot de passe</label>
        <input name="confirmpassword" id="confirmpassword" type="password"/>
        <input type="submit" value="Créer son compte"/>
      </form>
      <Link to="/">Se connecter</Link>
    </div>
  )}
}

export default Register