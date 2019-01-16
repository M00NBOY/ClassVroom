import React from 'react'
// components
import Menu from "../components/Menu"

const WithMenu = Component => {
    return (
      <div>
        <Menu/>
        {(Component)}
        <button onClick={() => Meteor.logout()}>Déconnexion</button>
      </div>
    )
}

export default WithMenu