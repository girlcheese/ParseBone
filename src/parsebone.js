/**
 * Copyright (c) 2015-present, Parse, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict'

const _decode = require('parse/lib/browser/decode')
const _encode = require('parse/lib/browser/encode')
const _CoreManager = require('parse/lib/browser/CoreManager')
const _InstallationController = require('parse/lib/browser/InstallationController')
const _ParseOp = require('parse/lib/browser/ParseOp')
const _RESTController = require('parse/lib/browser/RESTController')

/**
 * Contains all Parse API classes and functions.
 * @class Parse
 * @static
 */
const Parse = {
  /**
   * Call this method first to set up your authentication tokens for Parse.
   * You can get your keys from the Data Browser on parse.com.
   * @method initialize
   * @param {String} applicationId Your Parse Application ID.
   * @param {String} javaScriptKey (optional) Your Parse JavaScript Key (Not needed for parse-server)
   * @param {String} masterKey (optional) Your Parse Master Key. (Node.js only!)
   * @static
   */
  initialize: function initialize (applicationId, javaScriptKey) {
    if (_CoreManager.get('IS_NODE')) {
      console.log('It looks like you\'re using the browser version of the SDK in a node.js environment. You should require(\'parse/node\') instead.')
    }
    Parse._initialize(applicationId, javaScriptKey)
  },

  _initialize: function _initialize (applicationId, javaScriptKey, masterKey) {
    _CoreManager.set('APPLICATION_ID', applicationId)
    _CoreManager.set('JAVASCRIPT_KEY', javaScriptKey)
    _CoreManager.set('MASTER_KEY', masterKey)
    _CoreManager.set('USE_MASTER_KEY', false)
  }
}

/** These legacy setters may eventually be deprecated **/
Object.defineProperty(Parse, 'applicationId', {
  get: function get () {
    return _CoreManager.get('APPLICATION_ID')
  },
  set: function set (value) {
    _CoreManager.set('APPLICATION_ID', value)
  }
})

Object.defineProperty(Parse, 'javaScriptKey', {
  get: function get () {
    return _CoreManager.get('JAVASCRIPT_KEY')
  },
  set: function set (value) {
    _CoreManager.set('JAVASCRIPT_KEY', value)
  }
})

Object.defineProperty(Parse, 'masterKey', {
  get: function get () {
    return _CoreManager.get('MASTER_KEY')
  },
  set: function set (value) {
    _CoreManager.set('MASTER_KEY', value)
  }
})

Object.defineProperty(Parse, 'serverURL', {
  get: function get () {
    return _CoreManager.get('SERVER_URL')
  },
  set: function set (value) {
    _CoreManager.set('SERVER_URL', value)
  }
})

Object.defineProperty(Parse, 'liveQueryServerURL', {
  get: function get () {
    return _CoreManager.get('LIVEQUERY_SERVER_URL')
  },
  set: function set (value) {
    _CoreManager.set('LIVEQUERY_SERVER_URL', value)
  }
})
/** End setters **/

Parse.ACL = require('parse/lib/browser/ParseACL')
Parse.Analytics = require('parse/lib/browser/Analytics')
Parse.Cloud = require('parse/lib/browser/Cloud')
Parse.CoreManager = require('parse/lib/browser/CoreManager')
Parse.Config = require('parse/lib/browser/ParseConfig')
Parse.Error = require('parse/lib/browser/ParseError')
Parse.FacebookUtils = require('parse/lib/browser/FacebookUtils')
Parse.File = require('parse/lib/browser/ParseFile')
Parse.GeoPoint = require('parse/lib/browser/ParseGeoPoint')
Parse.Installation = require('parse/lib/browser/ParseInstallation')
Parse.Object = require('parse/lib/browser/ParseObject')
Parse.Op = {
  Set: _ParseOp.SetOp,
  Unset: _ParseOp.UnsetOp,
  Increment: _ParseOp.IncrementOp,
  Add: _ParseOp.AddOp,
  Remove: _ParseOp.RemoveOp,
  AddUnique: _ParseOp.AddUniqueOp,
  Relation: _ParseOp.RelationOp
}
Parse.Promise = require('parse/lib/browser/ParsePromise')
Parse.Push = require('parse/lib/browser/Push')
Parse.Query = require('parse/lib/browser/ParseQuery')
Parse.Relation = require('parse/lib/browser/ParseRelation')
Parse.Role = require('parse/lib/browser/ParseRole')
Parse.Session = require('parse/lib/browser/ParseSession')
Parse.Storage = require('parse/lib/browser/Storage')
Parse.User = require('parse/lib/browser/ParseUser')
Parse.LiveQuery = require('parse/lib/browser/ParseLiveQuery')
Parse.LiveQueryClient = require('parse/lib/browser/LiveQueryClient')

Parse.Collection = require('./collection')
Parse.Events = require('./events')
Parse.History = require('./history')
Parse.View = require('./view')

Parse._request = function () {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key]
  }

  return _CoreManager.getRESTController().request.apply(null, args)
}

Parse._ajax = function () {
  for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2]
  }

  return _CoreManager.getRESTController().ajax.apply(null, args)
}

// We attempt to match the signatures of the legacy versions of these methods
Parse._decode = function (_, value) {
  return (0, _decode)(value)
}

Parse._encode = function (value, _, disallowObjects) {
  return (0, _encode)(value, disallowObjects)
}

Parse._getInstallationId = function () {
  return _CoreManager.getInstallationController().currentInstallationId()
}

_CoreManager.setInstallationController(_InstallationController)
_CoreManager.setRESTController(_RESTController)

// For legacy requires, of the form `var Parse = require('parse').Parse`
Parse.Parse = Parse

module.exports = Parse
