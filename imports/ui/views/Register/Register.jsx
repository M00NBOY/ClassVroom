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
      confirmpassword: "",
      errors: {
        email: false,
        lastname: false,
        firstname: false,
        password: false,
        confirmpassword: false,
      }
    }
  }

  updateValue = (label, value) => {
    this.setState({
      [label]: value
    })
  }

  handleError () {
    const {lastname, firstname, password, confirmpassword} = this.state
    this.setState ({
      errors: {
        ...this.state.errors, lastname: !lastname, firstname: !firstname, password: password.length<8, confirmpassword: password!==confirmpassword
      }
    })
    return !lastname || !firstname || password.length<8 || password!==confirmpassword
  }

  submit = (e) => {
    e.preventDefault()
    const { email, password, confirmpassword, firstname, lastname } = this.state
    if (this.handleError()) return
    let id = Accounts.createUser({
      email,
      password,
      profile: {
        firstname,
        lastname
      }
    }, err => {
      if(err) {
        this.setState({
          errors: {
            ...this.state.errors, email: err.reason === "Email already exists."
          }
        })
      } else {
        Meteor.call("addStudentRole")
      }
    })
  }

  render () {
    const { email, password, confirmpassword, firstname, lastname, errors } = this.state
    return (
    <div className="register">
      <h3>Créer un compte</h3>
      <form onSubmit={ this.submit }>
        <label htmlFor="email">Email</label>
        <Input label="email" value={email} type="email" errormessage="Cette addresse email est déjà utilisée" error={errors.email} onUpdate={ this.updateValue }/>
        <label htmlFor="lastname">Nom</label>
        <Input label="lastname" value={lastname} type="text" errormessage="Ce champ doit être renseigné" error={errors.lastname} onUpdate={ this.updateValue }/>
        <label htmlFor="firstname">Prénom</label>
        <Input label="firstname" value={firstname} type="text" errormessage="Ce champ doit être renseigné" error={errors.firstname} onUpdate={ this.updateValue }/>
        <label htmlFor="password">Mot de passe</label>
        <Input label="password" value={password} type="password" errormessage="Le mot de passe doit comporter 8 caractère ou plus" error={errors.password} onUpdate={ this.updateValue }/>
        <label htmlFor="confirm-password">Confirmer mot de passe</label>
        <Input label="confirmpassword" value={confirmpassword} type="password" errormessage="Confirmez mieux votre mot de passe" error={errors.confirmpassword} onUpdate={ this.updateValue }/>
        <input type="submit" value="Créer son compte"/>
      </form>
      <Link to="/">Se connecter</Link>
    </div>
  )}
}

export default Register