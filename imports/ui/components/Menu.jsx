import React, { Component } from "react"
import { Link } from "react-router-dom"

class Menu extends Component {
  render () {
    return (
      <nav>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/students">Etudiants</Link></li>
          <li><Link to="/exercice">Exercices</Link></li>
          <li><Link to="/profile">Profil</Link></li>
        </ul>
      </nav>
    )
  }
}

export default Menu