import React from 'react'
// components
import Menu from "../components/Menu"

const WithMenu = Component => {
    return (
      <div>
        <Menu/>
        <Component/>
      </div>
    )
}

export default WithMenu