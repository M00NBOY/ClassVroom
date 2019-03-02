import { Meteor } from "meteor/meteor"
import { Roles } from 'meteor/alanning:roles'

Meteor.publish('users', () => Meteor.users.find())

/**
 * Allow remove own account
 */
Meteor.users.allow({
  remove(userId, doc) {
    return userId === doc._id
  }
});

/**
 * Meteor calls
 */
Meteor.methods({
  addStudentRole () {
    Roles.addUsersToRoles(this.userId, 'Student')
  }
})
