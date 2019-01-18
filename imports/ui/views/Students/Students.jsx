import React, {Component} from "react"
import { withTracker } from 'meteor/react-meteor-data'
import { Link } from 'react-router-dom'
import WithMenu from '../../hoc/WithMenu'
import IsLogged from '../../hoc/IsLogged'

class Students extends Component {

  render () {
    const { students, userId } = this.props
    console.log(students)
    return (
    <div className="students">
      <p>Students</p>
      <ul>
        {/* .filter(({ _id }) => true_id !== userId) */}
        {students.map(({ _id, profile: { firstname, lastname } }) => (
          <li key={_id}>
            <Link to={`/students/${_id}`}>{firstname} {lastname}</Link>
          </li>
        ))}
      </ul>
    </div>
  )}
}

export default withTracker(() => {
  return {
    students: Meteor.users.find().fetch()
  };
})(IsLogged(WithMenu(Students)));
