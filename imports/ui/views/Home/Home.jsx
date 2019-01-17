import React, {Component} from "react"
import WithMenu from '../../hoc/WithMenu'
import IsLogged from '../../hoc/IsLogged'

class Home extends Component {
  render () {
    return (
    <div className="home">
      <p>Home</p>
    </div>
  )}
}

export default IsLogged(WithMenu(Home))