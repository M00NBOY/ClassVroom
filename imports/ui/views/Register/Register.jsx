import React, {Component} from "react"
import { Accounts } from 'meteor/accounts-base'
import { Link } from "react-router-dom";

import Input from "../../components/Input"

class Register extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: "",
      lastname: "",
      firstname: "",
      password: "",
      confirmpassword: ""
    }
  }

  updateValue = (label, value) => {
    this.setState({
      [label]: value
    })
  }

  submit = (e) => {
    e.preventDefault()

    const { email, password, confirmpassword, firstname, lastname } = this.state

    if (password !== confirmpassword) return
    
    Accounts.createUser({
      email,
      password,
      profile: {
        firstname,
        lastname
      }
    }, err => err ? console.log(err) : console.log("No error"))
  }

  render () {
    const { email, password, confirmpassword, firstname, lastname } = this.state

    return (
    <div className="register">
      <h3>Créer un compte</h3>
      <form onSubmit={ this.submit }>
        <label htmlFor="email">Email</label>
        <Input label="email" value={email} type="text" errormessage="Cette addresse email est déjà utilisée" onUpdate={ this.updateValue }/>
        <label htmlFor="lastname">Nom</label>
        <Input label="lastname" value={lastname} type="text" onUpdate={ this.updateValue }/>
        <label htmlFor="firstname">Prénom</label>
        <Input label="firstname" value={firstname} type="text" onUpdate={ this.updateValue }/>
        <label htmlFor="password">Mot de passe</label>
        <Input label="password" value={password} type="password" onUpdate={ this.updateValue }/>
        <label htmlFor="confirm-password">Confirmer mot de passe</label>
        <Input label="confirmpassword" value={confirmpassword} type="password" onUpdate={ this.updateValue }/>
        <input type="submit" value="Créer son compte"/>
      </form>
      <Link to="/">Se connecter</Link>
    </div>
  )}
}

export default Register