import React, {Component} from "react"

class Students extends Component {
  logout = () => {
    Meteor.logout()
  }
  render () {
    return (
    <div className="students">
      <p>Students</p>
      <button onClick={this.logout}>Déconnexion</button>
    </div>
  )}
}

export default Students