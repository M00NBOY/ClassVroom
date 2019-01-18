import React, { Component } from 'react';
import { Redirect } from "react-router";
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

  componentWillMount () {
    this.initState()
  }
  componentWillReceiveProps () {
    this.initState()
  }

  initState = () => {
    const { currentUser = {} } = this.props
    const { profile: { firstname, lastname, github } = {} } = currentUser
    this.setState({lastname:lastname || "", firstname: firstname || "", github: github || ""})
  }

  updateValue = (label, value) => {
    this.setState({
      [label]: value
    })
  }

  submit = (e) => {
    e.preventDefault()
    const {lastname, firstname, github} = this.state
    Meteor.users.update({_id: this.props.currentUser._id}, {
      $set: {
        profile: {lastname, firstname, github}
      }
    }, err => err ? console.log(err) : this.setState({submitted:true}))
  }

  render () {
    const {lastname, firstname, github, submitted} = this.state
    return(
      <form onSubmit={this.submit}>
        <p>Edition</p>
        <label htmlFor="lastname">Nom</label>
        <Input label="lastname" value={lastname} type="text" onUpdate={ this.updateValue }/>
        <label htmlFor="firstname">Prénom</label>
        <Input label="firstname" value={firstname} type="text" onUpdate={ this.updateValue }/>
        <label htmlFor="github">Github</label>
        <Input label="github" value={github} type="text" onUpdate={ this.updateValue }/>
        <input type="submit" value="Envoyer"/>
        { submitted && (<Redirect to="/profile"/>)}
      </form>
    )
  }
}

export default IsLogged(WithMenu(ProfileEdit))