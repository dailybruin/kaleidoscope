/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _componentsApp = __webpack_require__(3);

	var _componentsApp2 = _interopRequireDefault(_componentsApp);

	// Create app component and put it div#app. This initializes React.
	_react2['default'].render(_react2['default'].createElement(_componentsApp2['default'], null), document.getElementById('app'));

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _commonPage = __webpack_require__(4);

	var _commonPage2 = _interopRequireDefault(_commonPage);

	var _Dashboard = __webpack_require__(5);

	var _Dashboard2 = _interopRequireDefault(_Dashboard);

	// Creates a App components that works as the base of the app.

	var App = (function (_React$Component) {
	    _inherits(App, _React$Component);

	    function App() {
	        _classCallCheck(this, App);

	        _get(Object.getPrototypeOf(App.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(App, [{
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement(
	                'div',
	                null,
	                _react2['default'].createElement(_commonPage2['default'], { title: 'Article 1', author: 'John Smith' }),
	                _react2['default'].createElement('hr', null),
	                _react2['default'].createElement(_Dashboard2['default'], { componentTypes: ['image', 'title', 'cover image', 'author', 'quote', 'text section'] })
	            );
	        }
	    }]);

	    return App;
	})(_react2['default'].Component);

	;

	exports['default'] = App;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	// Super basic component that takes name and age and then prints it

	var Page = (function (_React$Component) {
	    _inherits(Page, _React$Component);

	    _createClass(Page, null, [{
	        key: "propTypes",
	        value: {
	            title: _react2["default"].PropTypes.string.isRequired,
	            author: _react2["default"].PropTypes.string.isRequired
	        },
	        enumerable: true
	    }]);

	    function Page(props) {
	        _classCallCheck(this, Page);

	        _get(Object.getPrototypeOf(Page.prototype), "constructor", this).call(this, props);
	    }

	    _createClass(Page, [{
	        key: "render",
	        value: function render() {
	            return _react2["default"].createElement(
	                "div",
	                { className: "Page" },
	                _react2["default"].createElement(
	                    "p",
	                    null,
	                    "Title: ",
	                    this.props.title,
	                    _react2["default"].createElement("br", null),
	                    "Author: ",
	                    this.props.author
	                )
	            );
	        }
	    }]);

	    return Page;
	})(_react2["default"].Component);

	;

	exports["default"] = Page;
	module.exports = exports["default"];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var Dashboard = (function (_React$Component) {
	    _inherits(Dashboard, _React$Component);

	    _createClass(Dashboard, null, [{
	        key: "propTypes",
	        value: {
	            componentTypes: _react2["default"].PropTypes.array.isRequired
	        },
	        enumerable: true
	    }]);

	    function Dashboard(props) {
	        _classCallCheck(this, Dashboard);

	        _get(Object.getPrototypeOf(Dashboard.prototype), "constructor", this).call(this, props);
	        this.state = { selectedComponent: this.props.componentTypes[0] };
	        this.handleDropdownChange = this.handleDropdownChange.bind(this);
	        this.handleSubmit = this.handleSubmit.bind(this);
	    }

	    _createClass(Dashboard, [{
	        key: "render",
	        value: function render() {
	            var componentOptions = this.props.componentTypes.map(function (type, i) {
	                return _react2["default"].createElement(
	                    "option",
	                    { value: type.replace(/\s/g, "_") },
	                    type
	                );
	            });

	            return _react2["default"].createElement(
	                "div",
	                { className: "Dashboard" },
	                _react2["default"].createElement(
	                    "form",
	                    { onSubmit: this.handleSubmit },
	                    _react2["default"].createElement(
	                        "div",
	                        { className: "component-inputs" },
	                        this.showInputForComponentType(this.state.selectedComponent)
	                    ),
	                    _react2["default"].createElement("br", null),
	                    _react2["default"].createElement(
	                        "select",
	                        { value: this.state.selectedComponent, onChange: this.handleDropdownChange },
	                        componentOptions
	                    ),
	                    _react2["default"].createElement("input", { type: "submit" })
	                )
	            );
	        }
	    }, {
	        key: "handleDropdownChange",
	        value: function handleDropdownChange(event) {
	            this.setState({ selectedComponent: event.target.value });
	            // {this.showInputForComponentType(event.target.value)}
	        }
	    }, {
	        key: "handleSubmit",
	        value: function handleSubmit(event) {
	            console.log('A name was submitted: ' + this.state.selectedComponent);
	            event.preventDefault();

	            $.ajax({
	                url: '/store',
	                dataType: 'json',
	                type: 'POST'
	            });
	        }
	    }, {
	        key: "showInputForComponentType",
	        value: function showInputForComponentType(componentType) {
	            console.log('Dropdown changed: ' + componentType);
	            switch (componentType) {
	                case 'title':
	                    return _react2["default"].createElement(
	                        "div",
	                        null,
	                        _react2["default"].createElement("input", { placeholder: "Title", type: "text", name: "title", className: "form-control" })
	                    );
	                    break;
	                case 'author':
	                    return _react2["default"].createElement(
	                        "div",
	                        null,
	                        _react2["default"].createElement("input", { placeholder: "Author", type: "text", name: "author", required: "required", className: "form-control" })
	                    );
	                    break;
	                case 'image':
	                    return _react2["default"].createElement(
	                        "div",
	                        null,
	                        _react2["default"].createElement("input", { placeholder: "URL", type: "text", name: "url", className: "form-control" }),
	                        _react2["default"].createElement("input", { placeholder: "Credit", type: "text", name: "credit", className: "form-control" }),
	                        _react2["default"].createElement("input", { placeholder: "Caption", type: "text", name: "caption", className: "form-control" })
	                    );
	                    break;
	                case 'quote':
	                    return _react2["default"].createElement(
	                        "div",
	                        null,
	                        _react2["default"].createElement("input", { placeholder: "Quote", type: "text", name: "quote", className: "form-control" }),
	                        _react2["default"].createElement("input", { placeholder: "Quote Maker", type: "text", name: "quoteMaker", className: "form-control" })
	                    );
	                    break;
	                case 'text_section':
	                    return _react2["default"].createElement(
	                        "div",
	                        null,
	                        _react2["default"].createElement("textarea", { name: "text", cols: "90", rows: "8" })
	                    );
	                    break;
	                default:
	                    return _react2["default"].createElement(
	                        "p",
	                        null,
	                        "nothing"
	                    );
	                    break;
	            }
	        }
	    }]);

	    return Dashboard;
	})(_react2["default"].Component);

	;

	exports["default"] = Dashboard;
	module.exports = exports["default"];

/***/ }
/******/ ]);