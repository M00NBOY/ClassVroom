import React, { Component } from 'react';
import { Redirect } from "react-router";
import { Accounts } from 'meteor/accounts-base'
import WithMenu from '../../hoc/WithMenu'
import IsLogged from '../../hoc/IsLogged'

// components
import Input from "../../components/Input"

class ProfileEdit extends Component {
  constructor (props) {
    super(props)

    this.state= {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
      submitted:false
    }
  }

  updateValue = (label, value) => {
    this.setState({
      [label]: value
    })
  }

  submit = (e) => {
    e.preventDefault()
    const {oldPassword, newPassword, confirmPassword} = this.state
    if (newPassword !== confirmPassword) return
    Accounts.changePassword( oldPassword, newPassword, err => err ? console.log(err) : this.setState({submitted:true}))
  }

  render () {
    const {oldPassword, newPassword, confirmPassword, submitted} = this.state
    return(
      <form onSubmit={this.submit}>
        <p>Edition</p>
        <label htmlFor="oldPassword">Ancien mot de passe</label>
        <Input label="oldPassword" value={oldPassword} type="password" onUpdate={ this.updateValue }/>
        <label htmlFor="newPassword">Nouveau mot de passe</label>
        <Input label="newPassword" value={newPassword} type="password" onUpdate={ this.updateValue }/>
        <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
        <Input label="confirmPassword" value={confirmPassword} type="password" onUpdate={ this.updateValue }/>
        <input type="submit" value="Envoyer"/>
        { submitted && (<Redirect to="/profile"/>)}
      </form>
    )
  }
}

export default IsLogged(WithMenu(ProfileEdit))