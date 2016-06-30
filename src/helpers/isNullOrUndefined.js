const _ = require('underscore')

module.exports = function isNullOrUndefined (x) {
  return _.isNull(x) || _.isUndefined(x)
}
