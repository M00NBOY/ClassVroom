import React, {Component} from "react"

class Home extends Component {
  logout = () => {
    Meteor.logout()
  }
  render () {
    return (
    <div className="home">
      <p>Home</p>
      <button onClick={this.logout}>Déconnexion</button>
    </div>
  )}
}

export default Home