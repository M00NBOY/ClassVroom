import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'
import { withTracker } from 'meteor/react-meteor-data'
import { Redirect } from 'react-router'

const IsLogged = WrappedComponent => (
    class extends Component {
        render () {
            const { userId } = this.props
            // const userId = true
            return userId
              ? <WrappedComponent {...this.props} />
              : <Redirect to='/login' />
         }
    }
)

export default IsLogged

// export default withTracker(() => ({
//   userId: Meteor.userId()
// }))(IsLogged)
// https://github.com/meteor/meteor/issues/9934
