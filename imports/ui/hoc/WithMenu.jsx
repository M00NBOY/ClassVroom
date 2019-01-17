import React, { Component } from 'react'

import Menu from "../components/Menu"


const WithMenu = WrappedComponent => (
  class extends Component {
    render () {
      return (
        <div>
          <Menu/>
          <WrappedComponent {...this.props} />
          <button onClick={() => Meteor.logout()}>Déconnexion</button>
        </div>
      )
    }
  }
)

export default WithMenu