import React, { Component } from 'react'

import Menu from "../components/Menu"

const style = {
  logoutButton: {
    position: 'fixed',
    top: '30px',
    right: '30px'
  }
}

const WithMenu = WrappedComponent => (
  class extends Component {
    render () {
      return (
        <div>
          <Menu/>
          <WrappedComponent {...this.props} />
          <button style={style.logoutButton} onClick={() => Meteor.logout()}>Déconnexion</button>
        </div>
      )
    }
  }
)

export default WithMenu