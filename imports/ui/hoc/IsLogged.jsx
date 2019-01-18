import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'
import { Tracker } from 'meteor/tracker'
import { Redirect } from 'react-router'

const IsLogged = WrappedComponent => (

  class extends Component {
    constructor() {
      super()
      this.state = {
        logged: undefined,
        loading: true
      }
    }

    componentDidMount() {
      Tracker.autorun(() => {
        const logged = Meteor.userId()
        const loading = Meteor.loggingIn()
        this.setState({ logged, loading })
      })
    }

    render() {
      const { logged, loading } = this.state

      if (loading) return <p>Loading...</p>

      return logged
        ? <WrappedComponent {...this.props} userId={logged} />
        : <Redirect to='/login' />
    }
  }
)

export default IsLogged
