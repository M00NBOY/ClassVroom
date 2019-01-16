import React, {Component} from "react"

class Exercice extends Component {
  logout = () => {
    Meteor.logout()
  }
  render () {
    return (
    <div className="exercice">
      <p>Exercice</p>
      <button onClick={this.logout}>Déconnexion</button>
    </div>
  )}
}

export default Exercice