const _ = require('underscore')

// Helper function to get a value from a Backbone object as a property
// or as a function.
module.exports = function getValue (object, prop) {
  if (!(object && object[prop])) {
    return null
  }

  return _.isFunction(object[prop]) ? object[prop]() : object[prop]
}
