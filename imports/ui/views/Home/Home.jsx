import React, {Component} from "react"
import WithMenu from '../../hoc/WithMenu'
class Home extends Component {

  render () {
    return (
    <div className="home">
      <p>Home</p>
    </div>
  )}
}

export default WithMenu(Home)