(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("ParseBone", [], factory);
	else if(typeof exports === 'object')
		exports["ParseBone"] = factory();
	else
		root["ParseBone"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**************************!*\
  !*** ./src/parsebone.js ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	var _decode = __webpack_require__(/*! parse/lib/browser/decode */ 1);
	var _encode = __webpack_require__(/*! parse/lib/browser/encode */ 77);
	var _CoreManager = __webpack_require__(/*! parse/lib/browser/CoreManager */ 44);
	var _InstallationController = __webpack_require__(/*! parse/lib/browser/InstallationController */ 109);
	var _ParseOp = __webpack_require__(/*! parse/lib/browser/ParseOp */ 75);
	var _RESTController = __webpack_require__(/*! parse/lib/browser/RESTController */ 110);
	
	/**
	 * Contains all Parse API classes and functions.
	 * @class Parse
	 * @static
	 */
	var Parse = {
	  /**
	   * Call this method first to set up your authentication tokens for Parse.
	   * You can get your keys from the Data Browser on parse.com.
	   * @method initialize
	   * @param {String} applicationId Your Parse Application ID.
	   * @param {String} javaScriptKey (optional) Your Parse JavaScript Key (Not needed for parse-server)
	   * @param {String} masterKey (optional) Your Parse Master Key. (Node.js only!)
	   * @static
	   */
	  initialize: function initialize(applicationId, javaScriptKey) {
	    if (_CoreManager.get('IS_NODE')) {
	      console.log('It looks like you\'re using the browser version of the SDK in a node.js environment. You should require(\'parse/node\') instead.');
	    }
	    Parse._initialize(applicationId, javaScriptKey);
	  },
	
	  _initialize: function _initialize(applicationId, javaScriptKey, masterKey) {
	    _CoreManager.set('APPLICATION_ID', applicationId);
	    _CoreManager.set('JAVASCRIPT_KEY', javaScriptKey);
	    _CoreManager.set('MASTER_KEY', masterKey);
	    _CoreManager.set('USE_MASTER_KEY', false);
	  }
	};
	
	/** These legacy setters may eventually be deprecated **/
	Object.defineProperty(Parse, 'applicationId', {
	  get: function get() {
	    return _CoreManager.get('APPLICATION_ID');
	  },
	  set: function set(value) {
	    _CoreManager.set('APPLICATION_ID', value);
	  }
	});
	
	Object.defineProperty(Parse, 'javaScriptKey', {
	  get: function get() {
	    return _CoreManager.get('JAVASCRIPT_KEY');
	  },
	  set: function set(value) {
	    _CoreManager.set('JAVASCRIPT_KEY', value);
	  }
	});
	
	Object.defineProperty(Parse, 'masterKey', {
	  get: function get() {
	    return _CoreManager.get('MASTER_KEY');
	  },
	  set: function set(value) {
	    _CoreManager.set('MASTER_KEY', value);
	  }
	});
	
	Object.defineProperty(Parse, 'serverURL', {
	  get: function get() {
	    return _CoreManager.get('SERVER_URL');
	  },
	  set: function set(value) {
	    _CoreManager.set('SERVER_URL', value);
	  }
	});
	
	Object.defineProperty(Parse, 'liveQueryServerURL', {
	  get: function get() {
	    return _CoreManager.get('LIVEQUERY_SERVER_URL');
	  },
	  set: function set(value) {
	    _CoreManager.set('LIVEQUERY_SERVER_URL', value);
	  }
	});
	/** End setters **/
	
	Parse.ACL = __webpack_require__(/*! parse/lib/browser/ParseACL */ 3);
	Parse.Analytics = __webpack_require__(/*! parse/lib/browser/Analytics */ 111);
	Parse.Cloud = __webpack_require__(/*! parse/lib/browser/Cloud */ 112);
	Parse.CoreManager = __webpack_require__(/*! parse/lib/browser/CoreManager */ 44);
	Parse.Config = __webpack_require__(/*! parse/lib/browser/ParseConfig */ 113);
	Parse.Error = __webpack_require__(/*! parse/lib/browser/ParseError */ 38);
	Parse.FacebookUtils = __webpack_require__(/*! parse/lib/browser/FacebookUtils */ 114);
	Parse.File = __webpack_require__(/*! parse/lib/browser/ParseFile */ 47);
	Parse.GeoPoint = __webpack_require__(/*! parse/lib/browser/ParseGeoPoint */ 78);
	Parse.Installation = __webpack_require__(/*! parse/lib/browser/ParseInstallation */ 115);
	Parse.Object = __webpack_require__(/*! parse/lib/browser/ParseObject */ 39);
	Parse.Op = {
	  Set: _ParseOp.SetOp,
	  Unset: _ParseOp.UnsetOp,
	  Increment: _ParseOp.IncrementOp,
	  Add: _ParseOp.AddOp,
	  Remove: _ParseOp.RemoveOp,
	  AddUnique: _ParseOp.AddUniqueOp,
	  Relation: _ParseOp.RelationOp
	};
	Parse.Promise = __webpack_require__(/*! parse/lib/browser/ParsePromise */ 48);
	Parse.Push = __webpack_require__(/*! parse/lib/browser/Push */ 116);
	Parse.Query = __webpack_require__(/*! parse/lib/browser/ParseQuery */ 80);
	Parse.Relation = __webpack_require__(/*! parse/lib/browser/ParseRelation */ 74);
	Parse.Role = __webpack_require__(/*! parse/lib/browser/ParseRole */ 21);
	Parse.Session = __webpack_require__(/*! parse/lib/browser/ParseSession */ 106);
	Parse.Storage = __webpack_require__(/*! parse/lib/browser/Storage */ 107);
	Parse.User = __webpack_require__(/*! parse/lib/browser/ParseUser */ 104);
	Parse.LiveQuery = __webpack_require__(/*! parse/lib/browser/ParseLiveQuery */ 117);
	Parse.LiveQueryClient = __webpack_require__(/*! parse/lib/browser/LiveQueryClient */ 120);
	
	Parse.Collection = __webpack_require__(/*! ./collection */ 129);
	Parse.Events = __webpack_require__(/*! ./events */ 131);
	Parse.History = __webpack_require__(/*! ./history */ 134);
	Parse.View = __webpack_require__(/*! ./view */ 135);
	
	Parse._request = function () {
	  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }
	
	  return _CoreManager.getRESTController().request.apply(null, args);
	};
	
	Parse._ajax = function () {
	  for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	    args[_key2] = arguments[_key2];
	  }
	
	  return _CoreManager.getRESTController().ajax.apply(null, args);
	};
	
	// We attempt to match the signatures of the legacy versions of these methods
	Parse._decode = function (_, value) {
	  return (0, _decode)(value);
	};
	
	Parse._encode = function (value, _, disallowObjects) {
	  return (0, _encode)(value, disallowObjects);
	};
	
	Parse._getInstallationId = function () {
	  return _CoreManager.getInstallationController().currentInstallationId();
	};
	
	_CoreManager.setInstallationController(_InstallationController);
	_CoreManager.setRESTController(_RESTController);
	
	// For legacy requires, of the form `var Parse = require('parse').Parse`
	Parse.Parse = Parse;
	
	module.exports = Parse;

/***/ },
/* 1 */
/*!***************************************!*\
  !*** ./~/parse/lib/browser/decode.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _interopRequireDefault = __webpack_require__(/*! babel-runtime/helpers/interop-require-default */ 2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = decode;
	
	var _ParseACL = __webpack_require__(/*! ./ParseACL */ 3);
	
	var _ParseACL2 = _interopRequireDefault(_ParseACL);
	
	var _ParseFile = __webpack_require__(/*! ./ParseFile */ 47);
	
	var _ParseFile2 = _interopRequireDefault(_ParseFile);
	
	var _ParseGeoPoint = __webpack_require__(/*! ./ParseGeoPoint */ 78);
	
	var _ParseGeoPoint2 = _interopRequireDefault(_ParseGeoPoint);
	
	var _ParseObject = __webpack_require__(/*! ./ParseObject */ 39);
	
	var _ParseObject2 = _interopRequireDefault(_ParseObject);
	
	var _ParseOp = __webpack_require__(/*! ./ParseOp */ 75);
	
	var _ParseRelation = __webpack_require__(/*! ./ParseRelation */ 74);
	
	var _ParseRelation2 = _interopRequireDefault(_ParseRelation);
	
	function decode(value) {
	  if (value === null || (typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object') {
	    return value;
	  }
	  if (Array.isArray(value)) {
	    var dup = [];
	    value.forEach(function (v, i) {
	      dup[i] = decode(v);
	    });
	    return dup;
	  }
	  if (typeof value.__op === 'string') {
	    return (0, _ParseOp.opFromJSON)(value);
	  }
	  if (value.__type === 'Pointer' && value.className) {
	    return _ParseObject2['default'].fromJSON(value);
	  }
	  if (value.__type === 'Object' && value.className) {
	    return _ParseObject2['default'].fromJSON(value);
	  }
	  if (value.__type === 'Relation') {
	    // The parent and key fields will be populated by the parent
	    var relation = new _ParseRelation2['default'](null, null);
	    relation.targetClassName = value.className;
	    return relation;
	  }
	  if (value.__type === 'Date') {
	    return new Date(value.iso);
	  }
	  if (value.__type === 'File') {
	    return _ParseFile2['default'].fromJSON(value);
	  }
	  if (value.__type === 'GeoPoint') {
	    return new _ParseGeoPoint2['default']({
	      latitude: value.latitude,
	      longitude: value.longitude
	    });
	  }
	  var copy = {};
	  for (var k in value) {
	    copy[k] = decode(value[k]);
	  }
	  return copy;
	}
	
	module.exports = exports['default'];

/***/ },
/* 2 */
/*!************************************************************!*\
  !*** ./~/babel-runtime/helpers/interop-require-default.js ***!
  \************************************************************/
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};
	
	exports.__esModule = true;

/***/ },
/* 3 */
/*!*****************************************!*\
  !*** ./~/parse/lib/browser/ParseACL.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _createClass = __webpack_require__(/*! babel-runtime/helpers/create-class */ 4)['default'];
	
	var _classCallCheck = __webpack_require__(/*! babel-runtime/helpers/class-call-check */ 8)['default'];
	
	var _Object$keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ 9)['default'];
	
	var _interopRequireDefault = __webpack_require__(/*! babel-runtime/helpers/interop-require-default */ 2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _ParseRole = __webpack_require__(/*! ./ParseRole */ 21);
	
	var _ParseRole2 = _interopRequireDefault(_ParseRole);
	
	var _ParseUser = __webpack_require__(/*! ./ParseUser */ 104);
	
	var _ParseUser2 = _interopRequireDefault(_ParseUser);
	
	var PUBLIC_KEY = '*';
	
	/**
	 * Creates a new ACL.
	 * If no argument is given, the ACL has no permissions for anyone.
	 * If the argument is a Parse.User, the ACL will have read and write
	 *   permission for only that user.
	 * If the argument is any other JSON object, that object will be interpretted
	 *   as a serialized ACL created with toJSON().
	 * @class Parse.ACL
	 * @constructor
	 *
	 * <p>An ACL, or Access Control List can be added to any
	 * <code>Parse.Object</code> to restrict access to only a subset of users
	 * of your application.</p>
	 */
	
	var ParseACL = function () {
	  function ParseACL(arg1) {
	    _classCallCheck(this, ParseACL);
	
	    this.permissionsById = {};
	    if (arg1 && (typeof arg1 === 'undefined' ? 'undefined' : _typeof(arg1)) === 'object') {
	      if (arg1 instanceof _ParseUser2['default']) {
	        this.setReadAccess(arg1, true);
	        this.setWriteAccess(arg1, true);
	      } else {
	        for (var userId in arg1) {
	          var accessList = arg1[userId];
	          if (typeof userId !== 'string') {
	            throw new TypeError('Tried to create an ACL with an invalid user id.');
	          }
	          this.permissionsById[userId] = {};
	          for (var permission in accessList) {
	            var allowed = accessList[permission];
	            if (permission !== 'read' && permission !== 'write') {
	              throw new TypeError('Tried to create an ACL with an invalid permission type.');
	            }
	            if (typeof allowed !== 'boolean') {
	              throw new TypeError('Tried to create an ACL with an invalid permission value.');
	            }
	            this.permissionsById[userId][permission] = allowed;
	          }
	        }
	      }
	    } else if (typeof arg1 === 'function') {
	      throw new TypeError('ParseACL constructed with a function. Did you forget ()?');
	    }
	  }
	
	  /**
	   * Returns a JSON-encoded version of the ACL.
	   * @method toJSON
	   * @return {Object}
	   */
	
	  _createClass(ParseACL, [{
	    key: 'toJSON',
	    value: function toJSON() {
	      var permissions = {};
	      for (var p in this.permissionsById) {
	        permissions[p] = this.permissionsById[p];
	      }
	      return permissions;
	    }
	
	    /**
	     * Returns whether this ACL is equal to another object
	     * @method equals
	     * @param other The other object to compare to
	     * @return {Boolean}
	     */
	  }, {
	    key: 'equals',
	    value: function equals(other) {
	      if (!(other instanceof ParseACL)) {
	        return false;
	      }
	      var users = _Object$keys(this.permissionsById);
	      var otherUsers = _Object$keys(other.permissionsById);
	      if (users.length !== otherUsers.length) {
	        return false;
	      }
	      for (var u in this.permissionsById) {
	        if (!other.permissionsById[u]) {
	          return false;
	        }
	        if (this.permissionsById[u].read !== other.permissionsById[u].read) {
	          return false;
	        }
	        if (this.permissionsById[u].write !== other.permissionsById[u].write) {
	          return false;
	        }
	      }
	      return true;
	    }
	  }, {
	    key: '_setAccess',
	    value: function _setAccess(accessType, userId, allowed) {
	      if (userId instanceof _ParseUser2['default']) {
	        userId = userId.id;
	      } else if (userId instanceof _ParseRole2['default']) {
	        userId = 'role:' + userId.getName();
	      }
	      if (typeof userId !== 'string') {
	        throw new TypeError('userId must be a string.');
	      }
	      if (typeof allowed !== 'boolean') {
	        throw new TypeError('allowed must be either true or false.');
	      }
	      var permissions = this.permissionsById[userId];
	      if (!permissions) {
	        if (!allowed) {
	          // The user already doesn't have this permission, so no action is needed
	          return;
	        } else {
	          permissions = {};
	          this.permissionsById[userId] = permissions;
	        }
	      }
	
	      if (allowed) {
	        this.permissionsById[userId][accessType] = true;
	      } else {
	        delete permissions[accessType];
	        if (_Object$keys(permissions).length === 0) {
	          delete this.permissionsById[userId];
	        }
	      }
	    }
	  }, {
	    key: '_getAccess',
	    value: function _getAccess(accessType, userId) {
	      if (userId instanceof _ParseUser2['default']) {
	        userId = userId.id;
	      } else if (userId instanceof _ParseRole2['default']) {
	        userId = 'role:' + userId.getName();
	      }
	      var permissions = this.permissionsById[userId];
	      if (!permissions) {
	        return false;
	      }
	      return !!permissions[accessType];
	    }
	
	    /**
	     * Sets whether the given user is allowed to read this object.
	     * @method setReadAccess
	     * @param userId An instance of Parse.User or its objectId.
	     * @param {Boolean} allowed Whether that user should have read access.
	     */
	  }, {
	    key: 'setReadAccess',
	    value: function setReadAccess(userId, allowed) {
	      this._setAccess('read', userId, allowed);
	    }
	
	    /**
	     * Get whether the given user id is *explicitly* allowed to read this object.
	     * Even if this returns false, the user may still be able to access it if
	     * getPublicReadAccess returns true or a role that the user belongs to has
	     * write access.
	     * @method getReadAccess
	     * @param userId An instance of Parse.User or its objectId, or a Parse.Role.
	     * @return {Boolean}
	     */
	  }, {
	    key: 'getReadAccess',
	    value: function getReadAccess(userId) {
	      return this._getAccess('read', userId);
	    }
	
	    /**
	     * Sets whether the given user id is allowed to write this object.
	     * @method setWriteAccess
	     * @param userId An instance of Parse.User or its objectId, or a Parse.Role..
	     * @param {Boolean} allowed Whether that user should have write access.
	     */
	  }, {
	    key: 'setWriteAccess',
	    value: function setWriteAccess(userId, allowed) {
	      this._setAccess('write', userId, allowed);
	    }
	
	    /**
	     * Gets whether the given user id is *explicitly* allowed to write this object.
	     * Even if this returns false, the user may still be able to write it if
	     * getPublicWriteAccess returns true or a role that the user belongs to has
	     * write access.
	     * @method getWriteAccess
	     * @param userId An instance of Parse.User or its objectId, or a Parse.Role.
	     * @return {Boolean}
	     */
	  }, {
	    key: 'getWriteAccess',
	    value: function getWriteAccess(userId) {
	      return this._getAccess('write', userId);
	    }
	
	    /**
	     * Sets whether the public is allowed to read this object.
	     * @method setPublicReadAccess
	     * @param {Boolean} allowed
	     */
	  }, {
	    key: 'setPublicReadAccess',
	    value: function setPublicReadAccess(allowed) {
	      this.setReadAccess(PUBLIC_KEY, allowed);
	    }
	
	    /**
	     * Gets whether the public is allowed to read this object.
	     * @method getPublicReadAccess
	     * @return {Boolean}
	     */
	  }, {
	    key: 'getPublicReadAccess',
	    value: function getPublicReadAccess() {
	      return this.getReadAccess(PUBLIC_KEY);
	    }
	
	    /**
	     * Sets whether the public is allowed to write this object.
	     * @method setPublicWriteAccess
	     * @param {Boolean} allowed
	     */
	  }, {
	    key: 'setPublicWriteAccess',
	    value: function setPublicWriteAccess(allowed) {
	      this.setWriteAccess(PUBLIC_KEY, allowed);
	    }
	
	    /**
	     * Gets whether the public is allowed to write this object.
	     * @method getPublicWriteAccess
	     * @return {Boolean}
	     */
	  }, {
	    key: 'getPublicWriteAccess',
	    value: function getPublicWriteAccess() {
	      return this.getWriteAccess(PUBLIC_KEY);
	    }
	
	    /**
	     * Gets whether users belonging to the given role are allowed
	     * to read this object. Even if this returns false, the role may
	     * still be able to write it if a parent role has read access.
	     *
	     * @method getRoleReadAccess
	     * @param role The name of the role, or a Parse.Role object.
	     * @return {Boolean} true if the role has read access. false otherwise.
	     * @throws {TypeError} If role is neither a Parse.Role nor a String.
	     */
	  }, {
	    key: 'getRoleReadAccess',
	    value: function getRoleReadAccess(role) {
	      if (role instanceof _ParseRole2['default']) {
	        // Normalize to the String name
	        role = role.getName();
	      }
	      if (typeof role !== 'string') {
	        throw new TypeError('role must be a ParseRole or a String');
	      }
	      return this.getReadAccess('role:' + role);
	    }
	
	    /**
	     * Gets whether users belonging to the given role are allowed
	     * to write this object. Even if this returns false, the role may
	     * still be able to write it if a parent role has write access.
	     *
	     * @method getRoleWriteAccess
	     * @param role The name of the role, or a Parse.Role object.
	     * @return {Boolean} true if the role has write access. false otherwise.
	     * @throws {TypeError} If role is neither a Parse.Role nor a String.
	     */
	  }, {
	    key: 'getRoleWriteAccess',
	    value: function getRoleWriteAccess(role) {
	      if (role instanceof _ParseRole2['default']) {
	        // Normalize to the String name
	        role = role.getName();
	      }
	      if (typeof role !== 'string') {
	        throw new TypeError('role must be a ParseRole or a String');
	      }
	      return this.getWriteAccess('role:' + role);
	    }
	
	    /**
	     * Sets whether users belonging to the given role are allowed
	     * to read this object.
	     *
	     * @method setRoleReadAccess
	     * @param role The name of the role, or a Parse.Role object.
	     * @param {Boolean} allowed Whether the given role can read this object.
	     * @throws {TypeError} If role is neither a Parse.Role nor a String.
	     */
	  }, {
	    key: 'setRoleReadAccess',
	    value: function setRoleReadAccess(role, allowed) {
	      if (role instanceof _ParseRole2['default']) {
	        // Normalize to the String name
	        role = role.getName();
	      }
	      if (typeof role !== 'string') {
	        throw new TypeError('role must be a ParseRole or a String');
	      }
	      this.setReadAccess('role:' + role, allowed);
	    }
	
	    /**
	     * Sets whether users belonging to the given role are allowed
	     * to write this object.
	     *
	     * @method setRoleWriteAccess
	     * @param role The name of the role, or a Parse.Role object.
	     * @param {Boolean} allowed Whether the given role can write this object.
	     * @throws {TypeError} If role is neither a Parse.Role nor a String.
	     */
	  }, {
	    key: 'setRoleWriteAccess',
	    value: function setRoleWriteAccess(role, allowed) {
	      if (role instanceof _ParseRole2['default']) {
	        // Normalize to the String name
	        role = role.getName();
	      }
	      if (typeof role !== 'string') {
	        throw new TypeError('role must be a ParseRole or a String');
	      }
	      this.setWriteAccess('role:' + role, allowed);
	    }
	  }]);
	
	  return ParseACL;
	}();
	
	exports['default'] = ParseACL;
	module.exports = exports['default'];

/***/ },
/* 4 */
/*!*************************************************!*\
  !*** ./~/babel-runtime/helpers/create-class.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$defineProperty = __webpack_require__(/*! babel-runtime/core-js/object/define-property */ 5)["default"];
	
	exports["default"] = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	
	      _Object$defineProperty(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();
	
	exports.__esModule = true;

/***/ },
/* 5 */
/*!***********************************************************!*\
  !*** ./~/babel-runtime/core-js/object/define-property.js ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/define-property */ 6), __esModule: true };

/***/ },
/* 6 */
/*!********************************************************!*\
  !*** ./~/core-js/library/fn/object/define-property.js ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $ = __webpack_require__(/*! ../../modules/$ */ 7);
	module.exports = function defineProperty(it, key, desc) {
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 7 */
/*!****************************************!*\
  !*** ./~/core-js/library/modules/$.js ***!
  \****************************************/
/***/ function(module, exports) {

	"use strict";
	
	var $Object = Object;
	module.exports = {
	  create: $Object.create,
	  getProto: $Object.getPrototypeOf,
	  isEnum: {}.propertyIsEnumerable,
	  getDesc: $Object.getOwnPropertyDescriptor,
	  setDesc: $Object.defineProperty,
	  setDescs: $Object.defineProperties,
	  getKeys: $Object.keys,
	  getNames: $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each: [].forEach
	};

/***/ },
/* 8 */
/*!*****************************************************!*\
  !*** ./~/babel-runtime/helpers/class-call-check.js ***!
  \*****************************************************/
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};
	
	exports.__esModule = true;

/***/ },
/* 9 */
/*!************************************************!*\
  !*** ./~/babel-runtime/core-js/object/keys.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/keys */ 10), __esModule: true };

/***/ },
/* 10 */
/*!*********************************************!*\
  !*** ./~/core-js/library/fn/object/keys.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(/*! ../../modules/es6.object.keys */ 11);
	module.exports = __webpack_require__(/*! ../../modules/$.core */ 17).Object.keys;

/***/ },
/* 11 */
/*!******************************************************!*\
  !*** ./~/core-js/library/modules/es6.object.keys.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(/*! ./$.to-object */ 12);
	
	__webpack_require__(/*! ./$.object-sap */ 14)('keys', function ($keys) {
	  return function keys(it) {
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 12 */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/$.to-object.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(/*! ./$.defined */ 13);
	module.exports = function (it) {
	  return Object(defined(it));
	};

/***/ },
/* 13 */
/*!************************************************!*\
  !*** ./~/core-js/library/modules/$.defined.js ***!
  \************************************************/
/***/ function(module, exports) {

	"use strict";
	
	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 14 */
/*!***************************************************!*\
  !*** ./~/core-js/library/modules/$.object-sap.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(/*! ./$.export */ 15),
	    core = __webpack_require__(/*! ./$.core */ 17),
	    fails = __webpack_require__(/*! ./$.fails */ 20);
	module.exports = function (KEY, exec) {
	  var fn = (core.Object || {})[KEY] || Object[KEY],
	      exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function () {
	    fn(1);
	  }), 'Object', exp);
	};

/***/ },
/* 15 */
/*!***********************************************!*\
  !*** ./~/core-js/library/modules/$.export.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(/*! ./$.global */ 16),
	    core = __webpack_require__(/*! ./$.core */ 17),
	    ctx = __webpack_require__(/*! ./$.ctx */ 18),
	    PROTOTYPE = 'prototype';
	
	var $export = function $export(type, name, source) {
	  var IS_FORCED = type & $export.F,
	      IS_GLOBAL = type & $export.G,
	      IS_STATIC = type & $export.S,
	      IS_PROTO = type & $export.P,
	      IS_BIND = type & $export.B,
	      IS_WRAP = type & $export.W,
	      exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
	      target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE],
	      key,
	      own,
	      out;
	  if (IS_GLOBAL) source = name;
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if (own && key in exports) continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? function (C) {
	      var F = function F(param) {
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	      // make static versions for prototype methods
	    }(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if (IS_PROTO) (exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1; // forced
	$export.G = 2; // global
	$export.S = 4; // static
	$export.P = 8; // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 16 */
/*!***********************************************!*\
  !*** ./~/core-js/library/modules/$.global.js ***!
  \***********************************************/
/***/ function(module, exports) {

	'use strict';
	
	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

/***/ },
/* 17 */
/*!*********************************************!*\
  !*** ./~/core-js/library/modules/$.core.js ***!
  \*********************************************/
/***/ function(module, exports) {

	'use strict';
	
	var core = module.exports = { version: '1.2.6' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

/***/ },
/* 18 */
/*!********************************************!*\
  !*** ./~/core-js/library/modules/$.ctx.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// optional / simple context binding
	var aFunction = __webpack_require__(/*! ./$.a-function */ 19);
	module.exports = function (fn, that, length) {
	  aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 1:
	      return function (a) {
	        return fn.call(that, a);
	      };
	    case 2:
	      return function (a, b) {
	        return fn.call(that, a, b);
	      };
	    case 3:
	      return function (a, b, c) {
	        return fn.call(that, a, b, c);
	      };
	  }
	  return function () /* ...args */{
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 19 */
/*!***************************************************!*\
  !*** ./~/core-js/library/modules/$.a-function.js ***!
  \***************************************************/
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 20 */
/*!**********************************************!*\
  !*** ./~/core-js/library/modules/$.fails.js ***!
  \**********************************************/
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};

/***/ },
/* 21 */
/*!******************************************!*\
  !*** ./~/parse/lib/browser/ParseRole.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 *
	 */
	
	/**
	 * Represents a Role on the Parse server. Roles represent groupings of
	 * Users for the purposes of granting permissions (e.g. specifying an ACL
	 * for an Object). Roles are specified by their sets of child users and
	 * child roles, all of which are granted any permissions that the parent
	 * role has.
	 *
	 * <p>Roles must have a name (which cannot be changed after creation of the
	 * role), and must specify an ACL.</p>
	 * @class Parse.Role
	 * @constructor
	 * @param {String} name The name of the Role to create.
	 * @param {Parse.ACL} acl The ACL for this role. Roles must have an ACL.
	 * A Parse.Role is a local representation of a role persisted to the Parse
	 * cloud.
	 */
	'use strict';
	
	var _get = __webpack_require__(/*! babel-runtime/helpers/get */ 22)['default'];
	
	var _inherits = __webpack_require__(/*! babel-runtime/helpers/inherits */ 29)['default'];
	
	var _createClass = __webpack_require__(/*! babel-runtime/helpers/create-class */ 4)['default'];
	
	var _classCallCheck = __webpack_require__(/*! babel-runtime/helpers/class-call-check */ 8)['default'];
	
	var _interopRequireDefault = __webpack_require__(/*! babel-runtime/helpers/interop-require-default */ 2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _ParseACL = __webpack_require__(/*! ./ParseACL */ 3);
	
	var _ParseACL2 = _interopRequireDefault(_ParseACL);
	
	var _ParseError = __webpack_require__(/*! ./ParseError */ 38);
	
	var _ParseError2 = _interopRequireDefault(_ParseError);
	
	var _ParseObject2 = __webpack_require__(/*! ./ParseObject */ 39);
	
	var _ParseObject3 = _interopRequireDefault(_ParseObject2);
	
	var ParseRole = function (_ParseObject) {
	  _inherits(ParseRole, _ParseObject);
	
	  function ParseRole(name, acl) {
	    _classCallCheck(this, ParseRole);
	
	    _get(Object.getPrototypeOf(ParseRole.prototype), 'constructor', this).call(this, '_Role');
	    if (typeof name === 'string' && acl instanceof _ParseACL2['default']) {
	      this.setName(name);
	      this.setACL(acl);
	    }
	  }
	
	  /**
	   * Gets the name of the role.  You can alternatively call role.get("name")
	   *
	   * @method getName
	   * @return {String} the name of the role.
	   */
	
	  _createClass(ParseRole, [{
	    key: 'getName',
	    value: function getName() {
	      return this.get('name');
	    }
	
	    /**
	     * Sets the name for a role. This value must be set before the role has
	     * been saved to the server, and cannot be set once the role has been
	     * saved.
	     *
	     * <p>
	     *   A role's name can only contain alphanumeric characters, _, -, and
	     *   spaces.
	     * </p>
	     *
	     * <p>This is equivalent to calling role.set("name", name)</p>
	     *
	     * @method setName
	     * @param {String} name The name of the role.
	     * @param {Object} options Standard options object with success and error
	     *     callbacks.
	     */
	  }, {
	    key: 'setName',
	    value: function setName(name, options) {
	      return this.set('name', name, options);
	    }
	
	    /**
	     * Gets the Parse.Relation for the Parse.Users that are direct
	     * children of this role. These users are granted any privileges that this
	     * role has been granted (e.g. read or write access through ACLs). You can
	     * add or remove users from the role through this relation.
	     *
	     * <p>This is equivalent to calling role.relation("users")</p>
	     *
	     * @method getUsers
	     * @return {Parse.Relation} the relation for the users belonging to this
	     *     role.
	     */
	  }, {
	    key: 'getUsers',
	    value: function getUsers() {
	      return this.relation('users');
	    }
	
	    /**
	     * Gets the Parse.Relation for the Parse.Roles that are direct
	     * children of this role. These roles' users are granted any privileges that
	     * this role has been granted (e.g. read or write access through ACLs). You
	     * can add or remove child roles from this role through this relation.
	     *
	     * <p>This is equivalent to calling role.relation("roles")</p>
	     *
	     * @method getRoles
	     * @return {Parse.Relation} the relation for the roles belonging to this
	     *     role.
	     */
	  }, {
	    key: 'getRoles',
	    value: function getRoles() {
	      return this.relation('roles');
	    }
	  }, {
	    key: 'validate',
	    value: function validate(attrs, options) {
	      var isInvalid = _get(Object.getPrototypeOf(ParseRole.prototype), 'validate', this).call(this, attrs, options);
	      if (isInvalid) {
	        return isInvalid;
	      }
	
	      if ('name' in attrs && attrs.name !== this.getName()) {
	        var newName = attrs.name;
	        if (this.id && this.id !== attrs.objectId) {
	          // Check to see if the objectId being set matches this.id
	          // This happens during a fetch -- the id is set before calling fetch
	          // Let the name be set in this case
	          return new _ParseError2['default'](_ParseError2['default'].OTHER_CAUSE, 'A role\'s name can only be set before it has been saved.');
	        }
	        if (typeof newName !== 'string') {
	          return new _ParseError2['default'](_ParseError2['default'].OTHER_CAUSE, 'A role\'s name must be a String.');
	        }
	        if (!/^[0-9a-zA-Z\-_ ]+$/.test(newName)) {
	          return new _ParseError2['default'](_ParseError2['default'].OTHER_CAUSE, 'A role\'s name can be only contain alphanumeric characters, _, ' + '-, and spaces.');
	        }
	      }
	      return false;
	    }
	  }]);
	
	  return ParseRole;
	}(_ParseObject3['default']);
	
	exports['default'] = ParseRole;
	
	_ParseObject3['default'].registerSubclass('_Role', ParseRole);
	module.exports = exports['default'];

/***/ },
/* 22 */
/*!****************************************!*\
  !*** ./~/babel-runtime/helpers/get.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! babel-runtime/core-js/object/get-own-property-descriptor */ 23)["default"];
	
	exports["default"] = function get(_x, _x2, _x3) {
	  var _again = true;
	
	  _function: while (_again) {
	    var object = _x,
	        property = _x2,
	        receiver = _x3;
	    _again = false;
	    if (object === null) object = Function.prototype;
	
	    var desc = _Object$getOwnPropertyDescriptor(object, property);
	
	    if (desc === undefined) {
	      var parent = Object.getPrototypeOf(object);
	
	      if (parent === null) {
	        return undefined;
	      } else {
	        _x = parent;
	        _x2 = property;
	        _x3 = receiver;
	        _again = true;
	        desc = parent = undefined;
	        continue _function;
	      }
	    } else if ("value" in desc) {
	      return desc.value;
	    } else {
	      var getter = desc.get;
	
	      if (getter === undefined) {
	        return undefined;
	      }
	
	      return getter.call(receiver);
	    }
	  }
	};
	
	exports.__esModule = true;

/***/ },
/* 23 */
/*!***********************************************************************!*\
  !*** ./~/babel-runtime/core-js/object/get-own-property-descriptor.js ***!
  \***********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ 24), __esModule: true };

/***/ },
/* 24 */
/*!********************************************************************!*\
  !*** ./~/core-js/library/fn/object/get-own-property-descriptor.js ***!
  \********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $ = __webpack_require__(/*! ../../modules/$ */ 7);
	__webpack_require__(/*! ../../modules/es6.object.get-own-property-descriptor */ 25);
	module.exports = function getOwnPropertyDescriptor(it, key) {
	  return $.getDesc(it, key);
	};

/***/ },
/* 25 */
/*!*****************************************************************************!*\
  !*** ./~/core-js/library/modules/es6.object.get-own-property-descriptor.js ***!
  \*****************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject = __webpack_require__(/*! ./$.to-iobject */ 26);
	
	__webpack_require__(/*! ./$.object-sap */ 14)('getOwnPropertyDescriptor', function ($getOwnPropertyDescriptor) {
	  return function getOwnPropertyDescriptor(it, key) {
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 26 */
/*!***************************************************!*\
  !*** ./~/core-js/library/modules/$.to-iobject.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(/*! ./$.iobject */ 27),
	    defined = __webpack_require__(/*! ./$.defined */ 13);
	module.exports = function (it) {
	  return IObject(defined(it));
	};

/***/ },
/* 27 */
/*!************************************************!*\
  !*** ./~/core-js/library/modules/$.iobject.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(/*! ./$.cof */ 28);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 28 */
/*!********************************************!*\
  !*** ./~/core-js/library/modules/$.cof.js ***!
  \********************************************/
/***/ function(module, exports) {

	"use strict";
	
	var toString = {}.toString;
	
	module.exports = function (it) {
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 29 */
/*!*********************************************!*\
  !*** ./~/babel-runtime/helpers/inherits.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _Object$create = __webpack_require__(/*! babel-runtime/core-js/object/create */ 30)["default"];
	
	var _Object$setPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/set-prototype-of */ 32)["default"];
	
	exports["default"] = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }
	
	  subClass.prototype = _Object$create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _Object$setPrototypeOf ? _Object$setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};
	
	exports.__esModule = true;

/***/ },
/* 30 */
/*!**************************************************!*\
  !*** ./~/babel-runtime/core-js/object/create.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/create */ 31), __esModule: true };

/***/ },
/* 31 */
/*!***********************************************!*\
  !*** ./~/core-js/library/fn/object/create.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $ = __webpack_require__(/*! ../../modules/$ */ 7);
	module.exports = function create(P, D) {
	  return $.create(P, D);
	};

/***/ },
/* 32 */
/*!************************************************************!*\
  !*** ./~/babel-runtime/core-js/object/set-prototype-of.js ***!
  \************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ 33), __esModule: true };

/***/ },
/* 33 */
/*!*********************************************************!*\
  !*** ./~/core-js/library/fn/object/set-prototype-of.js ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(/*! ../../modules/es6.object.set-prototype-of */ 34);
	module.exports = __webpack_require__(/*! ../../modules/$.core */ 17).Object.setPrototypeOf;

/***/ },
/* 34 */
/*!******************************************************************!*\
  !*** ./~/core-js/library/modules/es6.object.set-prototype-of.js ***!
  \******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(/*! ./$.export */ 15);
	$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(/*! ./$.set-proto */ 35).set });

/***/ },
/* 35 */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/$.set-proto.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc = __webpack_require__(/*! ./$ */ 7).getDesc,
	    isObject = __webpack_require__(/*! ./$.is-object */ 36),
	    anObject = __webpack_require__(/*! ./$.an-object */ 37);
	var check = function check(O, proto) {
	  anObject(O);
	  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	  function (test, buggy, set) {
	    try {
	      set = __webpack_require__(/*! ./$.ctx */ 18)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
	      set(test, []);
	      buggy = !(test instanceof Array);
	    } catch (e) {
	      buggy = true;
	    }
	    return function setPrototypeOf(O, proto) {
	      check(O, proto);
	      if (buggy) O.__proto__ = proto;else set(O, proto);
	      return O;
	    };
	  }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 36 */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/$.is-object.js ***!
  \**************************************************/
/***/ function(module, exports) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	module.exports = function (it) {
	  return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 37 */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/$.an-object.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isObject = __webpack_require__(/*! ./$.is-object */ 36);
	module.exports = function (it) {
	  if (!isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 38 */
/*!*******************************************!*\
  !*** ./~/parse/lib/browser/ParseError.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	/**
	 * Constructs a new Parse.Error object with the given code and message.
	 * @class Parse.Error
	 * @constructor
	 * @param {Number} code An error code constant from <code>Parse.Error</code>.
	 * @param {String} message A detailed description of the error.
	 */
	"use strict";
	
	var _classCallCheck = __webpack_require__(/*! babel-runtime/helpers/class-call-check */ 8)["default"];
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var ParseError = function ParseError(code, message) {
	  _classCallCheck(this, ParseError);
	
	  this.code = code;
	  this.message = message;
	}
	
	/**
	 * Error code indicating some error other than those enumerated here.
	 * @property OTHER_CAUSE
	 * @static
	 * @final
	 */
	;
	
	exports["default"] = ParseError;
	ParseError.OTHER_CAUSE = -1;
	
	/**
	 * Error code indicating that something has gone wrong with the server.
	 * If you get this error code, it is Parse's fault. Contact us at
	 * https://parse.com/help
	 * @property INTERNAL_SERVER_ERROR
	 * @static
	 * @final
	 */
	ParseError.INTERNAL_SERVER_ERROR = 1;
	
	/**
	 * Error code indicating the connection to the Parse servers failed.
	 * @property CONNECTION_FAILED
	 * @static
	 * @final
	 */
	ParseError.CONNECTION_FAILED = 100;
	
	/**
	 * Error code indicating the specified object doesn't exist.
	 * @property OBJECT_NOT_FOUND
	 * @static
	 * @final
	 */
	ParseError.OBJECT_NOT_FOUND = 101;
	
	/**
	 * Error code indicating you tried to query with a datatype that doesn't
	 * support it, like exact matching an array or object.
	 * @property INVALID_QUERY
	 * @static
	 * @final
	 */
	ParseError.INVALID_QUERY = 102;
	
	/**
	 * Error code indicating a missing or invalid classname. Classnames are
	 * case-sensitive. They must start with a letter, and a-zA-Z0-9_ are the
	 * only valid characters.
	 * @property INVALID_CLASS_NAME
	 * @static
	 * @final
	 */
	ParseError.INVALID_CLASS_NAME = 103;
	
	/**
	 * Error code indicating an unspecified object id.
	 * @property MISSING_OBJECT_ID
	 * @static
	 * @final
	 */
	ParseError.MISSING_OBJECT_ID = 104;
	
	/**
	 * Error code indicating an invalid key name. Keys are case-sensitive. They
	 * must start with a letter, and a-zA-Z0-9_ are the only valid characters.
	 * @property INVALID_KEY_NAME
	 * @static
	 * @final
	 */
	ParseError.INVALID_KEY_NAME = 105;
	
	/**
	 * Error code indicating a malformed pointer. You should not see this unless
	 * you have been mucking about changing internal Parse code.
	 * @property INVALID_POINTER
	 * @static
	 * @final
	 */
	ParseError.INVALID_POINTER = 106;
	
	/**
	 * Error code indicating that badly formed JSON was received upstream. This
	 * either indicates you have done something unusual with modifying how
	 * things encode to JSON, or the network is failing badly.
	 * @property INVALID_JSON
	 * @static
	 * @final
	 */
	ParseError.INVALID_JSON = 107;
	
	/**
	 * Error code indicating that the feature you tried to access is only
	 * available internally for testing purposes.
	 * @property COMMAND_UNAVAILABLE
	 * @static
	 * @final
	 */
	ParseError.COMMAND_UNAVAILABLE = 108;
	
	/**
	 * You must call Parse.initialize before using the Parse library.
	 * @property NOT_INITIALIZED
	 * @static
	 * @final
	 */
	ParseError.NOT_INITIALIZED = 109;
	
	/**
	 * Error code indicating that a field was set to an inconsistent type.
	 * @property INCORRECT_TYPE
	 * @static
	 * @final
	 */
	ParseError.INCORRECT_TYPE = 111;
	
	/**
	 * Error code indicating an invalid channel name. A channel name is either
	 * an empty string (the broadcast channel) or contains only a-zA-Z0-9_
	 * characters and starts with a letter.
	 * @property INVALID_CHANNEL_NAME
	 * @static
	 * @final
	 */
	ParseError.INVALID_CHANNEL_NAME = 112;
	
	/**
	 * Error code indicating that push is misconfigured.
	 * @property PUSH_MISCONFIGURED
	 * @static
	 * @final
	 */
	ParseError.PUSH_MISCONFIGURED = 115;
	
	/**
	 * Error code indicating that the object is too large.
	 * @property OBJECT_TOO_LARGE
	 * @static
	 * @final
	 */
	ParseError.OBJECT_TOO_LARGE = 116;
	
	/**
	 * Error code indicating that the operation isn't allowed for clients.
	 * @property OPERATION_FORBIDDEN
	 * @static
	 * @final
	 */
	ParseError.OPERATION_FORBIDDEN = 119;
	
	/**
	 * Error code indicating the result was not found in the cache.
	 * @property CACHE_MISS
	 * @static
	 * @final
	 */
	ParseError.CACHE_MISS = 120;
	
	/**
	 * Error code indicating that an invalid key was used in a nested
	 * JSONObject.
	 * @property INVALID_NESTED_KEY
	 * @static
	 * @final
	 */
	ParseError.INVALID_NESTED_KEY = 121;
	
	/**
	 * Error code indicating that an invalid filename was used for ParseFile.
	 * A valid file name contains only a-zA-Z0-9_. characters and is between 1
	 * and 128 characters.
	 * @property INVALID_FILE_NAME
	 * @static
	 * @final
	 */
	ParseError.INVALID_FILE_NAME = 122;
	
	/**
	 * Error code indicating an invalid ACL was provided.
	 * @property INVALID_ACL
	 * @static
	 * @final
	 */
	ParseError.INVALID_ACL = 123;
	
	/**
	 * Error code indicating that the request timed out on the server. Typically
	 * this indicates that the request is too expensive to run.
	 * @property TIMEOUT
	 * @static
	 * @final
	 */
	ParseError.TIMEOUT = 124;
	
	/**
	 * Error code indicating that the email address was invalid.
	 * @property INVALID_EMAIL_ADDRESS
	 * @static
	 * @final
	 */
	ParseError.INVALID_EMAIL_ADDRESS = 125;
	
	/**
	 * Error code indicating a missing content type.
	 * @property MISSING_CONTENT_TYPE
	 * @static
	 * @final
	 */
	ParseError.MISSING_CONTENT_TYPE = 126;
	
	/**
	 * Error code indicating a missing content length.
	 * @property MISSING_CONTENT_LENGTH
	 * @static
	 * @final
	 */
	ParseError.MISSING_CONTENT_LENGTH = 127;
	
	/**
	 * Error code indicating an invalid content length.
	 * @property INVALID_CONTENT_LENGTH
	 * @static
	 * @final
	 */
	ParseError.INVALID_CONTENT_LENGTH = 128;
	
	/**
	 * Error code indicating a file that was too large.
	 * @property FILE_TOO_LARGE
	 * @static
	 * @final
	 */
	ParseError.FILE_TOO_LARGE = 129;
	
	/**
	 * Error code indicating an error saving a file.
	 * @property FILE_SAVE_ERROR
	 * @static
	 * @final
	 */
	ParseError.FILE_SAVE_ERROR = 130;
	
	/**
	 * Error code indicating that a unique field was given a value that is
	 * already taken.
	 * @property DUPLICATE_VALUE
	 * @static
	 * @final
	 */
	ParseError.DUPLICATE_VALUE = 137;
	
	/**
	 * Error code indicating that a role's name is invalid.
	 * @property INVALID_ROLE_NAME
	 * @static
	 * @final
	 */
	ParseError.INVALID_ROLE_NAME = 139;
	
	/**
	 * Error code indicating that an application quota was exceeded.  Upgrade to
	 * resolve.
	 * @property EXCEEDED_QUOTA
	 * @static
	 * @final
	 */
	ParseError.EXCEEDED_QUOTA = 140;
	
	/**
	 * Error code indicating that a Cloud Code script failed.
	 * @property SCRIPT_FAILED
	 * @static
	 * @final
	 */
	ParseError.SCRIPT_FAILED = 141;
	
	/**
	 * Error code indicating that a Cloud Code validation failed.
	 * @property VALIDATION_ERROR
	 * @static
	 * @final
	 */
	ParseError.VALIDATION_ERROR = 142;
	
	/**
	 * Error code indicating that invalid image data was provided.
	 * @property INVALID_IMAGE_DATA
	 * @static
	 * @final
	 */
	ParseError.INVALID_IMAGE_DATA = 143;
	
	/**
	 * Error code indicating an unsaved file.
	 * @property UNSAVED_FILE_ERROR
	 * @static
	 * @final
	 */
	ParseError.UNSAVED_FILE_ERROR = 151;
	
	/**
	 * Error code indicating an invalid push time.
	 * @property INVALID_PUSH_TIME_ERROR
	 * @static
	 * @final
	 */
	ParseError.INVALID_PUSH_TIME_ERROR = 152;
	
	/**
	 * Error code indicating an error deleting a file.
	 * @property FILE_DELETE_ERROR
	 * @static
	 * @final
	 */
	ParseError.FILE_DELETE_ERROR = 153;
	
	/**
	 * Error code indicating that the application has exceeded its request
	 * limit.
	 * @property REQUEST_LIMIT_EXCEEDED
	 * @static
	 * @final
	 */
	ParseError.REQUEST_LIMIT_EXCEEDED = 155;
	
	/**
	 * Error code indicating an invalid event name.
	 * @property INVALID_EVENT_NAME
	 * @static
	 * @final
	 */
	ParseError.INVALID_EVENT_NAME = 160;
	
	/**
	 * Error code indicating that the username is missing or empty.
	 * @property USERNAME_MISSING
	 * @static
	 * @final
	 */
	ParseError.USERNAME_MISSING = 200;
	
	/**
	 * Error code indicating that the password is missing or empty.
	 * @property PASSWORD_MISSING
	 * @static
	 * @final
	 */
	ParseError.PASSWORD_MISSING = 201;
	
	/**
	 * Error code indicating that the username has already been taken.
	 * @property USERNAME_TAKEN
	 * @static
	 * @final
	 */
	ParseError.USERNAME_TAKEN = 202;
	
	/**
	 * Error code indicating that the email has already been taken.
	 * @property EMAIL_TAKEN
	 * @static
	 * @final
	 */
	ParseError.EMAIL_TAKEN = 203;
	
	/**
	 * Error code indicating that the email is missing, but must be specified.
	 * @property EMAIL_MISSING
	 * @static
	 * @final
	 */
	ParseError.EMAIL_MISSING = 204;
	
	/**
	 * Error code indicating that a user with the specified email was not found.
	 * @property EMAIL_NOT_FOUND
	 * @static
	 * @final
	 */
	ParseError.EMAIL_NOT_FOUND = 205;
	
	/**
	 * Error code indicating that a user object without a valid session could
	 * not be altered.
	 * @property SESSION_MISSING
	 * @static
	 * @final
	 */
	ParseError.SESSION_MISSING = 206;
	
	/**
	 * Error code indicating that a user can only be created through signup.
	 * @property MUST_CREATE_USER_THROUGH_SIGNUP
	 * @static
	 * @final
	 */
	ParseError.MUST_CREATE_USER_THROUGH_SIGNUP = 207;
	
	/**
	 * Error code indicating that an an account being linked is already linked
	 * to another user.
	 * @property ACCOUNT_ALREADY_LINKED
	 * @static
	 * @final
	 */
	ParseError.ACCOUNT_ALREADY_LINKED = 208;
	
	/**
	 * Error code indicating that the current session token is invalid.
	 * @property INVALID_SESSION_TOKEN
	 * @static
	 * @final
	 */
	ParseError.INVALID_SESSION_TOKEN = 209;
	
	/**
	 * Error code indicating that a user cannot be linked to an account because
	 * that account's id could not be found.
	 * @property LINKED_ID_MISSING
	 * @static
	 * @final
	 */
	ParseError.LINKED_ID_MISSING = 250;
	
	/**
	 * Error code indicating that a user with a linked (e.g. Facebook) account
	 * has an invalid session.
	 * @property INVALID_LINKED_SESSION
	 * @static
	 * @final
	 */
	ParseError.INVALID_LINKED_SESSION = 251;
	
	/**
	 * Error code indicating that a service being linked (e.g. Facebook or
	 * Twitter) is unsupported.
	 * @property UNSUPPORTED_SERVICE
	 * @static
	 * @final
	 */
	ParseError.UNSUPPORTED_SERVICE = 252;
	
	/**
	 * Error code indicating that there were multiple errors. Aggregate errors
	 * have an "errors" property, which is an array of error objects with more
	 * detail about each error that occurred.
	 * @property AGGREGATE_ERROR
	 * @static
	 * @final
	 */
	ParseError.AGGREGATE_ERROR = 600;
	
	/**
	 * Error code indicating the client was unable to read an input file.
	 * @property FILE_READ_ERROR
	 * @static
	 * @final
	 */
	ParseError.FILE_READ_ERROR = 601;
	
	/**
	 * Error code indicating a real error code is unavailable because
	 * we had to use an XDomainRequest object to allow CORS requests in
	 * Internet Explorer, which strips the body from HTTP responses that have
	 * a non-2XX status code.
	 * @property X_DOMAIN_REQUEST
	 * @static
	 * @final
	 */
	ParseError.X_DOMAIN_REQUEST = 602;
	module.exports = exports["default"];

/***/ },
/* 39 */
/*!********************************************!*\
  !*** ./~/parse/lib/browser/ParseObject.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _createClass = __webpack_require__(/*! babel-runtime/helpers/create-class */ 4)['default'];
	
	var _classCallCheck = __webpack_require__(/*! babel-runtime/helpers/class-call-check */ 8)['default'];
	
	var _Object$keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ 9)['default'];
	
	var _Object$freeze = __webpack_require__(/*! babel-runtime/core-js/object/freeze */ 40)['default'];
	
	var _Object$create = __webpack_require__(/*! babel-runtime/core-js/object/create */ 30)['default'];
	
	var _Object$defineProperty = __webpack_require__(/*! babel-runtime/core-js/object/define-property */ 5)['default'];
	
	var _interopRequireDefault = __webpack_require__(/*! babel-runtime/helpers/interop-require-default */ 2)['default'];
	
	var _interopRequireWildcard = __webpack_require__(/*! babel-runtime/helpers/interop-require-wildcard */ 43)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _CoreManager = __webpack_require__(/*! ./CoreManager */ 44);
	
	var _CoreManager2 = _interopRequireDefault(_CoreManager);
	
	var _canBeSerialized = __webpack_require__(/*! ./canBeSerialized */ 46);
	
	var _canBeSerialized2 = _interopRequireDefault(_canBeSerialized);
	
	var _decode = __webpack_require__(/*! ./decode */ 1);
	
	var _decode2 = _interopRequireDefault(_decode);
	
	var _encode = __webpack_require__(/*! ./encode */ 77);
	
	var _encode2 = _interopRequireDefault(_encode);
	
	var _equals = __webpack_require__(/*! ./equals */ 81);
	
	var _equals2 = _interopRequireDefault(_equals);
	
	var _escape2 = __webpack_require__(/*! ./escape */ 82);
	
	var _escape3 = _interopRequireDefault(_escape2);
	
	var _ParseACL = __webpack_require__(/*! ./ParseACL */ 3);
	
	var _ParseACL2 = _interopRequireDefault(_ParseACL);
	
	var _parseDate = __webpack_require__(/*! ./parseDate */ 83);
	
	var _parseDate2 = _interopRequireDefault(_parseDate);
	
	var _ParseError = __webpack_require__(/*! ./ParseError */ 38);
	
	var _ParseError2 = _interopRequireDefault(_ParseError);
	
	var _ParseFile = __webpack_require__(/*! ./ParseFile */ 47);
	
	var _ParseFile2 = _interopRequireDefault(_ParseFile);
	
	var _ParseOp = __webpack_require__(/*! ./ParseOp */ 75);
	
	var _ParsePromise = __webpack_require__(/*! ./ParsePromise */ 48);
	
	var _ParsePromise2 = _interopRequireDefault(_ParsePromise);
	
	var _ParseQuery = __webpack_require__(/*! ./ParseQuery */ 80);
	
	var _ParseQuery2 = _interopRequireDefault(_ParseQuery);
	
	var _ParseRelation = __webpack_require__(/*! ./ParseRelation */ 74);
	
	var _ParseRelation2 = _interopRequireDefault(_ParseRelation);
	
	var _SingleInstanceStateController = __webpack_require__(/*! ./SingleInstanceStateController */ 84);
	
	var SingleInstanceStateController = _interopRequireWildcard(_SingleInstanceStateController);
	
	var _unique = __webpack_require__(/*! ./unique */ 79);
	
	var _unique2 = _interopRequireDefault(_unique);
	
	var _UniqueInstanceStateController = __webpack_require__(/*! ./UniqueInstanceStateController */ 87);
	
	var UniqueInstanceStateController = _interopRequireWildcard(_UniqueInstanceStateController);
	
	var _unsavedChildren = __webpack_require__(/*! ./unsavedChildren */ 103);
	
	var _unsavedChildren2 = _interopRequireDefault(_unsavedChildren);
	
	// Mapping of class names to constructors, so we can populate objects from the
	// server with appropriate subclasses of ParseObject
	var classMap = {};
	
	// Global counter for generating unique local Ids
	var localCount = 0;
	// Global counter for generating unique Ids for non-single-instance objects
	var objectCount = 0;
	// On web clients, objects are single-instance: any two objects with the same Id
	// will have the same attributes. However, this may be dangerous default
	// behavior in a server scenario
	var singleInstance = !_CoreManager2['default'].get('IS_NODE');
	if (singleInstance) {
	  _CoreManager2['default'].setObjectStateController(SingleInstanceStateController);
	} else {
	  _CoreManager2['default'].setObjectStateController(UniqueInstanceStateController);
	}
	
	function getServerUrlPath() {
	  var serverUrl = _CoreManager2['default'].get('SERVER_URL');
	  if (serverUrl[serverUrl.length - 1] !== '/') {
	    serverUrl += '/';
	  }
	  var url = serverUrl.replace(/https?:\/\//, '');
	  return url.substr(url.indexOf('/'));
	}
	
	/**
	 * Creates a new model with defined attributes.
	 *
	 * <p>You won't normally call this method directly.  It is recommended that
	 * you use a subclass of <code>Parse.Object</code> instead, created by calling
	 * <code>extend</code>.</p>
	 *
	 * <p>However, if you don't want to use a subclass, or aren't sure which
	 * subclass is appropriate, you can use this form:<pre>
	 *     var object = new Parse.Object("ClassName");
	 * </pre>
	 * That is basically equivalent to:<pre>
	 *     var MyClass = Parse.Object.extend("ClassName");
	 *     var object = new MyClass();
	 * </pre></p>
	 *
	 * @class Parse.Object
	 * @constructor
	 * @param {String} className The class name for the object
	 * @param {Object} attributes The initial set of data to store in the object.
	 * @param {Object} options The options for this object instance.
	 */
	
	var ParseObject = function () {
	  function ParseObject(className, attributes, options) {
	    _classCallCheck(this, ParseObject);
	
	    // Enable legacy initializers
	    if (typeof this.initialize === 'function') {
	      this.initialize.apply(this, arguments);
	    }
	
	    var toSet = null;
	    this._objCount = objectCount++;
	    if (typeof className === 'string') {
	      this.className = className;
	      if (attributes && (typeof attributes === 'undefined' ? 'undefined' : _typeof(attributes)) === 'object') {
	        toSet = attributes;
	      }
	    } else if (className && (typeof className === 'undefined' ? 'undefined' : _typeof(className)) === 'object') {
	      this.className = className.className;
	      toSet = {};
	      for (var attr in className) {
	        if (attr !== 'className') {
	          toSet[attr] = className[attr];
	        }
	      }
	      if (attributes && (typeof attributes === 'undefined' ? 'undefined' : _typeof(attributes)) === 'object') {
	        options = attributes;
	      }
	    }
	    if (toSet && !this.set(toSet, options)) {
	      throw new Error('Can\'t create an invalid Parse Object');
	    }
	  }
	
	  /** Prototype getters / setters **/
	
	  _createClass(ParseObject, [{
	    key: '_getId',
	
	    /** Private methods **/
	
	    /**
	     * Returns a local or server Id used uniquely identify this object
	     */
	    value: function _getId() {
	      if (typeof this.id === 'string') {
	        return this.id;
	      }
	      if (typeof this._localId === 'string') {
	        return this._localId;
	      }
	      var localId = 'local' + String(localCount++);
	      this._localId = localId;
	      return localId;
	    }
	
	    /**
	     * Returns a unique identifier used to pull data from the State Controller.
	     */
	  }, {
	    key: '_getStateIdentifier',
	    value: function _getStateIdentifier() {
	      if (singleInstance) {
	        var id = this.id;
	        if (!id) {
	          id = this._getId();
	        }
	        return {
	          id: id,
	          className: this.className
	        };
	      } else {
	        return this;
	      }
	    }
	  }, {
	    key: '_getServerData',
	    value: function _getServerData() {
	      var stateController = _CoreManager2['default'].getObjectStateController();
	      return stateController.getServerData(this._getStateIdentifier());
	    }
	  }, {
	    key: '_clearServerData',
	    value: function _clearServerData() {
	      var serverData = this._getServerData();
	      var unset = {};
	      for (var attr in serverData) {
	        unset[attr] = undefined;
	      }
	      var stateController = _CoreManager2['default'].getObjectStateController();
	      stateController.setServerData(this._getStateIdentifier(), unset);
	    }
	  }, {
	    key: '_getPendingOps',
	    value: function _getPendingOps() {
	      var stateController = _CoreManager2['default'].getObjectStateController();
	      return stateController.getPendingOps(this._getStateIdentifier());
	    }
	  }, {
	    key: '_clearPendingOps',
	    value: function _clearPendingOps() {
	      var pending = this._getPendingOps();
	      var latest = pending[pending.length - 1];
	      var keys = _Object$keys(latest);
	      keys.forEach(function (key) {
	        delete latest[key];
	      });
	    }
	  }, {
	    key: '_getDirtyObjectAttributes',
	    value: function _getDirtyObjectAttributes() {
	      var attributes = this.attributes;
	      var stateController = _CoreManager2['default'].getObjectStateController();
	      var objectCache = stateController.getObjectCache(this._getStateIdentifier());
	      var dirty = {};
	      for (var attr in attributes) {
	        var val = attributes[attr];
	        if (val && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' && !(val instanceof ParseObject) && !(val instanceof _ParseFile2['default']) && !(val instanceof _ParseRelation2['default'])) {
	          // Due to the way browsers construct maps, the key order will not change
	          // unless the object is changed
	          try {
	            var json = (0, _encode2['default'])(val, false, true);
	            var stringified = JSON.stringify(json);
	            if (objectCache[attr] !== stringified) {
	              dirty[attr] = val;
	            }
	          } catch (e) {
	            // Error occurred, possibly by a nested unsaved pointer in a mutable container
	            // No matter how it happened, it indicates a change in the attribute
	            dirty[attr] = val;
	          }
	        }
	      }
	      return dirty;
	    }
	  }, {
	    key: '_toFullJSON',
	    value: function _toFullJSON(seen) {
	      var json = this.toJSON(seen);
	      json.__type = 'Object';
	      json.className = this.className;
	      return json;
	    }
	  }, {
	    key: '_getSaveJSON',
	    value: function _getSaveJSON() {
	      var pending = this._getPendingOps();
	      var dirtyObjects = this._getDirtyObjectAttributes();
	      var json = {};
	      var attr;
	      for (attr in dirtyObjects) {
	        json[attr] = new _ParseOp.SetOp(dirtyObjects[attr]).toJSON();
	      }
	      for (attr in pending[0]) {
	        json[attr] = pending[0][attr].toJSON();
	      }
	      return json;
	    }
	  }, {
	    key: '_getSaveParams',
	    value: function _getSaveParams() {
	      var method = this.id ? 'PUT' : 'POST';
	      var body = this._getSaveJSON();
	      var path = 'classes/' + this.className;
	      if (this.id) {
	        path += '/' + this.id;
	      } else if (this.className === '_User') {
	        path = 'users';
	      }
	      return {
	        method: method,
	        body: body,
	        path: path
	      };
	    }
	  }, {
	    key: '_finishFetch',
	    value: function _finishFetch(serverData) {
	      if (!this.id && serverData.objectId) {
	        this.id = serverData.objectId;
	      }
	      var stateController = _CoreManager2['default'].getObjectStateController();
	      stateController.initializeState(this._getStateIdentifier());
	      var decoded = {};
	      for (var attr in serverData) {
	        if (attr === 'ACL') {
	          decoded[attr] = new _ParseACL2['default'](serverData[attr]);
	        } else if (attr !== 'objectId') {
	          decoded[attr] = (0, _decode2['default'])(serverData[attr]);
	          if (decoded[attr] instanceof _ParseRelation2['default']) {
	            decoded[attr]._ensureParentAndKey(this, attr);
	          }
	        }
	      }
	      if (decoded.createdAt && typeof decoded.createdAt === 'string') {
	        decoded.createdAt = (0, _parseDate2['default'])(decoded.createdAt);
	      }
	      if (decoded.updatedAt && typeof decoded.updatedAt === 'string') {
	        decoded.updatedAt = (0, _parseDate2['default'])(decoded.updatedAt);
	      }
	      if (!decoded.updatedAt && decoded.createdAt) {
	        decoded.updatedAt = decoded.createdAt;
	      }
	      stateController.commitServerChanges(this._getStateIdentifier(), decoded);
	    }
	  }, {
	    key: '_setExisted',
	    value: function _setExisted(existed) {
	      var stateController = _CoreManager2['default'].getObjectStateController();
	      var state = stateController.getState(this._getStateIdentifier());
	      if (state) {
	        state.existed = existed;
	      }
	    }
	  }, {
	    key: '_migrateId',
	    value: function _migrateId(serverId) {
	      if (this._localId && serverId) {
	        if (singleInstance) {
	          var stateController = _CoreManager2['default'].getObjectStateController();
	          var oldState = stateController.removeState(this._getStateIdentifier());
	          this.id = serverId;
	          delete this._localId;
	          if (oldState) {
	            stateController.initializeState(this._getStateIdentifier(), oldState);
	          }
	        } else {
	          this.id = serverId;
	          delete this._localId;
	        }
	      }
	    }
	  }, {
	    key: '_handleSaveResponse',
	    value: function _handleSaveResponse(response, status) {
	      var changes = {};
	      var attr;
	      var stateController = _CoreManager2['default'].getObjectStateController();
	      var pending = stateController.popPendingState(this._getStateIdentifier());
	      for (attr in pending) {
	        if (pending[attr] instanceof _ParseOp.RelationOp) {
	          changes[attr] = pending[attr].applyTo(undefined, this, attr);
	        } else if (!(attr in response)) {
	          // Only SetOps and UnsetOps should not come back with results
	          changes[attr] = pending[attr].applyTo(undefined);
	        }
	      }
	      for (attr in response) {
	        if ((attr === 'createdAt' || attr === 'updatedAt') && typeof response[attr] === 'string') {
	          changes[attr] = (0, _parseDate2['default'])(response[attr]);
	        } else if (attr === 'ACL') {
	          changes[attr] = new _ParseACL2['default'](response[attr]);
	        } else if (attr !== 'objectId') {
	          changes[attr] = (0, _decode2['default'])(response[attr]);
	        }
	      }
	      if (changes.createdAt && !changes.updatedAt) {
	        changes.updatedAt = changes.createdAt;
	      }
	
	      this._migrateId(response.objectId);
	
	      if (status !== 201) {
	        this._setExisted(true);
	      }
	
	      stateController.commitServerChanges(this._getStateIdentifier(), changes);
	    }
	  }, {
	    key: '_handleSaveError',
	    value: function _handleSaveError() {
	      var pending = this._getPendingOps();
	      var stateController = _CoreManager2['default'].getObjectStateController();
	      stateController.mergeFirstPendingState(this._getStateIdentifier());
	    }
	
	    /** Public methods **/
	
	  }, {
	    key: 'initialize',
	    value: function initialize() {}
	    // NOOP
	
	    /**
	     * Returns a JSON version of the object suitable for saving to Parse.
	     * @method toJSON
	     * @return {Object}
	     */
	
	  }, {
	    key: 'toJSON',
	    value: function toJSON(seen) {
	      var seenEntry = this.id ? this.className + ':' + this.id : this;
	      var seen = seen || [seenEntry];
	      var json = {};
	      var attrs = this.attributes;
	      for (var attr in attrs) {
	        if ((attr === 'createdAt' || attr === 'updatedAt') && attrs[attr].toJSON) {
	          json[attr] = attrs[attr].toJSON();
	        } else {
	          json[attr] = (0, _encode2['default'])(attrs[attr], false, false, seen);
	        }
	      }
	      var pending = this._getPendingOps();
	      for (var attr in pending[0]) {
	        json[attr] = pending[0][attr].toJSON();
	      }
	
	      if (this.id) {
	        json.objectId = this.id;
	      }
	      return json;
	    }
	
	    /**
	     * Determines whether this ParseObject is equal to another ParseObject
	     * @method equals
	     * @return {Boolean}
	     */
	  }, {
	    key: 'equals',
	    value: function equals(other) {
	      if (this === other) {
	        return true;
	      }
	      return other instanceof ParseObject && this.className === other.className && this.id === other.id && typeof this.id !== 'undefined';
	    }
	
	    /**
	     * Returns true if this object has been modified since its last
	     * save/refresh.  If an attribute is specified, it returns true only if that
	     * particular attribute has been modified since the last save/refresh.
	     * @method dirty
	     * @param {String} attr An attribute name (optional).
	     * @return {Boolean}
	     */
	  }, {
	    key: 'dirty',
	    value: function dirty(attr) {
	      if (!this.id) {
	        return true;
	      }
	      var pendingOps = this._getPendingOps();
	      var dirtyObjects = this._getDirtyObjectAttributes();
	      if (attr) {
	        if (dirtyObjects.hasOwnProperty(attr)) {
	          return true;
	        }
	        for (var i = 0; i < pendingOps.length; i++) {
	          if (pendingOps[i].hasOwnProperty(attr)) {
	            return true;
	          }
	        }
	        return false;
	      }
	      if (_Object$keys(pendingOps[0]).length !== 0) {
	        return true;
	      }
	      if (_Object$keys(dirtyObjects).length !== 0) {
	        return true;
	      }
	      return false;
	    }
	
	    /**
	     * Returns an array of keys that have been modified since last save/refresh
	     * @method dirtyKeys
	     * @return {Array of string}
	     */
	  }, {
	    key: 'dirtyKeys',
	    value: function dirtyKeys() {
	      var pendingOps = this._getPendingOps();
	      var keys = {};
	      for (var i = 0; i < pendingOps.length; i++) {
	        for (var attr in pendingOps[i]) {
	          keys[attr] = true;
	        }
	      }
	      var dirtyObjects = this._getDirtyObjectAttributes();
	      for (var attr in dirtyObjects) {
	        keys[attr] = true;
	      }
	      return _Object$keys(keys);
	    }
	
	    /**
	     * Gets a Pointer referencing this Object.
	     * @method toPointer
	     * @return {Object}
	     */
	  }, {
	    key: 'toPointer',
	    value: function toPointer() {
	      if (!this.id) {
	        throw new Error('Cannot create a pointer to an unsaved ParseObject');
	      }
	      return {
	        __type: 'Pointer',
	        className: this.className,
	        objectId: this.id
	      };
	    }
	
	    /**
	     * Gets the value of an attribute.
	     * @method get
	     * @param {String} attr The string name of an attribute.
	     */
	  }, {
	    key: 'get',
	    value: function get(attr) {
	      return this.attributes[attr];
	    }
	
	    /**
	     * Gets a relation on the given class for the attribute.
	     * @method relation
	     * @param String attr The attribute to get the relation for.
	     */
	  }, {
	    key: 'relation',
	    value: function relation(attr) {
	      var value = this.get(attr);
	      if (value) {
	        if (!(value instanceof _ParseRelation2['default'])) {
	          throw new Error('Called relation() on non-relation field ' + attr);
	        }
	        value._ensureParentAndKey(this, attr);
	        return value;
	      }
	      return new _ParseRelation2['default'](this, attr);
	    }
	
	    /**
	     * Gets the HTML-escaped value of an attribute.
	     * @method escape
	     * @param {String} attr The string name of an attribute.
	     */
	  }, {
	    key: 'escape',
	    value: function escape(attr) {
	      var val = this.attributes[attr];
	      if (val == null) {
	        return '';
	      }
	      var str = val;
	      if (typeof val !== 'string') {
	        if (typeof val.toString !== 'function') {
	          return '';
	        }
	        val = val.toString();
	      }
	      return (0, _escape3['default'])(val);
	    }
	
	    /**
	     * Returns <code>true</code> if the attribute contains a value that is not
	     * null or undefined.
	     * @method has
	     * @param {String} attr The string name of the attribute.
	     * @return {Boolean}
	     */
	  }, {
	    key: 'has',
	    value: function has(attr) {
	      var attributes = this.attributes;
	      if (attributes.hasOwnProperty(attr)) {
	        return attributes[attr] != null;
	      }
	      return false;
	    }
	
	    /**
	     * Sets a hash of model attributes on the object.
	     *
	     * <p>You can call it with an object containing keys and values, or with one
	     * key and value.  For example:<pre>
	     *   gameTurn.set({
	     *     player: player1,
	     *     diceRoll: 2
	     *   }, {
	     *     error: function(gameTurnAgain, error) {
	     *       // The set failed validation.
	     *     }
	     *   });
	     *
	     *   game.set("currentPlayer", player2, {
	     *     error: function(gameTurnAgain, error) {
	     *       // The set failed validation.
	     *     }
	     *   });
	     *
	     *   game.set("finished", true);</pre></p>
	     *
	     * @method set
	     * @param {String} key The key to set.
	     * @param {} value The value to give it.
	     * @param {Object} options A set of options for the set.
	     *     The only supported option is <code>error</code>.
	     * @return {Boolean} true if the set succeeded.
	     */
	  }, {
	    key: 'set',
	    value: function set(key, value, options) {
	      var changes = {};
	      var newOps = {};
	      if (key && (typeof key === 'undefined' ? 'undefined' : _typeof(key)) === 'object') {
	        changes = key;
	        options = value;
	      } else if (typeof key === 'string') {
	        changes[key] = value;
	      } else {
	        return this;
	      }
	
	      options = options || {};
	      var readonly = [];
	      if (typeof this.constructor.readOnlyAttributes === 'function') {
	        readonly = readonly.concat(this.constructor.readOnlyAttributes());
	      }
	      for (var k in changes) {
	        if (k === 'createdAt' || k === 'updatedAt') {
	          // This property is read-only, but for legacy reasons we silently
	          // ignore it
	          continue;
	        }
	        if (readonly.indexOf(k) > -1) {
	          throw new Error('Cannot modify readonly attribute: ' + k);
	        }
	        if (options.unset) {
	          newOps[k] = new _ParseOp.UnsetOp();
	        } else if (changes[k] instanceof _ParseOp.Op) {
	          newOps[k] = changes[k];
	        } else if (changes[k] && _typeof(changes[k]) === 'object' && typeof changes[k].__op === 'string') {
	          newOps[k] = (0, _ParseOp.opFromJSON)(changes[k]);
	        } else if (k === 'objectId' || k === 'id') {
	          this.id = changes[k];
	        } else if (k === 'ACL' && _typeof(changes[k]) === 'object' && !(changes[k] instanceof _ParseACL2['default'])) {
	          newOps[k] = new _ParseOp.SetOp(new _ParseACL2['default'](changes[k]));
	        } else {
	          newOps[k] = new _ParseOp.SetOp(changes[k]);
	        }
	      }
	
	      // Calculate new values
	      var currentAttributes = this.attributes;
	      var newValues = {};
	      for (var attr in newOps) {
	        if (newOps[attr] instanceof _ParseOp.RelationOp) {
	          newValues[attr] = newOps[attr].applyTo(currentAttributes[attr], this, attr);
	        } else if (!(newOps[attr] instanceof _ParseOp.UnsetOp)) {
	          newValues[attr] = newOps[attr].applyTo(currentAttributes[attr]);
	        }
	      }
	
	      // Validate changes
	      if (!options.ignoreValidation) {
	        var validation = this.validate(newValues);
	        if (validation) {
	          if (typeof options.error === 'function') {
	            options.error(this, validation);
	          }
	          return false;
	        }
	      }
	
	      // Consolidate Ops
	      var pendingOps = this._getPendingOps();
	      var last = pendingOps.length - 1;
	      var stateController = _CoreManager2['default'].getObjectStateController();
	      for (var attr in newOps) {
	        var nextOp = newOps[attr].mergeWith(pendingOps[last][attr]);
	        stateController.setPendingOp(this._getStateIdentifier(), attr, nextOp);
	      }
	
	      return this;
	    }
	
	    /**
	     * Remove an attribute from the model. This is a noop if the attribute doesn't
	     * exist.
	     * @method unset
	     * @param {String} attr The string name of an attribute.
	     */
	  }, {
	    key: 'unset',
	    value: function unset(attr, options) {
	      options = options || {};
	      options.unset = true;
	      return this.set(attr, null, options);
	    }
	
	    /**
	     * Atomically increments the value of the given attribute the next time the
	     * object is saved. If no amount is specified, 1 is used by default.
	     *
	     * @method increment
	     * @param attr {String} The key.
	     * @param amount {Number} The amount to increment by (optional).
	     */
	  }, {
	    key: 'increment',
	    value: function increment(attr, amount) {
	      if (typeof amount === 'undefined') {
	        amount = 1;
	      }
	      if (typeof amount !== 'number') {
	        throw new Error('Cannot increment by a non-numeric amount.');
	      }
	      return this.set(attr, new _ParseOp.IncrementOp(amount));
	    }
	
	    /**
	     * Atomically add an object to the end of the array associated with a given
	     * key.
	     * @method add
	     * @param attr {String} The key.
	     * @param item {} The item to add.
	     */
	  }, {
	    key: 'add',
	    value: function add(attr, item) {
	      return this.set(attr, new _ParseOp.AddOp([item]));
	    }
	
	    /**
	     * Atomically add an object to the array associated with a given key, only
	     * if it is not already present in the array. The position of the insert is
	     * not guaranteed.
	     *
	     * @method addUnique
	     * @param attr {String} The key.
	     * @param item {} The object to add.
	     */
	  }, {
	    key: 'addUnique',
	    value: function addUnique(attr, item) {
	      return this.set(attr, new _ParseOp.AddUniqueOp([item]));
	    }
	
	    /**
	     * Atomically remove all instances of an object from the array associated
	     * with a given key.
	     *
	     * @method remove
	     * @param attr {String} The key.
	     * @param item {} The object to remove.
	     */
	  }, {
	    key: 'remove',
	    value: function remove(attr, item) {
	      return this.set(attr, new _ParseOp.RemoveOp([item]));
	    }
	
	    /**
	     * Returns an instance of a subclass of Parse.Op describing what kind of
	     * modification has been performed on this field since the last time it was
	     * saved. For example, after calling object.increment("x"), calling
	     * object.op("x") would return an instance of Parse.Op.Increment.
	     *
	     * @method op
	     * @param attr {String} The key.
	     * @returns {Parse.Op} The operation, or undefined if none.
	     */
	  }, {
	    key: 'op',
	    value: function op(attr) {
	      var pending = this._getPendingOps();
	      for (var i = pending.length; i--;) {
	        if (pending[i][attr]) {
	          return pending[i][attr];
	        }
	      }
	    }
	
	    /**
	     * Creates a new model with identical attributes to this one, similar to Backbone.Model's clone()
	     * @method clone
	     * @return {Parse.Object}
	     */
	  }, {
	    key: 'clone',
	    value: function clone() {
	      var clone = new this.constructor();
	      if (!clone.className) {
	        clone.className = this.className;
	      }
	      var attributes = this.attributes;
	      if (typeof this.constructor.readOnlyAttributes === 'function') {
	        var readonly = this.constructor.readOnlyAttributes() || [];
	        // Attributes are frozen, so we have to rebuild an object,
	        // rather than delete readonly keys
	        var copy = {};
	        for (var a in attributes) {
	          if (readonly.indexOf(a) < 0) {
	            copy[a] = attributes[a];
	          }
	        }
	        attributes = copy;
	      }
	      if (clone.set) {
	        clone.set(attributes);
	      }
	      return clone;
	    }
	
	    /**
	     * Creates a new instance of this object. Not to be confused with clone()
	     * @method newInstance
	     * @return {Parse.Object}
	     */
	  }, {
	    key: 'newInstance',
	    value: function newInstance() {
	      var clone = new this.constructor();
	      if (!clone.className) {
	        clone.className = this.className;
	      }
	      clone.id = this.id;
	      if (singleInstance) {
	        // Just return an object with the right id
	        return clone;
	      }
	
	      var stateController = _CoreManager2['default'].getObjectStateController();
	      stateController.duplicateState(this._getStateIdentifier(), clone._getStateIdentifier());
	      return clone;
	    }
	
	    /**
	     * Returns true if this object has never been saved to Parse.
	     * @method isNew
	     * @return {Boolean}
	     */
	  }, {
	    key: 'isNew',
	    value: function isNew() {
	      return !this.id;
	    }
	
	    /**
	     * Returns true if this object was created by the Parse server when the
	     * object might have already been there (e.g. in the case of a Facebook
	     * login)
	     * @method existed
	     * @return {Boolean}
	     */
	  }, {
	    key: 'existed',
	    value: function existed() {
	      if (!this.id) {
	        return false;
	      }
	      var stateController = _CoreManager2['default'].getObjectStateController();
	      var state = stateController.getState(this._getStateIdentifier());
	      if (state) {
	        return state.existed;
	      }
	      return false;
	    }
	
	    /**
	     * Checks if the model is currently in a valid state.
	     * @method isValid
	     * @return {Boolean}
	     */
	  }, {
	    key: 'isValid',
	    value: function isValid() {
	      return !this.validate(this.attributes);
	    }
	
	    /**
	     * You should not call this function directly unless you subclass
	     * <code>Parse.Object</code>, in which case you can override this method
	     * to provide additional validation on <code>set</code> and
	     * <code>save</code>.  Your implementation should return
	     *
	     * @method validate
	     * @param {Object} attrs The current data to validate.
	     * @return {} False if the data is valid.  An error object otherwise.
	     * @see Parse.Object#set
	     */
	  }, {
	    key: 'validate',
	    value: function validate(attrs) {
	      if (attrs.hasOwnProperty('ACL') && !(attrs.ACL instanceof _ParseACL2['default'])) {
	        return new _ParseError2['default'](_ParseError2['default'].OTHER_CAUSE, 'ACL must be a Parse ACL.');
	      }
	      for (var key in attrs) {
	        if (!/^[A-Za-z][0-9A-Za-z_]*$/.test(key)) {
	          return new _ParseError2['default'](_ParseError2['default'].INVALID_KEY_NAME);
	        }
	      }
	      return false;
	    }
	
	    /**
	     * Returns the ACL for this object.
	     * @method getACL
	     * @returns {Parse.ACL} An instance of Parse.ACL.
	     * @see Parse.Object#get
	     */
	  }, {
	    key: 'getACL',
	    value: function getACL() {
	      var acl = this.get('ACL');
	      if (acl instanceof _ParseACL2['default']) {
	        return acl;
	      }
	      return null;
	    }
	
	    /**
	     * Sets the ACL to be used for this object.
	     * @method setACL
	     * @param {Parse.ACL} acl An instance of Parse.ACL.
	     * @param {Object} options Optional Backbone-like options object to be
	     *     passed in to set.
	     * @return {Boolean} Whether the set passed validation.
	     * @see Parse.Object#set
	     */
	  }, {
	    key: 'setACL',
	    value: function setACL(acl, options) {
	      return this.set('ACL', acl, options);
	    }
	
	    /**
	     * Clears any changes to this object made since the last call to save()
	     * @method revert
	     */
	  }, {
	    key: 'revert',
	    value: function revert() {
	      this._clearPendingOps();
	    }
	
	    /**
	     * Clears all attributes on a model
	     * @method clear
	     */
	  }, {
	    key: 'clear',
	    value: function clear() {
	      var attributes = this.attributes;
	      var erasable = {};
	      var readonly = ['createdAt', 'updatedAt'];
	      if (typeof this.constructor.readOnlyAttributes === 'function') {
	        readonly = readonly.concat(this.constructor.readOnlyAttributes());
	      }
	      for (var attr in attributes) {
	        if (readonly.indexOf(attr) < 0) {
	          erasable[attr] = true;
	        }
	      }
	      return this.set(erasable, { unset: true });
	    }
	
	    /**
	     * Fetch the model from the server. If the server's representation of the
	     * model differs from its current attributes, they will be overriden.
	     *
	     * @method fetch
	     * @param {Object} options A Backbone-style callback object.
	     * Valid options are:<ul>
	     *   <li>success: A Backbone-style success callback.
	     *   <li>error: An Backbone-style error callback.
	     *   <li>useMasterKey: In Cloud Code and Node only, causes the Master Key to
	     *     be used for this request.
	     *   <li>sessionToken: A valid session token, used for making a request on
	     *       behalf of a specific user.
	     * </ul>
	     * @return {Parse.Promise} A promise that is fulfilled when the fetch
	     *     completes.
	     */
	  }, {
	    key: 'fetch',
	    value: function fetch(options) {
	      options = options || {};
	      var fetchOptions = {};
	      if (options.hasOwnProperty('useMasterKey')) {
	        fetchOptions.useMasterKey = options.useMasterKey;
	      }
	      if (options.hasOwnProperty('sessionToken')) {
	        fetchOptions.sessionToken = options.sessionToken;
	      }
	      var controller = _CoreManager2['default'].getObjectController();
	      return controller.fetch(this, true, fetchOptions)._thenRunCallbacks(options);
	    }
	
	    /**
	     * Set a hash of model attributes, and save the model to the server.
	     * updatedAt will be updated when the request returns.
	     * You can either call it as:<pre>
	     *   object.save();</pre>
	     * or<pre>
	     *   object.save(null, options);</pre>
	     * or<pre>
	     *   object.save(attrs, options);</pre>
	     * or<pre>
	     *   object.save(key, value, options);</pre>
	     *
	     * For example, <pre>
	     *   gameTurn.save({
	     *     player: "Jake Cutter",
	     *     diceRoll: 2
	     *   }, {
	     *     success: function(gameTurnAgain) {
	     *       // The save was successful.
	     *     },
	     *     error: function(gameTurnAgain, error) {
	     *       // The save failed.  Error is an instance of Parse.Error.
	     *     }
	     *   });</pre>
	     * or with promises:<pre>
	     *   gameTurn.save({
	     *     player: "Jake Cutter",
	     *     diceRoll: 2
	     *   }).then(function(gameTurnAgain) {
	     *     // The save was successful.
	     *   }, function(error) {
	     *     // The save failed.  Error is an instance of Parse.Error.
	     *   });</pre>
	     *
	     * @method save
	     * @param {Object} options A Backbone-style callback object.
	     * Valid options are:<ul>
	     *   <li>success: A Backbone-style success callback.
	     *   <li>error: An Backbone-style error callback.
	     *   <li>useMasterKey: In Cloud Code and Node only, causes the Master Key to
	     *     be used for this request.
	     *   <li>sessionToken: A valid session token, used for making a request on
	     *       behalf of a specific user.
	     * </ul>
	     * @return {Parse.Promise} A promise that is fulfilled when the save
	     *     completes.
	     */
	  }, {
	    key: 'save',
	    value: function save(arg1, arg2, arg3) {
	      var _this = this;
	
	      var attrs;
	      var options;
	      if ((typeof arg1 === 'undefined' ? 'undefined' : _typeof(arg1)) === 'object' || typeof arg1 === 'undefined') {
	        attrs = arg1;
	        if ((typeof arg2 === 'undefined' ? 'undefined' : _typeof(arg2)) === 'object') {
	          options = arg2;
	        }
	      } else {
	        attrs = {};
	        attrs[arg1] = arg2;
	        options = arg3;
	      }
	
	      // Support save({ success: function() {}, error: function() {} })
	      if (!options && attrs) {
	        options = {};
	        if (typeof attrs.success === 'function') {
	          options.success = attrs.success;
	          delete attrs.success;
	        }
	        if (typeof attrs.error === 'function') {
	          options.error = attrs.error;
	          delete attrs.error;
	        }
	      }
	
	      if (attrs) {
	        var validation = this.validate(attrs);
	        if (validation) {
	          if (options && typeof options.error === 'function') {
	            options.error(this, validation);
	          }
	          return _ParsePromise2['default'].error(validation);
	        }
	        this.set(attrs, options);
	      }
	
	      options = options || {};
	      var saveOptions = {};
	      if (options.hasOwnProperty('useMasterKey')) {
	        saveOptions.useMasterKey = options.useMasterKey;
	      }
	      if (options.hasOwnProperty('sessionToken')) {
	        saveOptions.sessionToken = options.sessionToken;
	      }
	
	      var controller = _CoreManager2['default'].getObjectController();
	      var unsaved = (0, _unsavedChildren2['default'])(this);
	      return controller.save(unsaved, saveOptions).then(function () {
	        return controller.save(_this, saveOptions);
	      })._thenRunCallbacks(options, this);
	    }
	
	    /**
	     * Destroy this model on the server if it was already persisted.
	     * If `wait: true` is passed, waits for the server to respond
	     * before removal.
	     *
	     * @method destroy
	     * @param {Object} options A Backbone-style callback object.
	     * Valid options are:<ul>
	     *   <li>success: A Backbone-style success callback
	     *   <li>error: An Backbone-style error callback.
	     *   <li>useMasterKey: In Cloud Code and Node only, causes the Master Key to
	     *     be used for this request.
	     *   <li>sessionToken: A valid session token, used for making a request on
	     *       behalf of a specific user.
	     * </ul>
	     * @return {Parse.Promise} A promise that is fulfilled when the destroy
	     *     completes.
	     */
	  }, {
	    key: 'destroy',
	    value: function destroy(options) {
	      options = options || {};
	      var destroyOptions = {};
	      if (options.hasOwnProperty('useMasterKey')) {
	        destroyOptions.useMasterKey = options.useMasterKey;
	      }
	      if (options.hasOwnProperty('sessionToken')) {
	        destroyOptions.sessionToken = options.sessionToken;
	      }
	      if (!this.id) {
	        return _ParsePromise2['default'].as()._thenRunCallbacks(options);
	      }
	      return _CoreManager2['default'].getObjectController().destroy(this, destroyOptions)._thenRunCallbacks(options);
	    }
	
	    /** Static methods **/
	
	  }, {
	    key: 'attributes',
	    get: function get() {
	      var stateController = _CoreManager2['default'].getObjectStateController();
	      return _Object$freeze(stateController.estimateAttributes(this._getStateIdentifier()));
	    }
	
	    /**
	     * The first time this object was saved on the server.
	     * @property createdAt
	     * @type Date
	     */
	  }, {
	    key: 'createdAt',
	    get: function get() {
	      return this._getServerData().createdAt;
	    }
	
	    /**
	     * The last time this object was updated on the server.
	     * @property updatedAt
	     * @type Date
	     */
	  }, {
	    key: 'updatedAt',
	    get: function get() {
	      return this._getServerData().updatedAt;
	    }
	  }], [{
	    key: '_clearAllState',
	    value: function _clearAllState() {
	      var stateController = _CoreManager2['default'].getObjectStateController();
	      stateController.clearAllState();
	    }
	
	    /**
	     * Fetches the given list of Parse.Object.
	     * If any error is encountered, stops and calls the error handler.
	     *
	     * <pre>
	     *   Parse.Object.fetchAll([object1, object2, ...], {
	     *     success: function(list) {
	     *       // All the objects were fetched.
	     *     },
	     *     error: function(error) {
	     *       // An error occurred while fetching one of the objects.
	     *     },
	     *   });
	     * </pre>
	     *
	     * @method fetchAll
	     * @param {Array} list A list of <code>Parse.Object</code>.
	     * @param {Object} options A Backbone-style callback object.
	     * @static
	     * Valid options are:<ul>
	     *   <li>success: A Backbone-style success callback.
	     *   <li>error: An Backbone-style error callback.
	     * </ul>
	     */
	  }, {
	    key: 'fetchAll',
	    value: function fetchAll(list, options) {
	      var options = options || {};
	
	      var queryOptions = {};
	      if (options.hasOwnProperty('useMasterKey')) {
	        queryOptions.useMasterKey = options.useMasterKey;
	      }
	      if (options.hasOwnProperty('sessionToken')) {
	        queryOptions.sessionToken = options.sessionToken;
	      }
	      return _CoreManager2['default'].getObjectController().fetch(list, true, queryOptions)._thenRunCallbacks(options);
	    }
	
	    /**
	     * Fetches the given list of Parse.Object if needed.
	     * If any error is encountered, stops and calls the error handler.
	     *
	     * <pre>
	     *   Parse.Object.fetchAllIfNeeded([object1, ...], {
	     *     success: function(list) {
	     *       // Objects were fetched and updated.
	     *     },
	     *     error: function(error) {
	     *       // An error occurred while fetching one of the objects.
	     *     },
	     *   });
	     * </pre>
	     *
	     * @method fetchAllIfNeeded
	     * @param {Array} list A list of <code>Parse.Object</code>.
	     * @param {Object} options A Backbone-style callback object.
	     * @static
	     * Valid options are:<ul>
	     *   <li>success: A Backbone-style success callback.
	     *   <li>error: An Backbone-style error callback.
	     * </ul>
	     */
	  }, {
	    key: 'fetchAllIfNeeded',
	    value: function fetchAllIfNeeded(list, options) {
	      var options = options || {};
	
	      var queryOptions = {};
	      if (options.hasOwnProperty('useMasterKey')) {
	        queryOptions.useMasterKey = options.useMasterKey;
	      }
	      if (options.hasOwnProperty('sessionToken')) {
	        queryOptions.sessionToken = options.sessionToken;
	      }
	      return _CoreManager2['default'].getObjectController().fetch(list, false, queryOptions)._thenRunCallbacks(options);
	    }
	
	    /**
	     * Destroy the given list of models on the server if it was already persisted.
	     *
	     * <p>Unlike saveAll, if an error occurs while deleting an individual model,
	     * this method will continue trying to delete the rest of the models if
	     * possible, except in the case of a fatal error like a connection error.
	     *
	     * <p>In particular, the Parse.Error object returned in the case of error may
	     * be one of two types:
	     *
	     * <ul>
	     *   <li>A Parse.Error.AGGREGATE_ERROR. This object's "errors" property is an
	     *       array of other Parse.Error objects. Each error object in this array
	     *       has an "object" property that references the object that could not be
	     *       deleted (for instance, because that object could not be found).</li>
	     *   <li>A non-aggregate Parse.Error. This indicates a serious error that
	     *       caused the delete operation to be aborted partway through (for
	     *       instance, a connection failure in the middle of the delete).</li>
	     * </ul>
	     *
	     * <pre>
	     *   Parse.Object.destroyAll([object1, object2, ...], {
	     *     success: function() {
	     *       // All the objects were deleted.
	     *     },
	     *     error: function(error) {
	     *       // An error occurred while deleting one or more of the objects.
	     *       // If this is an aggregate error, then we can inspect each error
	     *       // object individually to determine the reason why a particular
	     *       // object was not deleted.
	     *       if (error.code === Parse.Error.AGGREGATE_ERROR) {
	     *         for (var i = 0; i < error.errors.length; i++) {
	     *           console.log("Couldn't delete " + error.errors[i].object.id +
	     *             "due to " + error.errors[i].message);
	     *         }
	     *       } else {
	     *         console.log("Delete aborted because of " + error.message);
	     *       }
	     *     },
	     *   });
	     * </pre>
	     *
	     * @method destroyAll
	     * @param {Array} list A list of <code>Parse.Object</code>.
	     * @param {Object} options A Backbone-style callback object.
	     * @static
	     * Valid options are:<ul>
	     *   <li>useMasterKey: In Cloud Code and Node only, causes the Master Key to
	     *     be used for this request.
	     *   <li>sessionToken: A valid session token, used for making a request on
	     *       behalf of a specific user.
	     * </ul>
	     * @return {Parse.Promise} A promise that is fulfilled when the destroyAll
	     *     completes.
	     */
	  }, {
	    key: 'destroyAll',
	    value: function destroyAll(list, options) {
	      var options = options || {};
	
	      var destroyOptions = {};
	      if (options.hasOwnProperty('useMasterKey')) {
	        destroyOptions.useMasterKey = options.useMasterKey;
	      }
	      if (options.hasOwnProperty('sessionToken')) {
	        destroyOptions.sessionToken = options.sessionToken;
	      }
	      return _CoreManager2['default'].getObjectController().destroy(list, destroyOptions)._thenRunCallbacks(options);
	    }
	
	    /**
	     * Saves the given list of Parse.Object.
	     * If any error is encountered, stops and calls the error handler.
	     *
	     * <pre>
	     *   Parse.Object.saveAll([object1, object2, ...], {
	     *     success: function(list) {
	     *       // All the objects were saved.
	     *     },
	     *     error: function(error) {
	     *       // An error occurred while saving one of the objects.
	     *     },
	     *   });
	     * </pre>
	     *
	     * @method saveAll
	     * @param {Array} list A list of <code>Parse.Object</code>.
	     * @param {Object} options A Backbone-style callback object.
	     * @static
	     * Valid options are:<ul>
	     *   <li>useMasterKey: In Cloud Code and Node only, causes the Master Key to
	     *     be used for this request.
	     *   <li>sessionToken: A valid session token, used for making a request on
	     *       behalf of a specific user.
	     * </ul>
	     */
	  }, {
	    key: 'saveAll',
	    value: function saveAll(list, options) {
	      var options = options || {};
	
	      var saveOptions = {};
	      if (options.hasOwnProperty('useMasterKey')) {
	        saveOptions.useMasterKey = options.useMasterKey;
	      }
	      if (options.hasOwnProperty('sessionToken')) {
	        saveOptions.sessionToken = options.sessionToken;
	      }
	      return _CoreManager2['default'].getObjectController().save(list, saveOptions)._thenRunCallbacks(options);
	    }
	
	    /**
	     * Creates a reference to a subclass of Parse.Object with the given id. This
	     * does not exist on Parse.Object, only on subclasses.
	     *
	     * <p>A shortcut for: <pre>
	     *  var Foo = Parse.Object.extend("Foo");
	     *  var pointerToFoo = new Foo();
	     *  pointerToFoo.id = "myObjectId";
	     * </pre>
	     *
	     * @method createWithoutData
	     * @param {String} id The ID of the object to create a reference to.
	     * @static
	     * @return {Parse.Object} A Parse.Object reference.
	     */
	  }, {
	    key: 'createWithoutData',
	    value: function createWithoutData(id) {
	      var obj = new this();
	      obj.id = id;
	      return obj;
	    }
	
	    /**
	     * Creates a new instance of a Parse Object from a JSON representation.
	     * @method fromJSON
	     * @param {Object} json The JSON map of the Object's data
	     * @param {boolean} override In single instance mode, all old server data
	     *   is overwritten if this is set to true
	     * @static
	     * @return {Parse.Object} A Parse.Object reference
	     */
	  }, {
	    key: 'fromJSON',
	    value: function fromJSON(json, override) {
	      if (!json.className) {
	        throw new Error('Cannot create an object without a className');
	      }
	      var constructor = classMap[json.className];
	      var o = constructor ? new constructor() : new ParseObject(json.className);
	      var otherAttributes = {};
	      for (var attr in json) {
	        if (attr !== 'className' && attr !== '__type') {
	          otherAttributes[attr] = json[attr];
	        }
	      }
	      if (override) {
	        // id needs to be set before clearServerData can work
	        if (otherAttributes.objectId) {
	          o.id = otherAttributes.objectId;
	        }
	        var preserved = null;
	        if (typeof o._preserveFieldsOnFetch === 'function') {
	          preserved = o._preserveFieldsOnFetch();
	        }
	        o._clearServerData();
	        if (preserved) {
	          o._finishFetch(preserved);
	        }
	      }
	      o._finishFetch(otherAttributes);
	      if (json.objectId) {
	        o._setExisted(true);
	      }
	      return o;
	    }
	
	    /**
	     * Registers a subclass of Parse.Object with a specific class name.
	     * When objects of that class are retrieved from a query, they will be
	     * instantiated with this subclass.
	     * This is only necessary when using ES6 subclassing.
	     * @method registerSubclass
	     * @param {String} className The class name of the subclass
	     * @param {Class} constructor The subclass
	     */
	  }, {
	    key: 'registerSubclass',
	    value: function registerSubclass(className, constructor) {
	      if (typeof className !== 'string') {
	        throw new TypeError('The first argument must be a valid class name.');
	      }
	      if (typeof constructor === 'undefined') {
	        throw new TypeError('You must supply a subclass constructor.');
	      }
	      if (typeof constructor !== 'function') {
	        throw new TypeError('You must register the subclass constructor. ' + 'Did you attempt to register an instance of the subclass?');
	      }
	      classMap[className] = constructor;
	      if (!constructor.className) {
	        constructor.className = className;
	      }
	    }
	
	    /**
	     * Creates a new subclass of Parse.Object for the given Parse class name.
	     *
	     * <p>Every extension of a Parse class will inherit from the most recent
	     * previous extension of that class. When a Parse.Object is automatically
	     * created by parsing JSON, it will use the most recent extension of that
	     * class.</p>
	     *
	     * <p>You should call either:<pre>
	     *     var MyClass = Parse.Object.extend("MyClass", {
	     *         <i>Instance methods</i>,
	     *         initialize: function(attrs, options) {
	     *             this.someInstanceProperty = [],
	     *             <i>Other instance properties</i>
	     *         }
	     *     }, {
	     *         <i>Class properties</i>
	     *     });</pre>
	     * or, for Backbone compatibility:<pre>
	     *     var MyClass = Parse.Object.extend({
	     *         className: "MyClass",
	     *         <i>Instance methods</i>,
	     *         initialize: function(attrs, options) {
	     *             this.someInstanceProperty = [],
	     *             <i>Other instance properties</i>
	     *         }
	     *     }, {
	     *         <i>Class properties</i>
	     *     });</pre></p>
	     *
	     * @method extend
	     * @param {String} className The name of the Parse class backing this model.
	     * @param {Object} protoProps Instance properties to add to instances of the
	     *     class returned from this method.
	     * @param {Object} classProps Class properties to add the class returned from
	     *     this method.
	     * @return {Class} A new subclass of Parse.Object.
	     */
	  }, {
	    key: 'extend',
	    value: function extend(className, protoProps, classProps) {
	      if (typeof className !== 'string') {
	        if (className && typeof className.className === 'string') {
	          return ParseObject.extend(className.className, className, protoProps);
	        } else {
	          throw new Error('Parse.Object.extend\'s first argument should be the className.');
	        }
	      }
	      var adjustedClassName = className;
	
	      if (adjustedClassName === 'User' && _CoreManager2['default'].get('PERFORM_USER_REWRITE')) {
	        adjustedClassName = '_User';
	      }
	
	      var parentProto = ParseObject.prototype;
	      if (this.hasOwnProperty('__super__') && this.__super__) {
	        parentProto = this.prototype;
	      } else if (classMap[adjustedClassName]) {
	        parentProto = classMap[adjustedClassName].prototype;
	      }
	      var ParseObjectSubclass = function ParseObjectSubclass(attributes, options) {
	        // Enable legacy initializers
	        if (typeof this.initialize === 'function') {
	          this.initialize.apply(this, arguments);
	        }
	
	        this.className = adjustedClassName;
	        this._objCount = objectCount++;
	        if (attributes && (typeof attributes === 'undefined' ? 'undefined' : _typeof(attributes)) === 'object') {
	          if (!this.set(attributes || {}, options)) {
	            throw new Error('Can\'t create an invalid Parse Object');
	          }
	        }
	      };
	      ParseObjectSubclass.className = adjustedClassName;
	      ParseObjectSubclass.__super__ = parentProto;
	
	      ParseObjectSubclass.prototype = _Object$create(parentProto, {
	        constructor: {
	          value: ParseObjectSubclass,
	          enumerable: false,
	          writable: true,
	          configurable: true
	        }
	      });
	
	      if (protoProps) {
	        for (var prop in protoProps) {
	          if (prop !== 'className') {
	            _Object$defineProperty(ParseObjectSubclass.prototype, prop, {
	              value: protoProps[prop],
	              enumerable: false,
	              writable: true,
	              configurable: true
	            });
	          }
	        }
	      }
	
	      if (classProps) {
	        for (var prop in classProps) {
	          if (prop !== 'className') {
	            _Object$defineProperty(ParseObjectSubclass, prop, {
	              value: classProps[prop],
	              enumerable: false,
	              writable: true,
	              configurable: true
	            });
	          }
	        }
	      }
	
	      ParseObjectSubclass.extend = function (name, protoProps, classProps) {
	        if (typeof name === 'string') {
	          return ParseObject.extend.call(ParseObjectSubclass, name, protoProps, classProps);
	        }
	        return ParseObject.extend.call(ParseObjectSubclass, adjustedClassName, name, protoProps);
	      };
	      ParseObjectSubclass.createWithoutData = ParseObject.createWithoutData;
	
	      classMap[adjustedClassName] = ParseObjectSubclass;
	      return ParseObjectSubclass;
	    }
	
	    /**
	     * Enable single instance objects, where any local objects with the same Id
	     * share the same attributes, and stay synchronized with each other.
	     * This is disabled by default in server environments, since it can lead to
	     * security issues.
	     * @method enableSingleInstance
	     */
	  }, {
	    key: 'enableSingleInstance',
	    value: function enableSingleInstance() {
	      singleInstance = true;
	      _CoreManager2['default'].setObjectStateController(SingleInstanceStateController);
	    }
	
	    /**
	     * Disable single instance objects, where any local objects with the same Id
	     * share the same attributes, and stay synchronized with each other.
	     * When disabled, you can have two instances of the same object in memory
	     * without them sharing attributes.
	     * @method disableSingleInstance
	     */
	  }, {
	    key: 'disableSingleInstance',
	    value: function disableSingleInstance() {
	      singleInstance = false;
	      _CoreManager2['default'].setObjectStateController(UniqueInstanceStateController);
	    }
	  }]);
	
	  return ParseObject;
	}();
	
	exports['default'] = ParseObject;
	
	_CoreManager2['default'].setObjectController({
	  fetch: function fetch(target, forceFetch, options) {
	    if (Array.isArray(target)) {
	      if (target.length < 1) {
	        return _ParsePromise2['default'].as([]);
	      }
	      var objs = [];
	      var ids = [];
	      var className = null;
	      var results = [];
	      var error = null;
	      target.forEach(function (el, i) {
	        if (error) {
	          return;
	        }
	        if (!className) {
	          className = el.className;
	        }
	        if (className !== el.className) {
	          error = new _ParseError2['default'](_ParseError2['default'].INVALID_CLASS_NAME, 'All objects should be of the same class');
	        }
	        if (!el.id) {
	          error = new _ParseError2['default'](_ParseError2['default'].MISSING_OBJECT_ID, 'All objects must have an ID');
	        }
	        if (forceFetch || _Object$keys(el._getServerData()).length === 0) {
	          ids.push(el.id);
	          objs.push(el);
	        }
	        results.push(el);
	      });
	      if (error) {
	        return _ParsePromise2['default'].error(error);
	      }
	      var query = new _ParseQuery2['default'](className);
	      query.containedIn('objectId', ids);
	      query._limit = ids.length;
	      return query.find(options).then(function (objects) {
	        var idMap = {};
	        objects.forEach(function (o) {
	          idMap[o.id] = o;
	        });
	        for (var i = 0; i < objs.length; i++) {
	          var obj = objs[i];
	          if (!obj || !obj.id || !idMap[obj.id]) {
	            if (forceFetch) {
	              return _ParsePromise2['default'].error(new _ParseError2['default'](_ParseError2['default'].OBJECT_NOT_FOUND, 'All objects must exist on the server.'));
	            }
	          }
	        }
	        if (!singleInstance) {
	          // If single instance objects are disabled, we need to replace the
	          for (var i = 0; i < results.length; i++) {
	            var obj = results[i];
	            if (obj && obj.id && idMap[obj.id]) {
	              var id = obj.id;
	              obj._finishFetch(idMap[id].toJSON());
	              results[i] = idMap[id];
	            }
	          }
	        }
	        return _ParsePromise2['default'].as(results);
	      });
	    } else {
	      var RESTController = _CoreManager2['default'].getRESTController();
	      return RESTController.request('GET', 'classes/' + target.className + '/' + target._getId(), {}, options).then(function (response, status, xhr) {
	        if (target instanceof ParseObject) {
	          target._clearPendingOps();
	          target._clearServerData();
	          target._finishFetch(response);
	        }
	        return target;
	      });
	    }
	  },
	
	  destroy: function destroy(target, options) {
	    var RESTController = _CoreManager2['default'].getRESTController();
	    if (Array.isArray(target)) {
	      if (target.length < 1) {
	        return _ParsePromise2['default'].as([]);
	      }
	      var batches = [[]];
	      target.forEach(function (obj) {
	        if (!obj.id) {
	          return;
	        }
	        batches[batches.length - 1].push(obj);
	        if (batches[batches.length - 1].length >= 20) {
	          batches.push([]);
	        }
	      });
	      if (batches[batches.length - 1].length === 0) {
	        // If the last batch is empty, remove it
	        batches.pop();
	      }
	      var deleteCompleted = _ParsePromise2['default'].as();
	      var errors = [];
	      batches.forEach(function (batch) {
	        deleteCompleted = deleteCompleted.then(function () {
	          return RESTController.request('POST', 'batch', {
	            requests: batch.map(function (obj) {
	              return {
	                method: 'DELETE',
	                path: getServerUrlPath() + 'classes/' + obj.className + '/' + obj._getId(),
	                body: {}
	              };
	            })
	          }, options).then(function (results) {
	            for (var i = 0; i < results.length; i++) {
	              if (results[i] && results[i].hasOwnProperty('error')) {
	                var err = new _ParseError2['default'](results[i].error.code, results[i].error.error);
	                err.object = batch[i];
	                errors.push(err);
	              }
	            }
	          });
	        });
	      });
	      return deleteCompleted.then(function () {
	        if (errors.length) {
	          var aggregate = new _ParseError2['default'](_ParseError2['default'].AGGREGATE_ERROR);
	          aggregate.errors = errors;
	          return _ParsePromise2['default'].error(aggregate);
	        }
	        return _ParsePromise2['default'].as(target);
	      });
	    } else if (target instanceof ParseObject) {
	      return RESTController.request('DELETE', 'classes/' + target.className + '/' + target._getId(), {}, options).then(function () {
	        return _ParsePromise2['default'].as(target);
	      });
	    }
	    return _ParsePromise2['default'].as(target);
	  },
	
	  save: function save(target, options) {
	    var RESTController = _CoreManager2['default'].getRESTController();
	    var stateController = _CoreManager2['default'].getObjectStateController();
	    if (Array.isArray(target)) {
	      if (target.length < 1) {
	        return _ParsePromise2['default'].as([]);
	      }
	
	      var unsaved = target.concat();
	      for (var i = 0; i < target.length; i++) {
	        if (target[i] instanceof ParseObject) {
	          unsaved = unsaved.concat((0, _unsavedChildren2['default'])(target[i], true));
	        }
	      }
	      unsaved = (0, _unique2['default'])(unsaved);
	
	      var filesSaved = _ParsePromise2['default'].as();
	      var pending = [];
	      unsaved.forEach(function (el) {
	        if (el instanceof _ParseFile2['default']) {
	          filesSaved = filesSaved.then(function () {
	            return el.save();
	          });
	        } else if (el instanceof ParseObject) {
	          pending.push(el);
	        }
	      });
	
	      return filesSaved.then(function () {
	        var objectError = null;
	        return _ParsePromise2['default']._continueWhile(function () {
	          return pending.length > 0;
	        }, function () {
	          var batch = [];
	          var nextPending = [];
	          pending.forEach(function (el) {
	            if (batch.length < 20 && (0, _canBeSerialized2['default'])(el)) {
	              batch.push(el);
	            } else {
	              nextPending.push(el);
	            }
	          });
	          pending = nextPending;
	          if (batch.length < 1) {
	            return _ParsePromise2['default'].error(new _ParseError2['default'](_ParseError2['default'].OTHER_CAUSE, 'Tried to save a batch with a cycle.'));
	          }
	
	          // Queue up tasks for each object in the batch.
	          // When every task is ready, the API request will execute
	          var batchReturned = new _ParsePromise2['default']();
	          var batchReady = [];
	          var batchTasks = [];
	          batch.forEach(function (obj, index) {
	            var ready = new _ParsePromise2['default']();
	            batchReady.push(ready);
	            var task = function task() {
	              ready.resolve();
	              return batchReturned.then(function (responses, status) {
	                if (responses[index].hasOwnProperty('success')) {
	                  obj._handleSaveResponse(responses[index].success, status);
	                } else {
	                  if (!objectError && responses[index].hasOwnProperty('error')) {
	                    var serverError = responses[index].error;
	                    objectError = new _ParseError2['default'](serverError.code, serverError.error);
	                    // Cancel the rest of the save
	                    pending = [];
	                  }
	                  obj._handleSaveError();
	                }
	              });
	            };
	            stateController.pushPendingState(obj._getStateIdentifier());
	            batchTasks.push(stateController.enqueueTask(obj._getStateIdentifier(), task));
	          });
	
	          _ParsePromise2['default'].when(batchReady).then(function () {
	            // Kick off the batch request
	            return RESTController.request('POST', 'batch', {
	              requests: batch.map(function (obj) {
	                var params = obj._getSaveParams();
	                params.path = getServerUrlPath() + params.path;
	                return params;
	              })
	            }, options);
	          }).then(function (response, status, xhr) {
	            batchReturned.resolve(response, status);
	          });
	
	          return _ParsePromise2['default'].when(batchTasks);
	        }).then(function () {
	          if (objectError) {
	            return _ParsePromise2['default'].error(objectError);
	          }
	          return _ParsePromise2['default'].as(target);
	        });
	      });
	    } else if (target instanceof ParseObject) {
	      // copying target lets Flow guarantee the pointer isn't modified elsewhere
	      var targetCopy = target;
	      var task = function task() {
	        var params = targetCopy._getSaveParams();
	        return RESTController.request(params.method, params.path, params.body, options).then(function (response, status) {
	          targetCopy._handleSaveResponse(response, status);
	        }, function (error) {
	          targetCopy._handleSaveError();
	          return _ParsePromise2['default'].error(error);
	        });
	      };
	
	      stateController.pushPendingState(target._getStateIdentifier());
	      return stateController.enqueueTask(target._getStateIdentifier(), task).then(function () {
	        return target;
	      }, function (error) {
	        return _ParsePromise2['default'].error(error);
	      });
	    }
	    return _ParsePromise2['default'].as();
	  }
	});
	module.exports = exports['default'];
	
	/**
	 * The ID of this object, unique within its class.
	 * @property id
	 * @type String
	 */

/***/ },
/* 40 */
/*!**************************************************!*\
  !*** ./~/babel-runtime/core-js/object/freeze.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/freeze */ 41), __esModule: true };

/***/ },
/* 41 */
/*!***********************************************!*\
  !*** ./~/core-js/library/fn/object/freeze.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(/*! ../../modules/es6.object.freeze */ 42);
	module.exports = __webpack_require__(/*! ../../modules/$.core */ 17).Object.freeze;

/***/ },
/* 42 */
/*!********************************************************!*\
  !*** ./~/core-js/library/modules/es6.object.freeze.js ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 19.1.2.5 Object.freeze(O)
	var isObject = __webpack_require__(/*! ./$.is-object */ 36);
	
	__webpack_require__(/*! ./$.object-sap */ 14)('freeze', function ($freeze) {
	  return function freeze(it) {
	    return $freeze && isObject(it) ? $freeze(it) : it;
	  };
	});

/***/ },
/* 43 */
/*!*************************************************************!*\
  !*** ./~/babel-runtime/helpers/interop-require-wildcard.js ***!
  \*************************************************************/
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (obj) {
	  if (obj && obj.__esModule) {
	    return obj;
	  } else {
	    var newObj = {};
	
	    if (obj != null) {
	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	      }
	    }
	
	    newObj["default"] = obj;
	    return newObj;
	  }
	};
	
	exports.__esModule = true;

/***/ },
/* 44 */
/*!********************************************!*\
  !*** ./~/parse/lib/browser/CoreManager.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	'use strict';
	
	var config = {
	  // Defaults
	  IS_NODE: typeof process !== 'undefined' && !!process.versions && !!process.versions.node && !process.version.electron,
	  REQUEST_ATTEMPT_LIMIT: 5,
	  SERVER_URL: 'https://api.parse.com/1',
	  LIVEQUERY_SERVER_URL: null,
	  VERSION: 'js' + '1.8.5',
	  APPLICATION_ID: null,
	  JAVASCRIPT_KEY: null,
	  MASTER_KEY: null,
	  USE_MASTER_KEY: false,
	  PERFORM_USER_REWRITE: true,
	  FORCE_REVOCABLE_SESSION: false
	};
	
	module.exports = {
	  get: function get(key) {
	    if (config.hasOwnProperty(key)) {
	      return config[key];
	    }
	    throw new Error('Configuration key not found: ' + key);
	  },
	
	  set: function set(key, value) {
	    config[key] = value;
	  },
	
	  /* Specialized Controller Setters/Getters */
	
	  setAnalyticsController: function setAnalyticsController(controller) {
	    if (typeof controller.track !== 'function') {
	      throw new Error('AnalyticsController must implement track()');
	    }
	    config['AnalyticsController'] = controller;
	  },
	
	  getAnalyticsController: function getAnalyticsController() {
	    return config['AnalyticsController'];
	  },
	
	  setCloudController: function setCloudController(controller) {
	    if (typeof controller.run !== 'function') {
	      throw new Error('CloudController must implement run()');
	    }
	    config['CloudController'] = controller;
	  },
	
	  getCloudController: function getCloudController() {
	    return config['CloudController'];
	  },
	
	  setConfigController: function setConfigController(controller) {
	    if (typeof controller.current !== 'function') {
	      throw new Error('ConfigController must implement current()');
	    }
	    if (typeof controller.get !== 'function') {
	      throw new Error('ConfigController must implement get()');
	    }
	    config['ConfigController'] = controller;
	  },
	
	  getConfigController: function getConfigController() {
	    return config['ConfigController'];
	  },
	
	  setFileController: function setFileController(controller) {
	    if (typeof controller.saveFile !== 'function') {
	      throw new Error('FileController must implement saveFile()');
	    }
	    if (typeof controller.saveBase64 !== 'function') {
	      throw new Error('FileController must implement saveBase64()');
	    }
	    config['FileController'] = controller;
	  },
	
	  getFileController: function getFileController() {
	    return config['FileController'];
	  },
	
	  setInstallationController: function setInstallationController(controller) {
	    if (typeof controller.currentInstallationId !== 'function') {
	      throw new Error('InstallationController must implement currentInstallationId()');
	    }
	    config['InstallationController'] = controller;
	  },
	
	  getInstallationController: function getInstallationController() {
	    return config['InstallationController'];
	  },
	
	  setObjectController: function setObjectController(controller) {
	    if (typeof controller.save !== 'function') {
	      throw new Error('ObjectController must implement save()');
	    }
	    if (typeof controller.fetch !== 'function') {
	      throw new Error('ObjectController must implement fetch()');
	    }
	    if (typeof controller.destroy !== 'function') {
	      throw new Error('ObjectController must implement destroy()');
	    }
	    config['ObjectController'] = controller;
	  },
	
	  getObjectController: function getObjectController() {
	    return config['ObjectController'];
	  },
	
	  setObjectStateController: function setObjectStateController(controller) {
	    if (typeof controller.getState !== 'function') {
	      throw new Error('ObjectStateController must implement getState()');
	    }
	    if (typeof controller.initializeState !== 'function') {
	      throw new Error('ObjectStateController must implement initializeState()');
	    }
	    if (typeof controller.removeState !== 'function') {
	      throw new Error('ObjectStateController must implement removeState()');
	    }
	    if (typeof controller.getServerData !== 'function') {
	      throw new Error('ObjectStateController must implement getServerData()');
	    }
	    if (typeof controller.setServerData !== 'function') {
	      throw new Error('ObjectStateController must implement setServerData()');
	    }
	    if (typeof controller.getPendingOps !== 'function') {
	      throw new Error('ObjectStateController must implement getPendingOps()');
	    }
	    if (typeof controller.setPendingOp !== 'function') {
	      throw new Error('ObjectStateController must implement setPendingOp()');
	    }
	    if (typeof controller.pushPendingState !== 'function') {
	      throw new Error('ObjectStateController must implement pushPendingState()');
	    }
	    if (typeof controller.popPendingState !== 'function') {
	      throw new Error('ObjectStateController must implement popPendingState()');
	    }
	    if (typeof controller.mergeFirstPendingState !== 'function') {
	      throw new Error('ObjectStateController must implement mergeFirstPendingState()');
	    }
	    if (typeof controller.getObjectCache !== 'function') {
	      throw new Error('ObjectStateController must implement getObjectCache()');
	    }
	    if (typeof controller.estimateAttribute !== 'function') {
	      throw new Error('ObjectStateController must implement estimateAttribute()');
	    }
	    if (typeof controller.estimateAttributes !== 'function') {
	      throw new Error('ObjectStateController must implement estimateAttributes()');
	    }
	    if (typeof controller.commitServerChanges !== 'function') {
	      throw new Error('ObjectStateController must implement commitServerChanges()');
	    }
	    if (typeof controller.enqueueTask !== 'function') {
	      throw new Error('ObjectStateController must implement enqueueTask()');
	    }
	    if (typeof controller.clearAllState !== 'function') {
	      throw new Error('ObjectStateController must implement clearAllState()');
	    }
	
	    config['ObjectStateController'] = controller;
	  },
	
	  getObjectStateController: function getObjectStateController() {
	    return config['ObjectStateController'];
	  },
	
	  setPushController: function setPushController(controller) {
	    if (typeof controller.send !== 'function') {
	      throw new Error('PushController must implement send()');
	    }
	    config['PushController'] = controller;
	  },
	
	  getPushController: function getPushController() {
	    return config['PushController'];
	  },
	
	  setQueryController: function setQueryController(controller) {
	    if (typeof controller.find !== 'function') {
	      throw new Error('QueryController must implement find()');
	    }
	    config['QueryController'] = controller;
	  },
	
	  getQueryController: function getQueryController() {
	    return config['QueryController'];
	  },
	
	  setRESTController: function setRESTController(controller) {
	    if (typeof controller.request !== 'function') {
	      throw new Error('RESTController must implement request()');
	    }
	    if (typeof controller.ajax !== 'function') {
	      throw new Error('RESTController must implement ajax()');
	    }
	    config['RESTController'] = controller;
	  },
	
	  getRESTController: function getRESTController() {
	    return config['RESTController'];
	  },
	
	  setSessionController: function setSessionController(controller) {
	    if (typeof controller.getSession !== 'function') {
	      throw new Error('A SessionController must implement getSession()');
	    }
	    config['SessionController'] = controller;
	  },
	
	  getSessionController: function getSessionController() {
	    return config['SessionController'];
	  },
	
	  setStorageController: function setStorageController(controller) {
	    if (controller.async) {
	      if (typeof controller.getItemAsync !== 'function') {
	        throw new Error('An async StorageController must implement getItemAsync()');
	      }
	      if (typeof controller.setItemAsync !== 'function') {
	        throw new Error('An async StorageController must implement setItemAsync()');
	      }
	      if (typeof controller.removeItemAsync !== 'function') {
	        throw new Error('An async StorageController must implement removeItemAsync()');
	      }
	    } else {
	      if (typeof controller.getItem !== 'function') {
	        throw new Error('A synchronous StorageController must implement getItem()');
	      }
	      if (typeof controller.setItem !== 'function') {
	        throw new Error('A synchronous StorageController must implement setItem()');
	      }
	      if (typeof controller.removeItem !== 'function') {
	        throw new Error('A synchonous StorageController must implement removeItem()');
	      }
	    }
	    config['StorageController'] = controller;
	  },
	
	  getStorageController: function getStorageController() {
	    return config['StorageController'];
	  },
	
	  setUserController: function setUserController(controller) {
	    if (typeof controller.setCurrentUser !== 'function') {
	      throw new Error('A UserController must implement setCurrentUser()');
	    }
	    if (typeof controller.currentUser !== 'function') {
	      throw new Error('A UserController must implement currentUser()');
	    }
	    if (typeof controller.currentUserAsync !== 'function') {
	      throw new Error('A UserController must implement currentUserAsync()');
	    }
	    if (typeof controller.signUp !== 'function') {
	      throw new Error('A UserController must implement signUp()');
	    }
	    if (typeof controller.logIn !== 'function') {
	      throw new Error('A UserController must implement logIn()');
	    }
	    if (typeof controller.become !== 'function') {
	      throw new Error('A UserController must implement become()');
	    }
	    if (typeof controller.logOut !== 'function') {
	      throw new Error('A UserController must implement logOut()');
	    }
	    if (typeof controller.requestPasswordReset !== 'function') {
	      throw new Error('A UserController must implement requestPasswordReset()');
	    }
	    if (typeof controller.upgradeToRevocableSession !== 'function') {
	      throw new Error('A UserController must implement upgradeToRevocableSession()');
	    }
	    if (typeof controller.linkWith !== 'function') {
	      throw new Error('A UserController must implement linkWith()');
	    }
	    config['UserController'] = controller;
	  },
	
	  getUserController: function getUserController() {
	    return config['UserController'];
	  },
	
	  setLiveQueryController: function setLiveQueryController(controller) {
	    if (typeof controller.subscribe !== 'function') {
	      throw new Error('LiveQueryController must implement subscribe()');
	    }
	    if (typeof controller.unsubscribe !== 'function') {
	      throw new Error('LiveQueryController must implement unsubscribe()');
	    }
	    if (typeof controller.open !== 'function') {
	      throw new Error('LiveQueryController must implement open()');
	    }
	    if (typeof controller.close !== 'function') {
	      throw new Error('LiveQueryController must implement close()');
	    }
	    config['LiveQueryController'] = controller;
	  },
	
	  getLiveQueryController: function getLiveQueryController() {
	    return config['LiveQueryController'];
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 45)))

/***/ },
/* 45 */
/*!******************************!*\
  !*** ./~/process/browser.js ***!
  \******************************/
/***/ function(module, exports) {

	'use strict';
	
	// shim for using process in browser
	
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	(function () {
	    try {
	        cachedSetTimeout = setTimeout;
	    } catch (e) {
	        cachedSetTimeout = function cachedSetTimeout() {
	            throw new Error('setTimeout is not defined');
	        };
	    }
	    try {
	        cachedClearTimeout = clearTimeout;
	    } catch (e) {
	        cachedClearTimeout = function cachedClearTimeout() {
	            throw new Error('clearTimeout is not defined');
	        };
	    }
	})();
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = cachedSetTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while (len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    cachedClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        cachedSetTimeout(drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () {
	    return '/';
	};
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function () {
	    return 0;
	};

/***/ },
/* 46 */
/*!************************************************!*\
  !*** ./~/parse/lib/browser/canBeSerialized.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _interopRequireDefault = __webpack_require__(/*! babel-runtime/helpers/interop-require-default */ 2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = canBeSerialized;
	
	var _ParseFile = __webpack_require__(/*! ./ParseFile */ 47);
	
	var _ParseFile2 = _interopRequireDefault(_ParseFile);
	
	var _ParseObject = __webpack_require__(/*! ./ParseObject */ 39);
	
	var _ParseObject2 = _interopRequireDefault(_ParseObject);
	
	var _ParseRelation = __webpack_require__(/*! ./ParseRelation */ 74);
	
	var _ParseRelation2 = _interopRequireDefault(_ParseRelation);
	
	function canBeSerialized(obj) {
	  if (!(obj instanceof _ParseObject2['default'])) {
	    return true;
	  }
	  var attributes = obj.attributes;
	  for (var attr in attributes) {
	    var val = attributes[attr];
	    if (!canBeSerializedHelper(val)) {
	      return false;
	    }
	  }
	  return true;
	}
	
	function canBeSerializedHelper(value) {
	  if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object') {
	    return true;
	  }
	  if (value instanceof _ParseRelation2['default']) {
	    return true;
	  }
	  if (value instanceof _ParseObject2['default']) {
	    return !!value.id;
	  }
	  if (value instanceof _ParseFile2['default']) {
	    if (value.url()) {
	      return true;
	    }
	    return false;
	  }
	  if (Array.isArray(value)) {
	    for (var i = 0; i < value.length; i++) {
	      if (!canBeSerializedHelper(value[i])) {
	        return false;
	      }
	    }
	    return true;
	  }
	  for (var k in value) {
	    if (!canBeSerializedHelper(value[k])) {
	      return false;
	    }
	  }
	  return true;
	}
	module.exports = exports['default'];

/***/ },
/* 47 */
/*!******************************************!*\
  !*** ./~/parse/lib/browser/ParseFile.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	'use strict';
	
	var _createClass = __webpack_require__(/*! babel-runtime/helpers/create-class */ 4)['default'];
	
	var _classCallCheck = __webpack_require__(/*! babel-runtime/helpers/class-call-check */ 8)['default'];
	
	var _interopRequireDefault = __webpack_require__(/*! babel-runtime/helpers/interop-require-default */ 2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _CoreManager = __webpack_require__(/*! ./CoreManager */ 44);
	
	var _CoreManager2 = _interopRequireDefault(_CoreManager);
	
	var _ParsePromise = __webpack_require__(/*! ./ParsePromise */ 48);
	
	var _ParsePromise2 = _interopRequireDefault(_ParsePromise);
	
	function b64Digit(number) {
	  if (number < 26) {
	    return String.fromCharCode(65 + number);
	  }
	  if (number < 52) {
	    return String.fromCharCode(97 + (number - 26));
	  }
	  if (number < 62) {
	    return String.fromCharCode(48 + (number - 52));
	  }
	  if (number === 62) {
	    return '+';
	  }
	  if (number === 63) {
	    return '/';
	  }
	  throw new TypeError('Tried to encode large digit ' + number + ' in base64.');
	}
	
	/**
	 * A Parse.File is a local representation of a file that is saved to the Parse
	 * cloud.
	 * @class Parse.File
	 * @constructor
	 * @param name {String} The file's name. This will be prefixed by a unique
	 *     value once the file has finished saving. The file name must begin with
	 *     an alphanumeric character, and consist of alphanumeric characters,
	 *     periods, spaces, underscores, or dashes.
	 * @param data {Array} The data for the file, as either:
	 *     1. an Array of byte value Numbers, or
	 *     2. an Object like { base64: "..." } with a base64-encoded String.
	 *     3. a File object selected with a file upload control. (3) only works
	 *        in Firefox 3.6+, Safari 6.0.2+, Chrome 7+, and IE 10+.
	 *        For example:<pre>
	 * var fileUploadControl = $("#profilePhotoFileUpload")[0];
	 * if (fileUploadControl.files.length > 0) {
	 *   var file = fileUploadControl.files[0];
	 *   var name = "photo.jpg";
	 *   var parseFile = new Parse.File(name, file);
	 *   parseFile.save().then(function() {
	 *     // The file has been saved to Parse.
	 *   }, function(error) {
	 *     // The file either could not be read, or could not be saved to Parse.
	 *   });
	 * }</pre>
	 * @param type {String} Optional Content-Type header to use for the file. If
	 *     this is omitted, the content type will be inferred from the name's
	 *     extension.
	 */
	
	var ParseFile = function () {
	  function ParseFile(name, data, type) {
	    _classCallCheck(this, ParseFile);
	
	    var specifiedType = type || '';
	
	    this._name = name;
	
	    if (Array.isArray(data)) {
	      this._source = {
	        format: 'base64',
	        base64: ParseFile.encodeBase64(data),
	        type: specifiedType
	      };
	    } else if (typeof File !== 'undefined' && data instanceof File) {
	      this._source = {
	        format: 'file',
	        file: data,
	        type: specifiedType
	      };
	    } else if (data && data.hasOwnProperty('base64')) {
	      var matches = /^data:([a-zA-Z]*\/[a-zA-Z+.-]*);(charset=[a-zA-Z0-9\-\/\s]*,)?base64,(\S+)/.exec(data.base64);
	      if (matches && matches.length > 0) {
	        // if data URI with type and charset, there will be 4 matches.
	        this._source = {
	          format: 'base64',
	          base64: matches.length === 4 ? matches[3] : matches[2],
	          type: matches[1]
	        };
	      } else {
	        this._source = {
	          format: 'base64',
	          base64: data.base64,
	          type: specifiedType
	        };
	      }
	    } else if (typeof data !== 'undefined') {
	      throw new TypeError('Cannot create a Parse.File with that data.');
	    }
	  }
	
	  /**
	   * Gets the name of the file. Before save is called, this is the filename
	   * given by the user. After save is called, that name gets prefixed with a
	   * unique identifier.
	   * @method name
	   * @return {String}
	   */
	
	  _createClass(ParseFile, [{
	    key: 'name',
	    value: function name() {
	      return this._name;
	    }
	
	    /**
	     * Gets the url of the file. It is only available after you save the file or
	     * after you get the file from a Parse.Object.
	     * @method url
	     * @param {Object} options An object to specify url options
	     * @return {String}
	     */
	  }, {
	    key: 'url',
	    value: function url(options) {
	      options = options || {};
	      if (!this._url) {
	        return;
	      }
	      if (options.forceSecure) {
	        return this._url.replace(/^http:\/\//i, 'https://');
	      } else {
	        return this._url;
	      }
	    }
	
	    /**
	     * Saves the file to the Parse cloud.
	     * @method save
	     * @param {Object} options A Backbone-style options object.
	     * @return {Parse.Promise} Promise that is resolved when the save finishes.
	     */
	  }, {
	    key: 'save',
	    value: function save(options) {
	      var _this = this;
	
	      options = options || {};
	      var controller = _CoreManager2['default'].getFileController();
	      if (!this._previousSave) {
	        if (this._source.format === 'file') {
	          this._previousSave = controller.saveFile(this._name, this._source).then(function (res) {
	            _this._name = res.name;
	            _this._url = res.url;
	            return _this;
	          });
	        } else {
	          this._previousSave = controller.saveBase64(this._name, this._source).then(function (res) {
	            _this._name = res.name;
	            _this._url = res.url;
	            return _this;
	          });
	        }
	      }
	      if (this._previousSave) {
	        return this._previousSave._thenRunCallbacks(options);
	      }
	    }
	  }, {
	    key: 'toJSON',
	    value: function toJSON() {
	      return {
	        __type: 'File',
	        name: this._name,
	        url: this._url
	      };
	    }
	  }, {
	    key: 'equals',
	    value: function equals(other) {
	      if (this === other) {
	        return true;
	      }
	      // Unsaved Files are never equal, since they will be saved to different URLs
	      return other instanceof ParseFile && this.name() === other.name() && this.url() === other.url() && typeof this.url() !== 'undefined';
	    }
	  }], [{
	    key: 'fromJSON',
	    value: function fromJSON(obj) {
	      if (obj.__type !== 'File') {
	        throw new TypeError('JSON object does not represent a ParseFile');
	      }
	      var file = new ParseFile(obj.name);
	      file._url = obj.url;
	      return file;
	    }
	  }, {
	    key: 'encodeBase64',
	    value: function encodeBase64(bytes) {
	      var chunks = [];
	      chunks.length = Math.ceil(bytes.length / 3);
	      for (var i = 0; i < chunks.length; i++) {
	        var b1 = bytes[i * 3];
	        var b2 = bytes[i * 3 + 1] || 0;
	        var b3 = bytes[i * 3 + 2] || 0;
	
	        var has2 = i * 3 + 1 < bytes.length;
	        var has3 = i * 3 + 2 < bytes.length;
	
	        chunks[i] = [b64Digit(b1 >> 2 & 0x3F), b64Digit(b1 << 4 & 0x30 | b2 >> 4 & 0x0F), has2 ? b64Digit(b2 << 2 & 0x3C | b3 >> 6 & 0x03) : '=', has3 ? b64Digit(b3 & 0x3F) : '='].join('');
	      }
	
	      return chunks.join('');
	    }
	  }]);
	
	  return ParseFile;
	}();
	
	exports['default'] = ParseFile;
	
	_CoreManager2['default'].setFileController({
	  saveFile: function saveFile(name, source) {
	    if (source.format !== 'file') {
	      throw new Error('saveFile can only be used with File-type sources.');
	    }
	    // To directly upload a File, we use a REST-style AJAX request
	    var headers = {
	      'X-Parse-Application-ID': _CoreManager2['default'].get('APPLICATION_ID'),
	      'X-Parse-JavaScript-Key': _CoreManager2['default'].get('JAVASCRIPT_KEY')
	    };
	    var url = _CoreManager2['default'].get('SERVER_URL');
	    if (url[url.length - 1] !== '/') {
	      url += '/';
	    }
	    url += 'files/' + name;
	    return _CoreManager2['default'].getRESTController().ajax('POST', url, source.file, headers);
	  },
	
	  saveBase64: function saveBase64(name, source) {
	    if (source.format !== 'base64') {
	      throw new Error('saveBase64 can only be used with Base64-type sources.');
	    }
	    var data = {
	      base64: source.base64
	    };
	    if (source.type) {
	      data._ContentType = source.type;
	    }
	
	    return _CoreManager2['default'].getRESTController().request('POST', 'files/' + name, data);
	  }
	});
	module.exports = exports['default'];

/***/ },
/* 48 */
/*!*********************************************!*\
  !*** ./~/parse/lib/browser/ParsePromise.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _createClass = __webpack_require__(/*! babel-runtime/helpers/create-class */ 4)['default'];
	
	var _classCallCheck = __webpack_require__(/*! babel-runtime/helpers/class-call-check */ 8)['default'];
	
	var _getIterator = __webpack_require__(/*! babel-runtime/core-js/get-iterator */ 49)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var _isPromisesAPlusCompliant = true;
	
	/**
	 * A Promise is returned by async methods as a hook to provide callbacks to be
	 * called when the async task is fulfilled.
	 *
	 * <p>Typical usage would be like:<pre>
	 *    query.find().then(function(results) {
	 *      results[0].set("foo", "bar");
	 *      return results[0].saveAsync();
	 *    }).then(function(result) {
	 *      console.log("Updated " + result.id);
	 *    });
	 * </pre></p>
	 *
	 * @class Parse.Promise
	 * @constructor
	 */
	
	var ParsePromise = function () {
	  function ParsePromise(executor) {
	    _classCallCheck(this, ParsePromise);
	
	    this._resolved = false;
	    this._rejected = false;
	    this._resolvedCallbacks = [];
	    this._rejectedCallbacks = [];
	
	    if (typeof executor === 'function') {
	      executor(this.resolve.bind(this), this.reject.bind(this));
	    }
	  }
	
	  /**
	   * Marks this promise as fulfilled, firing any callbacks waiting on it.
	   * @method resolve
	   * @param {Object} result the result to pass to the callbacks.
	   */
	
	  _createClass(ParsePromise, [{
	    key: 'resolve',
	    value: function resolve() {
	      if (this._resolved || this._rejected) {
	        throw new Error('A promise was resolved even though it had already been ' + (this._resolved ? 'resolved' : 'rejected') + '.');
	      }
	      this._resolved = true;
	
	      for (var _len = arguments.length, results = Array(_len), _key = 0; _key < _len; _key++) {
	        results[_key] = arguments[_key];
	      }
	
	      this._result = results;
	      for (var i = 0; i < this._resolvedCallbacks.length; i++) {
	        this._resolvedCallbacks[i].apply(this, results);
	      }
	
	      this._resolvedCallbacks = [];
	      this._rejectedCallbacks = [];
	    }
	
	    /**
	     * Marks this promise as fulfilled, firing any callbacks waiting on it.
	     * @method reject
	     * @param {Object} error the error to pass to the callbacks.
	     */
	  }, {
	    key: 'reject',
	    value: function reject(error) {
	      if (this._resolved || this._rejected) {
	        throw new Error('A promise was resolved even though it had already been ' + (this._resolved ? 'resolved' : 'rejected') + '.');
	      }
	      this._rejected = true;
	      this._error = error;
	      for (var i = 0; i < this._rejectedCallbacks.length; i++) {
	        this._rejectedCallbacks[i](error);
	      }
	      this._resolvedCallbacks = [];
	      this._rejectedCallbacks = [];
	    }
	
	    /**
	     * Adds callbacks to be called when this promise is fulfilled. Returns a new
	     * Promise that will be fulfilled when the callback is complete. It allows
	     * chaining. If the callback itself returns a Promise, then the one returned
	     * by "then" will not be fulfilled until that one returned by the callback
	     * is fulfilled.
	     * @method then
	     * @param {Function} resolvedCallback Function that is called when this
	     * Promise is resolved. Once the callback is complete, then the Promise
	     * returned by "then" will also be fulfilled.
	     * @param {Function} rejectedCallback Function that is called when this
	     * Promise is rejected with an error. Once the callback is complete, then
	     * the promise returned by "then" with be resolved successfully. If
	     * rejectedCallback is null, or it returns a rejected Promise, then the
	     * Promise returned by "then" will be rejected with that error.
	     * @return {Parse.Promise} A new Promise that will be fulfilled after this
	     * Promise is fulfilled and either callback has completed. If the callback
	     * returned a Promise, then this Promise will not be fulfilled until that
	     * one is.
	     */
	  }, {
	    key: 'then',
	    value: function then(resolvedCallback, rejectedCallback) {
	      var _this = this;
	
	      var promise = new ParsePromise();
	
	      var wrappedResolvedCallback = function wrappedResolvedCallback() {
	        for (var _len2 = arguments.length, results = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	          results[_key2] = arguments[_key2];
	        }
	
	        if (typeof resolvedCallback === 'function') {
	          if (_isPromisesAPlusCompliant) {
	            try {
	              results = [resolvedCallback.apply(this, results)];
	            } catch (e) {
	              results = [ParsePromise.error(e)];
	            }
	          } else {
	            results = [resolvedCallback.apply(this, results)];
	          }
	        }
	        if (results.length === 1 && ParsePromise.is(results[0])) {
	          results[0].then(function () {
	            promise.resolve.apply(promise, arguments);
	          }, function (error) {
	            promise.reject(error);
	          });
	        } else {
	          promise.resolve.apply(promise, results);
	        }
	      };
	
	      var wrappedRejectedCallback = function wrappedRejectedCallback(error) {
	        var result = [];
	        if (typeof rejectedCallback === 'function') {
	          if (_isPromisesAPlusCompliant) {
	            try {
	              result = [rejectedCallback(error)];
	            } catch (e) {
	              result = [ParsePromise.error(e)];
	            }
	          } else {
	            result = [rejectedCallback(error)];
	          }
	          if (result.length === 1 && ParsePromise.is(result[0])) {
	            result[0].then(function () {
	              promise.resolve.apply(promise, arguments);
	            }, function (error) {
	              promise.reject(error);
	            });
	          } else {
	            if (_isPromisesAPlusCompliant) {
	              promise.resolve.apply(promise, result);
	            } else {
	              promise.reject(result[0]);
	            }
	          }
	        } else {
	          promise.reject(error);
	        }
	      };
	
	      var runLater = function runLater(fn) {
	        fn.call();
	      };
	      if (_isPromisesAPlusCompliant) {
	        if (typeof process !== 'undefined' && typeof process.nextTick === 'function') {
	          runLater = function runLater(fn) {
	            process.nextTick(fn);
	          };
	        } else if (typeof setTimeout === 'function') {
	          runLater = function runLater(fn) {
	            setTimeout(fn, 0);
	          };
	        }
	      }
	
	      if (this._resolved) {
	        runLater(function () {
	          wrappedResolvedCallback.apply(_this, _this._result);
	        });
	      } else if (this._rejected) {
	        runLater(function () {
	          wrappedRejectedCallback(_this._error);
	        });
	      } else {
	        this._resolvedCallbacks.push(wrappedResolvedCallback);
	        this._rejectedCallbacks.push(wrappedRejectedCallback);
	      }
	
	      return promise;
	    }
	
	    /**
	     * Add handlers to be called when the promise
	     * is either resolved or rejected
	     * @method always
	     */
	  }, {
	    key: 'always',
	    value: function always(callback) {
	      return this.then(callback, callback);
	    }
	
	    /**
	     * Add handlers to be called when the Promise object is resolved
	     * @method done
	     */
	  }, {
	    key: 'done',
	    value: function done(callback) {
	      return this.then(callback);
	    }
	
	    /**
	     * Add handlers to be called when the Promise object is rejected
	     * Alias for catch().
	     * @method fail
	     */
	  }, {
	    key: 'fail',
	    value: function fail(callback) {
	      return this.then(null, callback);
	    }
	
	    /**
	     * Add handlers to be called when the Promise object is rejected
	     * @method catch
	     */
	  }, {
	    key: 'catch',
	    value: function _catch(callback) {
	      return this.then(null, callback);
	    }
	
	    /**
	     * Run the given callbacks after this promise is fulfilled.
	     * @method _thenRunCallbacks
	     * @param optionsOrCallback {} A Backbone-style options callback, or a
	     * callback function. If this is an options object and contains a "model"
	     * attributes, that will be passed to error callbacks as the first argument.
	     * @param model {} If truthy, this will be passed as the first result of
	     * error callbacks. This is for Backbone-compatability.
	     * @return {Parse.Promise} A promise that will be resolved after the
	     * callbacks are run, with the same result as this.
	     */
	  }, {
	    key: '_thenRunCallbacks',
	    value: function _thenRunCallbacks(optionsOrCallback, model) {
	      var options = {};
	      if (typeof optionsOrCallback === 'function') {
	        options.success = function (result) {
	          optionsOrCallback(result, null);
	        };
	        options.error = function (error) {
	          optionsOrCallback(null, error);
	        };
	      } else if ((typeof optionsOrCallback === 'undefined' ? 'undefined' : _typeof(optionsOrCallback)) === 'object') {
	        if (typeof optionsOrCallback.success === 'function') {
	          options.success = optionsOrCallback.success;
	        }
	        if (typeof optionsOrCallback.error === 'function') {
	          options.error = optionsOrCallback.error;
	        }
	      }
	
	      return this.then(function () {
	        for (var _len3 = arguments.length, results = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	          results[_key3] = arguments[_key3];
	        }
	
	        if (options.success) {
	          options.success.apply(this, results);
	        }
	        return ParsePromise.as.apply(ParsePromise, arguments);
	      }, function (error) {
	        if (options.error) {
	          if (typeof model !== 'undefined') {
	            options.error(model, error);
	          } else {
	            options.error(error);
	          }
	        }
	        // By explicitly returning a rejected Promise, this will work with
	        // either jQuery or Promises/A+ semantics.
	        return ParsePromise.error(error);
	      });
	    }
	
	    /**
	     * Adds a callback function that should be called regardless of whether
	     * this promise failed or succeeded. The callback will be given either the
	     * array of results for its first argument, or the error as its second,
	     * depending on whether this Promise was rejected or resolved. Returns a
	     * new Promise, like "then" would.
	     * @method _continueWith
	     * @param {Function} continuation the callback.
	     */
	  }, {
	    key: '_continueWith',
	    value: function _continueWith(continuation) {
	      return this.then(function () {
	        return continuation(arguments, null);
	      }, function (error) {
	        return continuation(null, error);
	      });
	    }
	
	    /**
	     * Returns true iff the given object fulfils the Promise interface.
	     * @method is
	     * @param {Object} promise The object to test
	     * @static
	     * @return {Boolean}
	     */
	  }], [{
	    key: 'is',
	    value: function is(promise) {
	      return promise != null && typeof promise.then === 'function';
	    }
	
	    /**
	     * Returns a new promise that is resolved with a given value.
	     * @method as
	     * @param value The value to resolve the promise with
	     * @static
	     * @return {Parse.Promise} the new promise.
	     */
	  }, {
	    key: 'as',
	    value: function as() {
	      var promise = new ParsePromise();
	
	      for (var _len4 = arguments.length, values = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	        values[_key4] = arguments[_key4];
	      }
	
	      promise.resolve.apply(promise, values);
	      return promise;
	    }
	
	    /**
	     * Returns a new promise that is resolved with a given value.
	     * If that value is a thenable Promise (has a .then() prototype
	     * method), the new promise will be chained to the end of the
	     * value.
	     * @method resolve
	     * @param value The value to resolve the promise with
	     * @static
	     * @return {Parse.Promise} the new promise.
	     */
	  }, {
	    key: 'resolve',
	    value: function resolve(value) {
	      return new ParsePromise(function (resolve, reject) {
	        if (ParsePromise.is(value)) {
	          value.then(resolve, reject);
	        } else {
	          resolve(value);
	        }
	      });
	    }
	
	    /**
	     * Returns a new promise that is rejected with a given error.
	     * @method error
	     * @param error The error to reject the promise with
	     * @static
	     * @return {Parse.Promise} the new promise.
	     */
	  }, {
	    key: 'error',
	    value: function error() {
	      var promise = new ParsePromise();
	
	      for (var _len5 = arguments.length, errors = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
	        errors[_key5] = arguments[_key5];
	      }
	
	      promise.reject.apply(promise, errors);
	      return promise;
	    }
	
	    /**
	     * Returns a new promise that is rejected with a given error.
	     * This is an alias for Parse.Promise.error, for compliance with
	     * the ES6 implementation.
	     * @method reject
	     * @param error The error to reject the promise with
	     * @static
	     * @return {Parse.Promise} the new promise.
	     */
	  }, {
	    key: 'reject',
	    value: function reject() {
	      for (var _len6 = arguments.length, errors = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
	        errors[_key6] = arguments[_key6];
	      }
	
	      return ParsePromise.error.apply(null, errors);
	    }
	
	    /**
	     * Returns a new promise that is fulfilled when all of the input promises
	     * are resolved. If any promise in the list fails, then the returned promise
	     * will be rejected with an array containing the error from each promise.
	     * If they all succeed, then the returned promise will succeed, with the
	     * results being the results of all the input
	     * promises. For example: <pre>
	     *   var p1 = Parse.Promise.as(1);
	     *   var p2 = Parse.Promise.as(2);
	     *   var p3 = Parse.Promise.as(3);
	     *
	     *   Parse.Promise.when(p1, p2, p3).then(function(r1, r2, r3) {
	     *     console.log(r1);  // prints 1
	     *     console.log(r2);  // prints 2
	     *     console.log(r3);  // prints 3
	     *   });</pre>
	     *
	     * The input promises can also be specified as an array: <pre>
	     *   var promises = [p1, p2, p3];
	     *   Parse.Promise.when(promises).then(function(results) {
	     *     console.log(results);  // prints [1,2,3]
	     *   });
	     * </pre>
	     * @method when
	     * @param {Array} promises a list of promises to wait for.
	     * @static
	     * @return {Parse.Promise} the new promise.
	     */
	  }, {
	    key: 'when',
	    value: function when(promises) {
	      var objects;
	      var arrayArgument = Array.isArray(promises);
	      if (arrayArgument) {
	        objects = promises;
	      } else {
	        objects = arguments;
	      }
	
	      var total = objects.length;
	      var hadError = false;
	      var results = [];
	      var returnValue = arrayArgument ? [results] : results;
	      var errors = [];
	      results.length = objects.length;
	      errors.length = objects.length;
	
	      if (total === 0) {
	        return ParsePromise.as.apply(this, returnValue);
	      }
	
	      var promise = new ParsePromise();
	
	      var resolveOne = function resolveOne() {
	        total--;
	        if (total <= 0) {
	          if (hadError) {
	            promise.reject(errors);
	          } else {
	            promise.resolve.apply(promise, returnValue);
	          }
	        }
	      };
	
	      var chain = function chain(object, index) {
	        if (ParsePromise.is(object)) {
	          object.then(function (result) {
	            results[index] = result;
	            resolveOne();
	          }, function (error) {
	            errors[index] = error;
	            hadError = true;
	            resolveOne();
	          });
	        } else {
	          results[i] = object;
	          resolveOne();
	        }
	      };
	      for (var i = 0; i < objects.length; i++) {
	        chain(objects[i], i);
	      }
	
	      return promise;
	    }
	
	    /**
	     * Returns a new promise that is fulfilled when all of the promises in the
	     * iterable argument are resolved. If any promise in the list fails, then
	     * the returned promise will be immediately rejected with the reason that
	     * single promise rejected. If they all succeed, then the returned promise
	     * will succeed, with the results being the results of all the input
	     * promises. If the iterable provided is empty, the returned promise will
	     * be immediately resolved.
	     * 
	     * For example: <pre>
	     *   var p1 = Parse.Promise.as(1);
	     *   var p2 = Parse.Promise.as(2);
	     *   var p3 = Parse.Promise.as(3);
	     *
	     *   Parse.Promise.all([p1, p2, p3]).then(function([r1, r2, r3]) {
	     *     console.log(r1);  // prints 1
	     *     console.log(r2);  // prints 2
	     *     console.log(r3);  // prints 3
	     *   });</pre>
	     *
	     * @method all
	     * @param {Iterable} promises an iterable of promises to wait for.
	     * @static
	     * @return {Parse.Promise} the new promise.
	     */
	  }, {
	    key: 'all',
	    value: function all(promises) {
	      var total = 0;
	      var objects = [];
	
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;
	
	      try {
	        for (var _iterator = _getIterator(promises), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var p = _step.value;
	
	          objects[total++] = p;
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator['return']) {
	            _iterator['return']();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }
	
	      if (total === 0) {
	        return ParsePromise.as([]);
	      }
	
	      var hadError = false;
	      var promise = new ParsePromise();
	      var resolved = 0;
	      var results = [];
	      objects.forEach(function (object, i) {
	        if (ParsePromise.is(object)) {
	          object.then(function (result) {
	            if (hadError) {
	              return false;
	            }
	            results[i] = result;
	            resolved++;
	            if (resolved >= total) {
	              promise.resolve(results);
	            }
	          }, function (error) {
	            // Reject immediately
	            promise.reject(error);
	            hadError = true;
	          });
	        } else {
	          results[i] = object;
	          resolved++;
	          if (!hadError && resolved >= total) {
	            promise.resolve(results);
	          }
	        }
	      });
	
	      return promise;
	    }
	
	    /**
	     * Returns a new promise that is immediately fulfilled when any of the
	     * promises in the iterable argument are resolved or rejected. If the
	     * first promise to complete is resolved, the returned promise will be
	     * resolved with the same value. Likewise, if the first promise to
	     * complete is rejected, the returned promise will be rejected with the
	     * same reason.
	     *
	     * @method race
	     * @param {Iterable} promises an iterable of promises to wait for.
	     * @static
	     * @return {Parse.Promise} the new promise.
	     */
	  }, {
	    key: 'race',
	    value: function race(promises) {
	      var completed = false;
	      var promise = new ParsePromise();
	      var _iteratorNormalCompletion2 = true;
	      var _didIteratorError2 = false;
	      var _iteratorError2 = undefined;
	
	      try {
	        for (var _iterator2 = _getIterator(promises), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	          var p = _step2.value;
	
	          if (ParsePromise.is(p)) {
	            p.then(function (result) {
	              if (completed) {
	                return;
	              }
	              completed = true;
	              promise.resolve(result);
	            }, function (error) {
	              if (completed) {
	                return;
	              }
	              completed = true;
	              promise.reject(error);
	            });
	          } else if (!completed) {
	            completed = true;
	            promise.resolve(p);
	          }
	        }
	      } catch (err) {
	        _didIteratorError2 = true;
	        _iteratorError2 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion2 && _iterator2['return']) {
	            _iterator2['return']();
	          }
	        } finally {
	          if (_didIteratorError2) {
	            throw _iteratorError2;
	          }
	        }
	      }
	
	      return promise;
	    }
	
	    /**
	     * Runs the given asyncFunction repeatedly, as long as the predicate
	     * function returns a truthy value. Stops repeating if asyncFunction returns
	     * a rejected promise.
	     * @method _continueWhile
	     * @param {Function} predicate should return false when ready to stop.
	     * @param {Function} asyncFunction should return a Promise.
	     * @static
	     */
	  }, {
	    key: '_continueWhile',
	    value: function _continueWhile(predicate, asyncFunction) {
	      if (predicate()) {
	        return asyncFunction().then(function () {
	          return ParsePromise._continueWhile(predicate, asyncFunction);
	        });
	      }
	      return ParsePromise.as();
	    }
	  }, {
	    key: 'isPromisesAPlusCompliant',
	    value: function isPromisesAPlusCompliant() {
	      return _isPromisesAPlusCompliant;
	    }
	  }, {
	    key: 'enableAPlusCompliant',
	    value: function enableAPlusCompliant() {
	      _isPromisesAPlusCompliant = true;
	    }
	  }, {
	    key: 'disableAPlusCompliant',
	    value: function disableAPlusCompliant() {
	      _isPromisesAPlusCompliant = false;
	    }
	  }]);
	
	  return ParsePromise;
	}();
	
	exports['default'] = ParsePromise;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 45)))

/***/ },
/* 49 */
/*!*************************************************!*\
  !*** ./~/babel-runtime/core-js/get-iterator.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/get-iterator */ 50), __esModule: true };

/***/ },
/* 50 */
/*!**********************************************!*\
  !*** ./~/core-js/library/fn/get-iterator.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(/*! ../modules/web.dom.iterable */ 51);
	__webpack_require__(/*! ../modules/es6.string.iterator */ 68);
	module.exports = __webpack_require__(/*! ../modules/core.get-iterator */ 71);

/***/ },
/* 51 */
/*!*******************************************************!*\
  !*** ./~/core-js/library/modules/web.dom.iterable.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(/*! ./es6.array.iterator */ 52);
	var Iterators = __webpack_require__(/*! ./$.iterators */ 55);
	Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;

/***/ },
/* 52 */
/*!*********************************************************!*\
  !*** ./~/core-js/library/modules/es6.array.iterator.js ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var addToUnscopables = __webpack_require__(/*! ./$.add-to-unscopables */ 53),
	    step = __webpack_require__(/*! ./$.iter-step */ 54),
	    Iterators = __webpack_require__(/*! ./$.iterators */ 55),
	    toIObject = __webpack_require__(/*! ./$.to-iobject */ 26);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(/*! ./$.iter-define */ 56)(Array, 'Array', function (iterated, kind) {
	  this._t = toIObject(iterated); // target
	  this._i = 0; // next index
	  this._k = kind; // kind
	  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function () {
	  var O = this._t,
	      kind = this._k,
	      index = this._i++;
	  if (!O || index >= O.length) {
	    this._t = undefined;
	    return step(1);
	  }
	  if (kind == 'keys') return step(0, index);
	  if (kind == 'values') return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 53 */
/*!***********************************************************!*\
  !*** ./~/core-js/library/modules/$.add-to-unscopables.js ***!
  \***********************************************************/
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function () {/* empty */};

/***/ },
/* 54 */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/$.iter-step.js ***!
  \**************************************************/
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function (done, value) {
	  return { value: value, done: !!done };
	};

/***/ },
/* 55 */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/$.iterators.js ***!
  \**************************************************/
/***/ function(module, exports) {

	"use strict";
	
	module.exports = {};

/***/ },
/* 56 */
/*!****************************************************!*\
  !*** ./~/core-js/library/modules/$.iter-define.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var LIBRARY = __webpack_require__(/*! ./$.library */ 57),
	    $export = __webpack_require__(/*! ./$.export */ 15),
	    redefine = __webpack_require__(/*! ./$.redefine */ 58),
	    hide = __webpack_require__(/*! ./$.hide */ 59),
	    has = __webpack_require__(/*! ./$.has */ 62),
	    Iterators = __webpack_require__(/*! ./$.iterators */ 55),
	    $iterCreate = __webpack_require__(/*! ./$.iter-create */ 63),
	    setToStringTag = __webpack_require__(/*! ./$.set-to-string-tag */ 64),
	    getProto = __webpack_require__(/*! ./$ */ 7).getProto,
	    ITERATOR = __webpack_require__(/*! ./$.wks */ 65)('iterator'),
	    BUGGY = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	,
	    FF_ITERATOR = '@@iterator',
	    KEYS = 'keys',
	    VALUES = 'values';
	
	var returnThis = function returnThis() {
	  return this;
	};
	
	module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function getMethod(kind) {
	    if (!BUGGY && kind in proto) return proto[kind];
	    switch (kind) {
	      case KEYS:
	        return function keys() {
	          return new Constructor(this, kind);
	        };
	      case VALUES:
	        return function values() {
	          return new Constructor(this, kind);
	        };
	    }return function entries() {
	      return new Constructor(this, kind);
	    };
	  };
	  var TAG = NAME + ' Iterator',
	      DEF_VALUES = DEFAULT == VALUES,
	      VALUES_BUG = false,
	      proto = Base.prototype,
	      $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT],
	      $default = $native || getMethod(DEFAULT),
	      methods,
	      key;
	  // Fix native
	  if ($native) {
	    var IteratorPrototype = getProto($default.call(new Base()));
	    // Set @@toStringTag to native iterators
	    setToStringTag(IteratorPrototype, TAG, true);
	    // FF fix
	    if (!LIBRARY && has(proto, FF_ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
	    // fix Array#{values, @@iterator}.name in V8 / FF
	    if (DEF_VALUES && $native.name !== VALUES) {
	      VALUES_BUG = true;
	      $default = function values() {
	        return $native.call(this);
	      };
	    }
	  }
	  // Define iterator
	  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG] = returnThis;
	  if (DEFAULT) {
	    methods = {
	      values: DEF_VALUES ? $default : getMethod(VALUES),
	      keys: IS_SET ? $default : getMethod(KEYS),
	      entries: !DEF_VALUES ? $default : getMethod('entries')
	    };
	    if (FORCED) for (key in methods) {
	      if (!(key in proto)) redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 57 */
/*!************************************************!*\
  !*** ./~/core-js/library/modules/$.library.js ***!
  \************************************************/
/***/ function(module, exports) {

	"use strict";
	
	module.exports = true;

/***/ },
/* 58 */
/*!*************************************************!*\
  !*** ./~/core-js/library/modules/$.redefine.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(/*! ./$.hide */ 59);

/***/ },
/* 59 */
/*!*********************************************!*\
  !*** ./~/core-js/library/modules/$.hide.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $ = __webpack_require__(/*! ./$ */ 7),
	    createDesc = __webpack_require__(/*! ./$.property-desc */ 60);
	module.exports = __webpack_require__(/*! ./$.descriptors */ 61) ? function (object, key, value) {
	  return $.setDesc(object, key, createDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

/***/ },
/* 60 */
/*!******************************************************!*\
  !*** ./~/core-js/library/modules/$.property-desc.js ***!
  \******************************************************/
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

/***/ },
/* 61 */
/*!****************************************************!*\
  !*** ./~/core-js/library/modules/$.descriptors.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(/*! ./$.fails */ 20)(function () {
	  return Object.defineProperty({}, 'a', { get: function get() {
	      return 7;
	    } }).a != 7;
	});

/***/ },
/* 62 */
/*!********************************************!*\
  !*** ./~/core-js/library/modules/$.has.js ***!
  \********************************************/
/***/ function(module, exports) {

	"use strict";
	
	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 63 */
/*!****************************************************!*\
  !*** ./~/core-js/library/modules/$.iter-create.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $ = __webpack_require__(/*! ./$ */ 7),
	    descriptor = __webpack_require__(/*! ./$.property-desc */ 60),
	    setToStringTag = __webpack_require__(/*! ./$.set-to-string-tag */ 64),
	    IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(/*! ./$.hide */ 59)(IteratorPrototype, __webpack_require__(/*! ./$.wks */ 65)('iterator'), function () {
	  return this;
	});
	
	module.exports = function (Constructor, NAME, next) {
	  Constructor.prototype = $.create(IteratorPrototype, { next: descriptor(1, next) });
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 64 */
/*!**********************************************************!*\
  !*** ./~/core-js/library/modules/$.set-to-string-tag.js ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var def = __webpack_require__(/*! ./$ */ 7).setDesc,
	    has = __webpack_require__(/*! ./$.has */ 62),
	    TAG = __webpack_require__(/*! ./$.wks */ 65)('toStringTag');
	
	module.exports = function (it, tag, stat) {
	  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
	};

/***/ },
/* 65 */
/*!********************************************!*\
  !*** ./~/core-js/library/modules/$.wks.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var store = __webpack_require__(/*! ./$.shared */ 66)('wks'),
	    uid = __webpack_require__(/*! ./$.uid */ 67),
	    _Symbol = __webpack_require__(/*! ./$.global */ 16).Symbol;
	module.exports = function (name) {
	  return store[name] || (store[name] = _Symbol && _Symbol[name] || (_Symbol || uid)('Symbol.' + name));
	};

/***/ },
/* 66 */
/*!***********************************************!*\
  !*** ./~/core-js/library/modules/$.shared.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var global = __webpack_require__(/*! ./$.global */ 16),
	    SHARED = '__core-js_shared__',
	    store = global[SHARED] || (global[SHARED] = {});
	module.exports = function (key) {
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 67 */
/*!********************************************!*\
  !*** ./~/core-js/library/modules/$.uid.js ***!
  \********************************************/
/***/ function(module, exports) {

	'use strict';
	
	var id = 0,
	    px = Math.random();
	module.exports = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 68 */
/*!**********************************************************!*\
  !*** ./~/core-js/library/modules/es6.string.iterator.js ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $at = __webpack_require__(/*! ./$.string-at */ 69)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(/*! ./$.iter-define */ 56)(String, 'String', function (iterated) {
	  this._t = String(iterated); // target
	  this._i = 0; // next index
	  // 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function () {
	  var O = this._t,
	      index = this._i,
	      point;
	  if (index >= O.length) return { value: undefined, done: true };
	  point = $at(O, index);
	  this._i += point.length;
	  return { value: point, done: false };
	});

/***/ },
/* 69 */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/$.string-at.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var toInteger = __webpack_require__(/*! ./$.to-integer */ 70),
	    defined = __webpack_require__(/*! ./$.defined */ 13);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function (TO_STRING) {
	  return function (that, pos) {
	    var s = String(defined(that)),
	        i = toInteger(pos),
	        l = s.length,
	        a,
	        b;
	    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 70 */
/*!***************************************************!*\
  !*** ./~/core-js/library/modules/$.to-integer.js ***!
  \***************************************************/
/***/ function(module, exports) {

	"use strict";
	
	// 7.1.4 ToInteger
	var ceil = Math.ceil,
	    floor = Math.floor;
	module.exports = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 71 */
/*!********************************************************!*\
  !*** ./~/core-js/library/modules/core.get-iterator.js ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var anObject = __webpack_require__(/*! ./$.an-object */ 37),
	    get = __webpack_require__(/*! ./core.get-iterator-method */ 72);
	module.exports = __webpack_require__(/*! ./$.core */ 17).getIterator = function (it) {
	  var iterFn = get(it);
	  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 72 */
/*!***************************************************************!*\
  !*** ./~/core-js/library/modules/core.get-iterator-method.js ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var classof = __webpack_require__(/*! ./$.classof */ 73),
	    ITERATOR = __webpack_require__(/*! ./$.wks */ 65)('iterator'),
	    Iterators = __webpack_require__(/*! ./$.iterators */ 55);
	module.exports = __webpack_require__(/*! ./$.core */ 17).getIteratorMethod = function (it) {
	  if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
	};

/***/ },
/* 73 */
/*!************************************************!*\
  !*** ./~/core-js/library/modules/$.classof.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(/*! ./$.cof */ 28),
	    TAG = __webpack_require__(/*! ./$.wks */ 65)('toStringTag')
	// ES3 wrong here
	,
	    ARG = cof(function () {
	  return arguments;
	}()) == 'Arguments';
	
	module.exports = function (it) {
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	  // @@toStringTag case
	  : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
	  // builtinTag case
	  : ARG ? cof(O)
	  // ES3 arguments fallback
	  : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 74 */
/*!**********************************************!*\
  !*** ./~/parse/lib/browser/ParseRelation.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	'use strict';
	
	var _createClass = __webpack_require__(/*! babel-runtime/helpers/create-class */ 4)['default'];
	
	var _classCallCheck = __webpack_require__(/*! babel-runtime/helpers/class-call-check */ 8)['default'];
	
	var _interopRequireDefault = __webpack_require__(/*! babel-runtime/helpers/interop-require-default */ 2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _ParseOp = __webpack_require__(/*! ./ParseOp */ 75);
	
	var _ParseObject = __webpack_require__(/*! ./ParseObject */ 39);
	
	var _ParseObject2 = _interopRequireDefault(_ParseObject);
	
	var _ParseQuery = __webpack_require__(/*! ./ParseQuery */ 80);
	
	var _ParseQuery2 = _interopRequireDefault(_ParseQuery);
	
	/**
	 * Creates a new Relation for the given parent object and key. This
	 * constructor should rarely be used directly, but rather created by
	 * Parse.Object.relation.
	 * @class Parse.Relation
	 * @constructor
	 * @param {Parse.Object} parent The parent of this relation.
	 * @param {String} key The key for this relation on the parent.
	 *
	 * <p>
	 * A class that is used to access all of the children of a many-to-many
	 * relationship.  Each instance of Parse.Relation is associated with a
	 * particular parent object and key.
	 * </p>
	 */
	
	var ParseRelation = function () {
	  function ParseRelation(parent, key) {
	    _classCallCheck(this, ParseRelation);
	
	    this.parent = parent;
	    this.key = key;
	    this.targetClassName = null;
	  }
	
	  /**
	   * Makes sure that this relation has the right parent and key.
	   */
	
	  _createClass(ParseRelation, [{
	    key: '_ensureParentAndKey',
	    value: function _ensureParentAndKey(parent, key) {
	      this.key = this.key || key;
	      if (this.key !== key) {
	        throw new Error('Internal Error. Relation retrieved from two different keys.');
	      }
	      if (this.parent) {
	        if (this.parent.className !== parent.className) {
	          throw new Error('Internal Error. Relation retrieved from two different Objects.');
	        }
	        if (this.parent.id) {
	          if (this.parent.id !== parent.id) {
	            throw new Error('Internal Error. Relation retrieved from two different Objects.');
	          }
	        } else if (parent.id) {
	          this.parent = parent;
	        }
	      } else {
	        this.parent = parent;
	      }
	    }
	
	    /**
	     * Adds a Parse.Object or an array of Parse.Objects to the relation.
	     * @method add
	     * @param {} objects The item or items to add.
	     */
	  }, {
	    key: 'add',
	    value: function add(objects) {
	      if (!Array.isArray(objects)) {
	        objects = [objects];
	      }
	
	      var change = new _ParseOp.RelationOp(objects, []);
	      this.parent.set(this.key, change);
	      this.targetClassName = change._targetClassName;
	      return this.parent;
	    }
	
	    /**
	     * Removes a Parse.Object or an array of Parse.Objects from this relation.
	     * @method remove
	     * @param {} objects The item or items to remove.
	     */
	  }, {
	    key: 'remove',
	    value: function remove(objects) {
	      if (!Array.isArray(objects)) {
	        objects = [objects];
	      }
	
	      var change = new _ParseOp.RelationOp([], objects);
	      this.parent.set(this.key, change);
	      this.targetClassName = change._targetClassName;
	    }
	
	    /**
	     * Returns a JSON version of the object suitable for saving to disk.
	     * @method toJSON
	     * @return {Object}
	     */
	  }, {
	    key: 'toJSON',
	    value: function toJSON() {
	      return {
	        __type: 'Relation',
	        className: this.targetClassName
	      };
	    }
	
	    /**
	     * Returns a Parse.Query that is limited to objects in this
	     * relation.
	     * @method query
	     * @return {Parse.Query}
	     */
	  }, {
	    key: 'query',
	    value: function query() {
	      var query;
	      if (!this.targetClassName) {
	        query = new _ParseQuery2['default'](this.parent.className);
	        query._extraOptions.redirectClassNameForKey = this.key;
	      } else {
	        query = new _ParseQuery2['default'](this.targetClassName);
	      }
	      query._addCondition('$relatedTo', 'object', {
	        __type: 'Pointer',
	        className: this.parent.className,
	        objectId: this.parent.id
	      });
	      query._addCondition('$relatedTo', 'key', this.key);
	
	      return query;
	    }
	  }]);
	
	  return ParseRelation;
	}();
	
	exports['default'] = ParseRelation;
	module.exports = exports['default'];

/***/ },
/* 75 */
/*!****************************************!*\
  !*** ./~/parse/lib/browser/ParseOp.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	'use strict';
	
	var _createClass = __webpack_require__(/*! babel-runtime/helpers/create-class */ 4)['default'];
	
	var _classCallCheck = __webpack_require__(/*! babel-runtime/helpers/class-call-check */ 8)['default'];
	
	var _get = __webpack_require__(/*! babel-runtime/helpers/get */ 22)['default'];
	
	var _inherits = __webpack_require__(/*! babel-runtime/helpers/inherits */ 29)['default'];
	
	var _interopRequireDefault = __webpack_require__(/*! babel-runtime/helpers/interop-require-default */ 2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.opFromJSON = opFromJSON;
	
	var _arrayContainsObject = __webpack_require__(/*! ./arrayContainsObject */ 76);
	
	var _arrayContainsObject2 = _interopRequireDefault(_arrayContainsObject);
	
	var _decode = __webpack_require__(/*! ./decode */ 1);
	
	var _decode2 = _interopRequireDefault(_decode);
	
	var _encode = __webpack_require__(/*! ./encode */ 77);
	
	var _encode2 = _interopRequireDefault(_encode);
	
	var _ParseObject = __webpack_require__(/*! ./ParseObject */ 39);
	
	var _ParseObject2 = _interopRequireDefault(_ParseObject);
	
	var _ParseRelation = __webpack_require__(/*! ./ParseRelation */ 74);
	
	var _ParseRelation2 = _interopRequireDefault(_ParseRelation);
	
	var _unique = __webpack_require__(/*! ./unique */ 79);
	
	var _unique2 = _interopRequireDefault(_unique);
	
	function opFromJSON(json) {
	  if (!json || !json.__op) {
	    return null;
	  }
	  switch (json.__op) {
	    case 'Delete':
	      return new UnsetOp();
	    case 'Increment':
	      return new IncrementOp(json.amount);
	    case 'Add':
	      return new AddOp((0, _decode2['default'])(json.objects));
	    case 'AddUnique':
	      return new AddUniqueOp((0, _decode2['default'])(json.objects));
	    case 'Remove':
	      return new RemoveOp((0, _decode2['default'])(json.objects));
	    case 'AddRelation':
	      var toAdd = (0, _decode2['default'])(json.objects);
	      if (!Array.isArray(toAdd)) {
	        return new RelationOp([], []);
	      }
	      return new RelationOp(toAdd, []);
	    case 'RemoveRelation':
	      var toRemove = (0, _decode2['default'])(json.objects);
	      if (!Array.isArray(toRemove)) {
	        return new RelationOp([], []);
	      }
	      return new RelationOp([], toRemove);
	    case 'Batch':
	      var toAdd = [];
	      var toRemove = [];
	      for (var i = 0; i < json.ops.length; i++) {
	        if (json.ops[i].__op === 'AddRelation') {
	          toAdd = toAdd.concat((0, _decode2['default'])(json.ops[i].objects));
	        } else if (json.ops[i].__op === 'RemoveRelation') {
	          toRemove = toRemove.concat((0, _decode2['default'])(json.ops[i].objects));
	        }
	      }
	      return new RelationOp(toAdd, toRemove);
	  }
	  return null;
	}
	
	var Op = function () {
	  function Op() {
	    _classCallCheck(this, Op);
	  }
	
	  _createClass(Op, [{
	    key: 'applyTo',
	
	    // Empty parent class
	    value: function applyTo(value) {}
	  }, {
	    key: 'mergeWith',
	    value: function mergeWith(previous) {}
	  }, {
	    key: 'toJSON',
	    value: function toJSON() {}
	  }]);
	
	  return Op;
	}();
	
	exports.Op = Op;
	
	var SetOp = function (_Op) {
	  _inherits(SetOp, _Op);
	
	  function SetOp(value) {
	    _classCallCheck(this, SetOp);
	
	    _get(Object.getPrototypeOf(SetOp.prototype), 'constructor', this).call(this);
	    this._value = value;
	  }
	
	  _createClass(SetOp, [{
	    key: 'applyTo',
	    value: function applyTo(value) {
	      return this._value;
	    }
	  }, {
	    key: 'mergeWith',
	    value: function mergeWith(previous) {
	      return new SetOp(this._value);
	    }
	  }, {
	    key: 'toJSON',
	    value: function toJSON() {
	      return (0, _encode2['default'])(this._value, false, true);
	    }
	  }]);
	
	  return SetOp;
	}(Op);
	
	exports.SetOp = SetOp;
	
	var UnsetOp = function (_Op2) {
	  _inherits(UnsetOp, _Op2);
	
	  function UnsetOp() {
	    _classCallCheck(this, UnsetOp);
	
	    _get(Object.getPrototypeOf(UnsetOp.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(UnsetOp, [{
	    key: 'applyTo',
	    value: function applyTo(value) {
	      return undefined;
	    }
	  }, {
	    key: 'mergeWith',
	    value: function mergeWith(previous) {
	      return new UnsetOp();
	    }
	  }, {
	    key: 'toJSON',
	    value: function toJSON() {
	      return { __op: 'Delete' };
	    }
	  }]);
	
	  return UnsetOp;
	}(Op);
	
	exports.UnsetOp = UnsetOp;
	
	var IncrementOp = function (_Op3) {
	  _inherits(IncrementOp, _Op3);
	
	  function IncrementOp(amount) {
	    _classCallCheck(this, IncrementOp);
	
	    _get(Object.getPrototypeOf(IncrementOp.prototype), 'constructor', this).call(this);
	    if (typeof amount !== 'number') {
	      throw new TypeError('Increment Op must be initialized with a numeric amount.');
	    }
	    this._amount = amount;
	  }
	
	  _createClass(IncrementOp, [{
	    key: 'applyTo',
	    value: function applyTo(value) {
	      if (typeof value === 'undefined') {
	        return this._amount;
	      }
	      if (typeof value !== 'number') {
	        throw new TypeError('Cannot increment a non-numeric value.');
	      }
	      return this._amount + value;
	    }
	  }, {
	    key: 'mergeWith',
	    value: function mergeWith(previous) {
	      if (!previous) {
	        return this;
	      }
	      if (previous instanceof SetOp) {
	        return new SetOp(this.applyTo(previous._value));
	      }
	      if (previous instanceof UnsetOp) {
	        return new SetOp(this._amount);
	      }
	      if (previous instanceof IncrementOp) {
	        return new IncrementOp(this.applyTo(previous._amount));
	      }
	      throw new Error('Cannot merge Increment Op with the previous Op');
	    }
	  }, {
	    key: 'toJSON',
	    value: function toJSON() {
	      return { __op: 'Increment', amount: this._amount };
	    }
	  }]);
	
	  return IncrementOp;
	}(Op);
	
	exports.IncrementOp = IncrementOp;
	
	var AddOp = function (_Op4) {
	  _inherits(AddOp, _Op4);
	
	  function AddOp(value) {
	    _classCallCheck(this, AddOp);
	
	    _get(Object.getPrototypeOf(AddOp.prototype), 'constructor', this).call(this);
	    this._value = Array.isArray(value) ? value : [value];
	  }
	
	  _createClass(AddOp, [{
	    key: 'applyTo',
	    value: function applyTo(value) {
	      if (value == null) {
	        return this._value;
	      }
	      if (Array.isArray(value)) {
	        return value.concat(this._value);
	      }
	      throw new Error('Cannot add elements to a non-array value');
	    }
	  }, {
	    key: 'mergeWith',
	    value: function mergeWith(previous) {
	      if (!previous) {
	        return this;
	      }
	      if (previous instanceof SetOp) {
	        return new SetOp(this.applyTo(previous._value));
	      }
	      if (previous instanceof UnsetOp) {
	        return new SetOp(this._value);
	      }
	      if (previous instanceof AddOp) {
	        return new AddOp(this.applyTo(previous._value));
	      }
	      throw new Error('Cannot merge Add Op with the previous Op');
	    }
	  }, {
	    key: 'toJSON',
	    value: function toJSON() {
	      return { __op: 'Add', objects: (0, _encode2['default'])(this._value, false, true) };
	    }
	  }]);
	
	  return AddOp;
	}(Op);
	
	exports.AddOp = AddOp;
	
	var AddUniqueOp = function (_Op5) {
	  _inherits(AddUniqueOp, _Op5);
	
	  function AddUniqueOp(value) {
	    _classCallCheck(this, AddUniqueOp);
	
	    _get(Object.getPrototypeOf(AddUniqueOp.prototype), 'constructor', this).call(this);
	    this._value = (0, _unique2['default'])(Array.isArray(value) ? value : [value]);
	  }
	
	  _createClass(AddUniqueOp, [{
	    key: 'applyTo',
	    value: function applyTo(value) {
	      if (value == null) {
	        return this._value || [];
	      }
	      if (Array.isArray(value)) {
	        // copying value lets Flow guarantee the pointer isn't modified elsewhere
	        var valueCopy = value;
	        var toAdd = [];
	        this._value.forEach(function (v) {
	          if (v instanceof _ParseObject2['default']) {
	            if (!(0, _arrayContainsObject2['default'])(valueCopy, v)) {
	              toAdd.push(v);
	            }
	          } else {
	            if (valueCopy.indexOf(v) < 0) {
	              toAdd.push(v);
	            }
	          }
	        });
	        return value.concat(toAdd);
	      }
	      throw new Error('Cannot add elements to a non-array value');
	    }
	  }, {
	    key: 'mergeWith',
	    value: function mergeWith(previous) {
	      if (!previous) {
	        return this;
	      }
	      if (previous instanceof SetOp) {
	        return new SetOp(this.applyTo(previous._value));
	      }
	      if (previous instanceof UnsetOp) {
	        return new SetOp(this._value);
	      }
	      if (previous instanceof AddUniqueOp) {
	        return new AddUniqueOp(this.applyTo(previous._value));
	      }
	      throw new Error('Cannot merge AddUnique Op with the previous Op');
	    }
	  }, {
	    key: 'toJSON',
	    value: function toJSON() {
	      return { __op: 'AddUnique', objects: (0, _encode2['default'])(this._value, false, true) };
	    }
	  }]);
	
	  return AddUniqueOp;
	}(Op);
	
	exports.AddUniqueOp = AddUniqueOp;
	
	var RemoveOp = function (_Op6) {
	  _inherits(RemoveOp, _Op6);
	
	  function RemoveOp(value) {
	    _classCallCheck(this, RemoveOp);
	
	    _get(Object.getPrototypeOf(RemoveOp.prototype), 'constructor', this).call(this);
	    this._value = (0, _unique2['default'])(Array.isArray(value) ? value : [value]);
	  }
	
	  _createClass(RemoveOp, [{
	    key: 'applyTo',
	    value: function applyTo(value) {
	      if (value == null) {
	        return [];
	      }
	      if (Array.isArray(value)) {
	        var i = value.indexOf(this._value);
	        var removed = value.concat([]);
	        for (var i = 0; i < this._value.length; i++) {
	          var index = removed.indexOf(this._value[i]);
	          while (index > -1) {
	            removed.splice(index, 1);
	            index = removed.indexOf(this._value[i]);
	          }
	          if (this._value[i] instanceof _ParseObject2['default'] && this._value[i].id) {
	            for (var j = 0; j < removed.length; j++) {
	              if (removed[j] instanceof _ParseObject2['default'] && this._value[i].id === removed[j].id) {
	                removed.splice(j, 1);
	                j--;
	              }
	            }
	          }
	        }
	        return removed;
	      }
	      throw new Error('Cannot remove elements from a non-array value');
	    }
	  }, {
	    key: 'mergeWith',
	    value: function mergeWith(previous) {
	      if (!previous) {
	        return this;
	      }
	      if (previous instanceof SetOp) {
	        return new SetOp(this.applyTo(previous._value));
	      }
	      if (previous instanceof UnsetOp) {
	        return new UnsetOp();
	      }
	      if (previous instanceof RemoveOp) {
	        var uniques = previous._value.concat([]);
	        for (var i = 0; i < this._value.length; i++) {
	          if (this._value[i] instanceof _ParseObject2['default']) {
	            if (!(0, _arrayContainsObject2['default'])(uniques, this._value[i])) {
	              uniques.push(this._value[i]);
	            }
	          } else {
	            if (uniques.indexOf(this._value[i]) < 0) {
	              uniques.push(this._value[i]);
	            }
	          }
	        }
	        return new RemoveOp(uniques);
	      }
	      throw new Error('Cannot merge Remove Op with the previous Op');
	    }
	  }, {
	    key: 'toJSON',
	    value: function toJSON() {
	      return { __op: 'Remove', objects: (0, _encode2['default'])(this._value, false, true) };
	    }
	  }]);
	
	  return RemoveOp;
	}(Op);
	
	exports.RemoveOp = RemoveOp;
	
	var RelationOp = function (_Op7) {
	  _inherits(RelationOp, _Op7);
	
	  function RelationOp(adds, removes) {
	    _classCallCheck(this, RelationOp);
	
	    _get(Object.getPrototypeOf(RelationOp.prototype), 'constructor', this).call(this);
	    this._targetClassName = null;
	
	    if (Array.isArray(adds)) {
	      this.relationsToAdd = (0, _unique2['default'])(adds.map(this._extractId, this));
	    }
	
	    if (Array.isArray(removes)) {
	      this.relationsToRemove = (0, _unique2['default'])(removes.map(this._extractId, this));
	    }
	  }
	
	  _createClass(RelationOp, [{
	    key: '_extractId',
	    value: function _extractId(obj) {
	      if (typeof obj === 'string') {
	        return obj;
	      }
	      if (!obj.id) {
	        throw new Error('You cannot add or remove an unsaved Parse Object from a relation');
	      }
	      if (!this._targetClassName) {
	        this._targetClassName = obj.className;
	      }
	      if (this._targetClassName !== obj.className) {
	        throw new Error('Tried to create a Relation with 2 different object types: ' + this._targetClassName + ' and ' + obj.className + '.');
	      }
	      return obj.id;
	    }
	  }, {
	    key: 'applyTo',
	    value: function applyTo(value, object, key) {
	      if (!value) {
	        var parent = new _ParseObject2['default'](object.className);
	        if (object.id && object.id.indexOf('local') === 0) {
	          parent._localId = object.id;
	        } else if (object.id) {
	          parent.id = object.id;
	        }
	        var relation = new _ParseRelation2['default'](parent, key);
	        relation.targetClassName = this._targetClassName;
	        return relation;
	      }
	      if (value instanceof _ParseRelation2['default']) {
	        if (this._targetClassName) {
	          if (value.targetClassName) {
	            if (this._targetClassName !== value.targetClassName) {
	              throw new Error('Related object must be a ' + value.targetClassName + ', but a ' + this._targetClassName + ' was passed in.');
	            }
	          } else {
	            value.targetClassName = this._targetClassName;
	          }
	        }
	        return value;
	      } else {
	        throw new Error('Relation cannot be applied to a non-relation field');
	      }
	    }
	  }, {
	    key: 'mergeWith',
	    value: function mergeWith(previous) {
	      if (!previous) {
	        return this;
	      } else if (previous instanceof UnsetOp) {
	        throw new Error('You cannot modify a relation after deleting it.');
	      } else if (previous instanceof RelationOp) {
	        if (previous._targetClassName && previous._targetClassName !== this._targetClassName) {
	          throw new Error('Related object must be of class ' + previous._targetClassName + ', but ' + (this._targetClassName || 'null') + ' was passed in.');
	        }
	        var newAdd = previous.relationsToAdd.concat([]);
	        this.relationsToRemove.forEach(function (r) {
	          var index = newAdd.indexOf(r);
	          if (index > -1) {
	            newAdd.splice(index, 1);
	          }
	        });
	        this.relationsToAdd.forEach(function (r) {
	          var index = newAdd.indexOf(r);
	          if (index < 0) {
	            newAdd.push(r);
	          }
	        });
	
	        var newRemove = previous.relationsToRemove.concat([]);
	        this.relationsToAdd.forEach(function (r) {
	          var index = newRemove.indexOf(r);
	          if (index > -1) {
	            newRemove.splice(index, 1);
	          }
	        });
	        this.relationsToRemove.forEach(function (r) {
	          var index = newRemove.indexOf(r);
	          if (index < 0) {
	            newRemove.push(r);
	          }
	        });
	
	        var newRelation = new RelationOp(newAdd, newRemove);
	        newRelation._targetClassName = this._targetClassName;
	        return newRelation;
	      }
	      throw new Error('Cannot merge Relation Op with the previous Op');
	    }
	  }, {
	    key: 'toJSON',
	    value: function toJSON() {
	      var _this = this;
	
	      var idToPointer = function idToPointer(id) {
	        return {
	          __type: 'Pointer',
	          className: _this._targetClassName,
	          objectId: id
	        };
	      };
	
	      var adds = null;
	      var removes = null;
	      var pointers = null;
	
	      if (this.relationsToAdd.length > 0) {
	        pointers = this.relationsToAdd.map(idToPointer);
	        adds = { __op: 'AddRelation', objects: pointers };
	      }
	      if (this.relationsToRemove.length > 0) {
	        pointers = this.relationsToRemove.map(idToPointer);
	        removes = { __op: 'RemoveRelation', objects: pointers };
	      }
	
	      if (adds && removes) {
	        return { __op: 'Batch', ops: [adds, removes] };
	      }
	
	      return adds || removes || {};
	    }
	  }]);
	
	  return RelationOp;
	}(Op);
	
	exports.RelationOp = RelationOp;

/***/ },
/* 76 */
/*!****************************************************!*\
  !*** ./~/parse/lib/browser/arrayContainsObject.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	'use strict';
	
	var _interopRequireDefault = __webpack_require__(/*! babel-runtime/helpers/interop-require-default */ 2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = arrayContainsObject;
	
	var _ParseObject = __webpack_require__(/*! ./ParseObject */ 39);
	
	var _ParseObject2 = _interopRequireDefault(_ParseObject);
	
	function arrayContainsObject(array, object) {
	  if (array.indexOf(object) > -1) {
	    return true;
	  }
	  for (var i = 0; i < array.length; i++) {
	    if (array[i] instanceof _ParseObject2['default'] && array[i].className === object.className && array[i]._getId() === object._getId()) {
	      return true;
	    }
	  }
	  return false;
	}
	
	module.exports = exports['default'];

/***/ },
/* 77 */
/*!***************************************!*\
  !*** ./~/parse/lib/browser/encode.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _Object$keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ 9)['default'];
	
	var _interopRequireDefault = __webpack_require__(/*! babel-runtime/helpers/interop-require-default */ 2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _ParseACL = __webpack_require__(/*! ./ParseACL */ 3);
	
	var _ParseACL2 = _interopRequireDefault(_ParseACL);
	
	var _ParseFile = __webpack_require__(/*! ./ParseFile */ 47);
	
	var _ParseFile2 = _interopRequireDefault(_ParseFile);
	
	var _ParseGeoPoint = __webpack_require__(/*! ./ParseGeoPoint */ 78);
	
	var _ParseGeoPoint2 = _interopRequireDefault(_ParseGeoPoint);
	
	var _ParseObject = __webpack_require__(/*! ./ParseObject */ 39);
	
	var _ParseObject2 = _interopRequireDefault(_ParseObject);
	
	var _ParseOp = __webpack_require__(/*! ./ParseOp */ 75);
	
	var _ParseRelation = __webpack_require__(/*! ./ParseRelation */ 74);
	
	var _ParseRelation2 = _interopRequireDefault(_ParseRelation);
	
	var toString = Object.prototype.toString;
	
	function encode(value, disallowObjects, forcePointers, seen) {
	  if (value instanceof _ParseObject2['default']) {
	    if (disallowObjects) {
	      throw new Error('Parse Objects not allowed here');
	    }
	    var seenEntry = value.id ? value.className + ':' + value.id : value;
	    if (forcePointers || !seen || seen.indexOf(seenEntry) > -1 || value.dirty() || _Object$keys(value._getServerData()).length < 1) {
	      return value.toPointer();
	    }
	    seen = seen.concat(seenEntry);
	    return value._toFullJSON(seen);
	  }
	  if (value instanceof _ParseOp.Op || value instanceof _ParseACL2['default'] || value instanceof _ParseGeoPoint2['default'] || value instanceof _ParseRelation2['default']) {
	    return value.toJSON();
	  }
	  if (value instanceof _ParseFile2['default']) {
	    if (!value.url()) {
	      throw new Error('Tried to encode an unsaved file.');
	    }
	    return value.toJSON();
	  }
	  if (toString.call(value) === '[object Date]') {
	    if (isNaN(value)) {
	      throw new Error('Tried to encode an invalid date.');
	    }
	    return { __type: 'Date', iso: value.toJSON() };
	  }
	  if (toString.call(value) === '[object RegExp]' && typeof value.source === 'string') {
	    return value.source;
	  }
	
	  if (Array.isArray(value)) {
	    return value.map(function (v) {
	      return encode(v, disallowObjects, forcePointers, seen);
	    });
	  }
	
	  if (value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
	    var output = {};
	    for (var k in value) {
	      output[k] = encode(value[k], disallowObjects, forcePointers, seen);
	    }
	    return output;
	  }
	
	  return value;
	}
	
	exports['default'] = function (value, disallowObjects, forcePointers, seen) {
	  return encode(value, !!disallowObjects, !!forcePointers, seen || []);
	};
	
	module.exports = exports['default'];

/***/ },
/* 78 */
/*!**********************************************!*\
  !*** ./~/parse/lib/browser/ParseGeoPoint.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _createClass = __webpack_require__(/*! babel-runtime/helpers/create-class */ 4)['default'];
	
	var _classCallCheck = __webpack_require__(/*! babel-runtime/helpers/class-call-check */ 8)['default'];
	
	var _interopRequireDefault = __webpack_require__(/*! babel-runtime/helpers/interop-require-default */ 2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _ParsePromise = __webpack_require__(/*! ./ParsePromise */ 48);
	
	var _ParsePromise2 = _interopRequireDefault(_ParsePromise);
	
	/**
	 * Creates a new GeoPoint with any of the following forms:<br>
	 *   <pre>
	 *   new GeoPoint(otherGeoPoint)
	 *   new GeoPoint(30, 30)
	 *   new GeoPoint([30, 30])
	 *   new GeoPoint({latitude: 30, longitude: 30})
	 *   new GeoPoint()  // defaults to (0, 0)
	 *   </pre>
	 * @class Parse.GeoPoint
	 * @constructor
	 *
	 * <p>Represents a latitude / longitude point that may be associated
	 * with a key in a ParseObject or used as a reference point for geo queries.
	 * This allows proximity-based queries on the key.</p>
	 *
	 * <p>Only one key in a class may contain a GeoPoint.</p>
	 *
	 * <p>Example:<pre>
	 *   var point = new Parse.GeoPoint(30.0, -20.0);
	 *   var object = new Parse.Object("PlaceObject");
	 *   object.set("location", point);
	 *   object.save();</pre></p>
	 */
	
	var ParseGeoPoint = function () {
	  function ParseGeoPoint(arg1, arg2) {
	    _classCallCheck(this, ParseGeoPoint);
	
	    if (Array.isArray(arg1)) {
	      ParseGeoPoint._validate(arg1[0], arg1[1]);
	      this._latitude = arg1[0];
	      this._longitude = arg1[1];
	    } else if ((typeof arg1 === 'undefined' ? 'undefined' : _typeof(arg1)) === 'object') {
	      ParseGeoPoint._validate(arg1.latitude, arg1.longitude);
	      this._latitude = arg1.latitude;
	      this._longitude = arg1.longitude;
	    } else if (typeof arg1 === 'number' && typeof arg2 === 'number') {
	      ParseGeoPoint._validate(arg1, arg2);
	      this._latitude = arg1;
	      this._longitude = arg2;
	    } else {
	      this._latitude = 0;
	      this._longitude = 0;
	    }
	  }
	
	  /**
	   * North-south portion of the coordinate, in range [-90, 90].
	   * Throws an exception if set out of range in a modern browser.
	   * @property latitude
	   * @type Number
	   */
	
	  _createClass(ParseGeoPoint, [{
	    key: 'toJSON',
	
	    /**
	     * Returns a JSON representation of the GeoPoint, suitable for Parse.
	     * @method toJSON
	     * @return {Object}
	     */
	    value: function toJSON() {
	      ParseGeoPoint._validate(this._latitude, this._longitude);
	      return {
	        __type: 'GeoPoint',
	        latitude: this._latitude,
	        longitude: this._longitude
	      };
	    }
	  }, {
	    key: 'equals',
	    value: function equals(other) {
	      return other instanceof ParseGeoPoint && this.latitude === other.latitude && this.longitude === other.longitude;
	    }
	
	    /**
	     * Returns the distance from this GeoPoint to another in radians.
	     * @method radiansTo
	     * @param {Parse.GeoPoint} point the other Parse.GeoPoint.
	     * @return {Number}
	     */
	  }, {
	    key: 'radiansTo',
	    value: function radiansTo(point) {
	      var d2r = Math.PI / 180.0;
	      var lat1rad = this.latitude * d2r;
	      var long1rad = this.longitude * d2r;
	      var lat2rad = point.latitude * d2r;
	      var long2rad = point.longitude * d2r;
	
	      var sinDeltaLatDiv2 = Math.sin((lat1rad - lat2rad) / 2);
	      var sinDeltaLongDiv2 = Math.sin((long1rad - long2rad) / 2);
	      // Square of half the straight line chord distance between both points.
	      var a = sinDeltaLatDiv2 * sinDeltaLatDiv2 + Math.cos(lat1rad) * Math.cos(lat2rad) * sinDeltaLongDiv2 * sinDeltaLongDiv2;
	      a = Math.min(1.0, a);
	      return 2 * Math.asin(Math.sqrt(a));
	    }
	
	    /**
	     * Returns the distance from this GeoPoint to another in kilometers.
	     * @method kilometersTo
	     * @param {Parse.GeoPoint} point the other Parse.GeoPoint.
	     * @return {Number}
	     */
	  }, {
	    key: 'kilometersTo',
	    value: function kilometersTo(point) {
	      return this.radiansTo(point) * 6371.0;
	    }
	
	    /**
	     * Returns the distance from this GeoPoint to another in miles.
	     * @method milesTo
	     * @param {Parse.GeoPoint} point the other Parse.GeoPoint.
	     * @return {Number}
	     */
	  }, {
	    key: 'milesTo',
	    value: function milesTo(point) {
	      return this.radiansTo(point) * 3958.8;
	    }
	
	    /**
	     * Throws an exception if the given lat-long is out of bounds.
	     */
	  }, {
	    key: 'latitude',
	    get: function get() {
	      return this._latitude;
	    },
	    set: function set(val) {
	      ParseGeoPoint._validate(val, this.longitude);
	      this._latitude = val;
	    }
	
	    /**
	     * East-west portion of the coordinate, in range [-180, 180].
	     * Throws if set out of range in a modern browser.
	     * @property longitude
	     * @type Number
	     */
	  }, {
	    key: 'longitude',
	    get: function get() {
	      return this._longitude;
	    },
	    set: function set(val) {
	      ParseGeoPoint._validate(this.latitude, val);
	      this._longitude = val;
	    }
	  }], [{
	    key: '_validate',
	    value: function _validate(latitude, longitude) {
	      if (latitude !== latitude || longitude !== longitude) {
	        throw new TypeError('GeoPoint latitude and longitude must be valid numbers');
	      }
	      if (latitude < -90.0) {
	        throw new TypeError('GeoPoint latitude out of bounds: ' + latitude + ' < -90.0.');
	      }
	      if (latitude > 90.0) {
	        throw new TypeError('GeoPoint latitude out of bounds: ' + latitude + ' > 90.0.');
	      }
	      if (longitude < -180.0) {
	        throw new TypeError('GeoPoint longitude out of bounds: ' + longitude + ' < -180.0.');
	      }
	      if (longitude > 180.0) {
	        throw new TypeError('GeoPoint longitude out of bounds: ' + longitude + ' > 180.0.');
	      }
	    }
	
	    /**
	     * Creates a GeoPoint with the user's current location, if available.
	     * Calls options.success with a new GeoPoint instance or calls options.error.
	     * @method current
	     * @param {Object} options An object with success and error callbacks.
	     * @static
	     */
	  }, {
	    key: 'current',
	    value: function current(options) {
	      var promise = new _ParsePromise2['default']();
	      navigator.geolocation.getCurrentPosition(function (location) {
	        promise.resolve(new ParseGeoPoint(location.coords.latitude, location.coords.longitude));
	      }, function (error) {
	        promise.reject(error);
	      });
	
	      return promise._thenRunCallbacks(options);
	    }
	  }]);
	
	  return ParseGeoPoint;
	}();
	
	exports['default'] = ParseGeoPoint;
	module.exports = exports['default'];

/***/ },
/* 79 */
/*!***************************************!*\
  !*** ./~/parse/lib/browser/unique.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	'use strict';
	
	var _interopRequireDefault = __webpack_require__(/*! babel-runtime/helpers/interop-require-default */ 2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = unique;
	
	var _arrayContainsObject = __webpack_require__(/*! ./arrayContainsObject */ 76);
	
	var _arrayContainsObject2 = _interopRequireDefault(_arrayContainsObject);
	
	var _ParseObject = __webpack_require__(/*! ./ParseObject */ 39);
	
	var _ParseObject2 = _interopRequireDefault(_ParseObject);
	
	function unique(arr) {
	  var uniques = [];
	  arr.forEach(function (value) {
	    if (value instanceof _ParseObject2['default']) {
	      if (!(0, _arrayContainsObject2['default'])(uniques, value)) {
	        uniques.push(value);
	      }
	    } else {
	      if (uniques.indexOf(value) < 0) {
	        uniques.push(value);
	      }
	    }
	  });
	  return uniques;
	}
	
	module.exports = exports['default'];

/***/ },
/* 80 */
/*!*******************************************!*\
  !*** ./~/parse/lib/browser/ParseQuery.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _createClass = __webpack_require__(/*! babel-runtime/helpers/create-class */ 4)['default'];
	
	var _classCallCheck = __webpack_require__(/*! babel-runtime/helpers/class-call-check */ 8)['default'];
	
	var _interopRequireDefault = __webpack_require__(/*! babel-runtime/helpers/interop-require-default */ 2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _CoreManager = __webpack_require__(/*! ./CoreManager */ 44);
	
	var _CoreManager2 = _interopRequireDefault(_CoreManager);
	
	var _encode = __webpack_require__(/*! ./encode */ 77);
	
	var _encode2 = _interopRequireDefault(_encode);
	
	var _ParseError = __webpack_require__(/*! ./ParseError */ 38);
	
	var _ParseError2 = _interopRequireDefault(_ParseError);
	
	var _ParseGeoPoint = __webpack_require__(/*! ./ParseGeoPoint */ 78);
	
	var _ParseGeoPoint2 = _interopRequireDefault(_ParseGeoPoint);
	
	var _ParseObject = __webpack_require__(/*! ./ParseObject */ 39);
	
	var _ParseObject2 = _interopRequireDefault(_ParseObject);
	
	var _ParsePromise = __webpack_require__(/*! ./ParsePromise */ 48);
	
	var _ParsePromise2 = _interopRequireDefault(_ParsePromise);
	
	/**
	 * Converts a string into a regex that matches it.
	 * Surrounding with \Q .. \E does this, we just need to escape any \E's in
	 * the text separately.
	 */
	function quote(s) {
	  return '\\Q' + s.replace('\\E', '\\E\\\\E\\Q') + '\\E';
	}
	
	/**
	 * Creates a new parse Parse.Query for the given Parse.Object subclass.
	 * @class Parse.Query
	 * @constructor
	 * @param {} objectClass An instance of a subclass of Parse.Object, or a Parse className string.
	 *
	 * <p>Parse.Query defines a query that is used to fetch Parse.Objects. The
	 * most common use case is finding all objects that match a query through the
	 * <code>find</code> method. For example, this sample code fetches all objects
	 * of class <code>MyClass</code>. It calls a different function depending on
	 * whether the fetch succeeded or not.
	 *
	 * <pre>
	 * var query = new Parse.Query(MyClass);
	 * query.find({
	 *   success: function(results) {
	 *     // results is an array of Parse.Object.
	 *   },
	 *
	 *   error: function(error) {
	 *     // error is an instance of Parse.Error.
	 *   }
	 * });</pre></p>
	 *
	 * <p>A Parse.Query can also be used to retrieve a single object whose id is
	 * known, through the get method. For example, this sample code fetches an
	 * object of class <code>MyClass</code> and id <code>myId</code>. It calls a
	 * different function depending on whether the fetch succeeded or not.
	 *
	 * <pre>
	 * var query = new Parse.Query(MyClass);
	 * query.get(myId, {
	 *   success: function(object) {
	 *     // object is an instance of Parse.Object.
	 *   },
	 *
	 *   error: function(object, error) {
	 *     // error is an instance of Parse.Error.
	 *   }
	 * });</pre></p>
	 *
	 * <p>A Parse.Query can also be used to count the number of objects that match
	 * the query without retrieving all of those objects. For example, this
	 * sample code counts the number of objects of the class <code>MyClass</code>
	 * <pre>
	 * var query = new Parse.Query(MyClass);
	 * query.count({
	 *   success: function(number) {
	 *     // There are number instances of MyClass.
	 *   },
	 *
	 *   error: function(error) {
	 *     // error is an instance of Parse.Error.
	 *   }
	 * });</pre></p>
	 */
	
	var ParseQuery = function () {
	  function ParseQuery(objectClass) {
	    _classCallCheck(this, ParseQuery);
	
	    if (typeof objectClass === 'string') {
	      if (objectClass === 'User' && _CoreManager2['default'].get('PERFORM_USER_REWRITE')) {
	        this.className = '_User';
	      } else {
	        this.className = objectClass;
	      }
	    } else if (objectClass instanceof _ParseObject2['default']) {
	      this.className = objectClass.className;
	    } else if (typeof objectClass === 'function') {
	      if (typeof objectClass.className === 'string') {
	        this.className = objectClass.className;
	      } else {
	        var obj = new objectClass();
	        this.className = obj.className;
	      }
	    } else {
	      throw new TypeError('A ParseQuery must be constructed with a ParseObject or class name.');
	    }
	
	    this._where = {};
	    this._include = [];
	    this._limit = -1; // negative limit is not sent in the server request
	    this._skip = 0;
	    this._extraOptions = {};
	  }
	
	  /**
	   * Adds constraint that at least one of the passed in queries matches.
	   * @method _orQuery
	   * @param {Array} queries
	   * @return {Parse.Query} Returns the query, so you can chain this call.
	   */
	
	  _createClass(ParseQuery, [{
	    key: '_orQuery',
	    value: function _orQuery(queries) {
	      var queryJSON = queries.map(function (q) {
	        return q.toJSON().where;
	      });
	
	      this._where.$or = queryJSON;
	      return this;
	    }
	
	    /**
	     * Helper for condition queries
	     */
	  }, {
	    key: '_addCondition',
	    value: function _addCondition(key, condition, value) {
	      if (!this._where[key] || typeof this._where[key] === 'string') {
	        this._where[key] = {};
	      }
	      this._where[key][condition] = (0, _encode2['default'])(value, false, true);
	      return this;
	    }
	
	    /**
	     * Returns a JSON representation of this query.
	     * @method toJSON
	     * @return {Object} The JSON representation of the query.
	     */
	  }, {
	    key: 'toJSON',
	    value: function toJSON() {
	      var params = {
	        where: this._where
	      };
	
	      if (this._include.length) {
	        params.include = this._include.join(',');
	      }
	      if (this._select) {
	        params.keys = this._select.join(',');
	      }
	      if (this._limit >= 0) {
	        params.limit = this._limit;
	      }
	      if (this._skip > 0) {
	        params.skip = this._skip;
	      }
	      if (this._order) {
	        params.order = this._order.join(',');
	      }
	      for (var key in this._extraOptions) {
	        params[key] = this._extraOptions[key];
	      }
	
	      return params;
	    }
	
	    /**
	     * Constructs a Parse.Object whose id is already known by fetching data from
	     * the server.  Either options.success or options.error is called when the
	     * find completes.
	     *
	     * @method get
	     * @param {String} objectId The id of the object to be fetched.
	     * @param {Object} options A Backbone-style options object.
	     * Valid options are:<ul>
	     *   <li>success: A Backbone-style success callback
	     *   <li>error: An Backbone-style error callback.
	     *   <li>useMasterKey: In Cloud Code and Node only, causes the Master Key to
	     *     be used for this request.
	     *   <li>sessionToken: A valid session token, used for making a request on
	     *       behalf of a specific user.
	     * </ul>
	     *
	     * @return {Parse.Promise} A promise that is resolved with the result when
	     * the query completes.
	     */
	  }, {
	    key: 'get',
	    value: function get(objectId, options) {
	      this.equalTo('objectId', objectId);
	
	      var firstOptions = {};
	      if (options && options.hasOwnProperty('useMasterKey')) {
	        firstOptions.useMasterKey = options.useMasterKey;
	      }
	      if (options && options.hasOwnProperty('sessionToken')) {
	        firstOptions.sessionToken = options.sessionToken;
	      }
	
	      return this.first(firstOptions).then(function (response) {
	        if (response) {
	          return response;
	        }
	
	        var errorObject = new _ParseError2['default'](_ParseError2['default'].OBJECT_NOT_FOUND, 'Object not found.');
	        return _ParsePromise2['default'].error(errorObject);
	      })._thenRunCallbacks(options, null);
	    }
	
	    /**
	     * Retrieves a list of ParseObjects that satisfy this query.
	     * Either options.success or options.error is called when the find
	     * completes.
	     *
	     * @method find
	     * @param {Object} options A Backbone-style options object. Valid options
	     * are:<ul>
	     *   <li>success: Function to call when the find completes successfully.
	     *   <li>error: Function to call when the find fails.
	     *   <li>useMasterKey: In Cloud Code and Node only, causes the Master Key to
	     *     be used for this request.
	     *   <li>sessionToken: A valid session token, used for making a request on
	     *       behalf of a specific user.
	     * </ul>
	     *
	     * @return {Parse.Promise} A promise that is resolved with the results when
	     * the query completes.
	     */
	  }, {
	    key: 'find',
	    value: function find(options) {
	      var _this = this;
	
	      options = options || {};
	
	      var findOptions = {};
	      if (options.hasOwnProperty('useMasterKey')) {
	        findOptions.useMasterKey = options.useMasterKey;
	      }
	      if (options.hasOwnProperty('sessionToken')) {
	        findOptions.sessionToken = options.sessionToken;
	      }
	
	      var controller = _CoreManager2['default'].getQueryController();
	
	      return controller.find(this.className, this.toJSON(), findOptions).then(function (response) {
	        return response.results.map(function (data) {
	          // In cases of relations, the server may send back a className
	          // on the top level of the payload
	          var override = response.className || _this.className;
	          if (!data.className) {
	            data.className = override;
	          }
	          return _ParseObject2['default'].fromJSON(data, true);
	        });
	      })._thenRunCallbacks(options);
	    }
	
	    /**
	     * Counts the number of objects that match this query.
	     * Either options.success or options.error is called when the count
	     * completes.
	     *
	     * @method count
	     * @param {Object} options A Backbone-style options object. Valid options
	     * are:<ul>
	     *   <li>success: Function to call when the count completes successfully.
	     *   <li>error: Function to call when the find fails.
	     *   <li>useMasterKey: In Cloud Code and Node only, causes the Master Key to
	     *     be used for this request.
	     *   <li>sessionToken: A valid session token, used for making a request on
	     *       behalf of a specific user.
	     * </ul>
	     *
	     * @return {Parse.Promise} A promise that is resolved with the count when
	     * the query completes.
	     */
	  }, {
	    key: 'count',
	    value: function count(options) {
	      options = options || {};
	
	      var findOptions = {};
	      if (options.hasOwnProperty('useMasterKey')) {
	        findOptions.useMasterKey = options.useMasterKey;
	      }
	      if (options.hasOwnProperty('sessionToken')) {
	        findOptions.sessionToken = options.sessionToken;
	      }
	
	      var controller = _CoreManager2['default'].getQueryController();
	
	      var params = this.toJSON();
	      params.limit = 0;
	      params.count = 1;
	
	      return controller.find(this.className, params, findOptions).then(function (result) {
	        return result.count;
	      })._thenRunCallbacks(options);
	    }
	
	    /**
	     * Retrieves at most one Parse.Object that satisfies this query.
	     *
	     * Either options.success or options.error is called when it completes.
	     * success is passed the object if there is one. otherwise, undefined.
	     *
	     * @method first
	     * @param {Object} options A Backbone-style options object. Valid options
	     * are:<ul>
	     *   <li>success: Function to call when the find completes successfully.
	     *   <li>error: Function to call when the find fails.
	     *   <li>useMasterKey: In Cloud Code and Node only, causes the Master Key to
	     *     be used for this request.
	     *   <li>sessionToken: A valid session token, used for making a request on
	     *       behalf of a specific user.
	     * </ul>
	     *
	     * @return {Parse.Promise} A promise that is resolved with the object when
	     * the query completes.
	     */
	  }, {
	    key: 'first',
	    value: function first(options) {
	      var _this2 = this;
	
	      options = options || {};
	
	      var findOptions = {};
	      if (options.hasOwnProperty('useMasterKey')) {
	        findOptions.useMasterKey = options.useMasterKey;
	      }
	      if (options.hasOwnProperty('sessionToken')) {
	        findOptions.sessionToken = options.sessionToken;
	      }
	
	      var controller = _CoreManager2['default'].getQueryController();
	
	      var params = this.toJSON();
	      params.limit = 1;
	
	      return controller.find(this.className, params, findOptions).then(function (response) {
	        var objects = response.results;
	        if (!objects[0]) {
	          return undefined;
	        }
	        if (!objects[0].className) {
	          objects[0].className = _this2.className;
	        }
	        return _ParseObject2['default'].fromJSON(objects[0], true);
	      })._thenRunCallbacks(options);
	    }
	
	    /**
	     * Iterates over each result of a query, calling a callback for each one. If
	     * the callback returns a promise, the iteration will not continue until
	     * that promise has been fulfilled. If the callback returns a rejected
	     * promise, then iteration will stop with that error. The items are
	     * processed in an unspecified order. The query may not have any sort order,
	     * and may not use limit or skip.
	     * @method each
	     * @param {Function} callback Callback that will be called with each result
	     *     of the query.
	     * @param {Object} options An optional Backbone-like options object with
	     *     success and error callbacks that will be invoked once the iteration
	     *     has finished.
	     * @return {Parse.Promise} A promise that will be fulfilled once the
	     *     iteration has completed.
	     */
	  }, {
	    key: 'each',
	    value: function each(callback, options) {
	      options = options || {};
	
	      if (this._order || this._skip || this._limit >= 0) {
	        return _ParsePromise2['default'].error('Cannot iterate on a query with sort, skip, or limit.')._thenRunCallbacks(options);
	      }
	
	      var promise = new _ParsePromise2['default']();
	
	      var query = new ParseQuery(this.className);
	      // We can override the batch size from the options.
	      // This is undocumented, but useful for testing.
	      query._limit = options.batchSize || 100;
	      query._include = this._include.map(function (i) {
	        return i;
	      });
	      if (this._select) {
	        query._select = this._select.map(function (s) {
	          return s;
	        });
	      }
	
	      query._where = {};
	      for (var attr in this._where) {
	        var val = this._where[attr];
	        if (Array.isArray(val)) {
	          query._where[attr] = val.map(function (v) {
	            return v;
	          });
	        } else if (val && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object') {
	          var conditionMap = {};
	          query._where[attr] = conditionMap;
	          for (var cond in val) {
	            conditionMap[cond] = val[cond];
	          }
	        } else {
	          query._where[attr] = val;
	        }
	      }
	
	      query.ascending('objectId');
	
	      var findOptions = {};
	      if (options.hasOwnProperty('useMasterKey')) {
	        findOptions.useMasterKey = options.useMasterKey;
	      }
	      if (options.hasOwnProperty('sessionToken')) {
	        findOptions.sessionToken = options.sessionToken;
	      }
	
	      var finished = false;
	      return _ParsePromise2['default']._continueWhile(function () {
	        return !finished;
	      }, function () {
	        return query.find(findOptions).then(function (results) {
	          var callbacksDone = _ParsePromise2['default'].as();
	          results.forEach(function (result) {
	            callbacksDone = callbacksDone.then(function () {
	              return callback(result);
	            });
	          });
	
	          return callbacksDone.then(function () {
	            if (results.length >= query._limit) {
	              query.greaterThan('objectId', results[results.length - 1].id);
	            } else {
	              finished = true;
	            }
	          });
	        });
	      })._thenRunCallbacks(options);
	    }
	
	    /** Query Conditions **/
	
	    /**
	     * Adds a constraint to the query that requires a particular key's value to
	     * be equal to the provided value.
	     * @method equalTo
	     * @param {String} key The key to check.
	     * @param value The value that the Parse.Object must contain.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	  }, {
	    key: 'equalTo',
	    value: function equalTo(key, value) {
	      if (typeof value === 'undefined') {
	        return this.doesNotExist(key);
	      }
	
	      this._where[key] = (0, _encode2['default'])(value, false, true);
	      return this;
	    }
	
	    /**
	     * Adds a constraint to the query that requires a particular key's value to
	     * be not equal to the provided value.
	     * @method notEqualTo
	     * @param {String} key The key to check.
	     * @param value The value that must not be equalled.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	  }, {
	    key: 'notEqualTo',
	    value: function notEqualTo(key, value) {
	      return this._addCondition(key, '$ne', value);
	    }
	
	    /**
	     * Adds a constraint to the query that requires a particular key's value to
	     * be less than the provided value.
	     * @method lessThan
	     * @param {String} key The key to check.
	     * @param value The value that provides an upper bound.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	  }, {
	    key: 'lessThan',
	    value: function lessThan(key, value) {
	      return this._addCondition(key, '$lt', value);
	    }
	
	    /**
	     * Adds a constraint to the query that requires a particular key's value to
	     * be greater than the provided value.
	     * @method greaterThan
	     * @param {String} key The key to check.
	     * @param value The value that provides an lower bound.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	  }, {
	    key: 'greaterThan',
	    value: function greaterThan(key, value) {
	      return this._addCondition(key, '$gt', value);
	    }
	
	    /**
	     * Adds a constraint to the query that requires a particular key's value to
	     * be less than or equal to the provided value.
	     * @method lessThanOrEqualTo
	     * @param {String} key The key to check.
	     * @param value The value that provides an upper bound.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	  }, {
	    key: 'lessThanOrEqualTo',
	    value: function lessThanOrEqualTo(key, value) {
	      return this._addCondition(key, '$lte', value);
	    }
	
	    /**
	     * Adds a constraint to the query that requires a particular key's value to
	     * be greater than or equal to the provided value.
	     * @method greaterThanOrEqualTo
	     * @param {String} key The key to check.
	     * @param value The value that provides an lower bound.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	  }, {
	    key: 'greaterThanOrEqualTo',
	    value: function greaterThanOrEqualTo(key, value) {
	      return this._addCondition(key, '$gte', value);
	    }
	
	    /**
	     * Adds a constraint to the query that requires a particular key's value to
	     * be contained in the provided list of values.
	     * @method containedIn
	     * @param {String} key The key to check.
	     * @param {Array} values The values that will match.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	  }, {
	    key: 'containedIn',
	    value: function containedIn(key, value) {
	      return this._addCondition(key, '$in', value);
	    }
	
	    /**
	     * Adds a constraint to the query that requires a particular key's value to
	     * not be contained in the provided list of values.
	     * @method notContainedIn
	     * @param {String} key The key to check.
	     * @param {Array} values The values that will not match.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	  }, {
	    key: 'notContainedIn',
	    value: function notContainedIn(key, value) {
	      return this._addCondition(key, '$nin', value);
	    }
	
	    /**
	     * Adds a constraint to the query that requires a particular key's value to
	     * contain each one of the provided list of values.
	     * @method containsAll
	     * @param {String} key The key to check.  This key's value must be an array.
	     * @param {Array} values The values that will match.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	  }, {
	    key: 'containsAll',
	    value: function containsAll(key, values) {
	      return this._addCondition(key, '$all', values);
	    }
	
	    /**
	     * Adds a constraint for finding objects that contain the given key.
	     * @method exists
	     * @param {String} key The key that should exist.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	  }, {
	    key: 'exists',
	    value: function exists(key) {
	      return this._addCondition(key, '$exists', true);
	    }
	
	    /**
	     * Adds a constraint for finding objects that do not contain a given key.
	     * @method doesNotExist
	     * @param {String} key The key that should not exist
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	  }, {
	    key: 'doesNotExist',
	    value: function doesNotExist(key) {
	      return this._addCondition(key, '$exists', false);
	    }
	
	    /**
	     * Adds a regular expression constraint for finding string values that match
	     * the provided regular expression.
	     * This may be slow for large datasets.
	     * @method matches
	     * @param {String} key The key that the string to match is stored in.
	     * @param {RegExp} regex The regular expression pattern to match.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	  }, {
	    key: 'matches',
	    value: function matches(key, regex, modifiers) {
	      this._addCondition(key, '$regex', regex);
	      if (!modifiers) {
	        modifiers = '';
	      }
	      if (regex.ignoreCase) {
	        modifiers += 'i';
	      }
	      if (regex.multiline) {
	        modifiers += 'm';
	      }
	      if (modifiers.length) {
	        this._addCondition(key, '$options', modifiers);
	      }
	      return this;
	    }
	
	    /**
	     * Adds a constraint that requires that a key's value matches a Parse.Query
	     * constraint.
	     * @method matchesQuery
	     * @param {String} key The key that the contains the object to match the
	     *                     query.
	     * @param {Parse.Query} query The query that should match.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	  }, {
	    key: 'matchesQuery',
	    value: function matchesQuery(key, query) {
	      var queryJSON = query.toJSON();
	      queryJSON.className = query.className;
	      return this._addCondition(key, '$inQuery', queryJSON);
	    }
	
	    /**
	     * Adds a constraint that requires that a key's value not matches a
	     * Parse.Query constraint.
	     * @method doesNotMatchQuery
	     * @param {String} key The key that the contains the object to match the
	     *                     query.
	     * @param {Parse.Query} query The query that should not match.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	  }, {
	    key: 'doesNotMatchQuery',
	    value: function doesNotMatchQuery(key, query) {
	      var queryJSON = query.toJSON();
	      queryJSON.className = query.className;
	      return this._addCondition(key, '$notInQuery', queryJSON);
	    }
	
	    /**
	     * Adds a constraint that requires that a key's value matches a value in
	     * an object returned by a different Parse.Query.
	     * @method matchesKeyInQuery
	     * @param {String} key The key that contains the value that is being
	     *                     matched.
	     * @param {String} queryKey The key in the objects returned by the query to
	     *                          match against.
	     * @param {Parse.Query} query The query to run.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	  }, {
	    key: 'matchesKeyInQuery',
	    value: function matchesKeyInQuery(key, queryKey, query) {
	      var queryJSON = query.toJSON();
	      queryJSON.className = query.className;
	      return this._addCondition(key, '$select', {
	        key: queryKey,
	        query: queryJSON
	      });
	    }
	
	    /**
	     * Adds a constraint that requires that a key's value not match a value in
	     * an object returned by a different Parse.Query.
	     * @method doesNotMatchKeyInQuery
	     * @param {String} key The key that contains the value that is being
	     *                     excluded.
	     * @param {String} queryKey The key in the objects returned by the query to
	     *                          match against.
	     * @param {Parse.Query} query The query to run.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	  }, {
	    key: 'doesNotMatchKeyInQuery',
	    value: function doesNotMatchKeyInQuery(key, queryKey, query) {
	      var queryJSON = query.toJSON();
	      queryJSON.className = query.className;
	      return this._addCondition(key, '$dontSelect', {
	        key: queryKey,
	        query: queryJSON
	      });
	    }
	
	    /**
	     * Adds a constraint for finding string values that contain a provided
	     * string.  This may be slow for large datasets.
	     * @method contains
	     * @param {String} key The key that the string to match is stored in.
	     * @param {String} substring The substring that the value must contain.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	  }, {
	    key: 'contains',
	    value: function contains(key, value) {
	      if (typeof value !== 'string') {
	        throw new Error('The value being searched for must be a string.');
	      }
	      return this._addCondition(key, '$regex', quote(value));
	    }
	
	    /**
	     * Adds a constraint for finding string values that start with a provided
	     * string.  This query will use the backend index, so it will be fast even
	     * for large datasets.
	     * @method startsWith
	     * @param {String} key The key that the string to match is stored in.
	     * @param {String} prefix The substring that the value must start with.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	  }, {
	    key: 'startsWith',
	    value: function startsWith(key, value) {
	      if (typeof value !== 'string') {
	        throw new Error('The value being searched for must be a string.');
	      }
	      return this._addCondition(key, '$regex', '^' + quote(value));
	    }
	
	    /**
	     * Adds a constraint for finding string values that end with a provided
	     * string.  This will be slow for large datasets.
	     * @method endsWith
	     * @param {String} key The key that the string to match is stored in.
	     * @param {String} suffix The substring that the value must end with.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	  }, {
	    key: 'endsWith',
	    value: function endsWith(key, value) {
	      if (typeof value !== 'string') {
	        throw new Error('The value being searched for must be a string.');
	      }
	      return this._addCondition(key, '$regex', quote(value) + '$');
	    }
	
	    /**
	     * Adds a proximity based constraint for finding objects with key point
	     * values near the point given.
	     * @method near
	     * @param {String} key The key that the Parse.GeoPoint is stored in.
	     * @param {Parse.GeoPoint} point The reference Parse.GeoPoint that is used.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	  }, {
	    key: 'near',
	    value: function near(key, point) {
	      if (!(point instanceof _ParseGeoPoint2['default'])) {
	        // Try to cast it as a GeoPoint
	        point = new _ParseGeoPoint2['default'](point);
	      }
	      return this._addCondition(key, '$nearSphere', point);
	    }
	
	    /**
	     * Adds a proximity based constraint for finding objects with key point
	     * values near the point given and within the maximum distance given.
	     * @method withinRadians
	     * @param {String} key The key that the Parse.GeoPoint is stored in.
	     * @param {Parse.GeoPoint} point The reference Parse.GeoPoint that is used.
	     * @param {Number} maxDistance Maximum distance (in radians) of results to
	     *   return.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	  }, {
	    key: 'withinRadians',
	    value: function withinRadians(key, point, distance) {
	      this.near(key, point);
	      return this._addCondition(key, '$maxDistance', distance);
	    }
	
	    /**
	     * Adds a proximity based constraint for finding objects with key point
	     * values near the point given and within the maximum distance given.
	     * Radius of earth used is 3958.8 miles.
	     * @method withinMiles
	     * @param {String} key The key that the Parse.GeoPoint is stored in.
	     * @param {Parse.GeoPoint} point The reference Parse.GeoPoint that is used.
	     * @param {Number} maxDistance Maximum distance (in miles) of results to
	     *     return.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	  }, {
	    key: 'withinMiles',
	    value: function withinMiles(key, point, distance) {
	      return this.withinRadians(key, point, distance / 3958.8);
	    }
	
	    /**
	     * Adds a proximity based constraint for finding objects with key point
	     * values near the point given and within the maximum distance given.
	     * Radius of earth used is 6371.0 kilometers.
	     * @method withinKilometers
	     * @param {String} key The key that the Parse.GeoPoint is stored in.
	     * @param {Parse.GeoPoint} point The reference Parse.GeoPoint that is used.
	     * @param {Number} maxDistance Maximum distance (in kilometers) of results
	     *     to return.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	  }, {
	    key: 'withinKilometers',
	    value: function withinKilometers(key, point, distance) {
	      return this.withinRadians(key, point, distance / 6371.0);
	    }
	
	    /**
	     * Adds a constraint to the query that requires a particular key's
	     * coordinates be contained within a given rectangular geographic bounding
	     * box.
	     * @method withinGeoBox
	     * @param {String} key The key to be constrained.
	     * @param {Parse.GeoPoint} southwest
	     *     The lower-left inclusive corner of the box.
	     * @param {Parse.GeoPoint} northeast
	     *     The upper-right inclusive corner of the box.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	  }, {
	    key: 'withinGeoBox',
	    value: function withinGeoBox(key, southwest, northeast) {
	      if (!(southwest instanceof _ParseGeoPoint2['default'])) {
	        southwest = new _ParseGeoPoint2['default'](southwest);
	      }
	      if (!(northeast instanceof _ParseGeoPoint2['default'])) {
	        northeast = new _ParseGeoPoint2['default'](northeast);
	      }
	      this._addCondition(key, '$within', { '$box': [southwest, northeast] });
	      return this;
	    }
	
	    /** Query Orderings **/
	
	    /**
	     * Sorts the results in ascending order by the given key.
	     *
	     * @method ascending
	     * @param {(String|String[]|...String} key The key to order by, which is a
	     * string of comma separated values, or an Array of keys, or multiple keys.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	  }, {
	    key: 'ascending',
	    value: function ascending() {
	      this._order = [];
	
	      for (var _len = arguments.length, keys = Array(_len), _key = 0; _key < _len; _key++) {
	        keys[_key] = arguments[_key];
	      }
	
	      return this.addAscending.apply(this, keys);
	    }
	
	    /**
	     * Sorts the results in ascending order by the given key,
	     * but can also add secondary sort descriptors without overwriting _order.
	     *
	     * @method addAscending
	     * @param {(String|String[]|...String} key The key to order by, which is a
	     * string of comma separated values, or an Array of keys, or multiple keys.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	  }, {
	    key: 'addAscending',
	    value: function addAscending() {
	      var _this3 = this;
	
	      if (!this._order) {
	        this._order = [];
	      }
	
	      for (var _len2 = arguments.length, keys = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        keys[_key2] = arguments[_key2];
	      }
	
	      keys.forEach(function (key) {
	        if (Array.isArray(key)) {
	          key = key.join();
	        }
	        _this3._order = _this3._order.concat(key.replace(/\s/g, '').split(','));
	      });
	
	      return this;
	    }
	
	    /**
	     * Sorts the results in descending order by the given key.
	     *
	     * @method descending
	     * @param {(String|String[]|...String} key The key to order by, which is a
	     * string of comma separated values, or an Array of keys, or multiple keys.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	  }, {
	    key: 'descending',
	    value: function descending() {
	      this._order = [];
	
	      for (var _len3 = arguments.length, keys = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	        keys[_key3] = arguments[_key3];
	      }
	
	      return this.addDescending.apply(this, keys);
	    }
	
	    /**
	     * Sorts the results in descending order by the given key,
	     * but can also add secondary sort descriptors without overwriting _order.
	     *
	     * @method addDescending
	     * @param {(String|String[]|...String} key The key to order by, which is a
	     * string of comma separated values, or an Array of keys, or multiple keys.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	  }, {
	    key: 'addDescending',
	    value: function addDescending() {
	      var _this4 = this;
	
	      if (!this._order) {
	        this._order = [];
	      }
	
	      for (var _len4 = arguments.length, keys = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	        keys[_key4] = arguments[_key4];
	      }
	
	      keys.forEach(function (key) {
	        if (Array.isArray(key)) {
	          key = key.join();
	        }
	        _this4._order = _this4._order.concat(key.replace(/\s/g, '').split(',').map(function (k) {
	          return '-' + k;
	        }));
	      });
	
	      return this;
	    }
	
	    /** Query Options **/
	
	    /**
	     * Sets the number of results to skip before returning any results.
	     * This is useful for pagination.
	     * Default is to skip zero results.
	     * @method skip
	     * @param {Number} n the number of results to skip.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	  }, {
	    key: 'skip',
	    value: function skip(n) {
	      if (typeof n !== 'number' || n < 0) {
	        throw new Error('You can only skip by a positive number');
	      }
	      this._skip = n;
	      return this;
	    }
	
	    /**
	     * Sets the limit of the number of results to return. The default limit is
	     * 100, with a maximum of 1000 results being returned at a time.
	     * @method limit
	     * @param {Number} n the number of results to limit to.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	  }, {
	    key: 'limit',
	    value: function limit(n) {
	      if (typeof n !== 'number') {
	        throw new Error('You can only set the limit to a numeric value');
	      }
	      this._limit = n;
	      return this;
	    }
	
	    /**
	     * Includes nested Parse.Objects for the provided key.  You can use dot
	     * notation to specify which fields in the included object are also fetched.
	     * @method include
	     * @param {String} key The name of the key to include.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	  }, {
	    key: 'include',
	    value: function include() {
	      var _this5 = this;
	
	      for (var _len5 = arguments.length, keys = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
	        keys[_key5] = arguments[_key5];
	      }
	
	      keys.forEach(function (key) {
	        if (Array.isArray(key)) {
	          _this5._include = _this5._include.concat(key);
	        } else {
	          _this5._include.push(key);
	        }
	      });
	      return this;
	    }
	
	    /**
	     * Restricts the fields of the returned Parse.Objects to include only the
	     * provided keys.  If this is called multiple times, then all of the keys
	     * specified in each of the calls will be included.
	     * @method select
	     * @param {Array} keys The names of the keys to include.
	     * @return {Parse.Query} Returns the query, so you can chain this call.
	     */
	  }, {
	    key: 'select',
	    value: function select() {
	      var _this6 = this;
	
	      if (!this._select) {
	        this._select = [];
	      }
	
	      for (var _len6 = arguments.length, keys = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
	        keys[_key6] = arguments[_key6];
	      }
	
	      keys.forEach(function (key) {
	        if (Array.isArray(key)) {
	          _this6._select = _this6._select.concat(key);
	        } else {
	          _this6._select.push(key);
	        }
	      });
	      return this;
	    }
	
	    /**
	     * Subscribe this query to get liveQuery updates
	     * @method subscribe
	     * @return {LiveQuerySubscription} Returns the liveQuerySubscription, it's an event emitter
	     * which can be used to get liveQuery updates.
	     */
	  }, {
	    key: 'subscribe',
	    value: function subscribe() {
	      var controller = _CoreManager2['default'].getLiveQueryController();
	      return controller.subscribe(this);
	    }
	
	    /**
	     * Constructs a Parse.Query that is the OR of the passed in queries.  For
	     * example:
	     * <pre>var compoundQuery = Parse.Query.or(query1, query2, query3);</pre>
	     *
	     * will create a compoundQuery that is an or of the query1, query2, and
	     * query3.
	     * @method or
	     * @param {...Parse.Query} var_args The list of queries to OR.
	     * @static
	     * @return {Parse.Query} The query that is the OR of the passed in queries.
	     */
	  }], [{
	    key: 'or',
	    value: function or() {
	      var className = null;
	
	      for (var _len7 = arguments.length, queries = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
	        queries[_key7] = arguments[_key7];
	      }
	
	      queries.forEach(function (q) {
	        if (!className) {
	          className = q.className;
	        }
	
	        if (className !== q.className) {
	          throw new Error('All queries must be for the same class.');
	        }
	      });
	
	      var query = new ParseQuery(className);
	      query._orQuery(queries);
	      return query;
	    }
	  }]);
	
	  return ParseQuery;
	}();
	
	exports['default'] = ParseQuery;
	
	_CoreManager2['default'].setQueryController({
	  find: function find(className, params, options) {
	    var RESTController = _CoreManager2['default'].getRESTController();
	
	    return RESTController.request('GET', 'classes/' + className, params, options);
	  }
	});
	module.exports = exports['default'];

/***/ },
/* 81 */
/*!***************************************!*\
  !*** ./~/parse/lib/browser/equals.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _Object$keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ 9)['default'];
	
	var _interopRequireDefault = __webpack_require__(/*! babel-runtime/helpers/interop-require-default */ 2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = equals;
	
	var _ParseACL = __webpack_require__(/*! ./ParseACL */ 3);
	
	var _ParseACL2 = _interopRequireDefault(_ParseACL);
	
	var _ParseFile = __webpack_require__(/*! ./ParseFile */ 47);
	
	var _ParseFile2 = _interopRequireDefault(_ParseFile);
	
	var _ParseGeoPoint = __webpack_require__(/*! ./ParseGeoPoint */ 78);
	
	var _ParseGeoPoint2 = _interopRequireDefault(_ParseGeoPoint);
	
	var _ParseObject = __webpack_require__(/*! ./ParseObject */ 39);
	
	var _ParseObject2 = _interopRequireDefault(_ParseObject);
	
	function equals(a, b) {
	  if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) !== (typeof b === 'undefined' ? 'undefined' : _typeof(b))) {
	    return false;
	  }
	
	  if (!a || (typeof a === 'undefined' ? 'undefined' : _typeof(a)) !== 'object') {
	    // a is a primitive
	    return a === b;
	  }
	
	  if (Array.isArray(a) || Array.isArray(b)) {
	    if (!Array.isArray(a) || !Array.isArray(b)) {
	      return false;
	    }
	    if (a.length !== b.length) {
	      return false;
	    }
	    for (var i = a.length; i--;) {
	      if (!equals(a[i], b[i])) {
	        return false;
	      }
	    }
	    return true;
	  }
	
	  if (a instanceof _ParseACL2['default'] || a instanceof _ParseFile2['default'] || a instanceof _ParseGeoPoint2['default'] || a instanceof _ParseObject2['default']) {
	    return a.equals(b);
	  }
	
	  if (_Object$keys(a).length !== _Object$keys(b).length) {
	    return false;
	  }
	  for (var k in a) {
	    if (!equals(a[k], b[k])) {
	      return false;
	    }
	  }
	  return true;
	}
	
	module.exports = exports['default'];

/***/ },
/* 82 */
/*!***************************************!*\
  !*** ./~/parse/lib/browser/escape.js ***!
  \***************************************/
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = escape;
	
	function escape(str) {
	  return str.replace(/[&<>\/'"]/g, function (char) {
	    return {
	      '&': '&amp;',
	      '<': '&lt;',
	      '>': '&gt;',
	      '/': '&#x2F;',
	      '\'': '&#x27;',
	      '"': '&quot;'
	    }[char];
	  });
	}
	
	module.exports = exports['default'];

/***/ },
/* 83 */
/*!******************************************!*\
  !*** ./~/parse/lib/browser/parseDate.js ***!
  \******************************************/
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = parseDate;
	
	function parseDate(iso8601) {
	  var regexp = new RegExp('^([0-9]{1,4})-([0-9]{1,2})-([0-9]{1,2})' + 'T' + '([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2})' + '(.([0-9]+))?' + 'Z$');
	  var match = regexp.exec(iso8601);
	  if (!match) {
	    return null;
	  }
	
	  var year = match[1] || 0;
	  var month = (match[2] || 1) - 1;
	  var day = match[3] || 0;
	  var hour = match[4] || 0;
	  var minute = match[5] || 0;
	  var second = match[6] || 0;
	  var milli = match[8] || 0;
	
	  return new Date(Date.UTC(year, month, day, hour, minute, second, milli));
	}
	
	module.exports = exports['default'];

/***/ },
/* 84 */
/*!**************************************************************!*\
  !*** ./~/parse/lib/browser/SingleInstanceStateController.js ***!
  \**************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	'use strict';
	
	var _interopRequireWildcard = __webpack_require__(/*! babel-runtime/helpers/interop-require-wildcard */ 43)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.getState = getState;
	exports.initializeState = initializeState;
	exports.removeState = removeState;
	exports.getServerData = getServerData;
	exports.setServerData = setServerData;
	exports.getPendingOps = getPendingOps;
	exports.setPendingOp = setPendingOp;
	exports.pushPendingState = pushPendingState;
	exports.popPendingState = popPendingState;
	exports.mergeFirstPendingState = mergeFirstPendingState;
	exports.getObjectCache = getObjectCache;
	exports.estimateAttribute = estimateAttribute;
	exports.estimateAttributes = estimateAttributes;
	exports.commitServerChanges = commitServerChanges;
	exports.enqueueTask = enqueueTask;
	exports.clearAllState = clearAllState;
	
	var _ObjectStateMutations = __webpack_require__(/*! ./ObjectStateMutations */ 85);
	
	var ObjectStateMutations = _interopRequireWildcard(_ObjectStateMutations);
	
	var objectState = {};
	
	function getState(obj) {
	  var classData = objectState[obj.className];
	  if (classData) {
	    return classData[obj.id] || null;
	  }
	  return null;
	}
	
	function initializeState(obj, initial) {
	  var state = getState(obj);
	  if (state) {
	    return state;
	  }
	  if (!objectState[obj.className]) {
	    objectState[obj.className] = {};
	  }
	  if (!initial) {
	    initial = ObjectStateMutations.defaultState();
	  }
	  state = objectState[obj.className][obj.id] = initial;
	  return state;
	}
	
	function removeState(obj) {
	  var state = getState(obj);
	  if (state === null) {
	    return null;
	  }
	  delete objectState[obj.className][obj.id];
	  return state;
	}
	
	function getServerData(obj) {
	  var state = getState(obj);
	  if (state) {
	    return state.serverData;
	  }
	  return {};
	}
	
	function setServerData(obj, attributes) {
	  var serverData = initializeState(obj).serverData;
	  ObjectStateMutations.setServerData(serverData, attributes);
	}
	
	function getPendingOps(obj) {
	  var state = getState(obj);
	  if (state) {
	    return state.pendingOps;
	  }
	  return [{}];
	}
	
	function setPendingOp(obj, attr, op) {
	  var pendingOps = initializeState(obj).pendingOps;
	  ObjectStateMutations.setPendingOp(pendingOps, attr, op);
	}
	
	function pushPendingState(obj) {
	  var pendingOps = initializeState(obj).pendingOps;
	  ObjectStateMutations.pushPendingState(pendingOps);
	}
	
	function popPendingState(obj) {
	  var pendingOps = initializeState(obj).pendingOps;
	  return ObjectStateMutations.popPendingState(pendingOps);
	}
	
	function mergeFirstPendingState(obj) {
	  var pendingOps = getPendingOps(obj);
	  ObjectStateMutations.mergeFirstPendingState(pendingOps);
	}
	
	function getObjectCache(obj) {
	  var state = getState(obj);
	  if (state) {
	    return state.objectCache;
	  }
	  return {};
	}
	
	function estimateAttribute(obj, attr) {
	  var serverData = getServerData(obj);
	  var pendingOps = getPendingOps(obj);
	  return ObjectStateMutations.estimateAttribute(serverData, pendingOps, obj.className, obj.id, attr);
	}
	
	function estimateAttributes(obj) {
	  var serverData = getServerData(obj);
	  var pendingOps = getPendingOps(obj);
	  return ObjectStateMutations.estimateAttributes(serverData, pendingOps, obj.className, obj.id);
	}
	
	function commitServerChanges(obj, changes) {
	  var state = initializeState(obj);
	  ObjectStateMutations.commitServerChanges(state.serverData, state.objectCache, changes);
	}
	
	function enqueueTask(obj, task) {
	  var state = initializeState(obj);
	  return state.tasks.enqueue(task);
	}
	
	function clearAllState() {
	  objectState = {};
	}

/***/ },
/* 85 */
/*!*****************************************************!*\
  !*** ./~/parse/lib/browser/ObjectStateMutations.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _interopRequireDefault = __webpack_require__(/*! babel-runtime/helpers/interop-require-default */ 2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.defaultState = defaultState;
	exports.setServerData = setServerData;
	exports.setPendingOp = setPendingOp;
	exports.pushPendingState = pushPendingState;
	exports.popPendingState = popPendingState;
	exports.mergeFirstPendingState = mergeFirstPendingState;
	exports.estimateAttribute = estimateAttribute;
	exports.estimateAttributes = estimateAttributes;
	exports.commitServerChanges = commitServerChanges;
	
	var _encode = __webpack_require__(/*! ./encode */ 77);
	
	var _encode2 = _interopRequireDefault(_encode);
	
	var _ParseFile = __webpack_require__(/*! ./ParseFile */ 47);
	
	var _ParseFile2 = _interopRequireDefault(_ParseFile);
	
	var _ParseObject = __webpack_require__(/*! ./ParseObject */ 39);
	
	var _ParseObject2 = _interopRequireDefault(_ParseObject);
	
	var _ParsePromise = __webpack_require__(/*! ./ParsePromise */ 48);
	
	var _ParsePromise2 = _interopRequireDefault(_ParsePromise);
	
	var _ParseRelation = __webpack_require__(/*! ./ParseRelation */ 74);
	
	var _ParseRelation2 = _interopRequireDefault(_ParseRelation);
	
	var _TaskQueue = __webpack_require__(/*! ./TaskQueue */ 86);
	
	var _TaskQueue2 = _interopRequireDefault(_TaskQueue);
	
	var _ParseOp = __webpack_require__(/*! ./ParseOp */ 75);
	
	function defaultState() {
	  return {
	    serverData: {},
	    pendingOps: [{}],
	    objectCache: {},
	    tasks: new _TaskQueue2['default'](),
	    existed: false
	  };
	}
	
	function setServerData(serverData, attributes) {
	  for (var _attr in attributes) {
	    if (typeof attributes[_attr] !== 'undefined') {
	      serverData[_attr] = attributes[_attr];
	    } else {
	      delete serverData[_attr];
	    }
	  }
	}
	
	function setPendingOp(pendingOps, attr, op) {
	  var last = pendingOps.length - 1;
	  if (op) {
	    pendingOps[last][attr] = op;
	  } else {
	    delete pendingOps[last][attr];
	  }
	}
	
	function pushPendingState(pendingOps) {
	  pendingOps.push({});
	}
	
	function popPendingState(pendingOps) {
	  var first = pendingOps.shift();
	  if (!pendingOps.length) {
	    pendingOps[0] = {};
	  }
	  return first;
	}
	
	function mergeFirstPendingState(pendingOps) {
	  var first = popPendingState(pendingOps);
	  var next = pendingOps[0];
	  for (var _attr2 in first) {
	    if (next[_attr2] && first[_attr2]) {
	      var merged = next[_attr2].mergeWith(first[_attr2]);
	      if (merged) {
	        next[_attr2] = merged;
	      }
	    } else {
	      next[_attr2] = first[_attr2];
	    }
	  }
	}
	
	function estimateAttribute(serverData, pendingOps, className, id, attr) {
	  var value = serverData[attr];
	  for (var i = 0; i < pendingOps.length; i++) {
	    if (pendingOps[i][attr]) {
	      if (pendingOps[i][attr] instanceof _ParseOp.RelationOp) {
	        value = pendingOps[i][attr].applyTo(value, { className: className, id: id }, attr);
	      } else {
	        value = pendingOps[i][attr].applyTo(value);
	      }
	    }
	  }
	  return value;
	}
	
	function estimateAttributes(serverData, pendingOps, className, id) {
	  var data = {};
	  var attr = undefined;
	  for (attr in serverData) {
	    data[attr] = serverData[attr];
	  }
	  for (var i = 0; i < pendingOps.length; i++) {
	    for (attr in pendingOps[i]) {
	      if (pendingOps[i][attr] instanceof _ParseOp.RelationOp) {
	        data[attr] = pendingOps[i][attr].applyTo(data[attr], { className: className, id: id }, attr);
	      } else {
	        data[attr] = pendingOps[i][attr].applyTo(data[attr]);
	      }
	    }
	  }
	  return data;
	}
	
	function commitServerChanges(serverData, objectCache, changes) {
	  for (var _attr3 in changes) {
	    var val = changes[_attr3];
	    serverData[_attr3] = val;
	    if (val && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' && !(val instanceof _ParseObject2['default']) && !(val instanceof _ParseFile2['default']) && !(val instanceof _ParseRelation2['default'])) {
	      var json = (0, _encode2['default'])(val, false, true);
	      objectCache[_attr3] = JSON.stringify(json);
	    }
	  }
	}

/***/ },
/* 86 */
/*!******************************************!*\
  !*** ./~/parse/lib/browser/TaskQueue.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	'use strict';
	
	var _createClass = __webpack_require__(/*! babel-runtime/helpers/create-class */ 4)['default'];
	
	var _classCallCheck = __webpack_require__(/*! babel-runtime/helpers/class-call-check */ 8)['default'];
	
	var _interopRequireDefault = __webpack_require__(/*! babel-runtime/helpers/interop-require-default */ 2)['default'];
	
	var _ParsePromise = __webpack_require__(/*! ./ParsePromise */ 48);
	
	var _ParsePromise2 = _interopRequireDefault(_ParsePromise);
	
	module.exports = function () {
	  function TaskQueue() {
	    _classCallCheck(this, TaskQueue);
	
	    this.queue = [];
	  }
	
	  _createClass(TaskQueue, [{
	    key: 'enqueue',
	    value: function enqueue(task) {
	      var _this = this;
	
	      var taskComplete = new _ParsePromise2['default']();
	      this.queue.push({
	        task: task,
	        _completion: taskComplete
	      });
	      if (this.queue.length === 1) {
	        task().then(function () {
	          _this._dequeue();
	          taskComplete.resolve();
	        }, function (error) {
	          _this._dequeue();
	          taskComplete.reject(error);
	        });
	      }
	      return taskComplete;
	    }
	  }, {
	    key: '_dequeue',
	    value: function _dequeue() {
	      var _this2 = this;
	
	      this.queue.shift();
	      if (this.queue.length) {
	        var next = this.queue[0];
	        next.task().then(function () {
	          _this2._dequeue();
	          next._completion.resolve();
	        }, function (error) {
	          _this2._dequeue();
	          next._completion.reject(error);
	        });
	      }
	    }
	  }]);
	
	  return TaskQueue;
	}();

/***/ },
/* 87 */
/*!**************************************************************!*\
  !*** ./~/parse/lib/browser/UniqueInstanceStateController.js ***!
  \**************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	'use strict';
	
	var _WeakMap = __webpack_require__(/*! babel-runtime/core-js/weak-map */ 88)['default'];
	
	var _interopRequireWildcard = __webpack_require__(/*! babel-runtime/helpers/interop-require-wildcard */ 43)['default'];
	
	var _interopRequireDefault = __webpack_require__(/*! babel-runtime/helpers/interop-require-default */ 2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.getState = getState;
	exports.initializeState = initializeState;
	exports.removeState = removeState;
	exports.getServerData = getServerData;
	exports.setServerData = setServerData;
	exports.getPendingOps = getPendingOps;
	exports.setPendingOp = setPendingOp;
	exports.pushPendingState = pushPendingState;
	exports.popPendingState = popPendingState;
	exports.mergeFirstPendingState = mergeFirstPendingState;
	exports.getObjectCache = getObjectCache;
	exports.estimateAttribute = estimateAttribute;
	exports.estimateAttributes = estimateAttributes;
	exports.commitServerChanges = commitServerChanges;
	exports.enqueueTask = enqueueTask;
	exports.duplicateState = duplicateState;
	exports.clearAllState = clearAllState;
	
	var _ObjectStateMutations = __webpack_require__(/*! ./ObjectStateMutations */ 85);
	
	var ObjectStateMutations = _interopRequireWildcard(_ObjectStateMutations);
	
	var _TaskQueue = __webpack_require__(/*! ./TaskQueue */ 86);
	
	var _TaskQueue2 = _interopRequireDefault(_TaskQueue);
	
	var objectState = new _WeakMap();
	
	function getState(obj) {
	  var classData = objectState.get(obj);
	  return classData || null;
	}
	
	function initializeState(obj, initial) {
	  var state = getState(obj);
	  if (state) {
	    return state;
	  }
	  if (!initial) {
	    initial = {
	      serverData: {},
	      pendingOps: [{}],
	      objectCache: {},
	      tasks: new _TaskQueue2['default'](),
	      existed: false
	    };
	  }
	  state = initial;
	  objectState.set(obj, state);
	  return state;
	}
	
	function removeState(obj) {
	  var state = getState(obj);
	  if (state === null) {
	    return null;
	  }
	  objectState['delete'](obj);
	  return state;
	}
	
	function getServerData(obj) {
	  var state = getState(obj);
	  if (state) {
	    return state.serverData;
	  }
	  return {};
	}
	
	function setServerData(obj, attributes) {
	  var serverData = initializeState(obj).serverData;
	  ObjectStateMutations.setServerData(serverData, attributes);
	}
	
	function getPendingOps(obj) {
	  var state = getState(obj);
	  if (state) {
	    return state.pendingOps;
	  }
	  return [{}];
	}
	
	function setPendingOp(obj, attr, op) {
	  var pendingOps = initializeState(obj).pendingOps;
	  ObjectStateMutations.setPendingOp(pendingOps, attr, op);
	}
	
	function pushPendingState(obj) {
	  var pendingOps = initializeState(obj).pendingOps;
	  ObjectStateMutations.pushPendingState(pendingOps);
	}
	
	function popPendingState(obj) {
	  var pendingOps = initializeState(obj).pendingOps;
	  return ObjectStateMutations.popPendingState(pendingOps);
	}
	
	function mergeFirstPendingState(obj) {
	  var pendingOps = getPendingOps(obj);
	  ObjectStateMutations.mergeFirstPendingState(pendingOps);
	}
	
	function getObjectCache(obj) {
	  var state = getState(obj);
	  if (state) {
	    return state.objectCache;
	  }
	  return {};
	}
	
	function estimateAttribute(obj, attr) {
	  var serverData = getServerData(obj);
	  var pendingOps = getPendingOps(obj);
	  return ObjectStateMutations.estimateAttribute(serverData, pendingOps, obj.className, obj.id, attr);
	}
	
	function estimateAttributes(obj) {
	  var serverData = getServerData(obj);
	  var pendingOps = getPendingOps(obj);
	  return ObjectStateMutations.estimateAttributes(serverData, pendingOps, obj.className, obj.id);
	}
	
	function commitServerChanges(obj, changes) {
	  var state = initializeState(obj);
	  ObjectStateMutations.commitServerChanges(state.serverData, state.objectCache, changes);
	}
	
	function enqueueTask(obj, task) {
	  var state = initializeState(obj);
	  return state.tasks.enqueue(task);
	}
	
	function duplicateState(source, dest) {
	  var oldState = initializeState(source);
	  var newState = initializeState(dest);
	  for (var key in oldState.serverData) {
	    newState.serverData[key] = oldState.serverData[key];
	  }
	  for (var index = 0; index < oldState.pendingOps.length; index++) {
	    for (var key in oldState.pendingOps[index]) {
	      newState.pendingOps[index][key] = oldState.pendingOps[index][key];
	    }
	  }
	  for (var key in oldState.objectCache) {
	    newState.objectCache[key] = oldState.objectCache[key];
	  }
	  newState.existed = oldState.existed;
	}
	
	function clearAllState() {
	  objectState = new _WeakMap();
	}

/***/ },
/* 88 */
/*!*********************************************!*\
  !*** ./~/babel-runtime/core-js/weak-map.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/weak-map */ 89), __esModule: true };

/***/ },
/* 89 */
/*!******************************************!*\
  !*** ./~/core-js/library/fn/weak-map.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(/*! ../modules/es6.object.to-string */ 90);
	__webpack_require__(/*! ../modules/web.dom.iterable */ 51);
	__webpack_require__(/*! ../modules/es6.weak-map */ 91);
	module.exports = __webpack_require__(/*! ../modules/$.core */ 17).WeakMap;

/***/ },
/* 90 */
/*!***********************************************************!*\
  !*** ./~/core-js/library/modules/es6.object.to-string.js ***!
  \***********************************************************/
/***/ function(module, exports) {

	"use strict";

/***/ },
/* 91 */
/*!***************************************************!*\
  !*** ./~/core-js/library/modules/es6.weak-map.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $ = __webpack_require__(/*! ./$ */ 7),
	    redefine = __webpack_require__(/*! ./$.redefine */ 58),
	    weak = __webpack_require__(/*! ./$.collection-weak */ 92),
	    isObject = __webpack_require__(/*! ./$.is-object */ 36),
	    has = __webpack_require__(/*! ./$.has */ 62),
	    frozenStore = weak.frozenStore,
	    WEAK = weak.WEAK,
	    isExtensible = Object.isExtensible || isObject,
	    tmp = {};
	
	// 23.3 WeakMap Objects
	var $WeakMap = __webpack_require__(/*! ./$.collection */ 102)('WeakMap', function (get) {
	  return function WeakMap() {
	    return get(this, arguments.length > 0 ? arguments[0] : undefined);
	  };
	}, {
	  // 23.3.3.3 WeakMap.prototype.get(key)
	  get: function get(key) {
	    if (isObject(key)) {
	      if (!isExtensible(key)) return frozenStore(this).get(key);
	      if (has(key, WEAK)) return key[WEAK][this._i];
	    }
	  },
	  // 23.3.3.5 WeakMap.prototype.set(key, value)
	  set: function set(key, value) {
	    return weak.def(this, key, value);
	  }
	}, weak, true, true);
	
	// IE11 WeakMap frozen keys fix
	if (new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7) {
	  $.each.call(['delete', 'has', 'get', 'set'], function (key) {
	    var proto = $WeakMap.prototype,
	        method = proto[key];
	    redefine(proto, key, function (a, b) {
	      // store frozen objects on leaky map
	      if (isObject(a) && !isExtensible(a)) {
	        var result = frozenStore(this)[key](a, b);
	        return key == 'set' ? this : result;
	        // store all the rest on native weakmap
	      }return method.call(this, a, b);
	    });
	  });
	}

/***/ },
/* 92 */
/*!********************************************************!*\
  !*** ./~/core-js/library/modules/$.collection-weak.js ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var hide = __webpack_require__(/*! ./$.hide */ 59),
	    redefineAll = __webpack_require__(/*! ./$.redefine-all */ 93),
	    anObject = __webpack_require__(/*! ./$.an-object */ 37),
	    isObject = __webpack_require__(/*! ./$.is-object */ 36),
	    strictNew = __webpack_require__(/*! ./$.strict-new */ 94),
	    forOf = __webpack_require__(/*! ./$.for-of */ 95),
	    createArrayMethod = __webpack_require__(/*! ./$.array-methods */ 99),
	    $has = __webpack_require__(/*! ./$.has */ 62),
	    WEAK = __webpack_require__(/*! ./$.uid */ 67)('weak'),
	    isExtensible = Object.isExtensible || isObject,
	    arrayFind = createArrayMethod(5),
	    arrayFindIndex = createArrayMethod(6),
	    id = 0;
	
	// fallback for frozen keys
	var frozenStore = function frozenStore(that) {
	  return that._l || (that._l = new FrozenStore());
	};
	var FrozenStore = function FrozenStore() {
	  this.a = [];
	};
	var findFrozen = function findFrozen(store, key) {
	  return arrayFind(store.a, function (it) {
	    return it[0] === key;
	  });
	};
	FrozenStore.prototype = {
	  get: function get(key) {
	    var entry = findFrozen(this, key);
	    if (entry) return entry[1];
	  },
	  has: function has(key) {
	    return !!findFrozen(this, key);
	  },
	  set: function set(key, value) {
	    var entry = findFrozen(this, key);
	    if (entry) entry[1] = value;else this.a.push([key, value]);
	  },
	  'delete': function _delete(key) {
	    var index = arrayFindIndex(this.a, function (it) {
	      return it[0] === key;
	    });
	    if (~index) this.a.splice(index, 1);
	    return !!~index;
	  }
	};
	
	module.exports = {
	  getConstructor: function getConstructor(wrapper, NAME, IS_MAP, ADDER) {
	    var C = wrapper(function (that, iterable) {
	      strictNew(that, C, NAME);
	      that._i = id++; // collection id
	      that._l = undefined; // leak store for frozen objects
	      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.3.3.2 WeakMap.prototype.delete(key)
	      // 23.4.3.3 WeakSet.prototype.delete(value)
	      'delete': function _delete(key) {
	        if (!isObject(key)) return false;
	        if (!isExtensible(key)) return frozenStore(this)['delete'](key);
	        return $has(key, WEAK) && $has(key[WEAK], this._i) && delete key[WEAK][this._i];
	      },
	      // 23.3.3.4 WeakMap.prototype.has(key)
	      // 23.4.3.4 WeakSet.prototype.has(value)
	      has: function has(key) {
	        if (!isObject(key)) return false;
	        if (!isExtensible(key)) return frozenStore(this).has(key);
	        return $has(key, WEAK) && $has(key[WEAK], this._i);
	      }
	    });
	    return C;
	  },
	  def: function def(that, key, value) {
	    if (!isExtensible(anObject(key))) {
	      frozenStore(that).set(key, value);
	    } else {
	      $has(key, WEAK) || hide(key, WEAK, {});
	      key[WEAK][that._i] = value;
	    }return that;
	  },
	  frozenStore: frozenStore,
	  WEAK: WEAK
	};

/***/ },
/* 93 */
/*!*****************************************************!*\
  !*** ./~/core-js/library/modules/$.redefine-all.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var redefine = __webpack_require__(/*! ./$.redefine */ 58);
	module.exports = function (target, src) {
	  for (var key in src) {
	    redefine(target, key, src[key]);
	  }return target;
	};

/***/ },
/* 94 */
/*!***************************************************!*\
  !*** ./~/core-js/library/modules/$.strict-new.js ***!
  \***************************************************/
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function (it, Constructor, name) {
	  if (!(it instanceof Constructor)) throw TypeError(name + ": use the 'new' operator!");
	  return it;
	};

/***/ },
/* 95 */
/*!***********************************************!*\
  !*** ./~/core-js/library/modules/$.for-of.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var ctx = __webpack_require__(/*! ./$.ctx */ 18),
	    call = __webpack_require__(/*! ./$.iter-call */ 96),
	    isArrayIter = __webpack_require__(/*! ./$.is-array-iter */ 97),
	    anObject = __webpack_require__(/*! ./$.an-object */ 37),
	    toLength = __webpack_require__(/*! ./$.to-length */ 98),
	    getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ 72);
	module.exports = function (iterable, entries, fn, that) {
	  var iterFn = getIterFn(iterable),
	      f = ctx(fn, that, entries ? 2 : 1),
	      index = 0,
	      length,
	      step,
	      iterator;
	  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
	    entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
	    call(iterator, f, step.value, entries);
	  }
	};

/***/ },
/* 96 */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/$.iter-call.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(/*! ./$.an-object */ 37);
	module.exports = function (iterator, fn, value, entries) {
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	    // 7.4.6 IteratorClose(iterator, completion)
	  } catch (e) {
	    var ret = iterator['return'];
	    if (ret !== undefined) anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 97 */
/*!******************************************************!*\
  !*** ./~/core-js/library/modules/$.is-array-iter.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// check on default Array iterator
	var Iterators = __webpack_require__(/*! ./$.iterators */ 55),
	    ITERATOR = __webpack_require__(/*! ./$.wks */ 65)('iterator'),
	    ArrayProto = Array.prototype;
	
	module.exports = function (it) {
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 98 */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/$.to-length.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 7.1.15 ToLength
	var toInteger = __webpack_require__(/*! ./$.to-integer */ 70),
	    min = Math.min;
	module.exports = function (it) {
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 99 */
/*!******************************************************!*\
  !*** ./~/core-js/library/modules/$.array-methods.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx = __webpack_require__(/*! ./$.ctx */ 18),
	    IObject = __webpack_require__(/*! ./$.iobject */ 27),
	    toObject = __webpack_require__(/*! ./$.to-object */ 12),
	    toLength = __webpack_require__(/*! ./$.to-length */ 98),
	    asc = __webpack_require__(/*! ./$.array-species-create */ 100);
	module.exports = function (TYPE) {
	  var IS_MAP = TYPE == 1,
	      IS_FILTER = TYPE == 2,
	      IS_SOME = TYPE == 3,
	      IS_EVERY = TYPE == 4,
	      IS_FIND_INDEX = TYPE == 6,
	      NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
	  return function ($this, callbackfn, that) {
	    var O = toObject($this),
	        self = IObject(O),
	        f = ctx(callbackfn, that, 3),
	        length = toLength(self.length),
	        index = 0,
	        result = IS_MAP ? asc($this, length) : IS_FILTER ? asc($this, 0) : undefined,
	        val,
	        res;
	    for (; length > index; index++) {
	      if (NO_HOLES || index in self) {
	        val = self[index];
	        res = f(val, index, O);
	        if (TYPE) {
	          if (IS_MAP) result[index] = res; // map
	          else if (res) switch (TYPE) {
	              case 3:
	                return true; // some
	              case 5:
	                return val; // find
	              case 6:
	                return index; // findIndex
	              case 2:
	                result.push(val); // filter
	            } else if (IS_EVERY) return false; // every
	        }
	      }
	    }return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

/***/ },
/* 100 */
/*!*************************************************************!*\
  !*** ./~/core-js/library/modules/$.array-species-create.js ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var isObject = __webpack_require__(/*! ./$.is-object */ 36),
	    isArray = __webpack_require__(/*! ./$.is-array */ 101),
	    SPECIES = __webpack_require__(/*! ./$.wks */ 65)('species');
	module.exports = function (original, length) {
	  var C;
	  if (isArray(original)) {
	    C = original.constructor;
	    // cross-realm fallback
	    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
	    if (isObject(C)) {
	      C = C[SPECIES];
	      if (C === null) C = undefined;
	    }
	  }return new (C === undefined ? Array : C)(length);
	};

/***/ },
/* 101 */
/*!*************************************************!*\
  !*** ./~/core-js/library/modules/$.is-array.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(/*! ./$.cof */ 28);
	module.exports = Array.isArray || function (arg) {
	  return cof(arg) == 'Array';
	};

/***/ },
/* 102 */
/*!***************************************************!*\
  !*** ./~/core-js/library/modules/$.collection.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $ = __webpack_require__(/*! ./$ */ 7),
	    global = __webpack_require__(/*! ./$.global */ 16),
	    $export = __webpack_require__(/*! ./$.export */ 15),
	    fails = __webpack_require__(/*! ./$.fails */ 20),
	    hide = __webpack_require__(/*! ./$.hide */ 59),
	    redefineAll = __webpack_require__(/*! ./$.redefine-all */ 93),
	    forOf = __webpack_require__(/*! ./$.for-of */ 95),
	    strictNew = __webpack_require__(/*! ./$.strict-new */ 94),
	    isObject = __webpack_require__(/*! ./$.is-object */ 36),
	    setToStringTag = __webpack_require__(/*! ./$.set-to-string-tag */ 64),
	    DESCRIPTORS = __webpack_require__(/*! ./$.descriptors */ 61);
	
	module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
	  var Base = global[NAME],
	      C = Base,
	      ADDER = IS_MAP ? 'set' : 'add',
	      proto = C && C.prototype,
	      O = {};
	  if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
	    new C().entries().next();
	  }))) {
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	  } else {
	    C = wrapper(function (target, iterable) {
	      strictNew(target, C, NAME);
	      target._c = new Base();
	      if (iterable != undefined) forOf(iterable, IS_MAP, target[ADDER], target);
	    });
	    $.each.call('add,clear,delete,forEach,get,has,set,keys,values,entries'.split(','), function (KEY) {
	      var IS_ADDER = KEY == 'add' || KEY == 'set';
	      if (KEY in proto && !(IS_WEAK && KEY == 'clear')) hide(C.prototype, KEY, function (a, b) {
	        if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
	        var result = this._c[KEY](a === 0 ? 0 : a, b);
	        return IS_ADDER ? this : result;
	      });
	    });
	    if ('size' in proto) $.setDesc(C.prototype, 'size', {
	      get: function get() {
	        return this._c.size;
	      }
	    });
	  }
	
	  setToStringTag(C, NAME);
	
	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F, O);
	
	  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);
	
	  return C;
	};

/***/ },
/* 103 */
/*!************************************************!*\
  !*** ./~/parse/lib/browser/unsavedChildren.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _interopRequireDefault = __webpack_require__(/*! babel-runtime/helpers/interop-require-default */ 2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = unsavedChildren;
	
	var _ParseFile = __webpack_require__(/*! ./ParseFile */ 47);
	
	var _ParseFile2 = _interopRequireDefault(_ParseFile);
	
	var _ParseObject = __webpack_require__(/*! ./ParseObject */ 39);
	
	var _ParseObject2 = _interopRequireDefault(_ParseObject);
	
	var _ParseRelation = __webpack_require__(/*! ./ParseRelation */ 74);
	
	var _ParseRelation2 = _interopRequireDefault(_ParseRelation);
	
	/**
	 * Return an array of unsaved children, which are either Parse Objects or Files.
	 * If it encounters any dirty Objects without Ids, it will throw an exception.
	 */
	
	function unsavedChildren(obj, allowDeepUnsaved) {
	  var encountered = {
	    objects: {},
	    files: []
	  };
	  var identifier = obj.className + ':' + obj._getId();
	  encountered.objects[identifier] = obj.dirty() ? obj : true;
	  var attributes = obj.attributes;
	  for (var attr in attributes) {
	    if (_typeof(attributes[attr]) === 'object') {
	      traverse(attributes[attr], encountered, false, !!allowDeepUnsaved);
	    }
	  }
	  var unsaved = [];
	  for (var id in encountered.objects) {
	    if (id !== identifier && encountered.objects[id] !== true) {
	      unsaved.push(encountered.objects[id]);
	    }
	  }
	  return unsaved.concat(encountered.files);
	}
	
	function traverse(obj, encountered, shouldThrow, allowDeepUnsaved) {
	  if (obj instanceof _ParseObject2['default']) {
	    if (!obj.id && shouldThrow) {
	      throw new Error('Cannot create a pointer to an unsaved Object.');
	    }
	    var identifier = obj.className + ':' + obj._getId();
	    if (!encountered.objects[identifier]) {
	      encountered.objects[identifier] = obj.dirty() ? obj : true;
	      var attributes = obj.attributes;
	      for (var attr in attributes) {
	        if (_typeof(attributes[attr]) === 'object') {
	          traverse(attributes[attr], encountered, !allowDeepUnsaved, allowDeepUnsaved);
	        }
	      }
	    }
	    return;
	  }
	  if (obj instanceof _ParseFile2['default']) {
	    if (!obj.url() && encountered.files.indexOf(obj) < 0) {
	      encountered.files.push(obj);
	    }
	    return;
	  }
	  if (obj instanceof _ParseRelation2['default']) {
	    return;
	  }
	  if (Array.isArray(obj)) {
	    obj.forEach(function (el) {
	      if ((typeof el === 'undefined' ? 'undefined' : _typeof(el)) === 'object') {
	        traverse(el, encountered, shouldThrow, allowDeepUnsaved);
	      }
	    });
	  }
	  for (var k in obj) {
	    if (_typeof(obj[k]) === 'object') {
	      traverse(obj[k], encountered, shouldThrow, allowDeepUnsaved);
	    }
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 104 */
/*!******************************************!*\
  !*** ./~/parse/lib/browser/ParseUser.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _get = __webpack_require__(/*! babel-runtime/helpers/get */ 22)['default'];
	
	var _inherits = __webpack_require__(/*! babel-runtime/helpers/inherits */ 29)['default'];
	
	var _createClass = __webpack_require__(/*! babel-runtime/helpers/create-class */ 4)['default'];
	
	var _classCallCheck = __webpack_require__(/*! babel-runtime/helpers/class-call-check */ 8)['default'];
	
	var _Object$defineProperty = __webpack_require__(/*! babel-runtime/core-js/object/define-property */ 5)['default'];
	
	var _interopRequireDefault = __webpack_require__(/*! babel-runtime/helpers/interop-require-default */ 2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _CoreManager = __webpack_require__(/*! ./CoreManager */ 44);
	
	var _CoreManager2 = _interopRequireDefault(_CoreManager);
	
	var _isRevocableSession = __webpack_require__(/*! ./isRevocableSession */ 105);
	
	var _isRevocableSession2 = _interopRequireDefault(_isRevocableSession);
	
	var _ParseError = __webpack_require__(/*! ./ParseError */ 38);
	
	var _ParseError2 = _interopRequireDefault(_ParseError);
	
	var _ParseObject2 = __webpack_require__(/*! ./ParseObject */ 39);
	
	var _ParseObject3 = _interopRequireDefault(_ParseObject2);
	
	var _ParsePromise = __webpack_require__(/*! ./ParsePromise */ 48);
	
	var _ParsePromise2 = _interopRequireDefault(_ParsePromise);
	
	var _ParseSession = __webpack_require__(/*! ./ParseSession */ 106);
	
	var _ParseSession2 = _interopRequireDefault(_ParseSession);
	
	var _Storage = __webpack_require__(/*! ./Storage */ 107);
	
	var _Storage2 = _interopRequireDefault(_Storage);
	
	var CURRENT_USER_KEY = 'currentUser';
	var canUseCurrentUser = !_CoreManager2['default'].get('IS_NODE');
	var currentUserCacheMatchesDisk = false;
	var currentUserCache = null;
	
	var authProviders = {};
	
	/**
	 * @class Parse.User
	 * @constructor
	 *
	 * <p>A Parse.User object is a local representation of a user persisted to the
	 * Parse cloud. This class is a subclass of a Parse.Object, and retains the
	 * same functionality of a Parse.Object, but also extends it with various
	 * user specific methods, like authentication, signing up, and validation of
	 * uniqueness.</p>
	 */
	
	var ParseUser = function (_ParseObject) {
	  _inherits(ParseUser, _ParseObject);
	
	  function ParseUser(attributes) {
	    _classCallCheck(this, ParseUser);
	
	    _get(Object.getPrototypeOf(ParseUser.prototype), 'constructor', this).call(this, '_User');
	    if (attributes && (typeof attributes === 'undefined' ? 'undefined' : _typeof(attributes)) === 'object') {
	      if (!this.set(attributes || {})) {
	        throw new Error('Can\'t create an invalid Parse User');
	      }
	    }
	  }
	
	  /**
	   * Request a revocable session token to replace the older style of token.
	   * @method _upgradeToRevocableSession
	   * @param {Object} options A Backbone-style options object.
	   * @return {Parse.Promise} A promise that is resolved when the replacement
	   *   token has been fetched.
	   */
	
	  _createClass(ParseUser, [{
	    key: '_upgradeToRevocableSession',
	    value: function _upgradeToRevocableSession(options) {
	      options = options || {};
	
	      var upgradeOptions = {};
	      if (options.hasOwnProperty('useMasterKey')) {
	        upgradeOptions.useMasterKey = options.useMasterKey;
	      }
	
	      var controller = _CoreManager2['default'].getUserController();
	      return controller.upgradeToRevocableSession(this, upgradeOptions)._thenRunCallbacks(options);
	    }
	
	    /**
	     * Unlike in the Android/iOS SDKs, logInWith is unnecessary, since you can
	     * call linkWith on the user (even if it doesn't exist yet on the server).
	     * @method _linkWith
	     */
	  }, {
	    key: '_linkWith',
	    value: function _linkWith(provider, options) {
	      var _this = this;
	
	      var authType;
	      if (typeof provider === 'string') {
	        authType = provider;
	        provider = authProviders[provider];
	      } else {
	        authType = provider.getAuthType();
	      }
	      if (options && options.hasOwnProperty('authData')) {
	        var authData = this.get('authData') || {};
	        authData[authType] = options.authData;
	
	        var controller = _CoreManager2['default'].getUserController();
	        return controller.linkWith(this, authData)._thenRunCallbacks(options, this);
	      } else {
	        var promise = new _ParsePromise2['default']();
	        provider.authenticate({
	          success: function success(provider, result) {
	            var opts = {};
	            opts.authData = result;
	            if (options.success) {
	              opts.success = options.success;
	            }
	            if (options.error) {
	              opts.error = options.error;
	            }
	            _this._linkWith(provider, opts).then(function () {
	              promise.resolve(_this);
	            }, function (error) {
	              promise.reject(error);
	            });
	          },
	          error: function error(provider, _error) {
	            if (options.error) {
	              options.error(_this, _error);
	            }
	            promise.reject(_error);
	          }
	        });
	        return promise;
	      }
	    }
	
	    /**
	     * Synchronizes auth data for a provider (e.g. puts the access token in the
	     * right place to be used by the Facebook SDK).
	     * @method _synchronizeAuthData
	     */
	  }, {
	    key: '_synchronizeAuthData',
	    value: function _synchronizeAuthData(provider) {
	      if (!this.isCurrent() || !provider) {
	        return;
	      }
	      var authType;
	      if (typeof provider === 'string') {
	        authType = provider;
	        provider = authProviders[authType];
	      } else {
	        authType = provider.getAuthType();
	      }
	      var authData = this.get('authData');
	      if (!provider || (typeof authData === 'undefined' ? 'undefined' : _typeof(authData)) !== 'object') {
	        return;
	      }
	      var success = provider.restoreAuthentication(authData[authType]);
	      if (!success) {
	        this._unlinkFrom(provider);
	      }
	    }
	
	    /**
	     * Synchronizes authData for all providers.
	     * @method _synchronizeAllAuthData
	     */
	  }, {
	    key: '_synchronizeAllAuthData',
	    value: function _synchronizeAllAuthData() {
	      var authData = this.get('authData');
	      if ((typeof authData === 'undefined' ? 'undefined' : _typeof(authData)) !== 'object') {
	        return;
	      }
	
	      for (var key in authData) {
	        this._synchronizeAuthData(key);
	      }
	    }
	
	    /**
	     * Removes null values from authData (which exist temporarily for
	     * unlinking)
	     * @method _cleanupAuthData
	     */
	  }, {
	    key: '_cleanupAuthData',
	    value: function _cleanupAuthData() {
	      if (!this.isCurrent()) {
	        return;
	      }
	      var authData = this.get('authData');
	      if ((typeof authData === 'undefined' ? 'undefined' : _typeof(authData)) !== 'object') {
	        return;
	      }
	
	      for (var key in authData) {
	        if (!authData[key]) {
	          delete authData[key];
	        }
	      }
	    }
	
	    /**
	     * Unlinks a user from a service.
	     * @method _unlinkFrom
	     */
	  }, {
	    key: '_unlinkFrom',
	    value: function _unlinkFrom(provider, options) {
	      var _this2 = this;
	
	      var authType;
	      if (typeof provider === 'string') {
	        authType = provider;
	        provider = authProviders[provider];
	      } else {
	        authType = provider.getAuthType();
	      }
	      return this._linkWith(provider, { authData: null }).then(function () {
	        _this2._synchronizeAuthData(provider);
	        return _ParsePromise2['default'].as(_this2);
	      })._thenRunCallbacks(options);
	    }
	
	    /**
	     * Checks whether a user is linked to a service.
	     * @method _isLinked
	     */
	  }, {
	    key: '_isLinked',
	    value: function _isLinked(provider) {
	      var authType;
	      if (typeof provider === 'string') {
	        authType = provider;
	      } else {
	        authType = provider.getAuthType();
	      }
	      var authData = this.get('authData') || {};
	      return !!authData[authType];
	    }
	
	    /**
	     * Deauthenticates all providers.
	     * @method _logOutWithAll
	     */
	  }, {
	    key: '_logOutWithAll',
	    value: function _logOutWithAll() {
	      var authData = this.get('authData');
	      if ((typeof authData === 'undefined' ? 'undefined' : _typeof(authData)) !== 'object') {
	        return;
	      }
	
	      for (var key in authData) {
	        this._logOutWith(key);
	      }
	    }
	
	    /**
	     * Deauthenticates a single provider (e.g. removing access tokens from the
	     * Facebook SDK).
	     * @method _logOutWith
	     */
	  }, {
	    key: '_logOutWith',
	    value: function _logOutWith(provider) {
	      if (!this.isCurrent()) {
	        return;
	      }
	      if (typeof provider === 'string') {
	        provider = authProviders[provider];
	      }
	      if (provider && provider.deauthenticate) {
	        provider.deauthenticate();
	      }
	    }
	
	    /**
	     * Class instance method used to maintain specific keys when a fetch occurs.
	     * Used to ensure that the session token is not lost.
	     */
	  }, {
	    key: '_preserveFieldsOnFetch',
	    value: function _preserveFieldsOnFetch() {
	      return {
	        sessionToken: this.get('sessionToken')
	      };
	    }
	
	    /**
	     * Returns true if <code>current</code> would return this user.
	     * @method isCurrent
	     * @return {Boolean}
	     */
	  }, {
	    key: 'isCurrent',
	    value: function isCurrent() {
	      var current = ParseUser.current();
	      return !!current && current.id === this.id;
	    }
	
	    /**
	     * Returns get("username").
	     * @method getUsername
	     * @return {String}
	     */
	  }, {
	    key: 'getUsername',
	    value: function getUsername() {
	      return this.get('username');
	    }
	
	    /**
	     * Calls set("username", username, options) and returns the result.
	     * @method setUsername
	     * @param {String} username
	     * @param {Object} options A Backbone-style options object.
	     * @return {Boolean}
	     */
	  }, {
	    key: 'setUsername',
	    value: function setUsername(username) {
	      // Strip anonymity, even we do not support anonymous user in js SDK, we may
	      // encounter anonymous user created by android/iOS in cloud code.
	      var authData = this.get('authData');
	      if (authData && authData.hasOwnProperty('anonymous')) {
	        // We need to set anonymous to null instead of deleting it in order to remove it from Parse.
	        authData.anonymous = null;
	      }
	      this.set('username', username);
	    }
	
	    /**
	     * Calls set("password", password, options) and returns the result.
	     * @method setPassword
	     * @param {String} password
	     * @param {Object} options A Backbone-style options object.
	     * @return {Boolean}
	     */
	  }, {
	    key: 'setPassword',
	    value: function setPassword(password) {
	      this.set('password', password);
	    }
	
	    /**
	     * Returns get("email").
	     * @method getEmail
	     * @return {String}
	     */
	  }, {
	    key: 'getEmail',
	    value: function getEmail() {
	      return this.get('email');
	    }
	
	    /**
	     * Calls set("email", email, options) and returns the result.
	     * @method setEmail
	     * @param {String} email
	     * @param {Object} options A Backbone-style options object.
	     * @return {Boolean}
	     */
	  }, {
	    key: 'setEmail',
	    value: function setEmail(email) {
	      this.set('email', email);
	    }
	
	    /**
	     * Returns the session token for this user, if the user has been logged in,
	     * or if it is the result of a query with the master key. Otherwise, returns
	     * undefined.
	     * @method getSessionToken
	     * @return {String} the session token, or undefined
	     */
	  }, {
	    key: 'getSessionToken',
	    value: function getSessionToken() {
	      return this.get('sessionToken');
	    }
	
	    /**
	     * Checks whether this user is the current user and has been authenticated.
	     * @method authenticated
	     * @return (Boolean) whether this user is the current user and is logged in.
	     */
	  }, {
	    key: 'authenticated',
	    value: function authenticated() {
	      var current = ParseUser.current();
	      return !!this.get('sessionToken') && !!current && current.id === this.id;
	    }
	
	    /**
	     * Signs up a new user. You should call this instead of save for
	     * new Parse.Users. This will create a new Parse.User on the server, and
	     * also persist the session on disk so that you can access the user using
	     * <code>current</code>.
	     *
	     * <p>A username and password must be set before calling signUp.</p>
	     *
	     * <p>Calls options.success or options.error on completion.</p>
	     *
	     * @method signUp
	     * @param {Object} attrs Extra fields to set on the new user, or null.
	     * @param {Object} options A Backbone-style options object.
	     * @return {Parse.Promise} A promise that is fulfilled when the signup
	     *     finishes.
	     */
	  }, {
	    key: 'signUp',
	    value: function signUp(attrs, options) {
	      options = options || {};
	
	      var signupOptions = {};
	      if (options.hasOwnProperty('useMasterKey')) {
	        signupOptions.useMasterKey = options.useMasterKey;
	      }
	      if (options.hasOwnProperty('installationId')) {
	        signupOptions.installationId = options.installationId;
	      }
	
	      var controller = _CoreManager2['default'].getUserController();
	      return controller.signUp(this, attrs, signupOptions)._thenRunCallbacks(options, this);
	    }
	
	    /**
	     * Logs in a Parse.User. On success, this saves the session to disk,
	     * so you can retrieve the currently logged in user using
	     * <code>current</code>.
	     *
	     * <p>A username and password must be set before calling logIn.</p>
	     *
	     * <p>Calls options.success or options.error on completion.</p>
	     *
	     * @method logIn
	     * @param {Object} options A Backbone-style options object.
	     * @return {Parse.Promise} A promise that is fulfilled with the user when
	     *     the login is complete.
	     */
	  }, {
	    key: 'logIn',
	    value: function logIn(options) {
	      options = options || {};
	
	      var loginOptions = {};
	      if (options.hasOwnProperty('useMasterKey')) {
	        loginOptions.useMasterKey = options.useMasterKey;
	      }
	      if (options.hasOwnProperty('installationId')) {
	        loginOptions.installationId = options.installationId;
	      }
	
	      var controller = _CoreManager2['default'].getUserController();
	      return controller.logIn(this, loginOptions)._thenRunCallbacks(options, this);
	    }
	
	    /**
	     * Wrap the default save behavior with functionality to save to local
	     * storage if this is current user.
	     */
	  }, {
	    key: 'save',
	    value: function save() {
	      var _this3 = this;
	
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }
	
	      return _get(Object.getPrototypeOf(ParseUser.prototype), 'save', this).apply(this, args).then(function () {
	        if (_this3.isCurrent()) {
	          return _CoreManager2['default'].getUserController().updateUserOnDisk(_this3);
	        }
	        return _this3;
	      });
	    }
	
	    /**
	     * Wrap the default destroy behavior with functionality that logs out
	     * the current user when it is destroyed
	     */
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      var _this4 = this;
	
	      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        args[_key2] = arguments[_key2];
	      }
	
	      return _get(Object.getPrototypeOf(ParseUser.prototype), 'destroy', this).apply(this, args).then(function () {
	        if (_this4.isCurrent()) {
	          return _CoreManager2['default'].getUserController().removeUserFromDisk();
	        }
	        return _this4;
	      });
	    }
	
	    /**
	     * Wrap the default fetch behavior with functionality to save to local
	     * storage if this is current user.
	     */
	  }, {
	    key: 'fetch',
	    value: function fetch() {
	      var _this5 = this;
	
	      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	        args[_key3] = arguments[_key3];
	      }
	
	      return _get(Object.getPrototypeOf(ParseUser.prototype), 'fetch', this).apply(this, args).then(function () {
	        if (_this5.isCurrent()) {
	          return _CoreManager2['default'].getUserController().updateUserOnDisk(_this5);
	        }
	        return _this5;
	      });
	    }
	  }], [{
	    key: 'readOnlyAttributes',
	    value: function readOnlyAttributes() {
	      return ['sessionToken'];
	    }
	
	    /**
	     * Adds functionality to the existing Parse.User class
	     * @method extend
	     * @param {Object} protoProps A set of properties to add to the prototype
	     * @param {Object} classProps A set of static properties to add to the class
	     * @static
	     * @return {Class} The newly extended Parse.User class
	     */
	  }, {
	    key: 'extend',
	    value: function extend(protoProps, classProps) {
	      if (protoProps) {
	        for (var prop in protoProps) {
	          if (prop !== 'className') {
	            _Object$defineProperty(ParseUser.prototype, prop, {
	              value: protoProps[prop],
	              enumerable: false,
	              writable: true,
	              configurable: true
	            });
	          }
	        }
	      }
	
	      if (classProps) {
	        for (var prop in classProps) {
	          if (prop !== 'className') {
	            _Object$defineProperty(ParseUser, prop, {
	              value: classProps[prop],
	              enumerable: false,
	              writable: true,
	              configurable: true
	            });
	          }
	        }
	      }
	
	      return ParseUser;
	    }
	
	    /**
	     * Retrieves the currently logged in ParseUser with a valid session,
	     * either from memory or localStorage, if necessary.
	     * @method current
	     * @static
	     * @return {Parse.Object} The currently logged in Parse.User.
	     */
	  }, {
	    key: 'current',
	    value: function current() {
	      if (!canUseCurrentUser) {
	        return null;
	      }
	      var controller = _CoreManager2['default'].getUserController();
	      return controller.currentUser();
	    }
	
	    /**
	     * Retrieves the currently logged in ParseUser from asynchronous Storage.
	     * @method currentAsync
	     * @static
	     * @return {Parse.Promise} A Promise that is resolved with the currently
	     *   logged in Parse User
	     */
	  }, {
	    key: 'currentAsync',
	    value: function currentAsync() {
	      if (!canUseCurrentUser) {
	        return _ParsePromise2['default'].as(null);
	      }
	      var controller = _CoreManager2['default'].getUserController();
	      return controller.currentUserAsync();
	    }
	
	    /**
	     * Signs up a new user with a username (or email) and password.
	     * This will create a new Parse.User on the server, and also persist the
	     * session in localStorage so that you can access the user using
	     * {@link #current}.
	     *
	     * <p>Calls options.success or options.error on completion.</p>
	     *
	     * @method signUp
	     * @param {String} username The username (or email) to sign up with.
	     * @param {String} password The password to sign up with.
	     * @param {Object} attrs Extra fields to set on the new user.
	     * @param {Object} options A Backbone-style options object.
	     * @static
	     * @return {Parse.Promise} A promise that is fulfilled with the user when
	     *     the signup completes.
	     */
	  }, {
	    key: 'signUp',
	    value: function signUp(username, password, attrs, options) {
	      attrs = attrs || {};
	      attrs.username = username;
	      attrs.password = password;
	      var user = new ParseUser(attrs);
	      return user.signUp({}, options);
	    }
	
	    /**
	     * Logs in a user with a username (or email) and password. On success, this
	     * saves the session to disk, so you can retrieve the currently logged in
	     * user using <code>current</code>.
	     *
	     * <p>Calls options.success or options.error on completion.</p>
	     *
	     * @method logIn
	     * @param {String} username The username (or email) to log in with.
	     * @param {String} password The password to log in with.
	     * @param {Object} options A Backbone-style options object.
	     * @static
	     * @return {Parse.Promise} A promise that is fulfilled with the user when
	     *     the login completes.
	     */
	  }, {
	    key: 'logIn',
	    value: function logIn(username, password, options) {
	      if (typeof username !== 'string') {
	        return _ParsePromise2['default'].error(new _ParseError2['default'](_ParseError2['default'].OTHER_CAUSE, 'Username must be a string.'));
	      } else if (typeof password !== 'string') {
	        return _ParsePromise2['default'].error(new _ParseError2['default'](_ParseError2['default'].OTHER_CAUSE, 'Password must be a string.'));
	      }
	      var user = new ParseUser();
	      user._finishFetch({ username: username, password: password });
	      return user.logIn(options);
	    }
	
	    /**
	     * Logs in a user with a session token. On success, this saves the session
	     * to disk, so you can retrieve the currently logged in user using
	     * <code>current</code>.
	     *
	     * <p>Calls options.success or options.error on completion.</p>
	     *
	     * @method become
	     * @param {String} sessionToken The sessionToken to log in with.
	     * @param {Object} options A Backbone-style options object.
	     * @static
	     * @return {Parse.Promise} A promise that is fulfilled with the user when
	     *     the login completes.
	     */
	  }, {
	    key: 'become',
	    value: function become(sessionToken, options) {
	      if (!canUseCurrentUser) {
	        throw new Error('It is not memory-safe to become a user in a server environment');
	      }
	      options = options || {};
	
	      var becomeOptions = {
	        sessionToken: sessionToken
	      };
	      if (options.hasOwnProperty('useMasterKey')) {
	        becomeOptions.useMasterKey = options.useMasterKey;
	      }
	
	      var controller = _CoreManager2['default'].getUserController();
	      return controller.become(becomeOptions)._thenRunCallbacks(options);
	    }
	  }, {
	    key: 'logInWith',
	    value: function logInWith(provider, options) {
	      return ParseUser._logInWith(provider, options);
	    }
	
	    /**
	     * Logs out the currently logged in user session. This will remove the
	     * session from disk, log out of linked services, and future calls to
	     * <code>current</code> will return <code>null</code>.
	     * @method logOut
	     * @static
	     * @return {Parse.Promise} A promise that is resolved when the session is
	     *   destroyed on the server.
	     */
	  }, {
	    key: 'logOut',
	    value: function logOut() {
	      if (!canUseCurrentUser) {
	        throw new Error('There is no current user user on a node.js server environment.');
	      }
	
	      var controller = _CoreManager2['default'].getUserController();
	      return controller.logOut();
	    }
	
	    /**
	     * Requests a password reset email to be sent to the specified email address
	     * associated with the user account. This email allows the user to securely
	     * reset their password on the Parse site.
	     *
	     * <p>Calls options.success or options.error on completion.</p>
	     *
	     * @method requestPasswordReset
	     * @param {String} email The email address associated with the user that
	     *     forgot their password.
	     * @param {Object} options A Backbone-style options object.
	     * @static
	     */
	  }, {
	    key: 'requestPasswordReset',
	    value: function requestPasswordReset(email, options) {
	      options = options || {};
	
	      var requestOptions = {};
	      if (options.hasOwnProperty('useMasterKey')) {
	        requestOptions.useMasterKey = options.useMasterKey;
	      }
	
	      var controller = _CoreManager2['default'].getUserController();
	      return controller.requestPasswordReset(email, requestOptions)._thenRunCallbacks(options);
	    }
	
	    /**
	     * Allow someone to define a custom User class without className
	     * being rewritten to _User. The default behavior is to rewrite
	     * User to _User for legacy reasons. This allows developers to
	     * override that behavior.
	     *
	     * @method allowCustomUserClass
	     * @param {Boolean} isAllowed Whether or not to allow custom User class
	     * @static
	     */
	  }, {
	    key: 'allowCustomUserClass',
	    value: function allowCustomUserClass(isAllowed) {
	      _CoreManager2['default'].set('PERFORM_USER_REWRITE', !isAllowed);
	    }
	
	    /**
	     * Allows a legacy application to start using revocable sessions. If the
	     * current session token is not revocable, a request will be made for a new,
	     * revocable session.
	     * It is not necessary to call this method from cloud code unless you are
	     * handling user signup or login from the server side. In a cloud code call,
	     * this function will not attempt to upgrade the current token.
	     * @method enableRevocableSession
	     * @param {Object} options A Backbone-style options object.
	     * @static
	     * @return {Parse.Promise} A promise that is resolved when the process has
	     *   completed. If a replacement session token is requested, the promise
	     *   will be resolved after a new token has been fetched.
	     */
	  }, {
	    key: 'enableRevocableSession',
	    value: function enableRevocableSession(options) {
	      options = options || {};
	      _CoreManager2['default'].set('FORCE_REVOCABLE_SESSION', true);
	      if (canUseCurrentUser) {
	        var current = ParseUser.current();
	        if (current) {
	          return current._upgradeToRevocableSession(options);
	        }
	      }
	      return _ParsePromise2['default'].as()._thenRunCallbacks(options);
	    }
	
	    /**
	     * Enables the use of become or the current user in a server
	     * environment. These features are disabled by default, since they depend on
	     * global objects that are not memory-safe for most servers.
	     * @method enableUnsafeCurrentUser
	     * @static
	     */
	  }, {
	    key: 'enableUnsafeCurrentUser',
	    value: function enableUnsafeCurrentUser() {
	      canUseCurrentUser = true;
	    }
	
	    /**
	     * Disables the use of become or the current user in any environment.
	     * These features are disabled on servers by default, since they depend on
	     * global objects that are not memory-safe for most servers.
	     * @method disableUnsafeCurrentUser
	     * @static
	     */
	  }, {
	    key: 'disableUnsafeCurrentUser',
	    value: function disableUnsafeCurrentUser() {
	      canUseCurrentUser = false;
	    }
	  }, {
	    key: '_registerAuthenticationProvider',
	    value: function _registerAuthenticationProvider(provider) {
	      authProviders[provider.getAuthType()] = provider;
	      // Synchronize the current user with the auth provider.
	      ParseUser.currentAsync().then(function (current) {
	        if (current) {
	          current._synchronizeAuthData(provider.getAuthType());
	        }
	      });
	    }
	  }, {
	    key: '_logInWith',
	    value: function _logInWith(provider, options) {
	      var user = new ParseUser();
	      return user._linkWith(provider, options);
	    }
	  }, {
	    key: '_clearCache',
	    value: function _clearCache() {
	      currentUserCache = null;
	      currentUserCacheMatchesDisk = false;
	    }
	  }, {
	    key: '_setCurrentUserCache',
	    value: function _setCurrentUserCache(user) {
	      currentUserCache = user;
	    }
	  }]);
	
	  return ParseUser;
	}(_ParseObject3['default']);
	
	exports['default'] = ParseUser;
	
	_ParseObject3['default'].registerSubclass('_User', ParseUser);
	
	var DefaultController = {
	  updateUserOnDisk: function updateUserOnDisk(user) {
	    var path = _Storage2['default'].generatePath(CURRENT_USER_KEY);
	    var json = user.toJSON();
	    json.className = '_User';
	    return _Storage2['default'].setItemAsync(path, JSON.stringify(json)).then(function () {
	      return user;
	    });
	  },
	
	  removeUserFromDisk: function removeUserFromDisk() {
	    var path = _Storage2['default'].generatePath(CURRENT_USER_KEY);
	    currentUserCacheMatchesDisk = true;
	    currentUserCache = null;
	    return _Storage2['default'].removeItemAsync(path);
	  },
	
	  setCurrentUser: function setCurrentUser(user) {
	    currentUserCache = user;
	    user._cleanupAuthData();
	    user._synchronizeAllAuthData();
	    return DefaultController.updateUserOnDisk(user);
	  },
	
	  currentUser: function currentUser() {
	    if (currentUserCache) {
	      return currentUserCache;
	    }
	    if (currentUserCacheMatchesDisk) {
	      return null;
	    }
	    if (_Storage2['default'].async()) {
	      throw new Error('Cannot call currentUser() when using a platform with an async ' + 'storage system. Call currentUserAsync() instead.');
	    }
	    var path = _Storage2['default'].generatePath(CURRENT_USER_KEY);
	    var userData = _Storage2['default'].getItem(path);
	    currentUserCacheMatchesDisk = true;
	    if (!userData) {
	      currentUserCache = null;
	      return null;
	    }
	    userData = JSON.parse(userData);
	    if (!userData.className) {
	      userData.className = '_User';
	    }
	    if (userData._id) {
	      if (userData.objectId !== userData._id) {
	        userData.objectId = userData._id;
	      }
	      delete userData._id;
	    }
	    if (userData._sessionToken) {
	      userData.sessionToken = userData._sessionToken;
	      delete userData._sessionToken;
	    }
	    var current = _ParseObject3['default'].fromJSON(userData);
	    currentUserCache = current;
	    current._synchronizeAllAuthData();
	    return current;
	  },
	
	  currentUserAsync: function currentUserAsync() {
	    if (currentUserCache) {
	      return _ParsePromise2['default'].as(currentUserCache);
	    }
	    if (currentUserCacheMatchesDisk) {
	      return _ParsePromise2['default'].as(null);
	    }
	    var path = _Storage2['default'].generatePath(CURRENT_USER_KEY);
	    return _Storage2['default'].getItemAsync(path).then(function (userData) {
	      currentUserCacheMatchesDisk = true;
	      if (!userData) {
	        currentUserCache = null;
	        return _ParsePromise2['default'].as(null);
	      }
	      userData = JSON.parse(userData);
	      if (!userData.className) {
	        userData.className = '_User';
	      }
	      if (userData._id) {
	        if (userData.objectId !== userData._id) {
	          userData.objectId = userData._id;
	        }
	        delete userData._id;
	      }
	      if (userData._sessionToken) {
	        userData.sessionToken = userData._sessionToken;
	        delete userData._sessionToken;
	      }
	      var current = _ParseObject3['default'].fromJSON(userData);
	      currentUserCache = current;
	      current._synchronizeAllAuthData();
	      return _ParsePromise2['default'].as(current);
	    });
	  },
	
	  signUp: function signUp(user, attrs, options) {
	    var username = attrs && attrs.username || user.get('username');
	    var password = attrs && attrs.password || user.get('password');
	
	    if (!username || !username.length) {
	      return _ParsePromise2['default'].error(new _ParseError2['default'](_ParseError2['default'].OTHER_CAUSE, 'Cannot sign up user with an empty name.'));
	    }
	    if (!password || !password.length) {
	      return _ParsePromise2['default'].error(new _ParseError2['default'](_ParseError2['default'].OTHER_CAUSE, 'Cannot sign up user with an empty password.'));
	    }
	
	    return user.save(attrs, options).then(function () {
	      // Clear the password field
	      user._finishFetch({ password: undefined });
	
	      if (canUseCurrentUser) {
	        return DefaultController.setCurrentUser(user);
	      }
	      return user;
	    });
	  },
	
	  logIn: function logIn(user, options) {
	    var RESTController = _CoreManager2['default'].getRESTController();
	    var stateController = _CoreManager2['default'].getObjectStateController();
	    var auth = {
	      username: user.get('username'),
	      password: user.get('password')
	    };
	    return RESTController.request('GET', 'login', auth, options).then(function (response, status) {
	      user._migrateId(response.objectId);
	      user._setExisted(true);
	      stateController.setPendingOp(user._getStateIdentifier(), 'username', undefined);
	      stateController.setPendingOp(user._getStateIdentifier(), 'password', undefined);
	      response.password = undefined;
	      user._finishFetch(response);
	      if (!canUseCurrentUser) {
	        // We can't set the current user, so just return the one we logged in
	        return _ParsePromise2['default'].as(user);
	      }
	      return DefaultController.setCurrentUser(user);
	    });
	  },
	
	  become: function become(options) {
	    var user = new ParseUser();
	    var RESTController = _CoreManager2['default'].getRESTController();
	    return RESTController.request('GET', 'users/me', {}, options).then(function (response, status) {
	      user._finishFetch(response);
	      user._setExisted(true);
	      return DefaultController.setCurrentUser(user);
	    });
	  },
	
	  logOut: function logOut() {
	    return DefaultController.currentUserAsync().then(function (currentUser) {
	      var path = _Storage2['default'].generatePath(CURRENT_USER_KEY);
	      var promise = _Storage2['default'].removeItemAsync(path);
	      var RESTController = _CoreManager2['default'].getRESTController();
	      if (currentUser !== null) {
	        var currentSession = currentUser.getSessionToken();
	        if (currentSession && (0, _isRevocableSession2['default'])(currentSession)) {
	          promise = promise.then(function () {
	            return RESTController.request('POST', 'logout', {}, { sessionToken: currentSession });
	          });
	        }
	        currentUser._logOutWithAll();
	        currentUser._finishFetch({ sessionToken: undefined });
	      }
	      currentUserCacheMatchesDisk = true;
	      currentUserCache = null;
	
	      return promise;
	    });
	  },
	
	  requestPasswordReset: function requestPasswordReset(email, options) {
	    var RESTController = _CoreManager2['default'].getRESTController();
	    return RESTController.request('POST', 'requestPasswordReset', { email: email }, options);
	  },
	
	  upgradeToRevocableSession: function upgradeToRevocableSession(user, options) {
	    var token = user.getSessionToken();
	    if (!token) {
	      return _ParsePromise2['default'].error(new _ParseError2['default'](_ParseError2['default'].SESSION_MISSING, 'Cannot upgrade a user with no session token'));
	    }
	
	    options.sessionToken = token;
	
	    var RESTController = _CoreManager2['default'].getRESTController();
	    return RESTController.request('POST', 'upgradeToRevocableSession', {}, options).then(function (result) {
	      var session = new _ParseSession2['default']();
	      session._finishFetch(result);
	      user._finishFetch({ sessionToken: session.getSessionToken() });
	      if (user.isCurrent()) {
	        return DefaultController.setCurrentUser(user);
	      }
	      return _ParsePromise2['default'].as(user);
	    });
	  },
	
	  linkWith: function linkWith(user, authData) {
	    return user.save({ authData: authData }).then(function () {
	      if (canUseCurrentUser) {
	        return DefaultController.setCurrentUser(user);
	      }
	      return user;
	    });
	  }
	};
	
	_CoreManager2['default'].setUserController(DefaultController);
	module.exports = exports['default'];

/***/ },
/* 105 */
/*!***************************************************!*\
  !*** ./~/parse/lib/browser/isRevocableSession.js ***!
  \***************************************************/
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = isRevocableSession;
	
	function isRevocableSession(token) {
	  return token.indexOf('r:') > -1;
	}
	
	module.exports = exports['default'];

/***/ },
/* 106 */
/*!*********************************************!*\
  !*** ./~/parse/lib/browser/ParseSession.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	/**
	 * @class Parse.Session
	 * @constructor
	 *
	 * <p>A Parse.Session object is a local representation of a revocable session.
	 * This class is a subclass of a Parse.Object, and retains the same
	 * functionality of a Parse.Object.</p>
	 */
	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _get = __webpack_require__(/*! babel-runtime/helpers/get */ 22)['default'];
	
	var _inherits = __webpack_require__(/*! babel-runtime/helpers/inherits */ 29)['default'];
	
	var _createClass = __webpack_require__(/*! babel-runtime/helpers/create-class */ 4)['default'];
	
	var _classCallCheck = __webpack_require__(/*! babel-runtime/helpers/class-call-check */ 8)['default'];
	
	var _interopRequireDefault = __webpack_require__(/*! babel-runtime/helpers/interop-require-default */ 2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _CoreManager = __webpack_require__(/*! ./CoreManager */ 44);
	
	var _CoreManager2 = _interopRequireDefault(_CoreManager);
	
	var _isRevocableSession = __webpack_require__(/*! ./isRevocableSession */ 105);
	
	var _isRevocableSession2 = _interopRequireDefault(_isRevocableSession);
	
	var _ParseObject2 = __webpack_require__(/*! ./ParseObject */ 39);
	
	var _ParseObject3 = _interopRequireDefault(_ParseObject2);
	
	var _ParsePromise = __webpack_require__(/*! ./ParsePromise */ 48);
	
	var _ParsePromise2 = _interopRequireDefault(_ParsePromise);
	
	var _ParseUser = __webpack_require__(/*! ./ParseUser */ 104);
	
	var _ParseUser2 = _interopRequireDefault(_ParseUser);
	
	var ParseSession = function (_ParseObject) {
	  _inherits(ParseSession, _ParseObject);
	
	  function ParseSession(attributes) {
	    _classCallCheck(this, ParseSession);
	
	    _get(Object.getPrototypeOf(ParseSession.prototype), 'constructor', this).call(this, '_Session');
	    if (attributes && (typeof attributes === 'undefined' ? 'undefined' : _typeof(attributes)) === 'object') {
	      if (!this.set(attributes || {})) {
	        throw new Error('Can\'t create an invalid Session');
	      }
	    }
	  }
	
	  /**
	   * Returns the session token string.
	   * @method getSessionToken
	   * @return {String}
	   */
	
	  _createClass(ParseSession, [{
	    key: 'getSessionToken',
	    value: function getSessionToken() {
	      return this.get('sessionToken');
	    }
	  }], [{
	    key: 'readOnlyAttributes',
	    value: function readOnlyAttributes() {
	      return ['createdWith', 'expiresAt', 'installationId', 'restricted', 'sessionToken', 'user'];
	    }
	
	    /**
	     * Retrieves the Session object for the currently logged in session.
	     * @method current
	     * @static
	     * @return {Parse.Promise} A promise that is resolved with the Parse.Session
	     *   object after it has been fetched. If there is no current user, the
	     *   promise will be rejected.
	     */
	  }, {
	    key: 'current',
	    value: function current(options) {
	      options = options || {};
	      var controller = _CoreManager2['default'].getSessionController();
	
	      var sessionOptions = {};
	      if (options.hasOwnProperty('useMasterKey')) {
	        sessionOptions.useMasterKey = options.useMasterKey;
	      }
	      return _ParseUser2['default'].currentAsync().then(function (user) {
	        if (!user) {
	          return _ParsePromise2['default'].error('There is no current user.');
	        }
	        var token = user.getSessionToken();
	        sessionOptions.sessionToken = user.getSessionToken();
	        return controller.getSession(sessionOptions);
	      });
	    }
	
	    /**
	     * Determines whether the current session token is revocable.
	     * This method is useful for migrating Express.js or Node.js web apps to
	     * use revocable sessions. If you are migrating an app that uses the Parse
	     * SDK in the browser only, please use Parse.User.enableRevocableSession()
	     * instead, so that sessions can be automatically upgraded.
	     * @method isCurrentSessionRevocable
	     * @static
	     * @return {Boolean}
	     */
	  }, {
	    key: 'isCurrentSessionRevocable',
	    value: function isCurrentSessionRevocable() {
	      var currentUser = _ParseUser2['default'].current();
	      if (currentUser) {
	        return (0, _isRevocableSession2['default'])(currentUser.getSessionToken() || '');
	      }
	      return false;
	    }
	  }]);
	
	  return ParseSession;
	}(_ParseObject3['default']);
	
	exports['default'] = ParseSession;
	
	_ParseObject3['default'].registerSubclass('_Session', ParseSession);
	
	_CoreManager2['default'].setSessionController({
	  getSession: function getSession(options) {
	    var RESTController = _CoreManager2['default'].getRESTController();
	    var session = new ParseSession();
	
	    return RESTController.request('GET', 'sessions/me', {}, options).then(function (sessionData) {
	      session._finishFetch(sessionData);
	      session._setExisted(true);
	      return session;
	    });
	  }
	});
	module.exports = exports['default'];

/***/ },
/* 107 */
/*!****************************************!*\
  !*** ./~/parse/lib/browser/Storage.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	'use strict';
	
	var _interopRequireDefault = __webpack_require__(/*! babel-runtime/helpers/interop-require-default */ 2)['default'];
	
	var _CoreManager = __webpack_require__(/*! ./CoreManager */ 44);
	
	var _CoreManager2 = _interopRequireDefault(_CoreManager);
	
	var _ParsePromise = __webpack_require__(/*! ./ParsePromise */ 48);
	
	var _ParsePromise2 = _interopRequireDefault(_ParsePromise);
	
	module.exports = {
	  async: function async() {
	    var controller = _CoreManager2['default'].getStorageController();
	    return !!controller.async;
	  },
	
	  getItem: function getItem(path) {
	    var controller = _CoreManager2['default'].getStorageController();
	    if (controller.async === 1) {
	      throw new Error('Synchronous storage is not supported by the current storage controller');
	    }
	    return controller.getItem(path);
	  },
	
	  getItemAsync: function getItemAsync(path) {
	    var controller = _CoreManager2['default'].getStorageController();
	    if (controller.async === 1) {
	      return controller.getItemAsync(path);
	    }
	    return _ParsePromise2['default'].as(controller.getItem(path));
	  },
	
	  setItem: function setItem(path, value) {
	    var controller = _CoreManager2['default'].getStorageController();
	    if (controller.async === 1) {
	      throw new Error('Synchronous storage is not supported by the current storage controller');
	    }
	    return controller.setItem(path, value);
	  },
	
	  setItemAsync: function setItemAsync(path, value) {
	    var controller = _CoreManager2['default'].getStorageController();
	    if (controller.async === 1) {
	      return controller.setItemAsync(path, value);
	    }
	    return _ParsePromise2['default'].as(controller.setItem(path, value));
	  },
	
	  removeItem: function removeItem(path) {
	    var controller = _CoreManager2['default'].getStorageController();
	    if (controller.async === 1) {
	      throw new Error('Synchronous storage is not supported by the current storage controller');
	    }
	    return controller.removeItem(path);
	  },
	
	  removeItemAsync: function removeItemAsync(path) {
	    var controller = _CoreManager2['default'].getStorageController();
	    if (controller.async === 1) {
	      return controller.removeItemAsync(path);
	    }
	    return _ParsePromise2['default'].as(controller.removeItem(path));
	  },
	
	  generatePath: function generatePath(path) {
	    if (!_CoreManager2['default'].get('APPLICATION_ID')) {
	      throw new Error('You need to call Parse.initialize before using Parse.');
	    }
	    if (typeof path !== 'string') {
	      throw new Error('Tried to get a Storage path that was not a String.');
	    }
	    if (path[0] === '/') {
	      path = path.substr(1);
	    }
	    return 'Parse/' + _CoreManager2['default'].get('APPLICATION_ID') + '/' + path;
	  },
	
	  _clear: function _clear() {
	    var controller = _CoreManager2['default'].getStorageController();
	    if (controller.hasOwnProperty('clear')) {
	      controller.clear();
	    }
	  }
	};
	
	_CoreManager2['default'].setStorageController(__webpack_require__(/*! ./StorageController.browser */ 108));

/***/ },
/* 108 */
/*!**********************************************************!*\
  !*** ./~/parse/lib/browser/StorageController.browser.js ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	'use strict';
	
	var _interopRequireDefault = __webpack_require__(/*! babel-runtime/helpers/interop-require-default */ 2)['default'];
	
	var _ParsePromise = __webpack_require__(/*! ./ParsePromise */ 48);
	
	var _ParsePromise2 = _interopRequireDefault(_ParsePromise);
	
	module.exports = {
	  async: 0,
	
	  getItem: function getItem(path) {
	    return localStorage.getItem(path);
	  },
	
	  setItem: function setItem(path, value) {
	    try {
	      localStorage.setItem(path, value);
	    } catch (e) {
	      // Quota exceeded, possibly due to Safari Private Browsing mode
	    }
	  },
	
	  removeItem: function removeItem(path) {
	    localStorage.removeItem(path);
	  },
	
	  clear: function clear() {
	    localStorage.clear();
	  }
	};

/***/ },
/* 109 */
/*!*******************************************************!*\
  !*** ./~/parse/lib/browser/InstallationController.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	'use strict';
	
	var _interopRequireDefault = __webpack_require__(/*! babel-runtime/helpers/interop-require-default */ 2)['default'];
	
	var _CoreManager = __webpack_require__(/*! ./CoreManager */ 44);
	
	var _CoreManager2 = _interopRequireDefault(_CoreManager);
	
	var _ParsePromise = __webpack_require__(/*! ./ParsePromise */ 48);
	
	var _ParsePromise2 = _interopRequireDefault(_ParsePromise);
	
	var _Storage = __webpack_require__(/*! ./Storage */ 107);
	
	var _Storage2 = _interopRequireDefault(_Storage);
	
	var iidCache = null;
	
	function hexOctet() {
	  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	}
	
	function generateId() {
	  return hexOctet() + hexOctet() + '-' + hexOctet() + '-' + hexOctet() + '-' + hexOctet() + '-' + hexOctet() + hexOctet() + hexOctet();
	}
	
	module.exports = {
	  currentInstallationId: function currentInstallationId() {
	    if (typeof iidCache === 'string') {
	      return _ParsePromise2['default'].as(iidCache);
	    }
	    var path = _Storage2['default'].generatePath('installationId');
	    return _Storage2['default'].getItemAsync(path).then(function (iid) {
	      if (!iid) {
	        iid = generateId();
	        return _Storage2['default'].setItemAsync(path, iid).then(function () {
	          iidCache = iid;
	          return iid;
	        });
	      }
	      iidCache = iid;
	      return iid;
	    });
	  },
	
	  _clearCache: function _clearCache() {
	    iidCache = null;
	  },
	
	  _setInstallationIdCache: function _setInstallationIdCache(iid) {
	    iidCache = iid;
	  }
	};

/***/ },
/* 110 */
/*!***********************************************!*\
  !*** ./~/parse/lib/browser/RESTController.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _interopRequireDefault = __webpack_require__(/*! babel-runtime/helpers/interop-require-default */ 2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _CoreManager = __webpack_require__(/*! ./CoreManager */ 44);
	
	var _CoreManager2 = _interopRequireDefault(_CoreManager);
	
	var _ParseError = __webpack_require__(/*! ./ParseError */ 38);
	
	var _ParseError2 = _interopRequireDefault(_ParseError);
	
	var _ParsePromise = __webpack_require__(/*! ./ParsePromise */ 48);
	
	var _ParsePromise2 = _interopRequireDefault(_ParsePromise);
	
	var _Storage = __webpack_require__(/*! ./Storage */ 107);
	
	var _Storage2 = _interopRequireDefault(_Storage);
	
	var XHR = null;
	if (typeof XMLHttpRequest !== 'undefined') {
	  XHR = XMLHttpRequest;
	}
	
	var useXDomainRequest = false;
	if (typeof XDomainRequest !== 'undefined' && !('withCredentials' in new XMLHttpRequest())) {
	  useXDomainRequest = true;
	}
	
	function ajaxIE9(method, url, data) {
	  var promise = new _ParsePromise2['default']();
	  var xdr = new XDomainRequest();
	  xdr.onload = function () {
	    var response;
	    try {
	      response = JSON.parse(xdr.responseText);
	    } catch (e) {
	      promise.reject(e);
	    }
	    if (response) {
	      promise.resolve(response);
	    }
	  };
	  xdr.onerror = xdr.ontimeout = function () {
	    // Let's fake a real error message.
	    var fakeResponse = {
	      responseText: JSON.stringify({
	        code: _ParseError2['default'].X_DOMAIN_REQUEST,
	        error: 'IE\'s XDomainRequest does not supply error info.'
	      })
	    };
	    promise.reject(fakeResponse);
	  };
	  xdr.onprogress = function () {};
	  xdr.open(method, url);
	  xdr.send(data);
	  return promise;
	}
	
	var RESTController = {
	  ajax: function ajax(method, url, data, headers) {
	    if (useXDomainRequest) {
	      return ajaxIE9(method, url, data, headers);
	    }
	
	    var promise = new _ParsePromise2['default']();
	    var attempts = 0;
	
	    var dispatch = function dispatch() {
	      if (XHR == null) {
	        throw new Error('Cannot make a request: No definition of XMLHttpRequest was found.');
	      }
	      var handled = false;
	      var xhr = new XHR();
	
	      xhr.onreadystatechange = function () {
	        if (xhr.readyState !== 4 || handled) {
	          return;
	        }
	        handled = true;
	
	        if (xhr.status >= 200 && xhr.status < 300) {
	          var response;
	          try {
	            response = JSON.parse(xhr.responseText);
	          } catch (e) {
	            promise.reject(e.toString());
	          }
	          if (response) {
	            promise.resolve(response, xhr.status, xhr);
	          }
	        } else if (xhr.status >= 500 || xhr.status === 0) {
	          // retry on 5XX or node-xmlhttprequest error
	          if (++attempts < _CoreManager2['default'].get('REQUEST_ATTEMPT_LIMIT')) {
	            // Exponentially-growing random delay
	            var delay = Math.round(Math.random() * 125 * Math.pow(2, attempts));
	            setTimeout(dispatch, delay);
	          } else if (xhr.status === 0) {
	            promise.reject('Unable to connect to the Parse API');
	          } else {
	            // After the retry limit is reached, fail
	            promise.reject(xhr);
	          }
	        } else {
	          promise.reject(xhr);
	        }
	      };
	
	      headers = headers || {};
	      headers['Content-Type'] = 'text/plain'; // Avoid pre-flight
	      if (_CoreManager2['default'].get('IS_NODE')) {
	        headers['User-Agent'] = 'Parse/' + _CoreManager2['default'].get('VERSION') + ' (NodeJS ' + process.versions.node + ')';
	      }
	
	      xhr.open(method, url, true);
	      for (var h in headers) {
	        xhr.setRequestHeader(h, headers[h]);
	      }
	      xhr.send(data);
	    };
	    dispatch();
	
	    return promise;
	  },
	
	  request: function request(method, path, data, options) {
	    options = options || {};
	    var url = _CoreManager2['default'].get('SERVER_URL');
	    if (url[url.length - 1] !== '/') {
	      url += '/';
	    }
	    url += path;
	
	    var payload = {};
	    if (data && (typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
	      for (var k in data) {
	        payload[k] = data[k];
	      }
	    }
	
	    if (method !== 'POST') {
	      payload._method = method;
	      method = 'POST';
	    }
	
	    payload._ApplicationId = _CoreManager2['default'].get('APPLICATION_ID');
	    var jsKey = _CoreManager2['default'].get('JAVASCRIPT_KEY');
	    if (jsKey) {
	      payload._JavaScriptKey = jsKey;
	    }
	    payload._ClientVersion = _CoreManager2['default'].get('VERSION');
	
	    var useMasterKey = options.useMasterKey;
	    if (typeof useMasterKey === 'undefined') {
	      useMasterKey = _CoreManager2['default'].get('USE_MASTER_KEY');
	    }
	    if (useMasterKey) {
	      if (_CoreManager2['default'].get('MASTER_KEY')) {
	        delete payload._JavaScriptKey;
	        payload._MasterKey = _CoreManager2['default'].get('MASTER_KEY');
	      } else {
	        throw new Error('Cannot use the Master Key, it has not been provided.');
	      }
	    }
	
	    if (_CoreManager2['default'].get('FORCE_REVOCABLE_SESSION')) {
	      payload._RevocableSession = '1';
	    }
	
	    var installationId = options.installationId;
	    var installationIdPromise;
	    if (installationId && typeof installationId === 'string') {
	      installationIdPromise = _ParsePromise2['default'].as(installationId);
	    } else {
	      var installationController = _CoreManager2['default'].getInstallationController();
	      installationIdPromise = installationController.currentInstallationId();
	    }
	
	    return installationIdPromise.then(function (iid) {
	      payload._InstallationId = iid;
	      var userController = _CoreManager2['default'].getUserController();
	      if (options && typeof options.sessionToken === 'string') {
	        return _ParsePromise2['default'].as(options.sessionToken);
	      } else if (userController) {
	        return userController.currentUserAsync().then(function (user) {
	          if (user) {
	            return _ParsePromise2['default'].as(user.getSessionToken());
	          }
	          return _ParsePromise2['default'].as(null);
	        });
	      }
	      return _ParsePromise2['default'].as(null);
	    }).then(function (token) {
	      if (token) {
	        payload._SessionToken = token;
	      }
	
	      var payloadString = JSON.stringify(payload);
	
	      return RESTController.ajax(method, url, payloadString);
	    }).then(null, function (response) {
	      // Transform the error into an instance of ParseError by trying to parse
	      // the error string as JSON
	      var error;
	      if (response && response.responseText) {
	        try {
	          var errorJSON = JSON.parse(response.responseText);
	          error = new _ParseError2['default'](errorJSON.code, errorJSON.error);
	        } catch (e) {
	          // If we fail to parse the error text, that's okay.
	          error = new _ParseError2['default'](_ParseError2['default'].INVALID_JSON, 'Received an error with invalid JSON from Parse: ' + response.responseText);
	        }
	      } else {
	        error = new _ParseError2['default'](_ParseError2['default'].CONNECTION_FAILED, 'XMLHttpRequest failed: ' + JSON.stringify(response));
	      }
	
	      return _ParsePromise2['default'].error(error);
	    });
	  },
	
	  _setXHR: function _setXHR(xhr) {
	    XHR = xhr;
	  }
	};
	
	module.exports = RESTController;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 45)))

/***/ },
/* 111 */
/*!******************************************!*\
  !*** ./~/parse/lib/browser/Analytics.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	/**
	 * Parse.Analytics provides an interface to Parse's logging and analytics
	 * backend.
	 *
	 * @class Parse.Analytics
	 * @static
	 */
	
	/**
	 * Tracks the occurrence of a custom event with additional dimensions.
	 * Parse will store a data point at the time of invocation with the given
	 * event name.
	 *
	 * Dimensions will allow segmentation of the occurrences of this custom
	 * event. Keys and values should be {@code String}s, and will throw
	 * otherwise.
	 *
	 * To track a user signup along with additional metadata, consider the
	 * following:
	 * <pre>
	 * var dimensions = {
	 *  gender: 'm',
	 *  source: 'web',
	 *  dayType: 'weekend'
	 * };
	 * Parse.Analytics.track('signup', dimensions);
	 * </pre>
	 *
	 * There is a default limit of 8 dimensions per event tracked.
	 *
	 * @method track
	 * @param {String} name The name of the custom event to report to Parse as
	 * having happened.
	 * @param {Object} dimensions The dictionary of information by which to
	 * segment this event.
	 * @param {Object} options A Backbone-style callback object.
	 * @return {Parse.Promise} A promise that is resolved when the round-trip
	 * to the server completes.
	 */
	'use strict';
	
	var _interopRequireDefault = __webpack_require__(/*! babel-runtime/helpers/interop-require-default */ 2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.track = track;
	
	var _CoreManager = __webpack_require__(/*! ./CoreManager */ 44);
	
	var _CoreManager2 = _interopRequireDefault(_CoreManager);
	
	function track(name, dimensions, options) {
	  name = name || '';
	  name = name.replace(/^\s*/, '');
	  name = name.replace(/\s*$/, '');
	  if (name.length === 0) {
	    throw new TypeError('A name for the custom event must be provided');
	  }
	
	  for (var key in dimensions) {
	    if (typeof key !== 'string' || typeof dimensions[key] !== 'string') {
	      throw new TypeError('track() dimensions expects keys and values of type "string".');
	    }
	  }
	
	  options = options || {};
	  return _CoreManager2['default'].getAnalyticsController().track(name, dimensions)._thenRunCallbacks(options);
	}
	
	_CoreManager2['default'].setAnalyticsController({
	  track: function track(name, dimensions) {
	    var RESTController = _CoreManager2['default'].getRESTController();
	    return RESTController.request('POST', 'events/' + name, { dimensions: dimensions });
	  }
	});

/***/ },
/* 112 */
/*!**************************************!*\
  !*** ./~/parse/lib/browser/Cloud.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	'use strict';
	
	var _interopRequireDefault = __webpack_require__(/*! babel-runtime/helpers/interop-require-default */ 2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.run = run;
	
	var _CoreManager = __webpack_require__(/*! ./CoreManager */ 44);
	
	var _CoreManager2 = _interopRequireDefault(_CoreManager);
	
	var _decode = __webpack_require__(/*! ./decode */ 1);
	
	var _decode2 = _interopRequireDefault(_decode);
	
	var _encode = __webpack_require__(/*! ./encode */ 77);
	
	var _encode2 = _interopRequireDefault(_encode);
	
	var _ParseError = __webpack_require__(/*! ./ParseError */ 38);
	
	var _ParseError2 = _interopRequireDefault(_ParseError);
	
	var _ParsePromise = __webpack_require__(/*! ./ParsePromise */ 48);
	
	var _ParsePromise2 = _interopRequireDefault(_ParsePromise);
	
	/**
	 * Contains functions for calling and declaring
	 * <a href="/docs/cloud_code_guide#functions">cloud functions</a>.
	 * <p><strong><em>
	 *   Some functions are only available from Cloud Code.
	 * </em></strong></p>
	 *
	 * @class Parse.Cloud
	 * @static
	 */
	
	/**
	 * Makes a call to a cloud function.
	 * @method run
	 * @param {String} name The function name.
	 * @param {Object} data The parameters to send to the cloud function.
	 * @param {Object} options A Backbone-style options object
	 * options.success, if set, should be a function to handle a successful
	 * call to a cloud function.  options.error should be a function that
	 * handles an error running the cloud function.  Both functions are
	 * optional.  Both functions take a single argument.
	 * @return {Parse.Promise} A promise that will be resolved with the result
	 * of the function.
	 */
	
	function run(name, data, options) {
	  options = options || {};
	
	  if (typeof name !== 'string' || name.length === 0) {
	    throw new TypeError('Cloud function name must be a string.');
	  }
	
	  var requestOptions = {};
	  if (options.useMasterKey) {
	    requestOptions.useMasterKey = options.useMasterKey;
	  }
	  if (options.sessionToken) {
	    requestOptions.sessionToken = options.sessionToken;
	  }
	
	  return _CoreManager2['default'].getCloudController().run(name, data, requestOptions)._thenRunCallbacks(options);
	}
	
	_CoreManager2['default'].setCloudController({
	  run: function run(name, data, options) {
	    var RESTController = _CoreManager2['default'].getRESTController();
	
	    var payload = (0, _encode2['default'])(data, true);
	
	    var requestOptions = {};
	    if (options.hasOwnProperty('useMasterKey')) {
	      requestOptions.useMasterKey = options.useMasterKey;
	    }
	    if (options.hasOwnProperty('sessionToken')) {
	      requestOptions.sessionToken = options.sessionToken;
	    }
	
	    var request = RESTController.request('POST', 'functions/' + name, payload, requestOptions);
	
	    return request.then(function (res) {
	      var decoded = (0, _decode2['default'])(res);
	      if (decoded && decoded.hasOwnProperty('result')) {
	        return _ParsePromise2['default'].as(decoded.result);
	      }
	      return _ParsePromise2['default'].error(new _ParseError2['default'](_ParseError2['default'].INVALID_JSON, 'The server returned an invalid response.'));
	    })._thenRunCallbacks(options);
	  }
	});

/***/ },
/* 113 */
/*!********************************************!*\
  !*** ./~/parse/lib/browser/ParseConfig.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _createClass = __webpack_require__(/*! babel-runtime/helpers/create-class */ 4)['default'];
	
	var _classCallCheck = __webpack_require__(/*! babel-runtime/helpers/class-call-check */ 8)['default'];
	
	var _interopRequireDefault = __webpack_require__(/*! babel-runtime/helpers/interop-require-default */ 2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _CoreManager = __webpack_require__(/*! ./CoreManager */ 44);
	
	var _CoreManager2 = _interopRequireDefault(_CoreManager);
	
	var _decode = __webpack_require__(/*! ./decode */ 1);
	
	var _decode2 = _interopRequireDefault(_decode);
	
	var _encode = __webpack_require__(/*! ./encode */ 77);
	
	var _encode2 = _interopRequireDefault(_encode);
	
	var _escape2 = __webpack_require__(/*! ./escape */ 82);
	
	var _escape3 = _interopRequireDefault(_escape2);
	
	var _ParseError = __webpack_require__(/*! ./ParseError */ 38);
	
	var _ParseError2 = _interopRequireDefault(_ParseError);
	
	var _ParsePromise = __webpack_require__(/*! ./ParsePromise */ 48);
	
	var _ParsePromise2 = _interopRequireDefault(_ParsePromise);
	
	var _Storage = __webpack_require__(/*! ./Storage */ 107);
	
	var _Storage2 = _interopRequireDefault(_Storage);
	
	/**
	 * Parse.Config is a local representation of configuration data that
	 * can be set from the Parse dashboard.
	 *
	 * @class Parse.Config
	 * @constructor
	 */
	
	var ParseConfig = function () {
	  function ParseConfig() {
	    _classCallCheck(this, ParseConfig);
	
	    this.attributes = {};
	    this._escapedAttributes = {};
	  }
	
	  /**
	   * Gets the value of an attribute.
	   * @method get
	   * @param {String} attr The name of an attribute.
	   */
	
	  _createClass(ParseConfig, [{
	    key: 'get',
	    value: function get(attr) {
	      return this.attributes[attr];
	    }
	
	    /**
	     * Gets the HTML-escaped value of an attribute.
	     * @method escape
	     * @param {String} attr The name of an attribute.
	     */
	  }, {
	    key: 'escape',
	    value: function escape(attr) {
	      var html = this._escapedAttributes[attr];
	      if (html) {
	        return html;
	      }
	      var val = this.attributes[attr];
	      var escaped = '';
	      if (val != null) {
	        escaped = (0, _escape3['default'])(val.toString());
	      }
	      this._escapedAttributes[attr] = escaped;
	      return escaped;
	    }
	
	    /**
	     * Retrieves the most recently-fetched configuration object, either from
	     * memory or from local storage if necessary.
	     *
	     * @method current
	     * @static
	     * @return {Config} The most recently-fetched Parse.Config if it
	     *     exists, else an empty Parse.Config.
	     */
	  }], [{
	    key: 'current',
	    value: function current() {
	      var controller = _CoreManager2['default'].getConfigController();
	      return controller.current();
	    }
	
	    /**
	     * Gets a new configuration object from the server.
	     * @method get
	     * @static
	     * @param {Object} options A Backbone-style options object.
	     * Valid options are:<ul>
	     *   <li>success: Function to call when the get completes successfully.
	     *   <li>error: Function to call when the get fails.
	     * </ul>
	     * @return {Parse.Promise} A promise that is resolved with a newly-created
	     *     configuration object when the get completes.
	     */
	  }, {
	    key: 'get',
	    value: function get(options) {
	      options = options || {};
	
	      var controller = _CoreManager2['default'].getConfigController();
	      return controller.get()._thenRunCallbacks(options);
	    }
	  }]);
	
	  return ParseConfig;
	}();
	
	exports['default'] = ParseConfig;
	
	var currentConfig = null;
	
	var CURRENT_CONFIG_KEY = 'currentConfig';
	
	function decodePayload(data) {
	  try {
	    var json = JSON.parse(data);
	    if (json && (typeof json === 'undefined' ? 'undefined' : _typeof(json)) === 'object') {
	      return (0, _decode2['default'])(json);
	    }
	  } catch (e) {
	    return null;
	  }
	}
	
	_CoreManager2['default'].setConfigController({
	  current: function current() {
	    if (currentConfig) {
	      return currentConfig;
	    }
	
	    var config = new ParseConfig();
	    var storagePath = _Storage2['default'].generatePath(CURRENT_CONFIG_KEY);
	    var configData;
	    if (!_Storage2['default'].async()) {
	      configData = _Storage2['default'].getItem(storagePath);
	
	      if (configData) {
	        var attributes = decodePayload(configData);
	        if (attributes) {
	          config.attributes = attributes;
	          currentConfig = config;
	        }
	      }
	      return config;
	    }
	    // Return a promise for async storage controllers
	    return _Storage2['default'].getItemAsync(storagePath).then(function (configData) {
	      if (configData) {
	        var attributes = decodePayload(configData);
	        if (attributes) {
	          config.attributes = attributes;
	          currentConfig = config;
	        }
	      }
	      return config;
	    });
	  },
	
	  get: function get() {
	    var RESTController = _CoreManager2['default'].getRESTController();
	
	    return RESTController.request('GET', 'config', {}, {}).then(function (response) {
	      if (!response || !response.params) {
	        var error = new _ParseError2['default'](_ParseError2['default'].INVALID_JSON, 'Config JSON response invalid.');
	        return _ParsePromise2['default'].error(error);
	      }
	
	      var config = new ParseConfig();
	      config.attributes = {};
	      for (var attr in response.params) {
	        config.attributes[attr] = (0, _decode2['default'])(response.params[attr]);
	      }
	      currentConfig = config;
	      return _Storage2['default'].setItemAsync(_Storage2['default'].generatePath(CURRENT_CONFIG_KEY), JSON.stringify(response.params)).then(function () {
	        return config;
	      });
	    });
	  }
	});
	module.exports = exports['default'];

/***/ },
/* 114 */
/*!**********************************************!*\
  !*** ./~/parse/lib/browser/FacebookUtils.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * -weak
	 */
	
	'use strict';
	
	var _interopRequireDefault = __webpack_require__(/*! babel-runtime/helpers/interop-require-default */ 2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _parseDate = __webpack_require__(/*! ./parseDate */ 83);
	
	var _parseDate2 = _interopRequireDefault(_parseDate);
	
	var _ParseUser = __webpack_require__(/*! ./ParseUser */ 104);
	
	var _ParseUser2 = _interopRequireDefault(_ParseUser);
	
	var initialized = false;
	var requestedPermissions;
	var initOptions;
	
	/**
	 * Provides a set of utilities for using Parse with Facebook.
	 * @class Parse.FacebookUtils
	 * @static
	 */
	exports['default'] = {
	  /**
	   * Initializes Parse Facebook integration.  Call this function after you
	   * have loaded the Facebook Javascript SDK with the same parameters
	   * as you would pass to<code>
	   * <a href=
	   * "https://developers.facebook.com/docs/reference/javascript/FB.init/">
	   * FB.init()</a></code>.  Parse.FacebookUtils will invoke FB.init() for you
	   * with these arguments.
	   *
	   * @method init
	   * @param {Object} options Facebook options argument as described here:
	   *   <a href=
	   *   "https://developers.facebook.com/docs/reference/javascript/FB.init/">
	   *   FB.init()</a>. The status flag will be coerced to 'false' because it
	   *   interferes with Parse Facebook integration. Call FB.getLoginStatus()
	   *   explicitly if this behavior is required by your application.
	   */
	  init: function init(options) {
	    if (typeof FB === 'undefined') {
	      throw new Error('The Facebook JavaScript SDK must be loaded before calling init.');
	    }
	    initOptions = {};
	    if (options) {
	      for (var key in options) {
	        initOptions[key] = options[key];
	      }
	    }
	    if (initOptions.status && typeof console !== 'undefined') {
	      var warn = console.warn || console.log || function () {};
	      warn.call(console, 'The "status" flag passed into' + ' FB.init, when set to true, can interfere with Parse Facebook' + ' integration, so it has been suppressed. Please call' + ' FB.getLoginStatus() explicitly if you require this behavior.');
	    }
	    initOptions.status = false;
	    FB.init(initOptions);
	    _ParseUser2['default']._registerAuthenticationProvider({
	      authenticate: function authenticate(options) {
	        var _this = this;
	
	        if (typeof FB === 'undefined') {
	          options.error(this, 'Facebook SDK not found.');
	        }
	        FB.login(function (response) {
	          if (response.authResponse) {
	            if (options.success) {
	              options.success(_this, {
	                id: response.authResponse.userID,
	                access_token: response.authResponse.accessToken,
	                expiration_date: new Date(response.authResponse.expiresIn * 1000 + new Date().getTime()).toJSON()
	              });
	            }
	          } else {
	            if (options.error) {
	              options.error(_this, response);
	            }
	          }
	        }, {
	          scope: requestedPermissions
	        });
	      },
	
	      restoreAuthentication: function restoreAuthentication(authData) {
	        if (authData) {
	          var expiration = (0, _parseDate2['default'])(authData.expiration_date);
	          var expiresIn = expiration ? (expiration.getTime() - new Date().getTime()) / 1000 : 0;
	
	          var authResponse = {
	            userID: authData.id,
	            accessToken: authData.access_token,
	            expiresIn: expiresIn
	          };
	          var newOptions = {};
	          if (initOptions) {
	            for (var key in initOptions) {
	              newOptions[key] = initOptions[key];
	            }
	          }
	          newOptions.authResponse = authResponse;
	
	          // Suppress checks for login status from the browser.
	          newOptions.status = false;
	
	          // If the user doesn't match the one known by the FB SDK, log out.
	          // Most of the time, the users will match -- it's only in cases where
	          // the FB SDK knows of a different user than the one being restored
	          // from a Parse User that logged in with username/password.
	          var existingResponse = FB.getAuthResponse();
	          if (existingResponse && existingResponse.userID !== authResponse.userID) {
	            FB.logout();
	          }
	
	          FB.init(newOptions);
	        }
	        return true;
	      },
	
	      getAuthType: function getAuthType() {
	        return 'facebook';
	      },
	
	      deauthenticate: function deauthenticate() {
	        this.restoreAuthentication(null);
	      }
	    });
	    initialized = true;
	  },
	
	  /**
	   * Gets whether the user has their account linked to Facebook.
	   *
	   * @method isLinked
	   * @param {Parse.User} user User to check for a facebook link.
	   *     The user must be logged in on this device.
	   * @return {Boolean} <code>true</code> if the user has their account
	   *     linked to Facebook.
	   */
	  isLinked: function isLinked(user) {
	    return user._isLinked('facebook');
	  },
	
	  /**
	   * Logs in a user using Facebook. This method delegates to the Facebook
	   * SDK to authenticate the user, and then automatically logs in (or
	   * creates, in the case where it is a new user) a Parse.User.
	   *
	   * @method logIn
	   * @param {String, Object} permissions The permissions required for Facebook
	   *    log in.  This is a comma-separated string of permissions.
	   *    Alternatively, supply a Facebook authData object as described in our
	   *    REST API docs if you want to handle getting facebook auth tokens
	   *    yourself.
	   * @param {Object} options Standard options object with success and error
	   *    callbacks.
	   */
	  logIn: function logIn(permissions, options) {
	    if (!permissions || typeof permissions === 'string') {
	      if (!initialized) {
	        throw new Error('You must initialize FacebookUtils before calling logIn.');
	      }
	      requestedPermissions = permissions;
	      return _ParseUser2['default']._logInWith('facebook', options);
	    } else {
	      var newOptions = {};
	      if (options) {
	        for (var key in options) {
	          newOptions[key] = options[key];
	        }
	      }
	      newOptions.authData = permissions;
	      return _ParseUser2['default']._logInWith('facebook', newOptions);
	    }
	  },
	
	  /**
	   * Links Facebook to an existing PFUser. This method delegates to the
	   * Facebook SDK to authenticate the user, and then automatically links
	   * the account to the Parse.User.
	   *
	   * @method link
	   * @param {Parse.User} user User to link to Facebook. This must be the
	   *     current user.
	   * @param {String, Object} permissions The permissions required for Facebook
	   *    log in.  This is a comma-separated string of permissions.
	   *    Alternatively, supply a Facebook authData object as described in our
	   *    REST API docs if you want to handle getting facebook auth tokens
	   *    yourself.
	   * @param {Object} options Standard options object with success and error
	   *    callbacks.
	   */
	  link: function link(user, permissions, options) {
	    if (!permissions || typeof permissions === 'string') {
	      if (!initialized) {
	        throw new Error('You must initialize FacebookUtils before calling link.');
	      }
	      requestedPermissions = permissions;
	      return user._linkWith('facebook', options);
	    } else {
	      var newOptions = {};
	      if (options) {
	        for (var key in options) {
	          newOptions[key] = options[key];
	        }
	      }
	      newOptions.authData = permissions;
	      return user._linkWith('facebook', newOptions);
	    }
	  },
	
	  /**
	   * Unlinks the Parse.User from a Facebook account.
	   *
	   * @method unlink
	   * @param {Parse.User} user User to unlink from Facebook. This must be the
	   *     current user.
	   * @param {Object} options Standard options object with success and error
	   *    callbacks.
	   */
	  unlink: function unlink(user, options) {
	    if (!initialized) {
	      throw new Error('You must initialize FacebookUtils before calling unlink.');
	    }
	    return user._unlinkFrom('facebook', options);
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 115 */
/*!**************************************************!*\
  !*** ./~/parse/lib/browser/ParseInstallation.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _get = __webpack_require__(/*! babel-runtime/helpers/get */ 22)['default'];
	
	var _inherits = __webpack_require__(/*! babel-runtime/helpers/inherits */ 29)['default'];
	
	var _classCallCheck = __webpack_require__(/*! babel-runtime/helpers/class-call-check */ 8)['default'];
	
	var _interopRequireDefault = __webpack_require__(/*! babel-runtime/helpers/interop-require-default */ 2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _ParseObject2 = __webpack_require__(/*! ./ParseObject */ 39);
	
	var _ParseObject3 = _interopRequireDefault(_ParseObject2);
	
	var Installation = function (_ParseObject) {
	  _inherits(Installation, _ParseObject);
	
	  function Installation(attributes) {
	    _classCallCheck(this, Installation);
	
	    _get(Object.getPrototypeOf(Installation.prototype), 'constructor', this).call(this, '_Installation');
	    if (attributes && (typeof attributes === 'undefined' ? 'undefined' : _typeof(attributes)) === 'object') {
	      if (!this.set(attributes || {})) {
	        throw new Error('Can\'t create an invalid Session');
	      }
	    }
	  }
	
	  return Installation;
	}(_ParseObject3['default']);
	
	exports['default'] = Installation;
	
	_ParseObject3['default'].registerSubclass('_Installation', Installation);
	module.exports = exports['default'];

/***/ },
/* 116 */
/*!*************************************!*\
  !*** ./~/parse/lib/browser/Push.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _interopRequireDefault = __webpack_require__(/*! babel-runtime/helpers/interop-require-default */ 2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.send = send;
	
	var _CoreManager = __webpack_require__(/*! ./CoreManager */ 44);
	
	var _CoreManager2 = _interopRequireDefault(_CoreManager);
	
	var _ParseQuery = __webpack_require__(/*! ./ParseQuery */ 80);
	
	var _ParseQuery2 = _interopRequireDefault(_ParseQuery);
	
	/**
	 * Contains functions to deal with Push in Parse.
	 * @class Parse.Push
	 * @static
	 */
	
	/**
	 * Sends a push notification.
	 * @method send
	 * @param {Object} data -  The data of the push notification.  Valid fields
	 * are:
	 *   <ol>
	 *     <li>channels - An Array of channels to push to.</li>
	 *     <li>push_time - A Date object for when to send the push.</li>
	 *     <li>expiration_time -  A Date object for when to expire
	 *         the push.</li>
	 *     <li>expiration_interval - The seconds from now to expire the push.</li>
	 *     <li>where - A Parse.Query over Parse.Installation that is used to match
	 *         a set of installations to push to.</li>
	 *     <li>data - The data to send as part of the push</li>
	 *   <ol>
	 * @param {Object} options An object that has an optional success function,
	 * that takes no arguments and will be called on a successful push, and
	 * an error function that takes a Parse.Error and will be called if the push
	 * failed.
	 * @return {Parse.Promise} A promise that is fulfilled when the push request
	 *     completes.
	 */
	
	function send(data, options) {
	  options = options || {};
	
	  if (data.where && data.where instanceof _ParseQuery2['default']) {
	    data.where = data.where.toJSON().where;
	  }
	
	  if (data.push_time && _typeof(data.push_time) === 'object') {
	    data.push_time = data.push_time.toJSON();
	  }
	
	  if (data.expiration_time && _typeof(data.expiration_time) === 'object') {
	    data.expiration_time = data.expiration_time.toJSON();
	  }
	
	  if (data.expiration_time && data.expiration_interval) {
	    throw new Error('expiration_time and expiration_interval cannot both be set.');
	  }
	
	  return _CoreManager2['default'].getPushController().send(data, {
	    useMasterKey: options.useMasterKey
	  })._thenRunCallbacks(options);
	}
	
	_CoreManager2['default'].setPushController({
	  send: function send(data, options) {
	    var RESTController = _CoreManager2['default'].getRESTController();
	
	    var request = RESTController.request('POST', 'push', data, { useMasterKey: !!options.useMasterKey });
	
	    return request._thenRunCallbacks(options);
	  }
	});

/***/ },
/* 117 */
/*!***********************************************!*\
  !*** ./~/parse/lib/browser/ParseLiveQuery.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(/*! babel-runtime/helpers/interop-require-default */ 2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _EventEmitter = __webpack_require__(/*! ./EventEmitter */ 118);
	
	var _EventEmitter2 = _interopRequireDefault(_EventEmitter);
	
	var _LiveQueryClient = __webpack_require__(/*! ./LiveQueryClient */ 120);
	
	var _LiveQueryClient2 = _interopRequireDefault(_LiveQueryClient);
	
	var _CoreManager = __webpack_require__(/*! ./CoreManager */ 44);
	
	var _CoreManager2 = _interopRequireDefault(_CoreManager);
	
	var _ParsePromise = __webpack_require__(/*! ./ParsePromise */ 48);
	
	var _ParsePromise2 = _interopRequireDefault(_ParsePromise);
	
	/**
	 *
	 * We expose three events to help you monitor the status of the WebSocket connection:
	 *
	 * <p>Open - When we establish the WebSocket connection to the LiveQuery server, you'll get this event.
	 * 
	 * <pre>
	 * Parse.LiveQuery.on('open', () => {
	 * 
	 * });</pre></p>
	 *
	 * <p>Close - When we lose the WebSocket connection to the LiveQuery server, you'll get this event.
	 * 
	 * <pre>
	 * Parse.LiveQuery.on('close', () => {
	 * 
	 * });</pre></p>
	 *
	 * <p>Error - When some network error or LiveQuery server error happens, you'll get this event.
	 * 
	 * <pre>
	 * Parse.LiveQuery.on('error', (error) => {
	 * 
	 * });</pre></p>
	 * 
	 * @class Parse.LiveQuery
	 * @static
	 * 
	 */
	var LiveQuery = new _EventEmitter2['default']();
	
	/**
	 * After open is called, the LiveQuery will try to send a connect request
	 * to the LiveQuery server.
	 * 
	 * @method open
	 */
	LiveQuery.open = function open() {
	  var LiveQueryController = _CoreManager2['default'].getLiveQueryController();
	  LiveQueryController.open();
	};
	
	/**
	 * When you're done using LiveQuery, you can call Parse.LiveQuery.close().
	 * This function will close the WebSocket connection to the LiveQuery server,
	 * cancel the auto reconnect, and unsubscribe all subscriptions based on it.
	 * If you call query.subscribe() after this, we'll create a new WebSocket
	 * connection to the LiveQuery server.
	 * 
	 * @method close
	 */
	
	LiveQuery.close = function close() {
	  var LiveQueryController = _CoreManager2['default'].getLiveQueryController();
	  LiveQueryController.close();
	};
	// Register a default onError callback to make sure we do not crash on error
	LiveQuery.on('error', function () {});
	
	exports['default'] = LiveQuery;
	
	var getSessionToken = function getSessionToken() {
	  var promiseUser = _CoreManager2['default'].getUserController().currentUserAsync();
	  return promiseUser.then(function (currentUser) {
	    return _ParsePromise2['default'].as(currentUser ? currentUser.sessionToken : undefined);
	  }).then(function (sessionToken) {
	    return _ParsePromise2['default'].as(sessionToken);
	  });
	};
	
	var getLiveQueryClient = function getLiveQueryClient() {
	  return _CoreManager2['default'].getLiveQueryController().getDefaultLiveQueryClient().then(function (defaultLiveQueryClient) {
	    return _ParsePromise2['default'].as(defaultLiveQueryClient);
	  });
	};
	
	var defaultLiveQueryClient = undefined;
	
	_CoreManager2['default'].setLiveQueryController({
	  setDefaultLiveQueryClient: function setDefaultLiveQueryClient(liveQueryClient) {
	    defaultLiveQueryClient = liveQueryClient;
	  },
	  getDefaultLiveQueryClient: function getDefaultLiveQueryClient() {
	    if (defaultLiveQueryClient) {
	      return _ParsePromise2['default'].as(defaultLiveQueryClient);
	    }
	
	    var sessionTokenPromise = getSessionToken();
	    return sessionTokenPromise.then(function (sessionToken) {
	      var liveQueryServerURL = _CoreManager2['default'].get('LIVEQUERY_SERVER_URL');
	
	      if (liveQueryServerURL && liveQueryServerURL.indexOf('ws') !== 0) {
	        throw new Error('You need to set a proper Parse LiveQuery server url before using LiveQueryClient');
	      }
	
	      // If we can not find Parse.liveQueryServerURL, we try to extract it from Parse.serverURL
	      if (!liveQueryServerURL) {
	        var tempServerURL = _CoreManager2['default'].get('SERVER_URL');
	        var protocol = 'ws://';
	        // If Parse is being served over SSL/HTTPS, ensure LiveQuery Server uses 'wss://' prefix
	        if (tempServerURL.indexOf('https') === 0) {
	          protocol = 'wss://';
	        }
	        var host = tempServerURL.replace(/^https?:\/\//, '');
	        liveQueryServerURL = protocol + host;
	        _CoreManager2['default'].set('LIVEQUERY_SERVER_URL', liveQueryServerURL);
	      }
	
	      var applicationId = _CoreManager2['default'].get('APPLICATION_ID');
	      var javascriptKey = _CoreManager2['default'].get('JAVASCRIPT_KEY');
	      var masterKey = _CoreManager2['default'].get('MASTER_KEY');
	      // Get currentUser sessionToken if possible
	      defaultLiveQueryClient = new _LiveQueryClient2['default']({
	        applicationId: applicationId,
	        serverURL: liveQueryServerURL,
	        javascriptKey: javascriptKey,
	        masterKey: masterKey,
	        sessionToken: sessionToken
	      });
	      // Register a default onError callback to make sure we do not crash on error
	      // Cannot create these events on a nested way because of EventEmiiter from React Native
	      defaultLiveQueryClient.on('error', function (error) {
	        LiveQuery.emit('error', error);
	      });
	      defaultLiveQueryClient.on('open', function () {
	        LiveQuery.emit('open');
	      });
	      defaultLiveQueryClient.on('close', function () {
	        LiveQuery.emit('close');
	      });
	
	      return _ParsePromise2['default'].as(defaultLiveQueryClient);
	    });
	  },
	  open: function open() {
	    var _this = this;
	
	    getLiveQueryClient().then(function (liveQueryClient) {
	      _this.resolve(liveQueryClient.open());
	    });
	  },
	  close: function close() {
	    var _this2 = this;
	
	    getLiveQueryClient().then(function (liveQueryClient) {
	      _this2.resolve(liveQueryClient.close());
	    });
	  },
	  subscribe: function subscribe(query) {
	    var _this3 = this;
	
	    var subscriptionWrap = new _EventEmitter2['default']();
	
	    getLiveQueryClient().then(function (liveQueryClient) {
	      if (liveQueryClient.shouldOpen()) {
	        liveQueryClient.open();
	      }
	      var promiseSessionToken = getSessionToken();
	      // new event emitter
	      return promiseSessionToken.then(function (sessionToken) {
	
	        var subscription = liveQueryClient.subscribe(query, sessionToken);
	        // enter, leave create, etc
	
	        subscriptionWrap.id = subscription.id;
	        subscriptionWrap.query = subscription.query;
	        subscriptionWrap.sessionToken = subscription.sessionToken;
	        subscriptionWrap.unsubscribe = subscription.unsubscribe;
	        // Cannot create these events on a nested way because of EventEmiiter from React Native
	        subscription.on('open', function () {
	          subscriptionWrap.emit('open');
	        });
	        subscription.on('create', function (object) {
	          subscriptionWrap.emit('create', object);
	        });
	        subscription.on('update', function (object) {
	          subscriptionWrap.emit('update', object);
	        });
	        subscription.on('enter', function (object) {
	          subscriptionWrap.emit('enter', object);
	        });
	        subscription.on('leave', function (object) {
	          subscriptionWrap.emit('leave', object);
	        });
	        subscription.on('delete', function (object) {
	          subscriptionWrap.emit('delete', object);
	        });
	
	        _this3.resolve();
	      });
	    });
	    return subscriptionWrap;
	  },
	  unsubscribe: function unsubscribe(subscription) {
	    var _this4 = this;
	
	    getLiveQueryClient().then(function (liveQueryClient) {
	      _this4.resolve(liveQueryClient.unsubscribe(subscription));
	    });
	  }
	});
	module.exports = exports['default'];

/***/ },
/* 118 */
/*!*********************************************!*\
  !*** ./~/parse/lib/browser/EventEmitter.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * This is a simple wrapper to unify EventEmitter implementations across platforms.
	 */
	
	'use strict';
	
	module.exports = __webpack_require__(/*! events */ 119).EventEmitter;

/***/ },
/* 119 */
/*!****************************!*\
  !*** ./~/events/events.js ***!
  \****************************/
/***/ function(module, exports) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;
	
	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;
	
	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;
	
	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;
	
	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function (n) {
	  if (!isNumber(n) || n < 0 || isNaN(n)) throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};
	
	EventEmitter.prototype.emit = function (type) {
	  var er, handler, len, args, i, listeners;
	
	  if (!this._events) this._events = {};
	
	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error || isObject(this._events.error) && !this._events.error.length) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      } else {
	        // At least give some kind of context to the user
	        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
	        err.context = er;
	        throw err;
	      }
	    }
	  }
	
	  handler = this._events[type];
	
	  if (isUndefined(handler)) return false;
	
	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++) {
	      listeners[i].apply(this, args);
	    }
	  }
	
	  return true;
	};
	
	EventEmitter.prototype.addListener = function (type, listener) {
	  var m;
	
	  if (!isFunction(listener)) throw TypeError('listener must be a function');
	
	  if (!this._events) this._events = {};
	
	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener) this.emit('newListener', type, isFunction(listener.listener) ? listener.listener : listener);
	
	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];
	
	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }
	
	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' + 'leak detected. %d listeners added. ' + 'Use emitter.setMaxListeners() to increase limit.', this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }
	
	  return this;
	};
	
	EventEmitter.prototype.on = EventEmitter.prototype.addListener;
	
	EventEmitter.prototype.once = function (type, listener) {
	  if (!isFunction(listener)) throw TypeError('listener must be a function');
	
	  var fired = false;
	
	  function g() {
	    this.removeListener(type, g);
	
	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }
	
	  g.listener = listener;
	  this.on(type, g);
	
	  return this;
	};
	
	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function (type, listener) {
	  var list, position, length, i;
	
	  if (!isFunction(listener)) throw TypeError('listener must be a function');
	
	  if (!this._events || !this._events[type]) return this;
	
	  list = this._events[type];
	  length = list.length;
	  position = -1;
	
	  if (list === listener || isFunction(list.listener) && list.listener === listener) {
	    delete this._events[type];
	    if (this._events.removeListener) this.emit('removeListener', type, listener);
	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener || list[i].listener && list[i].listener === listener) {
	        position = i;
	        break;
	      }
	    }
	
	    if (position < 0) return this;
	
	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }
	
	    if (this._events.removeListener) this.emit('removeListener', type, listener);
	  }
	
	  return this;
	};
	
	EventEmitter.prototype.removeAllListeners = function (type) {
	  var key, listeners;
	
	  if (!this._events) return this;
	
	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0) this._events = {};else if (this._events[type]) delete this._events[type];
	    return this;
	  }
	
	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }
	
	  listeners = this._events[type];
	
	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length) {
	      this.removeListener(type, listeners[listeners.length - 1]);
	    }
	  }
	  delete this._events[type];
	
	  return this;
	};
	
	EventEmitter.prototype.listeners = function (type) {
	  var ret;
	  if (!this._events || !this._events[type]) ret = [];else if (isFunction(this._events[type])) ret = [this._events[type]];else ret = this._events[type].slice();
	  return ret;
	};
	
	EventEmitter.prototype.listenerCount = function (type) {
	  if (this._events) {
	    var evlistener = this._events[type];
	
	    if (isFunction(evlistener)) return 1;else if (evlistener) return evlistener.length;
	  }
	  return 0;
	};
	
	EventEmitter.listenerCount = function (emitter, type) {
	  return emitter.listenerCount(type);
	};
	
	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	
	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	
	function isObject(arg) {
	  return (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object' && arg !== null;
	}
	
	function isUndefined(arg) {
	  return arg === void 0;
	}

/***/ },
/* 120 */
/*!************************************************!*\
  !*** ./~/parse/lib/browser/LiveQueryClient.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _get = __webpack_require__(/*! babel-runtime/helpers/get */ 22)['default'];
	
	var _inherits = __webpack_require__(/*! babel-runtime/helpers/inherits */ 29)['default'];
	
	var _createClass = __webpack_require__(/*! babel-runtime/helpers/create-class */ 4)['default'];
	
	var _classCallCheck = __webpack_require__(/*! babel-runtime/helpers/class-call-check */ 8)['default'];
	
	var _Map = __webpack_require__(/*! babel-runtime/core-js/map */ 121)['default'];
	
	var _getIterator = __webpack_require__(/*! babel-runtime/core-js/get-iterator */ 49)['default'];
	
	var _interopRequireDefault = __webpack_require__(/*! babel-runtime/helpers/interop-require-default */ 2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _EventEmitter2 = __webpack_require__(/*! ./EventEmitter */ 118);
	
	var _EventEmitter3 = _interopRequireDefault(_EventEmitter2);
	
	var _ParsePromise = __webpack_require__(/*! ./ParsePromise */ 48);
	
	var _ParsePromise2 = _interopRequireDefault(_ParsePromise);
	
	var _ParseObject = __webpack_require__(/*! ./ParseObject */ 39);
	
	var _ParseObject2 = _interopRequireDefault(_ParseObject);
	
	var _LiveQuerySubscription = __webpack_require__(/*! ./LiveQuerySubscription */ 128);
	
	var _LiveQuerySubscription2 = _interopRequireDefault(_LiveQuerySubscription);
	
	// The LiveQuery client inner state
	var CLIENT_STATE = {
	  INITIALIZED: 'initialized',
	  CONNECTING: 'connecting',
	  CONNECTED: 'connected',
	  CLOSED: 'closed',
	  RECONNECTING: 'reconnecting',
	  DISCONNECTED: 'disconnected'
	};
	
	// The event type the LiveQuery client should sent to server
	var OP_TYPES = {
	  CONNECT: 'connect',
	  SUBSCRIBE: 'subscribe',
	  UNSUBSCRIBE: 'unsubscribe',
	  ERROR: 'error'
	};
	
	// The event we get back from LiveQuery server
	var OP_EVENTS = {
	  CONNECTED: 'connected',
	  SUBSCRIBED: 'subscribed',
	  UNSUBSCRIBED: 'unsubscribed',
	  ERROR: 'error',
	  CREATE: 'create',
	  UPDATE: 'update',
	  ENTER: 'enter',
	  LEAVE: 'leave',
	  DELETE: 'delete'
	};
	
	// The event the LiveQuery client should emit
	var CLIENT_EMMITER_TYPES = {
	  CLOSE: 'close',
	  ERROR: 'error',
	  OPEN: 'open'
	};
	
	// The event the LiveQuery subscription should emit
	var SUBSCRIPTION_EMMITER_TYPES = {
	  OPEN: 'open',
	  CLOSE: 'close',
	  ERROR: 'error',
	  CREATE: 'create',
	  UPDATE: 'update',
	  ENTER: 'enter',
	  LEAVE: 'leave',
	  DELETE: 'delete'
	};
	
	var generateInterval = function generateInterval(k) {
	  return Math.random() * Math.min(30, Math.pow(2, k) - 1) * 1000;
	};
	
	/**
	 * Creates a new LiveQueryClient.
	 * Extends events.EventEmitter
	 * <a href="https://nodejs.org/api/events.html#events_class_eventemitter">cloud functions</a>.
	 * 
	 * A wrapper of a standard WebSocket client. We add several useful methods to 
	 * help you connect/disconnect to LiveQueryServer, subscribe/unsubscribe a ParseQuery easily.
	 *
	 * javascriptKey and masterKey are used for verifying the LiveQueryClient when it tries
	 * to connect to the LiveQuery server
	 * 
	 * @class Parse.LiveQueryClient
	 * @constructor
	 * @param {Object} options
	 * @param {string} options.applicationId - applicationId of your Parse app
	 * @param {string} options.serverURL - <b>the URL of your LiveQuery server</b>
	 * @param {string} options.javascriptKey (optional)
	 * @param {string} options.masterKey (optional) Your Parse Master Key. (Node.js only!)
	 * @param {string} options.sessionToken (optional)
	 *
	 *
	 * We expose three events to help you monitor the status of the LiveQueryClient.
	 *
	 * <pre>
	 * let Parse = require('parse/node');
	 * let LiveQueryClient = Parse.LiveQueryClient;
	 * let client = new LiveQueryClient({
	 *   applicationId: '',
	 *   serverURL: '',
	 *   javascriptKey: '',
	 *   masterKey: ''
	 *  });
	 * </pre>
	 * 
	 * Open - When we establish the WebSocket connection to the LiveQuery server, you'll get this event.
	 * <pre>
	 * client.on('open', () => {
	 * 
	 * });</pre>
	 *
	 * Close - When we lose the WebSocket connection to the LiveQuery server, you'll get this event.
	 * <pre>
	 * client.on('close', () => {
	 * 
	 * });</pre>
	 *
	 * Error - When some network error or LiveQuery server error happens, you'll get this event.
	 * <pre>
	 * client.on('error', (error) => {
	 * 
	 * });</pre>
	 * 
	 * 
	 */
	
	var LiveQueryClient = function (_EventEmitter) {
	  _inherits(LiveQueryClient, _EventEmitter);
	
	  function LiveQueryClient(_ref) {
	    var applicationId = _ref.applicationId;
	    var serverURL = _ref.serverURL;
	    var javascriptKey = _ref.javascriptKey;
	    var masterKey = _ref.masterKey;
	    var sessionToken = _ref.sessionToken;
	
	    _classCallCheck(this, LiveQueryClient);
	
	    _get(Object.getPrototypeOf(LiveQueryClient.prototype), 'constructor', this).call(this);
	
	    if (!serverURL || serverURL.indexOf('ws') !== 0) {
	      throw new Error('You need to set a proper Parse LiveQuery server url before using LiveQueryClient');
	    }
	
	    this.reconnectHandle = null;
	    this.attempts = 1;;
	    this.id = 0;
	    this.requestId = 1;
	    this.serverURL = serverURL;
	    this.applicationId = applicationId;
	    this.javascriptKey = javascriptKey;
	    this.masterKey = masterKey;
	    this.sessionToken = sessionToken;
	    this.connectPromise = new _ParsePromise2['default']();
	    this.subscriptions = new _Map();
	    this.state = CLIENT_STATE.INITIALIZED;
	  }
	
	  _createClass(LiveQueryClient, [{
	    key: 'shouldOpen',
	    value: function shouldOpen() {
	      return this.state === CLIENT_STATE.INITIALIZED || this.state === CLIENT_STATE.DISCONNECTED;
	    }
	
	    /**
	     * Subscribes to a ParseQuery
	     * 
	     * If you provide the sessionToken, when the LiveQuery server gets ParseObject's 
	     * updates from parse server, it'll try to check whether the sessionToken fulfills 
	     * the ParseObject's ACL. The LiveQuery server will only send updates to clients whose 
	     * sessionToken is fit for the ParseObject's ACL. You can check the LiveQuery protocol
	     * <a href="https://github.com/ParsePlatform/parse-server/wiki/Parse-LiveQuery-Protocol-Specification">here</a> for more details. The subscription you get is the same subscription you get 
	     * from our Standard API.
	     * 
	     * @method subscribe
	     * @param {Object} query - the ParseQuery you want to subscribe to
	     * @param {string} sessionToken (optional) 
	     * @return {Object} subscription
	     */
	  }, {
	    key: 'subscribe',
	    value: function subscribe(query, sessionToken) {
	      var _this = this;
	
	      if (!query) {
	        return;
	      }
	      var where = query.toJSON().where;
	      var className = query.className;
	      var subscribeRequest = {
	        op: OP_TYPES.SUBSCRIBE,
	        requestId: this.requestId,
	        query: {
	          className: className,
	          where: where
	        }
	      };
	
	      if (sessionToken) {
	        subscribeRequest.sessionToken = sessionToken;
	      }
	
	      var subscription = new _LiveQuerySubscription2['default'](this.requestId, query, sessionToken);
	      this.subscriptions.set(this.requestId, subscription);
	      this.requestId += 1;
	      this.connectPromise.then(function () {
	        _this.socket.send(JSON.stringify(subscribeRequest));
	      });
	
	      // adding listener so process does not crash
	      // best practice is for developer to register their own listener
	      subscription.on('error', function () {});
	
	      return subscription;
	    }
	
	    /**
	     * After calling unsubscribe you'll stop receiving events from the subscription object.
	     * 
	     * @method unsubscribe
	     * @param {Object} subscription - subscription you would like to unsubscribe from.
	     */
	  }, {
	    key: 'unsubscribe',
	    value: function unsubscribe(subscription) {
	      var _this2 = this;
	
	      if (!subscription) {
	        return;
	      }
	
	      this.subscriptions['delete'](subscription.id);
	      var unsubscribeRequest = {
	        op: OP_TYPES.UNSUBSCRIBE,
	        requestId: subscription.id
	      };
	      this.connectPromise.then(function () {
	        _this2.socket.send(JSON.stringify(unsubscribeRequest));
	      });
	    }
	
	    /**
	     * After open is called, the LiveQueryClient will try to send a connect request
	     * to the LiveQuery server.
	     * 
	     * @method open
	     */
	  }, {
	    key: 'open',
	    value: function open() {
	      var _this3 = this;
	
	      var WebSocketImplementation = this._getWebSocketImplementation();
	      if (!WebSocketImplementation) {
	        this.emit(CLIENT_EMMITER_TYPES.ERROR, 'Can not find WebSocket implementation');
	        return;
	      }
	
	      if (this.state !== CLIENT_STATE.RECONNECTING) {
	        this.state = CLIENT_STATE.CONNECTING;
	      }
	
	      // Get WebSocket implementation
	      this.socket = new WebSocketImplementation(this.serverURL);
	
	      // Bind WebSocket callbacks
	      this.socket.onopen = function () {
	        _this3._handleWebSocketOpen();
	      };
	
	      this.socket.onmessage = function (event) {
	        _this3._handleWebSocketMessage(event);
	      };
	
	      this.socket.onclose = function () {
	        _this3._handleWebSocketClose();
	      };
	
	      this.socket.onerror = function (error) {
	        console.log("error on socket");
	        _this3._handleWebSocketError(error);
	      };
	    }
	  }, {
	    key: 'resubscribe',
	    value: function resubscribe() {
	      var _this4 = this;
	
	      this.subscriptions.forEach(function (subscription, requestId) {
	        var query = subscription.query;
	        var where = query.toJSON().where;
	        var className = query.className;
	        var sessionToken = subscription.sessionToken;
	        var subscribeRequest = {
	          op: OP_TYPES.SUBSCRIBE,
	          requestId: requestId,
	          query: {
	            className: className,
	            where: where
	          }
	        };
	
	        if (sessionToken) {
	          subscribeRequest.sessionToken = sessionToken;
	        }
	
	        _this4.connectPromise.then(function () {
	          _this4.socket.send(JSON.stringify(subscribeRequest));
	        });
	      });
	    }
	
	    /**
	     * This method will close the WebSocket connection to this LiveQueryClient, 
	     * cancel the auto reconnect and unsubscribe all subscriptions based on it.
	     * 
	     * @method close
	     */
	  }, {
	    key: 'close',
	    value: function close() {
	      if (this.state === CLIENT_STATE.INITIALIZED || this.state === CLIENT_STATE.DISCONNECTED) {
	        return;
	      }
	      this.state = CLIENT_STATE.DISCONNECTED;
	      this.socket.close();
	      // Notify each subscription about the close
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;
	
	      try {
	        for (var _iterator = _getIterator(this.subscriptions.values()), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var subscription = _step.value;
	
	          subscription.emit(SUBSCRIPTION_EMMITER_TYPES.CLOSE);
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator['return']) {
	            _iterator['return']();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }
	
	      this._handleReset();
	      this.emit(CLIENT_EMMITER_TYPES.CLOSE);
	    }
	  }, {
	    key: '_getWebSocketImplementation',
	    value: function _getWebSocketImplementation() {
	      return typeof WebSocket === 'function' || (typeof WebSocket === 'undefined' ? 'undefined' : _typeof(WebSocket)) === 'object' ? WebSocket : null;
	    }
	
	    // ensure we start with valid state if connect is called again after close
	  }, {
	    key: '_handleReset',
	    value: function _handleReset() {
	      this.attempts = 1;;
	      this.id = 0;
	      this.requestId = 1;
	      this.connectPromise = new _ParsePromise2['default']();
	      this.subscriptions = new _Map();
	    }
	  }, {
	    key: '_handleWebSocketOpen',
	    value: function _handleWebSocketOpen() {
	      this.attempts = 1;
	      var connectRequest = {
	        op: OP_TYPES.CONNECT,
	        applicationId: this.applicationId,
	        javascriptKey: this.javascriptKey,
	        masterKey: this.masterKey,
	        sessionToken: this.sessionToken
	      };
	      this.socket.send(JSON.stringify(connectRequest));
	    }
	  }, {
	    key: '_handleWebSocketMessage',
	    value: function _handleWebSocketMessage(event) {
	      var data = event.data;
	      if (typeof data === 'string') {
	        data = JSON.parse(data);
	      }
	      var subscription = null;
	      if (data.requestId) {
	        subscription = this.subscriptions.get(data.requestId);
	      }
	      switch (data.op) {
	        case OP_EVENTS.CONNECTED:
	          if (this.state === CLIENT_STATE.RECONNECTING) {
	            this.resubscribe();
	          }
	          this.emit(CLIENT_EMMITER_TYPES.OPEN);
	          this.id = data.clientId;
	          this.connectPromise.resolve();
	          this.state = CLIENT_STATE.CONNECTED;
	          break;
	        case OP_EVENTS.SUBSCRIBED:
	          if (subscription) {
	            subscription.emit(SUBSCRIPTION_EMMITER_TYPES.OPEN);
	          }
	          break;
	        case OP_EVENTS.ERROR:
	          if (data.requestId) {
	            if (subscription) {
	              subscription.emit(SUBSCRIPTION_EMMITER_TYPES.ERROR, data.error);
	            }
	          } else {
	            this.emit(CLIENT_EMMITER_TYPES.ERROR, data.error);
	          }
	          break;
	        case OP_EVENTS.UNSUBSCRIBED:
	          // We have already deleted subscription in unsubscribe(), do nothing here
	          break;
	        default:
	          // create, update, enter, leave, delete cases
	          var className = data.object.className;
	          // Delete the extrea __type and className fields during transfer to full JSON
	          delete data.object.__type;
	          delete data.object.className;
	          var parseObject = new _ParseObject2['default'](className);
	          parseObject._finishFetch(data.object);
	          if (!subscription) {
	            break;
	          }
	          subscription.emit(data.op, parseObject);
	      }
	    }
	  }, {
	    key: '_handleWebSocketClose',
	    value: function _handleWebSocketClose() {
	      if (this.state === CLIENT_STATE.DISCONNECTED) {
	        return;
	      }
	      this.state = CLIENT_STATE.CLOSED;
	      this.emit(CLIENT_EMMITER_TYPES.CLOSE);
	      // Notify each subscription about the close
	      var _iteratorNormalCompletion2 = true;
	      var _didIteratorError2 = false;
	      var _iteratorError2 = undefined;
	
	      try {
	        for (var _iterator2 = _getIterator(this.subscriptions.values()), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	          var subscription = _step2.value;
	
	          subscription.emit(SUBSCRIPTION_EMMITER_TYPES.CLOSE);
	        }
	      } catch (err) {
	        _didIteratorError2 = true;
	        _iteratorError2 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion2 && _iterator2['return']) {
	            _iterator2['return']();
	          }
	        } finally {
	          if (_didIteratorError2) {
	            throw _iteratorError2;
	          }
	        }
	      }
	
	      this._handleReconnect();
	    }
	  }, {
	    key: '_handleWebSocketError',
	    value: function _handleWebSocketError(error) {
	      this.emit(CLIENT_EMMITER_TYPES.ERROR, error);
	      var _iteratorNormalCompletion3 = true;
	      var _didIteratorError3 = false;
	      var _iteratorError3 = undefined;
	
	      try {
	        for (var _iterator3 = _getIterator(this.subscriptions.values()), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	          var subscription = _step3.value;
	
	          subscription.emit(SUBSCRIPTION_EMMITER_TYPES.ERROR);
	        }
	      } catch (err) {
	        _didIteratorError3 = true;
	        _iteratorError3 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion3 && _iterator3['return']) {
	            _iterator3['return']();
	          }
	        } finally {
	          if (_didIteratorError3) {
	            throw _iteratorError3;
	          }
	        }
	      }
	
	      this._handleReconnect();
	    }
	  }, {
	    key: '_handleReconnect',
	    value: function _handleReconnect() {
	      var _this5 = this;
	
	      // if closed or currently reconnecting we stop attempting to reconnect
	      if (this.state === CLIENT_STATE.DISCONNECTED) {
	        return;
	      }
	
	      this.state = CLIENT_STATE.RECONNECTING;
	      var time = generateInterval(this.attempts);
	
	      // handle case when both close/error occur at frequent rates we ensure we do not reconnect unnecessarily.
	      // we're unable to distinguish different between close/error when we're unable to reconnect therefore
	      // we try to reonnect in both cases
	      // server side ws and browser WebSocket behave differently in when close/error get triggered
	
	      if (this.reconnectHandle) {
	        clearTimeout(this.reconnectHandle);
	      } else {
	        console.info('attempting to reconnect');
	      }
	
	      this.reconnectHandle = setTimeout(function () {
	        _this5.attempts++;
	        _this5.connectPromise = new _ParsePromise2['default']();
	        _this5.open();
	      }.bind(this), time);
	    }
	  }]);
	
	  return LiveQueryClient;
	}(_EventEmitter3['default']);
	
	exports['default'] = LiveQueryClient;
	module.exports = exports['default'];

/***/ },
/* 121 */
/*!****************************************!*\
  !*** ./~/babel-runtime/core-js/map.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/map */ 122), __esModule: true };

/***/ },
/* 122 */
/*!*************************************!*\
  !*** ./~/core-js/library/fn/map.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(/*! ../modules/es6.object.to-string */ 90);
	__webpack_require__(/*! ../modules/es6.string.iterator */ 68);
	__webpack_require__(/*! ../modules/web.dom.iterable */ 51);
	__webpack_require__(/*! ../modules/es6.map */ 123);
	__webpack_require__(/*! ../modules/es7.map.to-json */ 126);
	module.exports = __webpack_require__(/*! ../modules/$.core */ 17).Map;

/***/ },
/* 123 */
/*!**********************************************!*\
  !*** ./~/core-js/library/modules/es6.map.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var strong = __webpack_require__(/*! ./$.collection-strong */ 124);
	
	// 23.1 Map Objects
	__webpack_require__(/*! ./$.collection */ 102)('Map', function (get) {
	  return function Map() {
	    return get(this, arguments.length > 0 ? arguments[0] : undefined);
	  };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key) {
	    var entry = strong.getEntry(this, key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value) {
	    return strong.def(this, key === 0 ? 0 : key, value);
	  }
	}, strong, true);

/***/ },
/* 124 */
/*!**********************************************************!*\
  !*** ./~/core-js/library/modules/$.collection-strong.js ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var $ = __webpack_require__(/*! ./$ */ 7),
	    hide = __webpack_require__(/*! ./$.hide */ 59),
	    redefineAll = __webpack_require__(/*! ./$.redefine-all */ 93),
	    ctx = __webpack_require__(/*! ./$.ctx */ 18),
	    strictNew = __webpack_require__(/*! ./$.strict-new */ 94),
	    defined = __webpack_require__(/*! ./$.defined */ 13),
	    forOf = __webpack_require__(/*! ./$.for-of */ 95),
	    $iterDefine = __webpack_require__(/*! ./$.iter-define */ 56),
	    step = __webpack_require__(/*! ./$.iter-step */ 54),
	    ID = __webpack_require__(/*! ./$.uid */ 67)('id'),
	    $has = __webpack_require__(/*! ./$.has */ 62),
	    isObject = __webpack_require__(/*! ./$.is-object */ 36),
	    setSpecies = __webpack_require__(/*! ./$.set-species */ 125),
	    DESCRIPTORS = __webpack_require__(/*! ./$.descriptors */ 61),
	    isExtensible = Object.isExtensible || isObject,
	    SIZE = DESCRIPTORS ? '_s' : 'size',
	    id = 0;
	
	var fastKey = function fastKey(it, create) {
	  // return primitive with prefix
	  if (!isObject(it)) return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if (!$has(it, ID)) {
	    // can't set id to frozen object
	    if (!isExtensible(it)) return 'F';
	    // not necessary to add id
	    if (!create) return 'E';
	    // add missing object id
	    hide(it, ID, ++id);
	    // return object id with prefix
	  }return 'O' + it[ID];
	};
	
	var getEntry = function getEntry(that, key) {
	  // fast case
	  var index = fastKey(key),
	      entry;
	  if (index !== 'F') return that._i[index];
	  // frozen object case
	  for (entry = that._f; entry; entry = entry.n) {
	    if (entry.k == key) return entry;
	  }
	};
	
	module.exports = {
	  getConstructor: function getConstructor(wrapper, NAME, IS_MAP, ADDER) {
	    var C = wrapper(function (that, iterable) {
	      strictNew(that, C, NAME);
	      that._i = $.create(null); // index
	      that._f = undefined; // first entry
	      that._l = undefined; // last entry
	      that[SIZE] = 0; // size
	      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear() {
	        for (var that = this, data = that._i, entry = that._f; entry; entry = entry.n) {
	          entry.r = true;
	          if (entry.p) entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function _delete(key) {
	        var that = this,
	            entry = getEntry(that, key);
	        if (entry) {
	          var next = entry.n,
	              prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if (prev) prev.n = next;
	          if (next) next.p = prev;
	          if (that._f == entry) that._f = next;
	          if (that._l == entry) that._l = prev;
	          that[SIZE]--;
	        }return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /*, that = undefined */) {
	        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3),
	            entry;
	        while (entry = entry ? entry.n : this._f) {
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while (entry && entry.r) {
	            entry = entry.p;
	          }
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key) {
	        return !!getEntry(this, key);
	      }
	    });
	    if (DESCRIPTORS) $.setDesc(C.prototype, 'size', {
	      get: function get() {
	        return defined(this[SIZE]);
	      }
	    });
	    return C;
	  },
	  def: function def(that, key, value) {
	    var entry = getEntry(that, key),
	        prev,
	        index;
	    // change existing entry
	    if (entry) {
	      entry.v = value;
	      // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key, // <- key
	        v: value, // <- value
	        p: prev = that._l, // <- previous entry
	        n: undefined, // <- next entry
	        r: false // <- removed
	      };
	      if (!that._f) that._f = entry;
	      if (prev) prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if (index !== 'F') that._i[index] = entry;
	    }return that;
	  },
	  getEntry: getEntry,
	  setStrong: function setStrong(C, NAME, IS_MAP) {
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function (iterated, kind) {
	      this._t = iterated; // target
	      this._k = kind; // kind
	      this._l = undefined; // previous
	    }, function () {
	      var that = this,
	          kind = that._k,
	          entry = that._l;
	      // revert to the last existing entry
	      while (entry && entry.r) {
	        entry = entry.p;
	      } // get next entry
	      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if (kind == 'keys') return step(0, entry.k);
	      if (kind == 'values') return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);
	
	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
	};

/***/ },
/* 125 */
/*!****************************************************!*\
  !*** ./~/core-js/library/modules/$.set-species.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var core = __webpack_require__(/*! ./$.core */ 17),
	    $ = __webpack_require__(/*! ./$ */ 7),
	    DESCRIPTORS = __webpack_require__(/*! ./$.descriptors */ 61),
	    SPECIES = __webpack_require__(/*! ./$.wks */ 65)('species');
	
	module.exports = function (KEY) {
	  var C = core[KEY];
	  if (DESCRIPTORS && C && !C[SPECIES]) $.setDesc(C, SPECIES, {
	    configurable: true,
	    get: function get() {
	      return this;
	    }
	  });
	};

/***/ },
/* 126 */
/*!******************************************************!*\
  !*** ./~/core-js/library/modules/es7.map.to-json.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export = __webpack_require__(/*! ./$.export */ 15);
	
	$export($export.P, 'Map', { toJSON: __webpack_require__(/*! ./$.collection-to-json */ 127)('Map') });

/***/ },
/* 127 */
/*!***********************************************************!*\
  !*** ./~/core-js/library/modules/$.collection-to-json.js ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var forOf = __webpack_require__(/*! ./$.for-of */ 95),
	    classof = __webpack_require__(/*! ./$.classof */ 73);
	module.exports = function (NAME) {
	  return function toJSON() {
	    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
	    var arr = [];
	    forOf(this, false, arr.push, arr);
	    return arr;
	  };
	};

/***/ },
/* 128 */
/*!******************************************************!*\
  !*** ./~/parse/lib/browser/LiveQuerySubscription.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2015-present, Parse, LLC.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var _get = __webpack_require__(/*! babel-runtime/helpers/get */ 22)['default'];
	
	var _inherits = __webpack_require__(/*! babel-runtime/helpers/inherits */ 29)['default'];
	
	var _createClass = __webpack_require__(/*! babel-runtime/helpers/create-class */ 4)['default'];
	
	var _classCallCheck = __webpack_require__(/*! babel-runtime/helpers/class-call-check */ 8)['default'];
	
	var _interopRequireDefault = __webpack_require__(/*! babel-runtime/helpers/interop-require-default */ 2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _EventEmitter2 = __webpack_require__(/*! ./EventEmitter */ 118);
	
	var _EventEmitter3 = _interopRequireDefault(_EventEmitter2);
	
	var _CoreManager = __webpack_require__(/*! ./CoreManager */ 44);
	
	var _CoreManager2 = _interopRequireDefault(_CoreManager);
	
	/**
	 * Creates a new LiveQuery Subscription.
	 * Extends events.EventEmitter
	 * <a href="https://nodejs.org/api/events.html#events_class_eventemitter">cloud functions</a>.
	 * 
	 * @constructor
	 * @param {string} id - subscription id
	 * @param {string} query - query to subscribe to
	 * @param {string} sessionToken - optional session token
	 *
	 * <p>Open Event - When you call query.subscribe(), we send a subscribe request to 
	 * the LiveQuery server, when we get the confirmation from the LiveQuery server,
	 * this event will be emitted. When the client loses WebSocket connection to the
	 * LiveQuery server, we will try to auto reconnect the LiveQuery server. If we
	 * reconnect the LiveQuery server and successfully resubscribe the ParseQuery,
	 * you'll also get this event.
	 * 
	 * <pre>
	 * subscription.on('open', () => {
	 * 
	 * });</pre></p>
	 *
	 * <p>Create Event - When a new ParseObject is created and it fulfills the ParseQuery you subscribe,
	 * you'll get this event. The object is the ParseObject which is created.
	 * 
	 * <pre>
	 * subscription.on('create', (object) => {
	 * 
	 * });</pre></p>
	 *
	 * <p>Update Event - When an existing ParseObject which fulfills the ParseQuery you subscribe 
	 * is updated (The ParseObject fulfills the ParseQuery before and after changes),
	 * you'll get this event. The object is the ParseObject which is updated.
	 * Its content is the latest value of the ParseObject.
	 * 
	 * <pre>
	 * subscription.on('update', (object) => {
	 * 
	 * });</pre></p>
	 * 
	 * <p>Enter Event - When an existing ParseObject's old value doesn't fulfill the ParseQuery
	 * but its new value fulfills the ParseQuery, you'll get this event. The object is the
	 * ParseObject which enters the ParseQuery. Its content is the latest value of the ParseObject.
	 * 
	 * <pre>
	 * subscription.on('enter', (object) => {
	 * 
	 * });</pre></p>
	 *
	 *
	 * <p>Update Event - When an existing ParseObject's old value fulfills the ParseQuery but its new value
	 * doesn't fulfill the ParseQuery, you'll get this event. The object is the ParseObject
	 * which leaves the ParseQuery. Its content is the latest value of the ParseObject.
	 * 
	 * <pre>
	 * subscription.on('leave', (object) => {
	 * 
	 * });</pre></p>
	 *
	 *
	 * <p>Delete Event - When an existing ParseObject which fulfills the ParseQuery is deleted, you'll
	 * get this event. The object is the ParseObject which is deleted.
	 * 
	 * <pre>
	 * subscription.on('delete', (object) => {
	 * 
	 * });</pre></p>
	 *
	 *
	 * <p>Close Event - When the client loses the WebSocket connection to the LiveQuery
	 * server and we stop receiving events, you'll get this event.
	 * 
	 * <pre>
	 * subscription.on('close', () => {
	 * 
	 * });</pre></p>
	 *
	 * 
	 */
	
	var Subscription = function (_EventEmitter) {
	  _inherits(Subscription, _EventEmitter);
	
	  function Subscription(id, query, sessionToken) {
	    _classCallCheck(this, Subscription);
	
	    _get(Object.getPrototypeOf(Subscription.prototype), 'constructor', this).call(this);
	    this.id = id;
	    this.query = query;
	    this.sessionToken = sessionToken;
	  }
	
	  /**
	   * @method unsubscribe
	   */
	
	  _createClass(Subscription, [{
	    key: 'unsubscribe',
	    value: function unsubscribe() {
	      var _this2 = this;
	
	      var _this = this;
	      _CoreManager2['default'].getLiveQueryController().getDefaultLiveQueryClient().then(function (liveQueryClient) {
	        liveQueryClient.unsubscribe(_this);
	        _this.emit('close');
	        _this2.resolve();
	      });
	    }
	  }]);
	
	  return Subscription;
	}(_EventEmitter3['default']);
	
	exports['default'] = Subscription;
	module.exports = exports['default'];

/***/ },
/* 129 */
/*!***************************!*\
  !*** ./src/collection.js ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _ = __webpack_require__(/*! underscore */ 130);
	var ParseQuery = __webpack_require__(/*! parse/lib/browser/ParseQuery */ 80);
	var ParseObject = __webpack_require__(/*! parse/lib/browser/ParseObject */ 39);
	var Events = __webpack_require__(/*! ./events */ 131);
	var extend = __webpack_require__(/*! ./extend */ 132);
	var isNullOrUndefined = __webpack_require__(/*! ./helpers/isNullOrUndefined */ 133);
	
	function Collection() {
	  var models = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	  if (options.comparator) {
	    this.comparator = options.comparator;
	  }
	
	  if (options.model) {
	    this.model = options.model;
	  }
	
	  if (options.query) {
	    this.query = options.query;
	  }
	
	  this._reset();
	  this.initialize.apply(this, arguments);
	
	  if (models.length) {
	    this.reset(models, {
	      silent: true,
	      parse: options.parse
	    });
	  }
	}
	
	_.extend(Collection.prototype, Events, {
	  // The default model for the collection
	  model: ParseObject,
	
	  toJSON: function toJSON() {
	    return this.map(function (model) {
	      return model.toJSON();
	    });
	  },
	
	  /**
	   * Add a model, or list of models to the set. Pass **silent** to avoid
	   * firing the `add` event for every new model.
	   *
	   * @param {Array} models An array of instances of <code>Parse.Object</code>.
	   *
	   * @param {Object} options An optional object with Backbone-style options.
	   * Valid options are:<ul>
	   *   <li>at: The index at which to add the models.
	   *   <li>silent: Set to true to avoid firing the `add` event for every new
	   *   model.
	   * </ul>
	   */
	  add: function add(models) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    var cids = {};
	    var ids = {};
	    var i = void 0;
	    var index = void 0;
	    var length = void 0;
	    var model = void 0;
	    var cid = void 0;
	    var id = void 0;
	
	    models = _.isArray(models) ? models.slice() : [models];
	
	    // Begin by turning bare objects into model references, and preventing
	    // invalid models or duplicate models from being added.
	    for (i = 0, length = models.length; i < length; i++) {
	      models[i] = this._prepareModel(models[i], options);
	
	      model = models[i];
	
	      if (!model) {
	        throw new Error('Can\'t add an invalid model to a collection');
	      }
	
	      cid = model.cid;
	
	      if (cids[cid] || this._byCid[cid]) {
	        throw new Error('Duplicate cid: can\'t add the same model to a collection twice');
	      }
	
	      id = model.id;
	
	      if (!isNullOrUndefined(id) && (ids[id] || this._byId[id])) {
	        throw new Error('Duplicate id: can\'t add the same model to a collection twice');
	      }
	
	      ids[id] = model;
	      cids[cid] = model;
	    }
	
	    // Listen to added models' events, and index models for lookup by
	    // `id` and by `cid`.
	    for (i = 0; i < length; i++) {
	      (model = models[i]).on('all', this._onModelEvent, this);
	      this._byCid[model.cid] = model;
	      if (model.id) {
	        this._byId[model.id] = model;
	      }
	    }
	
	    // Insert models into the collection, re-sorting if needed, and triggering
	    // `add` events unless silenced.
	    this.length += length;
	    index = isNullOrUndefined(options.at) ? this.models.length : options.at;
	    this.models.splice.apply(this.models, [index, 0].concat(models));
	
	    if (this.comparator) {
	      this.sort({ silent: true });
	    }
	    if (options.silent) {
	      return this;
	    }
	
	    for (i = 0, length = this.models.length; i < length; i++) {
	      model = this.models[i];
	      if (cids[model.cid]) {
	        options.index = i;
	        model.trigger('add', model, this, options);
	      }
	    }
	
	    return this;
	  },
	
	  /**
	   * Remove a model, or a list of models from the set. Pass silent to avoid
	   * firing the <code>remove</code> event for every model removed.
	   *
	   * @param {Array} models The model or list of models to remove from the
	   *   collection.
	   * @param {Object} options An optional object with Backbone-style options.
	   * Valid options are: <ul>
	   *   <li>silent: Set to true to avoid firing the `remove` event.
	   * </ul>
	   */
	  remove: function remove(models) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    var i = void 0;
	    var l = void 0;
	    var index = void 0;
	    var model = void 0;
	
	    models = _.isArray(models) ? models.slice() : [models];
	
	    for (i = 0, l = models.length; i < l; i++) {
	      model = this.getByCid(models[i]) || this.get(models[i]);
	
	      if (!model) {
	        continue;
	      }
	
	      delete this._byId[model.id];
	      delete this._byCid[model.cid];
	
	      index = this.indexOf(model);
	
	      this.models.splice(index, 1);
	      this.length--;
	
	      if (!options.silent) {
	        options.index = index;
	        model.trigger('remove', model, this, options);
	      }
	
	      this._removeReference(model);
	    }
	
	    return this;
	  },
	
	  /**
	   * Gets a model from the set by id.
	   * @param {String} id The Parse objectId identifying the Parse.Object to
	   * fetch from this collection.
	   */
	  get: function get(id) {
	    return id && this._byId[id.id || id];
	  },
	
	  /**
	   * Gets a model from the set by client id.
	   * @param {} cid The Backbone collection id identifying the Parse.Object to
	   * fetch from this collection.
	   */
	  getByCid: function getByCid(cid) {
	    return cid && this._byCid[cid.cid || cid];
	  },
	
	  /**
	   * Gets the model at the given index.
	   *
	   * @param {Number} index The index of the model to return.
	   */
	  at: function at(index) {
	    return this.models[index];
	  },
	
	  /**
	   * Forces the collection to re-sort itself. You don't need to call this
	   * under normal circumstances, as the set will maintain sort order as each
	   * item is added.
	   * @param {Object} options An optional object with Backbone-style options.
	   * Valid options are: <ul>
	   *   <li>silent: Set to true to avoid firing the `reset` event.
	   * </ul>
	   */
	  sort: function sort() {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	    if (!this.comparator) {
	      throw new Error('Cannot sort a set without a comparator');
	    }
	
	    var boundComparator = _.bind(this.comparator, this);
	
	    if (this.comparator.length === 1) {
	      this.models = this.sortBy(boundComparator);
	    } else {
	      this.models.sort(boundComparator);
	    }
	
	    if (!options.silent) {
	      this.trigger('reset', this, options);
	    }
	
	    return this;
	  },
	
	  /**
	   * Plucks an attribute from each model in the collection.
	   * @param {String} attr The attribute to return from each model in the
	   * collection.
	   */
	  pluck: function pluck(attr) {
	    return _.map(this.models, function (model) {
	      return model.get(attr);
	    });
	  },
	
	  /**
	   * When you have more items than you want to add or remove individually,
	   * you can reset the entire set with a new list of models, without firing
	   * any `add` or `remove` events. Fires `reset` when finished.
	   *
	   * @param {Array} models The model or list of models to remove from the
	   *   collection.
	   * @param {Object} options An optional object with Backbone-style options.
	   * Valid options are: <ul>
	   *   <li>silent: Set to true to avoid firing the `reset` event.
	   * </ul>
	   */
	  reset: function reset() {
	    var _this = this;
	
	    var models = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    _.each(this.models, function (model) {
	      _this._removeReference(model);
	    });
	
	    this._reset();
	    this.add(models, { silent: true, parse: options.parse });
	
	    if (!options.silent) {
	      this.trigger('reset', this, options);
	    }
	    return this;
	  },
	
	  /**
	   * Fetches the default set of models for this collection, resetting the
	   * collection when they arrive. If `add: true` is passed, appends the
	   * models to the collection instead of resetting.
	   *
	   * @param {Object} options An optional object with Backbone-style options.
	   * Valid options are:<ul>
	   *   <li>silent: Set to true to avoid firing `add` or `reset` events for
	   *   models fetched by this fetch.
	   *   <li>success: A Backbone-style success callback.
	   *   <li>error: An Backbone-style error callback.
	   *   <li>useMasterKey: In Cloud Code and Node only, uses the Master Key for
	   *       this request.
	   *   <li>sessionToken: A valid session token, used for making a request on
	   *       behalf of a specific user.
	   * </ul>
	   */
	  fetch: function fetch() {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	    options = _extends({}, options);
	
	    if (options.parse === undefined) {
	      options.parse = true;
	    }
	
	    var collection = this;
	    var query = this.query || new ParseQuery(this.model);
	
	    return query.find({
	      useMasterKey: options.useMasterKey,
	      sessionToken: options.sessionToken
	    }).then(function (results) {
	      if (options.add) {
	        collection.add(results, options);
	      } else {
	        collection.reset(results, options);
	      }
	
	      return collection;
	    })._thenRunCallbacks(options, this);
	  },
	
	  /**
	   * Creates a new instance of a model in this collection. Add the model to
	   * the collection immediately, unless `wait: true` is passed, in which case
	   * we wait for the server to agree.
	   *
	   * @param {Parse.Object} model The new model to create and add to the
	   *   collection.
	   * @param {Object} options An optional object with Backbone-style options.
	   * Valid options are:<ul>
	   *   <li>wait: Set to true to wait for the server to confirm creation of the
	   *       model before adding it to the collection.
	   *   <li>silent: Set to true to avoid firing an `add` event.
	   *   <li>success: A Backbone-style success callback.
	   *   <li>error: An Backbone-style error callback.
	   *   <li>useMasterKey: In Cloud Code and Node only, uses the Master Key for
	   *       this request.
	   *   <li>sessionToken: A valid session token, used for making a request on
	   *       behalf of a specific user.
	   * </ul>
	   */
	  create: function create(model) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    var coll = this;
	    options = _extends({}, options);
	    model = this._prepareModel(model, options);
	
	    if (!model) {
	      return false;
	    }
	
	    if (!options.wait) {
	      coll.add(model, options);
	    }
	
	    var success = options.success;
	
	    options.success = function (nextModel, resp, xhr) {
	      if (options.wait) {
	        coll.add(nextModel, options);
	      }
	
	      if (success) {
	        success(nextModel, resp);
	      } else {
	        nextModel.trigger('sync', model, resp, options);
	      }
	    };
	
	    model.save(null, options);
	
	    return model;
	  },
	
	  /**
	   * Converts a response into a list of models to be added to the collection.
	   * The default implementation is just to pass it through.
	   * @ignore
	   */
	  parse: function parse(resp, xhr) {
	    return resp;
	  },
	
	  /**
	   * Proxy to _'s chain. Can't be proxied the same way the rest of the
	   * underscore methods are proxied because it relies on the underscore
	   * constructor.
	   */
	  chain: function chain() {
	    return _(this.models).chain();
	  },
	
	  /**
	   * Reset all internal state. Called when the collection is reset.
	   */
	  _reset: function _reset(options) {
	    this.length = 0;
	    this.models = [];
	    this._byId = {};
	    this._byCid = {};
	  },
	
	  /**
	   * Prepare a model or hash of attributes to be added to this collection.
	   */
	  _prepareModel: function _prepareModel(model, options) {
	    var Model = this.model;
	
	    if (!(model instanceof ParseObject)) {
	      var attrs = model;
	
	      options.collection = this;
	      model = new Model(attrs, options);
	
	      if (!model._validate(model.attributes, options)) {
	        model = false;
	      }
	    } else if (!model.collection) {
	      model.collection = this;
	    }
	
	    return model;
	  },
	
	  /**
	   * Internal method to remove a model's ties to a collection.
	   */
	  _removeReference: function _removeReference(model) {
	    if (this === model.collection) {
	      delete model.collection;
	    }
	    model.off('all', this._onModelEvent, this);
	  },
	
	  /**
	   * Internal method called every time a model in the set fires an event.
	   * Sets need to update their indexes when models change ids. All other
	   * events simply proxy through. "add" and "remove" events that originate
	   * in other collections are ignored.
	   */
	  _onModelEvent: function _onModelEvent(ev, model, collection, options) {
	    if ((ev === 'add' || ev === 'remove') && collection !== this) {
	      return;
	    }
	
	    if (ev === 'destroy') {
	      this.remove(model, options);
	    }
	
	    if (model && ev === 'change:objectId') {
	      delete this._byId[model.previous('objectId')];
	      this._byId[model.id] = model;
	    }
	
	    this.trigger.apply(this, arguments);
	  }
	});
	
	// Underscore methods that we want to implement on the Collection.
	var methods = ['forEach', 'each', 'map', 'reduce', 'reduceRight', 'find', 'detect', 'filter', 'select', 'reject', 'every', 'all', 'some', 'any', 'include', 'contains', 'invoke', 'max', 'min', 'sortBy', 'sortedIndex', 'toArray', 'size', 'first', 'initial', 'rest', 'last', 'without', 'indexOf', 'shuffle', 'lastIndexOf', 'isEmpty', 'groupBy'];
	
	// Mix in each Underscore method as a proxy to `Collection#models`.
	_.each(methods, function (method) {
	  Collection.prototype[method] = function () {
	    var _ref;
	
	    return _[method].apply(_, (_ref = [this.models]).concat.apply(_ref, arguments));
	  };
	});
	
	/**
	 * Creates a new subclass of <code>Parse.Collection</code>.  For example,<pre>
	 *   var MyCollection = Parse.Collection.extend({
	 *     // Instance properties
	 *
	 *     model: MyClass,
	 *     query: MyQuery,
	 *
	 *     getFirst: function() {
	 *       return this.at(0);
	 *     }
	 *   }, {
	 *     // Class properties
	 *
	 *     makeOne: function() {
	 *       return new MyCollection();
	 *     }
	 *   });
	 *
	 *   var collection = new MyCollection();
	 * </pre>
	 *
	 * @function
	 * @param {Object} instanceProps Instance properties for the collection.
	 * @param {Object} classProps Class properies for the collection.
	 * @return {Class} A new subclass of <code>Parse.Collection</code>.
	 */
	Collection.extend = extend;
	
	module.exports = Collection;

/***/ },
/* 130 */
/*!************************************!*\
  !*** ./~/underscore/underscore.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	//     Underscore.js 1.8.3
	//     http://underscorejs.org
	//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	//     Underscore may be freely distributed under the MIT license.
	
	(function () {
	
	  // Baseline setup
	  // --------------
	
	  // Establish the root object, `window` in the browser, or `exports` on the server.
	  var root = this;
	
	  // Save the previous value of the `_` variable.
	  var previousUnderscore = root._;
	
	  // Save bytes in the minified (but not gzipped) version:
	  var ArrayProto = Array.prototype,
	      ObjProto = Object.prototype,
	      FuncProto = Function.prototype;
	
	  // Create quick reference variables for speed access to core prototypes.
	  var push = ArrayProto.push,
	      slice = ArrayProto.slice,
	      toString = ObjProto.toString,
	      hasOwnProperty = ObjProto.hasOwnProperty;
	
	  // All **ECMAScript 5** native function implementations that we hope to use
	  // are declared here.
	  var nativeIsArray = Array.isArray,
	      nativeKeys = Object.keys,
	      nativeBind = FuncProto.bind,
	      nativeCreate = Object.create;
	
	  // Naked function reference for surrogate-prototype-swapping.
	  var Ctor = function Ctor() {};
	
	  // Create a safe reference to the Underscore object for use below.
	  var _ = function _(obj) {
	    if (obj instanceof _) return obj;
	    if (!(this instanceof _)) return new _(obj);
	    this._wrapped = obj;
	  };
	
	  // Export the Underscore object for **Node.js**, with
	  // backwards-compatibility for the old `require()` API. If we're in
	  // the browser, add `_` as a global object.
	  if (true) {
	    if (typeof module !== 'undefined' && module.exports) {
	      exports = module.exports = _;
	    }
	    exports._ = _;
	  } else {
	    root._ = _;
	  }
	
	  // Current version.
	  _.VERSION = '1.8.3';
	
	  // Internal function that returns an efficient (for current engines) version
	  // of the passed-in callback, to be repeatedly applied in other Underscore
	  // functions.
	  var optimizeCb = function optimizeCb(func, context, argCount) {
	    if (context === void 0) return func;
	    switch (argCount == null ? 3 : argCount) {
	      case 1:
	        return function (value) {
	          return func.call(context, value);
	        };
	      case 2:
	        return function (value, other) {
	          return func.call(context, value, other);
	        };
	      case 3:
	        return function (value, index, collection) {
	          return func.call(context, value, index, collection);
	        };
	      case 4:
	        return function (accumulator, value, index, collection) {
	          return func.call(context, accumulator, value, index, collection);
	        };
	    }
	    return function () {
	      return func.apply(context, arguments);
	    };
	  };
	
	  // A mostly-internal function to generate callbacks that can be applied
	  // to each element in a collection, returning the desired result — either
	  // identity, an arbitrary callback, a property matcher, or a property accessor.
	  var cb = function cb(value, context, argCount) {
	    if (value == null) return _.identity;
	    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
	    if (_.isObject(value)) return _.matcher(value);
	    return _.property(value);
	  };
	  _.iteratee = function (value, context) {
	    return cb(value, context, Infinity);
	  };
	
	  // An internal function for creating assigner functions.
	  var createAssigner = function createAssigner(keysFunc, undefinedOnly) {
	    return function (obj) {
	      var length = arguments.length;
	      if (length < 2 || obj == null) return obj;
	      for (var index = 1; index < length; index++) {
	        var source = arguments[index],
	            keys = keysFunc(source),
	            l = keys.length;
	        for (var i = 0; i < l; i++) {
	          var key = keys[i];
	          if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
	        }
	      }
	      return obj;
	    };
	  };
	
	  // An internal function for creating a new object that inherits from another.
	  var baseCreate = function baseCreate(prototype) {
	    if (!_.isObject(prototype)) return {};
	    if (nativeCreate) return nativeCreate(prototype);
	    Ctor.prototype = prototype;
	    var result = new Ctor();
	    Ctor.prototype = null;
	    return result;
	  };
	
	  var property = function property(key) {
	    return function (obj) {
	      return obj == null ? void 0 : obj[key];
	    };
	  };
	
	  // Helper for collection methods to determine whether a collection
	  // should be iterated as an array or as an object
	  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
	  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
	  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
	  var getLength = property('length');
	  var isArrayLike = function isArrayLike(collection) {
	    var length = getLength(collection);
	    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
	  };
	
	  // Collection Functions
	  // --------------------
	
	  // The cornerstone, an `each` implementation, aka `forEach`.
	  // Handles raw objects in addition to array-likes. Treats all
	  // sparse array-likes as if they were dense.
	  _.each = _.forEach = function (obj, iteratee, context) {
	    iteratee = optimizeCb(iteratee, context);
	    var i, length;
	    if (isArrayLike(obj)) {
	      for (i = 0, length = obj.length; i < length; i++) {
	        iteratee(obj[i], i, obj);
	      }
	    } else {
	      var keys = _.keys(obj);
	      for (i = 0, length = keys.length; i < length; i++) {
	        iteratee(obj[keys[i]], keys[i], obj);
	      }
	    }
	    return obj;
	  };
	
	  // Return the results of applying the iteratee to each element.
	  _.map = _.collect = function (obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length,
	        results = Array(length);
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      results[index] = iteratee(obj[currentKey], currentKey, obj);
	    }
	    return results;
	  };
	
	  // Create a reducing function iterating left or right.
	  function createReduce(dir) {
	    // Optimized iterator function as using arguments.length
	    // in the main function will deoptimize the, see #1991.
	    function iterator(obj, iteratee, memo, keys, index, length) {
	      for (; index >= 0 && index < length; index += dir) {
	        var currentKey = keys ? keys[index] : index;
	        memo = iteratee(memo, obj[currentKey], currentKey, obj);
	      }
	      return memo;
	    }
	
	    return function (obj, iteratee, memo, context) {
	      iteratee = optimizeCb(iteratee, context, 4);
	      var keys = !isArrayLike(obj) && _.keys(obj),
	          length = (keys || obj).length,
	          index = dir > 0 ? 0 : length - 1;
	      // Determine the initial value if none is provided.
	      if (arguments.length < 3) {
	        memo = obj[keys ? keys[index] : index];
	        index += dir;
	      }
	      return iterator(obj, iteratee, memo, keys, index, length);
	    };
	  }
	
	  // **Reduce** builds up a single result from a list of values, aka `inject`,
	  // or `foldl`.
	  _.reduce = _.foldl = _.inject = createReduce(1);
	
	  // The right-associative version of reduce, also known as `foldr`.
	  _.reduceRight = _.foldr = createReduce(-1);
	
	  // Return the first value which passes a truth test. Aliased as `detect`.
	  _.find = _.detect = function (obj, predicate, context) {
	    var key;
	    if (isArrayLike(obj)) {
	      key = _.findIndex(obj, predicate, context);
	    } else {
	      key = _.findKey(obj, predicate, context);
	    }
	    if (key !== void 0 && key !== -1) return obj[key];
	  };
	
	  // Return all the elements that pass a truth test.
	  // Aliased as `select`.
	  _.filter = _.select = function (obj, predicate, context) {
	    var results = [];
	    predicate = cb(predicate, context);
	    _.each(obj, function (value, index, list) {
	      if (predicate(value, index, list)) results.push(value);
	    });
	    return results;
	  };
	
	  // Return all the elements for which a truth test fails.
	  _.reject = function (obj, predicate, context) {
	    return _.filter(obj, _.negate(cb(predicate)), context);
	  };
	
	  // Determine whether all of the elements match a truth test.
	  // Aliased as `all`.
	  _.every = _.all = function (obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length;
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      if (!predicate(obj[currentKey], currentKey, obj)) return false;
	    }
	    return true;
	  };
	
	  // Determine if at least one element in the object matches a truth test.
	  // Aliased as `any`.
	  _.some = _.any = function (obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = !isArrayLike(obj) && _.keys(obj),
	        length = (keys || obj).length;
	    for (var index = 0; index < length; index++) {
	      var currentKey = keys ? keys[index] : index;
	      if (predicate(obj[currentKey], currentKey, obj)) return true;
	    }
	    return false;
	  };
	
	  // Determine if the array or object contains a given item (using `===`).
	  // Aliased as `includes` and `include`.
	  _.contains = _.includes = _.include = function (obj, item, fromIndex, guard) {
	    if (!isArrayLike(obj)) obj = _.values(obj);
	    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
	    return _.indexOf(obj, item, fromIndex) >= 0;
	  };
	
	  // Invoke a method (with arguments) on every item in a collection.
	  _.invoke = function (obj, method) {
	    var args = slice.call(arguments, 2);
	    var isFunc = _.isFunction(method);
	    return _.map(obj, function (value) {
	      var func = isFunc ? method : value[method];
	      return func == null ? func : func.apply(value, args);
	    });
	  };
	
	  // Convenience version of a common use case of `map`: fetching a property.
	  _.pluck = function (obj, key) {
	    return _.map(obj, _.property(key));
	  };
	
	  // Convenience version of a common use case of `filter`: selecting only objects
	  // containing specific `key:value` pairs.
	  _.where = function (obj, attrs) {
	    return _.filter(obj, _.matcher(attrs));
	  };
	
	  // Convenience version of a common use case of `find`: getting the first object
	  // containing specific `key:value` pairs.
	  _.findWhere = function (obj, attrs) {
	    return _.find(obj, _.matcher(attrs));
	  };
	
	  // Return the maximum element (or element-based computation).
	  _.max = function (obj, iteratee, context) {
	    var result = -Infinity,
	        lastComputed = -Infinity,
	        value,
	        computed;
	    if (iteratee == null && obj != null) {
	      obj = isArrayLike(obj) ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value > result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = cb(iteratee, context);
	      _.each(obj, function (value, index, list) {
	        computed = iteratee(value, index, list);
	        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
	          result = value;
	          lastComputed = computed;
	        }
	      });
	    }
	    return result;
	  };
	
	  // Return the minimum element (or element-based computation).
	  _.min = function (obj, iteratee, context) {
	    var result = Infinity,
	        lastComputed = Infinity,
	        value,
	        computed;
	    if (iteratee == null && obj != null) {
	      obj = isArrayLike(obj) ? obj : _.values(obj);
	      for (var i = 0, length = obj.length; i < length; i++) {
	        value = obj[i];
	        if (value < result) {
	          result = value;
	        }
	      }
	    } else {
	      iteratee = cb(iteratee, context);
	      _.each(obj, function (value, index, list) {
	        computed = iteratee(value, index, list);
	        if (computed < lastComputed || computed === Infinity && result === Infinity) {
	          result = value;
	          lastComputed = computed;
	        }
	      });
	    }
	    return result;
	  };
	
	  // Shuffle a collection, using the modern version of the
	  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
	  _.shuffle = function (obj) {
	    var set = isArrayLike(obj) ? obj : _.values(obj);
	    var length = set.length;
	    var shuffled = Array(length);
	    for (var index = 0, rand; index < length; index++) {
	      rand = _.random(0, index);
	      if (rand !== index) shuffled[index] = shuffled[rand];
	      shuffled[rand] = set[index];
	    }
	    return shuffled;
	  };
	
	  // Sample **n** random values from a collection.
	  // If **n** is not specified, returns a single random element.
	  // The internal `guard` argument allows it to work with `map`.
	  _.sample = function (obj, n, guard) {
	    if (n == null || guard) {
	      if (!isArrayLike(obj)) obj = _.values(obj);
	      return obj[_.random(obj.length - 1)];
	    }
	    return _.shuffle(obj).slice(0, Math.max(0, n));
	  };
	
	  // Sort the object's values by a criterion produced by an iteratee.
	  _.sortBy = function (obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    return _.pluck(_.map(obj, function (value, index, list) {
	      return {
	        value: value,
	        index: index,
	        criteria: iteratee(value, index, list)
	      };
	    }).sort(function (left, right) {
	      var a = left.criteria;
	      var b = right.criteria;
	      if (a !== b) {
	        if (a > b || a === void 0) return 1;
	        if (a < b || b === void 0) return -1;
	      }
	      return left.index - right.index;
	    }), 'value');
	  };
	
	  // An internal function used for aggregate "group by" operations.
	  var group = function group(behavior) {
	    return function (obj, iteratee, context) {
	      var result = {};
	      iteratee = cb(iteratee, context);
	      _.each(obj, function (value, index) {
	        var key = iteratee(value, index, obj);
	        behavior(result, value, key);
	      });
	      return result;
	    };
	  };
	
	  // Groups the object's values by a criterion. Pass either a string attribute
	  // to group by, or a function that returns the criterion.
	  _.groupBy = group(function (result, value, key) {
	    if (_.has(result, key)) result[key].push(value);else result[key] = [value];
	  });
	
	  // Indexes the object's values by a criterion, similar to `groupBy`, but for
	  // when you know that your index values will be unique.
	  _.indexBy = group(function (result, value, key) {
	    result[key] = value;
	  });
	
	  // Counts instances of an object that group by a certain criterion. Pass
	  // either a string attribute to count by, or a function that returns the
	  // criterion.
	  _.countBy = group(function (result, value, key) {
	    if (_.has(result, key)) result[key]++;else result[key] = 1;
	  });
	
	  // Safely create a real, live array from anything iterable.
	  _.toArray = function (obj) {
	    if (!obj) return [];
	    if (_.isArray(obj)) return slice.call(obj);
	    if (isArrayLike(obj)) return _.map(obj, _.identity);
	    return _.values(obj);
	  };
	
	  // Return the number of elements in an object.
	  _.size = function (obj) {
	    if (obj == null) return 0;
	    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
	  };
	
	  // Split a collection into two arrays: one whose elements all satisfy the given
	  // predicate, and one whose elements all do not satisfy the predicate.
	  _.partition = function (obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var pass = [],
	        fail = [];
	    _.each(obj, function (value, key, obj) {
	      (predicate(value, key, obj) ? pass : fail).push(value);
	    });
	    return [pass, fail];
	  };
	
	  // Array Functions
	  // ---------------
	
	  // Get the first element of an array. Passing **n** will return the first N
	  // values in the array. Aliased as `head` and `take`. The **guard** check
	  // allows it to work with `_.map`.
	  _.first = _.head = _.take = function (array, n, guard) {
	    if (array == null) return void 0;
	    if (n == null || guard) return array[0];
	    return _.initial(array, array.length - n);
	  };
	
	  // Returns everything but the last entry of the array. Especially useful on
	  // the arguments object. Passing **n** will return all the values in
	  // the array, excluding the last N.
	  _.initial = function (array, n, guard) {
	    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
	  };
	
	  // Get the last element of an array. Passing **n** will return the last N
	  // values in the array.
	  _.last = function (array, n, guard) {
	    if (array == null) return void 0;
	    if (n == null || guard) return array[array.length - 1];
	    return _.rest(array, Math.max(0, array.length - n));
	  };
	
	  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
	  // Especially useful on the arguments object. Passing an **n** will return
	  // the rest N values in the array.
	  _.rest = _.tail = _.drop = function (array, n, guard) {
	    return slice.call(array, n == null || guard ? 1 : n);
	  };
	
	  // Trim out all falsy values from an array.
	  _.compact = function (array) {
	    return _.filter(array, _.identity);
	  };
	
	  // Internal implementation of a recursive `flatten` function.
	  var flatten = function flatten(input, shallow, strict, startIndex) {
	    var output = [],
	        idx = 0;
	    for (var i = startIndex || 0, length = getLength(input); i < length; i++) {
	      var value = input[i];
	      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
	        //flatten current level of array or arguments object
	        if (!shallow) value = flatten(value, shallow, strict);
	        var j = 0,
	            len = value.length;
	        output.length += len;
	        while (j < len) {
	          output[idx++] = value[j++];
	        }
	      } else if (!strict) {
	        output[idx++] = value;
	      }
	    }
	    return output;
	  };
	
	  // Flatten out an array, either recursively (by default), or just one level.
	  _.flatten = function (array, shallow) {
	    return flatten(array, shallow, false);
	  };
	
	  // Return a version of the array that does not contain the specified value(s).
	  _.without = function (array) {
	    return _.difference(array, slice.call(arguments, 1));
	  };
	
	  // Produce a duplicate-free version of the array. If the array has already
	  // been sorted, you have the option of using a faster algorithm.
	  // Aliased as `unique`.
	  _.uniq = _.unique = function (array, isSorted, iteratee, context) {
	    if (!_.isBoolean(isSorted)) {
	      context = iteratee;
	      iteratee = isSorted;
	      isSorted = false;
	    }
	    if (iteratee != null) iteratee = cb(iteratee, context);
	    var result = [];
	    var seen = [];
	    for (var i = 0, length = getLength(array); i < length; i++) {
	      var value = array[i],
	          computed = iteratee ? iteratee(value, i, array) : value;
	      if (isSorted) {
	        if (!i || seen !== computed) result.push(value);
	        seen = computed;
	      } else if (iteratee) {
	        if (!_.contains(seen, computed)) {
	          seen.push(computed);
	          result.push(value);
	        }
	      } else if (!_.contains(result, value)) {
	        result.push(value);
	      }
	    }
	    return result;
	  };
	
	  // Produce an array that contains the union: each distinct element from all of
	  // the passed-in arrays.
	  _.union = function () {
	    return _.uniq(flatten(arguments, true, true));
	  };
	
	  // Produce an array that contains every item shared between all the
	  // passed-in arrays.
	  _.intersection = function (array) {
	    var result = [];
	    var argsLength = arguments.length;
	    for (var i = 0, length = getLength(array); i < length; i++) {
	      var item = array[i];
	      if (_.contains(result, item)) continue;
	      for (var j = 1; j < argsLength; j++) {
	        if (!_.contains(arguments[j], item)) break;
	      }
	      if (j === argsLength) result.push(item);
	    }
	    return result;
	  };
	
	  // Take the difference between one array and a number of other arrays.
	  // Only the elements present in just the first array will remain.
	  _.difference = function (array) {
	    var rest = flatten(arguments, true, true, 1);
	    return _.filter(array, function (value) {
	      return !_.contains(rest, value);
	    });
	  };
	
	  // Zip together multiple lists into a single array -- elements that share
	  // an index go together.
	  _.zip = function () {
	    return _.unzip(arguments);
	  };
	
	  // Complement of _.zip. Unzip accepts an array of arrays and groups
	  // each array's elements on shared indices
	  _.unzip = function (array) {
	    var length = array && _.max(array, getLength).length || 0;
	    var result = Array(length);
	
	    for (var index = 0; index < length; index++) {
	      result[index] = _.pluck(array, index);
	    }
	    return result;
	  };
	
	  // Converts lists into objects. Pass either a single array of `[key, value]`
	  // pairs, or two parallel arrays of the same length -- one of keys, and one of
	  // the corresponding values.
	  _.object = function (list, values) {
	    var result = {};
	    for (var i = 0, length = getLength(list); i < length; i++) {
	      if (values) {
	        result[list[i]] = values[i];
	      } else {
	        result[list[i][0]] = list[i][1];
	      }
	    }
	    return result;
	  };
	
	  // Generator function to create the findIndex and findLastIndex functions
	  function createPredicateIndexFinder(dir) {
	    return function (array, predicate, context) {
	      predicate = cb(predicate, context);
	      var length = getLength(array);
	      var index = dir > 0 ? 0 : length - 1;
	      for (; index >= 0 && index < length; index += dir) {
	        if (predicate(array[index], index, array)) return index;
	      }
	      return -1;
	    };
	  }
	
	  // Returns the first index on an array-like that passes a predicate test
	  _.findIndex = createPredicateIndexFinder(1);
	  _.findLastIndex = createPredicateIndexFinder(-1);
	
	  // Use a comparator function to figure out the smallest index at which
	  // an object should be inserted so as to maintain order. Uses binary search.
	  _.sortedIndex = function (array, obj, iteratee, context) {
	    iteratee = cb(iteratee, context, 1);
	    var value = iteratee(obj);
	    var low = 0,
	        high = getLength(array);
	    while (low < high) {
	      var mid = Math.floor((low + high) / 2);
	      if (iteratee(array[mid]) < value) low = mid + 1;else high = mid;
	    }
	    return low;
	  };
	
	  // Generator function to create the indexOf and lastIndexOf functions
	  function createIndexFinder(dir, predicateFind, sortedIndex) {
	    return function (array, item, idx) {
	      var i = 0,
	          length = getLength(array);
	      if (typeof idx == 'number') {
	        if (dir > 0) {
	          i = idx >= 0 ? idx : Math.max(idx + length, i);
	        } else {
	          length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
	        }
	      } else if (sortedIndex && idx && length) {
	        idx = sortedIndex(array, item);
	        return array[idx] === item ? idx : -1;
	      }
	      if (item !== item) {
	        idx = predicateFind(slice.call(array, i, length), _.isNaN);
	        return idx >= 0 ? idx + i : -1;
	      }
	      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
	        if (array[idx] === item) return idx;
	      }
	      return -1;
	    };
	  }
	
	  // Return the position of the first occurrence of an item in an array,
	  // or -1 if the item is not included in the array.
	  // If the array is large and already in sort order, pass `true`
	  // for **isSorted** to use binary search.
	  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
	  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);
	
	  // Generate an integer Array containing an arithmetic progression. A port of
	  // the native Python `range()` function. See
	  // [the Python documentation](http://docs.python.org/library/functions.html#range).
	  _.range = function (start, stop, step) {
	    if (stop == null) {
	      stop = start || 0;
	      start = 0;
	    }
	    step = step || 1;
	
	    var length = Math.max(Math.ceil((stop - start) / step), 0);
	    var range = Array(length);
	
	    for (var idx = 0; idx < length; idx++, start += step) {
	      range[idx] = start;
	    }
	
	    return range;
	  };
	
	  // Function (ahem) Functions
	  // ------------------
	
	  // Determines whether to execute a function as a constructor
	  // or a normal function with the provided arguments
	  var executeBound = function executeBound(sourceFunc, boundFunc, context, callingContext, args) {
	    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
	    var self = baseCreate(sourceFunc.prototype);
	    var result = sourceFunc.apply(self, args);
	    if (_.isObject(result)) return result;
	    return self;
	  };
	
	  // Create a function bound to a given object (assigning `this`, and arguments,
	  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
	  // available.
	  _.bind = function (func, context) {
	    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
	    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
	    var args = slice.call(arguments, 2);
	    var bound = function bound() {
	      return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
	    };
	    return bound;
	  };
	
	  // Partially apply a function by creating a version that has had some of its
	  // arguments pre-filled, without changing its dynamic `this` context. _ acts
	  // as a placeholder, allowing any combination of arguments to be pre-filled.
	  _.partial = function (func) {
	    var boundArgs = slice.call(arguments, 1);
	    var bound = function bound() {
	      var position = 0,
	          length = boundArgs.length;
	      var args = Array(length);
	      for (var i = 0; i < length; i++) {
	        args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
	      }
	      while (position < arguments.length) {
	        args.push(arguments[position++]);
	      }return executeBound(func, bound, this, this, args);
	    };
	    return bound;
	  };
	
	  // Bind a number of an object's methods to that object. Remaining arguments
	  // are the method names to be bound. Useful for ensuring that all callbacks
	  // defined on an object belong to it.
	  _.bindAll = function (obj) {
	    var i,
	        length = arguments.length,
	        key;
	    if (length <= 1) throw new Error('bindAll must be passed function names');
	    for (i = 1; i < length; i++) {
	      key = arguments[i];
	      obj[key] = _.bind(obj[key], obj);
	    }
	    return obj;
	  };
	
	  // Memoize an expensive function by storing its results.
	  _.memoize = function (func, hasher) {
	    var memoize = function memoize(key) {
	      var cache = memoize.cache;
	      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
	      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
	      return cache[address];
	    };
	    memoize.cache = {};
	    return memoize;
	  };
	
	  // Delays a function for the given number of milliseconds, and then calls
	  // it with the arguments supplied.
	  _.delay = function (func, wait) {
	    var args = slice.call(arguments, 2);
	    return setTimeout(function () {
	      return func.apply(null, args);
	    }, wait);
	  };
	
	  // Defers a function, scheduling it to run after the current call stack has
	  // cleared.
	  _.defer = _.partial(_.delay, _, 1);
	
	  // Returns a function, that, when invoked, will only be triggered at most once
	  // during a given window of time. Normally, the throttled function will run
	  // as much as it can, without ever going more than once per `wait` duration;
	  // but if you'd like to disable the execution on the leading edge, pass
	  // `{leading: false}`. To disable execution on the trailing edge, ditto.
	  _.throttle = function (func, wait, options) {
	    var context, args, result;
	    var timeout = null;
	    var previous = 0;
	    if (!options) options = {};
	    var later = function later() {
	      previous = options.leading === false ? 0 : _.now();
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    };
	    return function () {
	      var now = _.now();
	      if (!previous && options.leading === false) previous = now;
	      var remaining = wait - (now - previous);
	      context = this;
	      args = arguments;
	      if (remaining <= 0 || remaining > wait) {
	        if (timeout) {
	          clearTimeout(timeout);
	          timeout = null;
	        }
	        previous = now;
	        result = func.apply(context, args);
	        if (!timeout) context = args = null;
	      } else if (!timeout && options.trailing !== false) {
	        timeout = setTimeout(later, remaining);
	      }
	      return result;
	    };
	  };
	
	  // Returns a function, that, as long as it continues to be invoked, will not
	  // be triggered. The function will be called after it stops being called for
	  // N milliseconds. If `immediate` is passed, trigger the function on the
	  // leading edge, instead of the trailing.
	  _.debounce = function (func, wait, immediate) {
	    var timeout, args, context, timestamp, result;
	
	    var later = function later() {
	      var last = _.now() - timestamp;
	
	      if (last < wait && last >= 0) {
	        timeout = setTimeout(later, wait - last);
	      } else {
	        timeout = null;
	        if (!immediate) {
	          result = func.apply(context, args);
	          if (!timeout) context = args = null;
	        }
	      }
	    };
	
	    return function () {
	      context = this;
	      args = arguments;
	      timestamp = _.now();
	      var callNow = immediate && !timeout;
	      if (!timeout) timeout = setTimeout(later, wait);
	      if (callNow) {
	        result = func.apply(context, args);
	        context = args = null;
	      }
	
	      return result;
	    };
	  };
	
	  // Returns the first function passed as an argument to the second,
	  // allowing you to adjust arguments, run code before and after, and
	  // conditionally execute the original function.
	  _.wrap = function (func, wrapper) {
	    return _.partial(wrapper, func);
	  };
	
	  // Returns a negated version of the passed-in predicate.
	  _.negate = function (predicate) {
	    return function () {
	      return !predicate.apply(this, arguments);
	    };
	  };
	
	  // Returns a function that is the composition of a list of functions, each
	  // consuming the return value of the function that follows.
	  _.compose = function () {
	    var args = arguments;
	    var start = args.length - 1;
	    return function () {
	      var i = start;
	      var result = args[start].apply(this, arguments);
	      while (i--) {
	        result = args[i].call(this, result);
	      }return result;
	    };
	  };
	
	  // Returns a function that will only be executed on and after the Nth call.
	  _.after = function (times, func) {
	    return function () {
	      if (--times < 1) {
	        return func.apply(this, arguments);
	      }
	    };
	  };
	
	  // Returns a function that will only be executed up to (but not including) the Nth call.
	  _.before = function (times, func) {
	    var memo;
	    return function () {
	      if (--times > 0) {
	        memo = func.apply(this, arguments);
	      }
	      if (times <= 1) func = null;
	      return memo;
	    };
	  };
	
	  // Returns a function that will be executed at most one time, no matter how
	  // often you call it. Useful for lazy initialization.
	  _.once = _.partial(_.before, 2);
	
	  // Object Functions
	  // ----------------
	
	  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
	  var hasEnumBug = !{ toString: null }.propertyIsEnumerable('toString');
	  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString', 'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];
	
	  function collectNonEnumProps(obj, keys) {
	    var nonEnumIdx = nonEnumerableProps.length;
	    var constructor = obj.constructor;
	    var proto = _.isFunction(constructor) && constructor.prototype || ObjProto;
	
	    // Constructor is a special case.
	    var prop = 'constructor';
	    if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);
	
	    while (nonEnumIdx--) {
	      prop = nonEnumerableProps[nonEnumIdx];
	      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
	        keys.push(prop);
	      }
	    }
	  }
	
	  // Retrieve the names of an object's own properties.
	  // Delegates to **ECMAScript 5**'s native `Object.keys`
	  _.keys = function (obj) {
	    if (!_.isObject(obj)) return [];
	    if (nativeKeys) return nativeKeys(obj);
	    var keys = [];
	    for (var key in obj) {
	      if (_.has(obj, key)) keys.push(key);
	    } // Ahem, IE < 9.
	    if (hasEnumBug) collectNonEnumProps(obj, keys);
	    return keys;
	  };
	
	  // Retrieve all the property names of an object.
	  _.allKeys = function (obj) {
	    if (!_.isObject(obj)) return [];
	    var keys = [];
	    for (var key in obj) {
	      keys.push(key);
	    } // Ahem, IE < 9.
	    if (hasEnumBug) collectNonEnumProps(obj, keys);
	    return keys;
	  };
	
	  // Retrieve the values of an object's properties.
	  _.values = function (obj) {
	    var keys = _.keys(obj);
	    var length = keys.length;
	    var values = Array(length);
	    for (var i = 0; i < length; i++) {
	      values[i] = obj[keys[i]];
	    }
	    return values;
	  };
	
	  // Returns the results of applying the iteratee to each element of the object
	  // In contrast to _.map it returns an object
	  _.mapObject = function (obj, iteratee, context) {
	    iteratee = cb(iteratee, context);
	    var keys = _.keys(obj),
	        length = keys.length,
	        results = {},
	        currentKey;
	    for (var index = 0; index < length; index++) {
	      currentKey = keys[index];
	      results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
	    }
	    return results;
	  };
	
	  // Convert an object into a list of `[key, value]` pairs.
	  _.pairs = function (obj) {
	    var keys = _.keys(obj);
	    var length = keys.length;
	    var pairs = Array(length);
	    for (var i = 0; i < length; i++) {
	      pairs[i] = [keys[i], obj[keys[i]]];
	    }
	    return pairs;
	  };
	
	  // Invert the keys and values of an object. The values must be serializable.
	  _.invert = function (obj) {
	    var result = {};
	    var keys = _.keys(obj);
	    for (var i = 0, length = keys.length; i < length; i++) {
	      result[obj[keys[i]]] = keys[i];
	    }
	    return result;
	  };
	
	  // Return a sorted list of the function names available on the object.
	  // Aliased as `methods`
	  _.functions = _.methods = function (obj) {
	    var names = [];
	    for (var key in obj) {
	      if (_.isFunction(obj[key])) names.push(key);
	    }
	    return names.sort();
	  };
	
	  // Extend a given object with all the properties in passed-in object(s).
	  _.extend = createAssigner(_.allKeys);
	
	  // Assigns a given object with all the own properties in the passed-in object(s)
	  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
	  _.extendOwn = _.assign = createAssigner(_.keys);
	
	  // Returns the first key on an object that passes a predicate test
	  _.findKey = function (obj, predicate, context) {
	    predicate = cb(predicate, context);
	    var keys = _.keys(obj),
	        key;
	    for (var i = 0, length = keys.length; i < length; i++) {
	      key = keys[i];
	      if (predicate(obj[key], key, obj)) return key;
	    }
	  };
	
	  // Return a copy of the object only containing the whitelisted properties.
	  _.pick = function (object, oiteratee, context) {
	    var result = {},
	        obj = object,
	        iteratee,
	        keys;
	    if (obj == null) return result;
	    if (_.isFunction(oiteratee)) {
	      keys = _.allKeys(obj);
	      iteratee = optimizeCb(oiteratee, context);
	    } else {
	      keys = flatten(arguments, false, false, 1);
	      iteratee = function iteratee(value, key, obj) {
	        return key in obj;
	      };
	      obj = Object(obj);
	    }
	    for (var i = 0, length = keys.length; i < length; i++) {
	      var key = keys[i];
	      var value = obj[key];
	      if (iteratee(value, key, obj)) result[key] = value;
	    }
	    return result;
	  };
	
	  // Return a copy of the object without the blacklisted properties.
	  _.omit = function (obj, iteratee, context) {
	    if (_.isFunction(iteratee)) {
	      iteratee = _.negate(iteratee);
	    } else {
	      var keys = _.map(flatten(arguments, false, false, 1), String);
	      iteratee = function iteratee(value, key) {
	        return !_.contains(keys, key);
	      };
	    }
	    return _.pick(obj, iteratee, context);
	  };
	
	  // Fill in a given object with default properties.
	  _.defaults = createAssigner(_.allKeys, true);
	
	  // Creates an object that inherits from the given prototype object.
	  // If additional properties are provided then they will be added to the
	  // created object.
	  _.create = function (prototype, props) {
	    var result = baseCreate(prototype);
	    if (props) _.extendOwn(result, props);
	    return result;
	  };
	
	  // Create a (shallow-cloned) duplicate of an object.
	  _.clone = function (obj) {
	    if (!_.isObject(obj)) return obj;
	    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
	  };
	
	  // Invokes interceptor with the obj, and then returns obj.
	  // The primary purpose of this method is to "tap into" a method chain, in
	  // order to perform operations on intermediate results within the chain.
	  _.tap = function (obj, interceptor) {
	    interceptor(obj);
	    return obj;
	  };
	
	  // Returns whether an object has a given set of `key:value` pairs.
	  _.isMatch = function (object, attrs) {
	    var keys = _.keys(attrs),
	        length = keys.length;
	    if (object == null) return !length;
	    var obj = Object(object);
	    for (var i = 0; i < length; i++) {
	      var key = keys[i];
	      if (attrs[key] !== obj[key] || !(key in obj)) return false;
	    }
	    return true;
	  };
	
	  // Internal recursive comparison function for `isEqual`.
	  var eq = function eq(a, b, aStack, bStack) {
	    // Identical objects are equal. `0 === -0`, but they aren't identical.
	    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
	    if (a === b) return a !== 0 || 1 / a === 1 / b;
	    // A strict comparison is necessary because `null == undefined`.
	    if (a == null || b == null) return a === b;
	    // Unwrap any wrapped objects.
	    if (a instanceof _) a = a._wrapped;
	    if (b instanceof _) b = b._wrapped;
	    // Compare `[[Class]]` names.
	    var className = toString.call(a);
	    if (className !== toString.call(b)) return false;
	    switch (className) {
	      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
	      case '[object RegExp]':
	      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
	      case '[object String]':
	        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
	        // equivalent to `new String("5")`.
	        return '' + a === '' + b;
	      case '[object Number]':
	        // `NaN`s are equivalent, but non-reflexive.
	        // Object(NaN) is equivalent to NaN
	        if (+a !== +a) return +b !== +b;
	        // An `egal` comparison is performed for other numeric values.
	        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
	      case '[object Date]':
	      case '[object Boolean]':
	        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
	        // millisecond representations. Note that invalid dates with millisecond representations
	        // of `NaN` are not equivalent.
	        return +a === +b;
	    }
	
	    var areArrays = className === '[object Array]';
	    if (!areArrays) {
	      if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) != 'object' || (typeof b === 'undefined' ? 'undefined' : _typeof(b)) != 'object') return false;
	
	      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
	      // from different frames are.
	      var aCtor = a.constructor,
	          bCtor = b.constructor;
	      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor && _.isFunction(bCtor) && bCtor instanceof bCtor) && 'constructor' in a && 'constructor' in b) {
	        return false;
	      }
	    }
	    // Assume equality for cyclic structures. The algorithm for detecting cyclic
	    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
	
	    // Initializing stack of traversed objects.
	    // It's done here since we only need them for objects and arrays comparison.
	    aStack = aStack || [];
	    bStack = bStack || [];
	    var length = aStack.length;
	    while (length--) {
	      // Linear search. Performance is inversely proportional to the number of
	      // unique nested structures.
	      if (aStack[length] === a) return bStack[length] === b;
	    }
	
	    // Add the first object to the stack of traversed objects.
	    aStack.push(a);
	    bStack.push(b);
	
	    // Recursively compare objects and arrays.
	    if (areArrays) {
	      // Compare array lengths to determine if a deep comparison is necessary.
	      length = a.length;
	      if (length !== b.length) return false;
	      // Deep compare the contents, ignoring non-numeric properties.
	      while (length--) {
	        if (!eq(a[length], b[length], aStack, bStack)) return false;
	      }
	    } else {
	      // Deep compare objects.
	      var keys = _.keys(a),
	          key;
	      length = keys.length;
	      // Ensure that both objects contain the same number of properties before comparing deep equality.
	      if (_.keys(b).length !== length) return false;
	      while (length--) {
	        // Deep compare each member
	        key = keys[length];
	        if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
	      }
	    }
	    // Remove the first object from the stack of traversed objects.
	    aStack.pop();
	    bStack.pop();
	    return true;
	  };
	
	  // Perform a deep comparison to check if two objects are equal.
	  _.isEqual = function (a, b) {
	    return eq(a, b);
	  };
	
	  // Is a given array, string, or object empty?
	  // An "empty" object has no enumerable own-properties.
	  _.isEmpty = function (obj) {
	    if (obj == null) return true;
	    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
	    return _.keys(obj).length === 0;
	  };
	
	  // Is a given value a DOM element?
	  _.isElement = function (obj) {
	    return !!(obj && obj.nodeType === 1);
	  };
	
	  // Is a given value an array?
	  // Delegates to ECMA5's native Array.isArray
	  _.isArray = nativeIsArray || function (obj) {
	    return toString.call(obj) === '[object Array]';
	  };
	
	  // Is a given variable an object?
	  _.isObject = function (obj) {
	    var type = typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
	    return type === 'function' || type === 'object' && !!obj;
	  };
	
	  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
	  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function (name) {
	    _['is' + name] = function (obj) {
	      return toString.call(obj) === '[object ' + name + ']';
	    };
	  });
	
	  // Define a fallback version of the method in browsers (ahem, IE < 9), where
	  // there isn't any inspectable "Arguments" type.
	  if (!_.isArguments(arguments)) {
	    _.isArguments = function (obj) {
	      return _.has(obj, 'callee');
	    };
	  }
	
	  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
	  // IE 11 (#1621), and in Safari 8 (#1929).
	  if (typeof /./ != 'function' && (typeof Int8Array === 'undefined' ? 'undefined' : _typeof(Int8Array)) != 'object') {
	    _.isFunction = function (obj) {
	      return typeof obj == 'function' || false;
	    };
	  }
	
	  // Is a given object a finite number?
	  _.isFinite = function (obj) {
	    return isFinite(obj) && !isNaN(parseFloat(obj));
	  };
	
	  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
	  _.isNaN = function (obj) {
	    return _.isNumber(obj) && obj !== +obj;
	  };
	
	  // Is a given value a boolean?
	  _.isBoolean = function (obj) {
	    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
	  };
	
	  // Is a given value equal to null?
	  _.isNull = function (obj) {
	    return obj === null;
	  };
	
	  // Is a given variable undefined?
	  _.isUndefined = function (obj) {
	    return obj === void 0;
	  };
	
	  // Shortcut function for checking if an object has a given property directly
	  // on itself (in other words, not on a prototype).
	  _.has = function (obj, key) {
	    return obj != null && hasOwnProperty.call(obj, key);
	  };
	
	  // Utility Functions
	  // -----------------
	
	  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
	  // previous owner. Returns a reference to the Underscore object.
	  _.noConflict = function () {
	    root._ = previousUnderscore;
	    return this;
	  };
	
	  // Keep the identity function around for default iteratees.
	  _.identity = function (value) {
	    return value;
	  };
	
	  // Predicate-generating functions. Often useful outside of Underscore.
	  _.constant = function (value) {
	    return function () {
	      return value;
	    };
	  };
	
	  _.noop = function () {};
	
	  _.property = property;
	
	  // Generates a function for a given object that returns a given property.
	  _.propertyOf = function (obj) {
	    return obj == null ? function () {} : function (key) {
	      return obj[key];
	    };
	  };
	
	  // Returns a predicate for checking whether an object has a given set of
	  // `key:value` pairs.
	  _.matcher = _.matches = function (attrs) {
	    attrs = _.extendOwn({}, attrs);
	    return function (obj) {
	      return _.isMatch(obj, attrs);
	    };
	  };
	
	  // Run a function **n** times.
	  _.times = function (n, iteratee, context) {
	    var accum = Array(Math.max(0, n));
	    iteratee = optimizeCb(iteratee, context, 1);
	    for (var i = 0; i < n; i++) {
	      accum[i] = iteratee(i);
	    }return accum;
	  };
	
	  // Return a random integer between min and max (inclusive).
	  _.random = function (min, max) {
	    if (max == null) {
	      max = min;
	      min = 0;
	    }
	    return min + Math.floor(Math.random() * (max - min + 1));
	  };
	
	  // A (possibly faster) way to get the current timestamp as an integer.
	  _.now = Date.now || function () {
	    return new Date().getTime();
	  };
	
	  // List of HTML entities for escaping.
	  var escapeMap = {
	    '&': '&amp;',
	    '<': '&lt;',
	    '>': '&gt;',
	    '"': '&quot;',
	    "'": '&#x27;',
	    '`': '&#x60;'
	  };
	  var unescapeMap = _.invert(escapeMap);
	
	  // Functions for escaping and unescaping strings to/from HTML interpolation.
	  var createEscaper = function createEscaper(map) {
	    var escaper = function escaper(match) {
	      return map[match];
	    };
	    // Regexes for identifying a key that needs to be escaped
	    var source = '(?:' + _.keys(map).join('|') + ')';
	    var testRegexp = RegExp(source);
	    var replaceRegexp = RegExp(source, 'g');
	    return function (string) {
	      string = string == null ? '' : '' + string;
	      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
	    };
	  };
	  _.escape = createEscaper(escapeMap);
	  _.unescape = createEscaper(unescapeMap);
	
	  // If the value of the named `property` is a function then invoke it with the
	  // `object` as context; otherwise, return it.
	  _.result = function (object, property, fallback) {
	    var value = object == null ? void 0 : object[property];
	    if (value === void 0) {
	      value = fallback;
	    }
	    return _.isFunction(value) ? value.call(object) : value;
	  };
	
	  // Generate a unique integer id (unique within the entire client session).
	  // Useful for temporary DOM ids.
	  var idCounter = 0;
	  _.uniqueId = function (prefix) {
	    var id = ++idCounter + '';
	    return prefix ? prefix + id : id;
	  };
	
	  // By default, Underscore uses ERB-style template delimiters, change the
	  // following template settings to use alternative delimiters.
	  _.templateSettings = {
	    evaluate: /<%([\s\S]+?)%>/g,
	    interpolate: /<%=([\s\S]+?)%>/g,
	    escape: /<%-([\s\S]+?)%>/g
	  };
	
	  // When customizing `templateSettings`, if you don't want to define an
	  // interpolation, evaluation or escaping regex, we need one that is
	  // guaranteed not to match.
	  var noMatch = /(.)^/;
	
	  // Certain characters need to be escaped so that they can be put into a
	  // string literal.
	  var escapes = {
	    "'": "'",
	    '\\': '\\',
	    '\r': 'r',
	    '\n': 'n',
	    '\u2028': 'u2028',
	    '\u2029': 'u2029'
	  };
	
	  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;
	
	  var escapeChar = function escapeChar(match) {
	    return '\\' + escapes[match];
	  };
	
	  // JavaScript micro-templating, similar to John Resig's implementation.
	  // Underscore templating handles arbitrary delimiters, preserves whitespace,
	  // and correctly escapes quotes within interpolated code.
	  // NB: `oldSettings` only exists for backwards compatibility.
	  _.template = function (text, settings, oldSettings) {
	    if (!settings && oldSettings) settings = oldSettings;
	    settings = _.defaults({}, settings, _.templateSettings);
	
	    // Combine delimiters into one regular expression via alternation.
	    var matcher = RegExp([(settings.escape || noMatch).source, (settings.interpolate || noMatch).source, (settings.evaluate || noMatch).source].join('|') + '|$', 'g');
	
	    // Compile the template source, escaping string literals appropriately.
	    var index = 0;
	    var source = "__p+='";
	    text.replace(matcher, function (match, escape, interpolate, evaluate, offset) {
	      source += text.slice(index, offset).replace(escaper, escapeChar);
	      index = offset + match.length;
	
	      if (escape) {
	        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
	      } else if (interpolate) {
	        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
	      } else if (evaluate) {
	        source += "';\n" + evaluate + "\n__p+='";
	      }
	
	      // Adobe VMs need the match returned to produce the correct offest.
	      return match;
	    });
	    source += "';\n";
	
	    // If a variable is not specified, place data values in local scope.
	    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';
	
	    source = "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\n" + source + 'return __p;\n';
	
	    try {
	      var render = new Function(settings.variable || 'obj', '_', source);
	    } catch (e) {
	      e.source = source;
	      throw e;
	    }
	
	    var template = function template(data) {
	      return render.call(this, data, _);
	    };
	
	    // Provide the compiled source as a convenience for precompilation.
	    var argument = settings.variable || 'obj';
	    template.source = 'function(' + argument + '){\n' + source + '}';
	
	    return template;
	  };
	
	  // Add a "chain" function. Start chaining a wrapped Underscore object.
	  _.chain = function (obj) {
	    var instance = _(obj);
	    instance._chain = true;
	    return instance;
	  };
	
	  // OOP
	  // ---------------
	  // If Underscore is called as a function, it returns a wrapped object that
	  // can be used OO-style. This wrapper holds altered versions of all the
	  // underscore functions. Wrapped objects may be chained.
	
	  // Helper function to continue chaining intermediate results.
	  var result = function result(instance, obj) {
	    return instance._chain ? _(obj).chain() : obj;
	  };
	
	  // Add your own custom functions to the Underscore object.
	  _.mixin = function (obj) {
	    _.each(_.functions(obj), function (name) {
	      var func = _[name] = obj[name];
	      _.prototype[name] = function () {
	        var args = [this._wrapped];
	        push.apply(args, arguments);
	        return result(this, func.apply(_, args));
	      };
	    });
	  };
	
	  // Add all of the Underscore functions to the wrapper object.
	  _.mixin(_);
	
	  // Add all mutator Array functions to the wrapper.
	  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function (name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function () {
	      var obj = this._wrapped;
	      method.apply(obj, arguments);
	      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
	      return result(this, obj);
	    };
	  });
	
	  // Add all accessor Array functions to the wrapper.
	  _.each(['concat', 'join', 'slice'], function (name) {
	    var method = ArrayProto[name];
	    _.prototype[name] = function () {
	      return result(this, method.apply(this._wrapped, arguments));
	    };
	  });
	
	  // Extracts the result from a wrapped and chained object.
	  _.prototype.value = function () {
	    return this._wrapped;
	  };
	
	  // Provide unwrapping proxy for some methods used in engine operations
	  // such as arithmetic and JSON stringification.
	  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;
	
	  _.prototype.toString = function () {
	    return '' + this._wrapped;
	  };
	
	  // AMD registration happens at the end for compatibility with AMD loaders
	  // that may not enforce next-turn semantics on modules. Even though general
	  // practice for AMD registration is to be anonymous, underscore registers
	  // as a named module because, like jQuery, it is a base library that is
	  // popular enough to be bundled in a third party lib, but not be part of
	  // an AMD load request. Those cases could generate an error when an
	  // anonymous define() is called outside of a loader request.
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	      return _;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	}).call(undefined);

/***/ },
/* 131 */
/*!***********************!*\
  !*** ./src/events.js ***!
  \***********************/
/***/ function(module, exports) {

	"use strict";
	
	var eventSplitter = /\s+/;
	
	/**
	 * @class
	 *
	 * <p>Parse.Events is a fork of Backbone's Events module, provided for your
	 * convenience.</p>
	 *
	 * <p>A module that can be mixed in to any object in order to provide
	 * it with custom events. You may bind callback functions to an event
	 * with `on`, or remove these functions with `off`.
	 * Triggering an event fires all callbacks in the order that `on` was
	 * called.
	 *
	 * <pre>
	 *     var object = {}
	 *     _.extend(object, Parse.Events)
	 *     object.on('expand', function(){ alert('expanded'); })
	 *     object.trigger('expand');</pre></p>
	 *
	 * <p>For more information, see the
	 * <a href="http://documentcloud.github.com/backbone/#Events">Backbone
	 * documentation</a>.</p>
	 */
	var Events = {
	  /**
	   * Bind one or more space separated events, `events`, to a `callback`
	   * function. Passing `"all"` will bind the callback to all events fired.
	   */
	  on: function on(events, callback, context) {
	    var calls = void 0;
	    var event = void 0;
	    var node = void 0;
	    var tail = void 0;
	    var list = void 0;
	
	    if (!callback) {
	      return this;
	    }
	    events = events.split(eventSplitter);
	    calls = this._callbacks || (this._callbacks = {});
	
	    // Create an immutable callback list, allowing traversal during
	    // modification.  The tail is an empty object that will always be used
	    // as the next node.
	    event = events.shift();
	
	    while (event) {
	      list = calls[event];
	      node = list ? list.tail : {};
	      node.next = tail = {};
	      node.context = context;
	      node.callback = callback;
	      calls[event] = { tail: tail, next: list ? list.next : node };
	      event = events.shift();
	    }
	
	    return this;
	  },
	
	  /**
	   * Remove one or many callbacks. If `context` is null, removes all callbacks
	   * with that function. If `callback` is null, removes all callbacks for the
	   * event. If `events` is null, removes all bound callbacks for all events.
	   */
	  off: function off(events, callback, context) {
	    var event = void 0;
	    var calls = void 0;
	    var node = void 0;
	    var tail = void 0;
	    var cb = void 0;
	    var ctx = void 0;
	
	    // No events, or removing *all* events.
	    if (!(calls = this._callbacks)) {
	      return;
	    }
	
	    if (!(events || callback || context)) {
	      delete this._callbacks;
	      return this;
	    }
	
	    // Loop through the listed events and contexts, splicing them out of the
	    // linked list of callbacks if appropriate.
	    events = events ? events.split(eventSplitter) : Object.keys(calls);
	    event = events.shift();
	
	    while (event) {
	      node = calls[event];
	      delete calls[event];
	
	      if (!node || !(callback || context)) {
	        event = events.shift();
	        continue;
	      }
	
	      // Create a new list, omitting the indicated callbacks.
	      tail = node.tail;
	      node = node.next;
	
	      while (node !== tail) {
	        cb = node.callback;
	        ctx = node.context;
	        if (callback && cb !== callback || context && ctx !== context) {
	          this.on(event, cb, ctx);
	        }
	        node = node.next;
	      }
	
	      event = events.shift();
	    }
	
	    return this;
	  },
	
	  /**
	   * Trigger one or many events, firing all bound callbacks. Callbacks are
	   * passed the same arguments as `trigger` is, apart from the event name
	   * (unless you're listening on `"all"`, which will cause your callback to
	   * receive the true name of the event as the first argument).
	   */
	  trigger: function trigger(events) {
	    var event = void 0;
	    var node = void 0;
	    var calls = void 0;
	    var tail = void 0;
	    var args = void 0;
	    var all = void 0;
	    var rest = void 0;
	
	    if (!(calls = this._callbacks)) {
	      return this;
	    }
	
	    all = calls.all;
	    events = events.split(eventSplitter);
	    rest = Array.slice.call(arguments, 1);
	
	    // For each event, walk through the linked list of callbacks twice,
	    // first to trigger the event, then to trigger any `"all"` callbacks.
	    event = events.shift();
	
	    while (event) {
	      node = calls[event];
	
	      if (node) {
	        tail = node.tail;
	        while ((node = node.next) !== tail) {
	          node.callback.apply(node.context || this, rest);
	        }
	      }
	
	      node = all;
	
	      if (node) {
	        tail = node.tail;
	        args = [event].concat(rest);
	        while ((node = node.next) !== tail) {
	          node.callback.apply(node.context || this, args);
	        }
	      }
	
	      event = events.shift();
	    }
	
	    return this;
	  }
	};
	
	/**
	 * @function
	 */
	Events.bind = Events.on;
	
	/**
	 * @function
	 */
	Events.unbind = Events.off;
	
	module.exports = Events;

/***/ },
/* 132 */
/*!***********************!*\
  !*** ./src/extend.js ***!
  \***********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _ = __webpack_require__(/*! underscore */ 130);
	
	// Shared empty constructor function to aid in prototype-chain creation.
	var EmptyConstructor = function EmptyConstructor() {};
	
	// Helper function to correctly set up the prototype chain, for subclasses.
	// Similar to `goog.inherits`, but uses a hash of prototype properties and
	// class properties to be extended.
	function inherits(parent, protoProps, staticProps) {
	  var child = void 0;
	
	  // The constructor function for the new subclass is either defined by you
	  // (the "constructor" property in your `extend` definition), or defaulted
	  // by us to simply call the parent's constructor.
	  if (protoProps && protoProps.hasOwnProperty('constructor')) {
	    child = protoProps.constructor;
	  } else {
	    /** @ignore */
	    child = function child() {
	      parent.apply(this, arguments);
	    };
	  }
	
	  // Inherit class (static) properties from parent.
	  _.extend(child, parent);
	
	  // Set the prototype chain to inherit from `parent`, without calling
	  // `parent`'s constructor function.
	  EmptyConstructor.prototype = parent.prototype;
	  child.prototype = new EmptyConstructor();
	
	  // Add prototype properties (instance properties) to the subclass,
	  // if supplied.
	  if (protoProps) {
	    _.extend(child.prototype, protoProps);
	  }
	
	  // Add static properties to the constructor function, if supplied.
	  if (staticProps) {
	    _.extend(child, staticProps);
	  }
	
	  // Correctly set child's `prototype.constructor`.
	  child.prototype.constructor = child;
	
	  // Set a convenience property in case the parent's prototype is
	  // needed later.
	  child.__super__ = parent.prototype;
	
	  return child;
	}
	
	// A self-propagating extend function.
	module.exports = function extend(protoProps, classProps) {
	  var child = inherits(this, protoProps, classProps);
	  child.extend = this.extend;
	  return child;
	};

/***/ },
/* 133 */
/*!******************************************!*\
  !*** ./src/helpers/isNullOrUndefined.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _ = __webpack_require__(/*! underscore */ 130);
	
	module.exports = function isNullOrUndefined(x) {
	  return _.isNull(x) || _.isUndefined(x);
	};

/***/ },
/* 134 */
/*!************************!*\
  !*** ./src/history.js ***!
  \************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _ = __webpack_require__(/*! underscore */ 130);
	var Events = __webpack_require__(/*! ./events */ 131);
	var isNullOrUndefined = __webpack_require__(/*! ./helpers/isNullOrUndefined */ 133);
	
	/**
	 * History serves as a global router (per frame) to handle hashchange
	 * events or pushState, match the appropriate route, and trigger
	 * callbacks. You shouldn't ever have to create one of these yourself
	 * — you should use the reference to <code>Parse.history</code>
	 * that will be created for you automatically if you make use of
	 * Routers with routes.
	 * @class
	 *
	 * <p>A fork of Backbone.History, provided for your convenience.  If you
	 * use this class, you must also include jQuery, or another library
	 * that provides a jQuery-compatible $ function.  For more information,
	 * see the <a href="http://documentcloud.github.com/backbone/#History">
	 * Backbone documentation</a>.</p>
	 * <p><strong><em>Available in the client SDK only.</em></strong></p>
	 */
	function History() {
	  this.handlers = [];
	  _.bindAll(this, 'checkUrl');
	}
	
	// Cached regex for cleaning leading hashes and slashes .
	var routeStripper = /^[#\/]/;
	
	// Cached regex for detecting MSIE.
	var isExplorer = /msie [\w.]+/;
	
	// Has the history handling already been started?
	History.started = false;
	
	// Set up all inheritable **Parse.History** properties and methods.
	_.extend(History.prototype, Events, {
	  // The default interval to poll for hash changes, if necessary, is
	  // twenty times a second.
	  interval: 50,
	
	  // Gets the true hash value. Cannot use location.hash directly due to bug
	  // in Firefox where location.hash will always be decoded.
	  getHash: function getHash(windowOverride) {
	    var loc = windowOverride ? windowOverride.location : window.location;
	    var match = loc.href.match(/#(.*)$/);
	
	    return match ? match[1] : '';
	  },
	
	  // Get the cross-browser normalized URL fragment, either from the URL,
	  // the hash, or the override.
	  getFragment: function getFragment(fragment, forcePushState) {
	    if (isNullOrUndefined(fragment)) {
	      if (this._hasPushState || forcePushState) {
	        fragment = window.location.pathname;
	
	        var search = window.location.search;
	
	        if (search) {
	          fragment += search;
	        }
	      } else {
	        fragment = this.getHash();
	      }
	    }
	
	    if (!fragment.indexOf(this.options.root)) {
	      fragment = fragment.substr(this.options.root.length);
	    }
	
	    return fragment.replace(routeStripper, '');
	  },
	
	  /**
	   * Start the hash change handling, returning `true` if the current
	   * URL matches an existing route, and `false` otherwise.
	   */
	  start: function start() {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	    if (History.started) {
	      throw new Error('Parse.history has already been started');
	    }
	
	    History.started = true;
	
	    // Figure out the initial configuration. Do we need an iframe?
	    // Is pushState desired ... is it available?
	    this.options = _.extend({}, { root: '/' }, this.options, options);
	    this._wantsHashChange = this.options.hashChange !== false;
	    this._wantsPushState = !!this.options.pushState;
	    this._hasPushState = !!(this.options.pushState && window.history && window.history.pushState);
	
	    var fragment = this.getFragment();
	    var docMode = document.documentMode;
	    var oldIE = isExplorer.exec(navigator.userAgent.toLowerCase()) && (!docMode || docMode <= 7);
	
	    if (oldIE) {
	      this.iframe = $('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo('body')[0].contentWindow;
	      this.navigate(fragment);
	    }
	
	    // Depending on whether we're using pushState or hashes, and whether
	    // 'onhashchange' is supported, determine how we check the URL state.
	    if (this._hasPushState) {
	      $(window).bind('popstate', this.checkUrl);
	    } else if (this._wantsHashChange && 'onhashchange' in window && !oldIE) {
	      $(window).bind('hashchange', this.checkUrl);
	    } else if (this._wantsHashChange) {
	      this._checkUrlInterval = window.setInterval(this.checkUrl, this.interval);
	    }
	
	    // Determine if we need to change the base url, for a pushState link
	    // opened by a non-pushState browser.
	    this.fragment = fragment;
	    var loc = window.location;
	    var atRoot = loc.pathname === this.options.root;
	
	    // If we've started off with a route from a `pushState`-enabled browser,
	    // but we're currently in a browser that doesn't support it...
	    if (this._wantsHashChange && this._wantsPushState && !this._hasPushState && !atRoot) {
	      this.fragment = this.getFragment(null, true);
	      window.location.replace(this.options.root + '#' + this.fragment);
	      // Return immediately as browser will do redirect to new url
	      return true;
	      // Or if we've started out with a hash-based route, but we're currently
	      // in a browser where it could be `pushState`-based instead...
	    } else if (this._wantsPushState && this._hasPushState && atRoot && loc.hash) {
	      this.fragment = this.getHash().replace(routeStripper, '');
	      window.history.replaceState({}, document.title, loc.protocol + '//' + loc.host + this.options.root + this.fragment);
	    }
	
	    if (!this.options.silent) {
	      return this.loadUrl();
	    }
	  },
	
	  // Disable Parse.history, perhaps temporarily. Not useful in a real app,
	  // but possibly useful for unit testing Routers.
	  stop: function stop() {
	    $(window).unbind('popstate', this.checkUrl).unbind('hashchange', this.checkUrl);
	    window.clearInterval(this._checkUrlInterval);
	    History.started = false;
	  },
	
	  // Add a route to be tested when the fragment changes. Routes added later
	  // may override previous routes.
	  route: function route(_route, callback) {
	    this.handlers.unshift({ route: _route, callback: callback });
	  },
	
	  // Checks the current URL to see if it has changed, and if it has,
	  // calls `loadUrl`, normalizing across the hidden iframe.
	  checkUrl: function checkUrl(e) {
	    var current = this.getFragment();
	
	    if (current === this.fragment && this.iframe) {
	      current = this.getFragment(this.getHash(this.iframe));
	    }
	
	    if (current === this.fragment) {
	      return false;
	    }
	
	    if (this.iframe) {
	      this.navigate(current);
	    }
	
	    if (!this.loadUrl()) {
	      this.loadUrl(this.getHash());
	    }
	  },
	
	  // Attempt to load the current URL fragment. If a route succeeds with a
	  // match, returns `true`. If no defined routes matches the fragment,
	  // returns `false`.
	  loadUrl: function loadUrl(fragmentOverride) {
	    var fragment = this.fragment = this.getFragment(fragmentOverride);
	    var matched = _.any(this.handlers, function (handler) {
	      if (handler.route.test(fragment)) {
	        handler.callback(fragment);
	        return true;
	      }
	    });
	
	    return matched;
	  },
	
	  // Save a fragment into the hash history, or replace the URL state if the
	  // 'replace' option is passed. You are responsible for properly URL-encoding
	  // the fragment in advance.
	  //
	  // The options object can contain `trigger: true` if you wish to have the
	  // route callback be fired (not usually desirable), or `replace: true`, if
	  // you wish to modify the current URL without adding an entry to the
	  // history.
	  navigate: function navigate(fragment, options) {
	    if (!History.started) {
	      return false;
	    }
	
	    if (!options || options === true) {
	      options = { trigger: options };
	    }
	
	    var frag = (fragment || '').replace(routeStripper, '');
	
	    if (this.fragment === frag) {
	      return;
	    }
	
	    // If pushState is available, we use it to set the fragment as a real URL.
	    if (this._hasPushState) {
	      if (frag.indexOf(this.options.root) !== 0) {
	        frag = this.options.root + frag;
	      }
	
	      this.fragment = frag;
	      var replaceOrPush = options.replace ? 'replaceState' : 'pushState';
	      window.history[replaceOrPush]({}, document.title, frag);
	
	      // If hash changes haven't been explicitly disabled, update the hash
	      // fragment to store history.
	    } else if (this._wantsHashChange) {
	      this.fragment = frag;
	      this._updateHash(window.location, frag, options.replace);
	
	      if (this.iframe && frag !== this.getFragment(this.getHash(this.iframe))) {
	        // Opening and closing the iframe tricks IE7 and earlier
	        // to push a history entry on hash-tag change.
	        // When replace is true, we don't want this.
	        if (!options.replace) {
	          this.iframe.document.open().close();
	        }
	
	        this._updateHash(this.iframe.location, frag, options.replace);
	      }
	      // If you've told us that you explicitly don't want fallback hashchange-
	      // based history, then `navigate` becomes a page refresh.
	    } else {
	      window.location.assign(this.options.root + fragment);
	    }
	
	    if (options.trigger) {
	      this.loadUrl(fragment);
	    }
	  },
	
	  // Update the hash location, either replacing the current entry, or adding
	  // a new one to the browser history.
	  _updateHash: function _updateHash(location, fragment, replace) {
	    if (replace) {
	      var s = location.toString().replace(/(javascript:|#).*$/, '');
	      location.replace(s + '#' + fragment);
	    } else {
	      location.hash = fragment;
	    }
	  }
	});
	
	module.exports = History;

/***/ },
/* 135 */
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _ = __webpack_require__(/*! underscore */ 130);
	var Events = __webpack_require__(/*! ./events */ 131);
	var extend = __webpack_require__(/*! ./extend */ 132);
	var getValue = __webpack_require__(/*! ./helpers/getValue */ 136);
	
	/**
	 * Creating a Parse.View creates its initial element outside of the DOM,
	 * if an existing element is not provided...
	 * @class
	 *
	 * <p>A fork of Backbone.View, provided for your convenience.  If you use this
	 * class, you must also include jQuery, or another library that provides a
	 * jQuery-compatible $ function.  For more information, see the
	 * <a href="http://documentcloud.github.com/backbone/#View">Backbone
	 * documentation</a>.</p>
	 * <p><strong><em>Available in the client SDK only.</em></strong></p>
	 */
	function View() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	  this.cid = _.uniqueId('view');
	  this._configure(options);
	  this._ensureElement();
	  this.initialize.apply(this, arguments);
	  this.delegateEvents();
	}
	
	// Cached regex to split keys for `delegate`.
	var eventSplitter = /^(\S+)\s*(.*)$/;
	
	// List of view options to be merged as properties.
	
	var viewOptions = ['model', 'collection', 'el', 'id', 'attributes', 'className', 'tagName'];
	
	// Set up all inheritable **Parse.View** properties and methods.
	_.extend(View.prototype, Events, {
	  // The default `tagName` of a View's element is `"div"`.
	  tagName: 'div',
	
	  /**
	   * jQuery delegate for element lookup, scoped to DOM elements within the
	   * current view. This should be prefered to global lookups where possible.
	   */
	  $: function $(selector) {
	    return this.$el.find(selector);
	  },
	
	  /**
	   * Initialize is an empty function by default. Override it with your own
	   * initialization logic.
	   */
	  initialize: function initialize() {},
	
	  /**
	   * The core function that your view should override, in order
	   * to populate its element (`this.el`), with the appropriate HTML. The
	   * convention is for **render** to always return `this`.
	   */
	  render: function render() {
	    return this;
	  },
	
	  /**
	   * Remove this view from the DOM. Note that the view isn't present in the
	   * DOM by default, so calling this method may be a no-op.
	   */
	  remove: function remove() {
	    this.$el.remove();
	    return this;
	  },
	
	  /**
	   * For small amounts of DOM Elements, where a full-blown template isn't
	   * needed, use **make** to manufacture elements, one at a time.
	   * <pre>
	   *     var el = this.make('li', {'class': 'row'},
	   *                        this.model.escape('title'));</pre>
	   */
	  make: function make(tagName, attributes, content) {
	    var el = document.createElement(tagName);
	
	    if (attributes) {
	      $(el).attr(attributes);
	    }
	
	    if (content) {
	      $(el).html(content);
	    }
	
	    return el;
	  },
	
	  /**
	   * Changes the view's element (`this.el` property), including event
	   * re-delegation.
	   */
	  setElement: function setElement(element, delegate) {
	    this.$el = $(element);
	    this.el = this.$el[0];
	
	    if (delegate !== false) {
	      this.delegateEvents();
	    }
	
	    return this;
	  },
	
	  /**
	   * Set callbacks.  <code>this.events</code> is a hash of
	   * <pre>
	   * *{"event selector": "callback"}*
	   *
	   *     {
	   *       'mousedown .title':  'edit',
	   *       'click .button':     'save'
	   *       'click .open':       function(e) { ... }
	   *     }
	   * </pre>
	   * pairs. Callbacks will be bound to the view, with `this` set properly.
	   * Uses event delegation for efficiency.
	   * Omitting the selector binds the event to `this.el`.
	   * This only works for delegate-able events: not `focus`, `blur`, and
	   * not `change`, `submit`, and `reset` in Internet Explorer.
	   */
	  delegateEvents: function delegateEvents(events) {
	    var _this = this;
	
	    events = events || getValue(this, 'events');
	
	    if (!events) {
	      return;
	    }
	
	    this.undelegateEvents();
	
	    _.each(events, function (method, key) {
	      if (!_.isFunction(method)) {
	        method = _this[events[key]];
	      }
	
	      if (!method) {
	        throw new Error('Event "' + events[key] + '" does not exist');
	      }
	
	      var match = key.match(eventSplitter);
	      var eventName = match[1];
	      var selector = match[2];
	
	      method = _.bind(method, _this);
	      eventName += '.delegateEvents' + _this.cid;
	
	      if (selector === '') {
	        _this.$el.bind(eventName, method);
	      } else {
	        _this.$el.delegate(selector, eventName, method);
	      }
	    });
	  },
	
	  /**
	   * Clears all callbacks previously bound to the view with `delegateEvents`.
	   * You usually don't need to use this, but may wish to if you have multiple
	   * Backbone views attached to the same DOM element.
	   */
	  undelegateEvents: function undelegateEvents() {
	    this.$el.unbind('.delegateEvents' + this.cid);
	  },
	
	  /**
	   * Performs the initial configuration of a View with a set of options.
	   * Keys with special meaning *(model, collection, id, className)*, are
	   * attached directly to the view.
	   */
	  _configure: function _configure(options) {
	    var _this2 = this;
	
	    if (this.options) {
	      options = _.extend({}, this.options, options);
	    }
	
	    _.each(viewOptions, function (attr) {
	      if (options[attr]) {
	        _this2[attr] = options[attr];
	      }
	    });
	
	    this.options = options;
	  },
	
	  /**
	   * Ensure that the View has a DOM element to render into.
	   * If `this.el` is a string, pass it through `$()`, take the first
	   * matching element, and re-assign it to `el`. Otherwise, create
	   * an element from the `id`, `className` and `tagName` properties.
	   */
	  _ensureElement: function _ensureElement() {
	    if (!this.el) {
	      var attrs = getValue(this, 'attributes') || {};
	
	      if (this.id) {
	        attrs.id = this.id;
	      }
	
	      if (this.className) {
	        attrs['class'] = this.className;
	      }
	
	      this.setElement(this.make(this.tagName, attrs), false);
	    } else {
	      this.setElement(this.el, false);
	    }
	  }
	});
	
	/**
	 * @function
	 * @param {Object} instanceProps Instance properties for the view.
	 * @param {Object} classProps Class properies for the view.
	 * @return {Class} A new subclass of <code>Parse.View</code>.
	 */
	View.extend = extend;
	
	module.exports = View;

/***/ },
/* 136 */
/*!*********************************!*\
  !*** ./src/helpers/getValue.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _ = __webpack_require__(/*! underscore */ 130);
	
	// Helper function to get a value from a Backbone object as a property
	// or as a function.
	module.exports = function getValue(object, prop) {
	  if (!(object && object[prop])) {
	    return null;
	  }
	
	  return _.isFunction(object[prop]) ? object[prop]() : object[prop];
	};

/***/ }
/******/ ])
});
;
//# sourceMappingURL=parsebone.js.map