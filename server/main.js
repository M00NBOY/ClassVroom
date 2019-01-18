import { Meteor } from "meteor/meteor"

Meteor.publish('users', () => Meteor.users.find())

/**
 * Allow remove own account
 */
Meteor.users.allow({
  remove(userId, doc) {
    return userId === doc._id
  }
});