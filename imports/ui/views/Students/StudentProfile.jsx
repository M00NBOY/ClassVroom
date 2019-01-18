import React, {Component} from "react"
import { withTracker } from 'meteor/react-meteor-data';

import WithMenu from '../../hoc/WithMenu'
import IsLogged from '../../hoc/IsLogged'

class StudentProfile extends Component {

  render () {
    const { student } = this.props
    console.log(student)
    const { firstname, lastname } = student.profile
    return (
    <div className="students">
      <h1>Student profile</h1>
      {firstname} {lastname}
    </div>
  )}
}

export default withTracker(
  ({ match: { params: { studentId } } }) => {
    return {
      student: Meteor.users.findOne({ _id: studentId })
    }
  }
)(IsLogged(WithMenu(StudentProfile)))