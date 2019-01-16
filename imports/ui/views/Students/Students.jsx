import React, {Component} from "react"

class Students extends Component {

  render () {
    const { students } = this.props
    console.log(students)
    return (
    <div className="students">
      <p>Students</p>
      <ul>
        {students.map(({ profile: { firstname, lastname } }, _id) => (
          <li key={_id}>
            <span>{firstname} {lastname}</span>
          </li>
        ))}
      </ul>
    </div>
  )}
}

export default Students
