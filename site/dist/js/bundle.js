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

	var _Dashboard = __webpack_require__(7);

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
	                _react2['default'].createElement(_commonPage2['default'], { title: 'Article 1',
	                    authors: ["John Smith"],

	                    coverPhoto: [{
	                        url: 'http://images.fonearena.com/blog/wp-content/uploads/2013/11/Lenovo-p780-camera-sample-10.jpg',
	                        credit: 'http://images.fonearena.com/',
	                        caption: 'caption'
	                    }],

	                    subheading: 'This is subheading text',

	                    quotes: [{
	                        quote: 'Hawaii will always be my favorite place on Earth. No matter how special anywhere else I go is ... Hawaii is the place of my ancestors and my people.',
	                        quoteMaker: 'Micah Ma’a'
	                    }],

	                    sideImages: [{
	                        url: 'http://dailybruin.com/images/2016/11/web.ae_.heramb.WH_-640x426.jpg',
	                        credit: 'Wesley Hardin/Daily Bruin',
	                        caption: 'Second-year biology student Cole Heramb created both the artwork and the music for his album "Red EP." '
	                    }] }),
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

	var _ImageObject = __webpack_require__(5);

	var _ImageObject2 = _interopRequireDefault(_ImageObject);

	var _QuoteObject = __webpack_require__(6);

	var _QuoteObject2 = _interopRequireDefault(_QuoteObject);

	// Super basic component that takes name and age and then prints it

	var Page = (function (_React$Component) {
	    _inherits(Page, _React$Component);

	    _createClass(Page, null, [{
	        key: 'propTypes',
	        value: {
	            title: _react2['default'].PropTypes.string.isRequired,
	            authors: _react2['default'].PropTypes.array.isRequired,
	            coverPhoto: _react2['default'].PropTypes.array.isRequired,
	            subheading: _react2['default'].PropTypes.string.isRequired,
	            mainImages: _react2['default'].PropTypes.array.isRequired,
	            sideImages: _react2['default'].PropTypes.array.isRequired,
	            quotes: _react2['default'].PropTypes.array.isRequired,
	            text: _react2['default'].PropTypes.string
	        },
	        enumerable: true
	    }]);

	    function Page(props) {
	        _classCallCheck(this, Page);

	        _get(Object.getPrototypeOf(Page.prototype), 'constructor', this).call(this, props);
	    }

	    _createClass(Page, [{
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement(
	                'div',
	                { className: 'Page' },
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'cover-top' },
	                    this.props.coverPhoto.map(function (im) {
	                        return _react2['default'].createElement(
	                            'div',
	                            { className: 'cover-photo' },
	                            _react2['default'].createElement(_ImageObject2['default'], { url: im['url'], credit: im['credit'], caption: im['caption'] })
	                        );
	                    }),
	                    _react2['default'].createElement(
	                        'div',
	                        { className: 'title-wrapper' },
	                        _react2['default'].createElement(
	                            'h1',
	                            null,
	                            this.props.title
	                        ),
	                        _react2['default'].createElement(
	                            'p',
	                            null,
	                            'Author: ',
	                            this.props.authors.map(function (au) {
	                                return { au: au };
	                            })
	                        ),
	                        _react2['default'].createElement(
	                            'p',
	                            null,
	                            'Subheading: ',
	                            this.props.subheading
	                        )
	                    )
	                ),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'page-content' },
	                    'Quote: ',
	                    this.props.quotes.map(function (qo) {
	                        return _react2['default'].createElement(_QuoteObject2['default'], { quote: qo['quote'], quoteMaker: qo['quoteMaker'] });
	                    }),
	                    this.props.sideImages.map(function (im) {
	                        return _react2['default'].createElement(
	                            'div',
	                            { className: 'side-photo' },
	                            _react2['default'].createElement(_ImageObject2['default'], { url: im['url'], credit: im['credit'], caption: im['caption'] })
	                        );
	                    })
	                )
	            );
	        }
	    }]);

	    return Page;
	})(_react2['default'].Component);

	;

	exports['default'] = Page;
	module.exports = exports['default'];

