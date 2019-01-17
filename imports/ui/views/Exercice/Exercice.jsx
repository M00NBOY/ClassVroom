import React, {Component} from "react"
import WithMenu from "../../hoc/WithMenu.jsx"
import IsLogged from "../../hoc/IsLogged.jsx"

class Exercice extends Component {
  logout = () => {
    Meteor.logout()
  }
  render () {
    return (
    <div className="exercice">
      <p>Exercice</p>
    </div>
  )}
}

export default IsLogged(WithMenu(Exercice))