/***/ },
/* 5 */
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

	var ImageObject = (function (_React$Component) {
		_inherits(ImageObject, _React$Component);

		_createClass(ImageObject, null, [{
			key: 'propTypes',
			value: {
				url: _react2['default'].PropTypes.string.isRequired,
				credit: _react2['default'].PropTypes.string.isRequired,
				caption: _react2['default'].PropTypes.string.isRequired
			},
			enumerable: true
		}]);

		function ImageObject(props) {
			_classCallCheck(this, ImageObject);

			_get(Object.getPrototypeOf(ImageObject.prototype), 'constructor', this).call(this, props);
		}

		_createClass(ImageObject, [{
			key: 'render',
			value: function render() {
				var imageStyle = {
					backgroundImage: 'url(' + this.props.url + ')'
				};

				return _react2['default'].createElement(
					'div',
					{ style: imageStyle },
					_react2['default'].createElement(
						'p',
						{ className: 'img-caption' },
						'Caption: ',
						this.props.caption
					),
					_react2['default'].createElement(
						'p',
						null,
						'Credit: ',
						this.props.credit,
						' '
					)
				);
			}
		}]);

		return ImageObject;
	})(_react2['default'].Component);

	exports['default'] = ImageObject;
	module.exports = exports['default'];

/***/ },
/* 6 */
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

	var QuoteObject = (function (_React$Component) {
		_inherits(QuoteObject, _React$Component);

		_createClass(QuoteObject, null, [{
			key: "propTypes",
			value: {
				quote: _react2["default"].PropTypes.string.isRequired,
				quoteMaker: _react2["default"].PropTypes.string.isRequired
			},
			enumerable: true
		}]);

		function QuoteObject(props) {
			_classCallCheck(this, QuoteObject);

			_get(Object.getPrototypeOf(QuoteObject.prototype), "constructor", this).call(this, props);
		}

		_createClass(QuoteObject, [{
			key: "render",
			value: function render() {

				return _react2["default"].createElement(
					"div",
					{ className: "quote-wrapper", style: quoteStyle },
					_react2["default"].createElement(
						"p",
						{ className: "quote-content" },
						"“",
						this.props.quote,
						"”"
					),
					_react2["default"].createElement(
						"p",
						{ className: "quote-by" },
						"- ",
						this.props.quoteMaker
					)
				);
			}
		}]);

		return QuoteObject;
	})(_react2["default"].Component);

	var quoteStyle = {
		width: '400px',
		textAlign: 'center'
	};

	exports["default"] = QuoteObject;
	module.exports = exports["default"];

/***/ },
/* 7 */
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
	                        _react2["default"].createElement("input", { type: "text", name: "title", autofocus: "autofocus", value: "title", className: "form-control" })
	                    );
	                    break;
	                case 'author':
	                    return _react2["default"].createElement(
	                        "div",
	                        null,
	                        _react2["default"].createElement("input", { type: "text", name: "authors", required: "required", autofocus: "autofocus", value: "author", className: "form-control" })
	                    );
	                    break;
	                case 'image':
	                    return _react2["default"].createElement(
	                        "div",
	                        null,
	                        _react2["default"].createElement("input", { type: "text", name: "image", autofocus: "autofocus", value: "img", className: "form-control" }),
	                        _react2["default"].createElement("input", { type: "text", name: "credit", required: "required", value: "credit", className: "form-control" }),
	                        _react2["default"].createElement("input", { type: "text", name: "caption", required: "required", value: "caption", className: "form-control" })
	                    );
	                    break;
	                case 'quote':
	                    return _react2["default"].createElement(
	                        "div",
	                        null,
	                        _react2["default"].createElement("input", { type: "text", name: "quote", required: "required", value: "quote", className: "form-control" }),
	                        _react2["default"].createElement("input", { type: "text", name: "quoteMaker", required: "required", value: "quote maker", className: "form-control" })
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