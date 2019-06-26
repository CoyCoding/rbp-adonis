webpackJsonp([0],{

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const imgUrl = require ('../../.././img/8bitheart.png');

//This component is used by ApplicationClosed Offseason and TakingApplications
function Heart() {
  return _react2.default.createElement(
    "div",
    { className: "img-wrapper" },
    _react2.default.createElement(
      "div",
      { className: "img" },
      _react2.default.createElement(
        "svg",
        { width: "0", height: "0" },
        _react2.default.createElement(
          "clipPath",
          { id: "clipPolygon" },
          _react2.default.createElement("polygon", { points: "187 62, 187 30, 93 30, 92 62, 30 62, 30 218, 62 218, 62 249, 93 249, 93 281, 124 281, 124 312, 155 312, 155 343, 187 343, 187 375, 218 375, 218 406, 280 406, 280 375, 312 375, 312 343, 343 343, 343 312, 374 312, 374 281, 405 281, 405 249, 437 249, 437 218, 468 218, 468 62, 405 62, 405 30, 312 30, 312 62, 280 62, 280 93, 218 93, 218 62" })
        )
      )
    ),
    _react2.default.createElement("img", { src: "/img/8bitheart.png", alt: "rainbow heart" })
  );
}

exports.default = Heart;

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Checkbox = function Checkbox(_ref) {
  var label = _ref.label,
      isSelected = _ref.isSelected,
      onCheckboxChange = _ref.onCheckboxChange;
  return _react2.default.createElement(
    "div",
    { className: "form-check" },
    _react2.default.createElement(
      "label",
      null,
      _react2.default.createElement("input", {
        type: "checkbox",
        name: label,
        checked: isSelected,
        onChange: onCheckboxChange,
        className: "form-check-input"
      }),
      label
    )
  );
};

exports.default = Checkbox;

/***/ }),

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(83);

var _Header = __webpack_require__(86);

var _Header2 = _interopRequireDefault(_Header);

var _Home = __webpack_require__(284);

var _Home2 = _interopRequireDefault(_Home);

var _NotFound = __webpack_require__(287);

var _NotFound2 = _interopRequireDefault(_NotFound);

var _Schedule = __webpack_require__(292);

var _Schedule2 = _interopRequireDefault(_Schedule);

var _Apply = __webpack_require__(281);

var _Apply2 = _interopRequireDefault(_Apply);

var _Login = __webpack_require__(286);

var _Login2 = _interopRequireDefault(_Login);

var _AdminPage = __webpack_require__(277);

var _AdminPage2 = _interopRequireDefault(_AdminPage);

var _Auth = __webpack_require__(294);

var _Auth2 = _interopRequireDefault(_Auth);

var _PrivateRoute = __webpack_require__(288);

var _PrivateRoute2 = _interopRequireDefault(_PrivateRoute);

var _jsCookies = __webpack_require__(78);

var _jsCookies2 = _interopRequireDefault(_jsCookies);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
	_inherits(App, _Component);

	function App() {
		_classCallCheck(this, App);

		var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

		_this.scheduleStatusChange = function (event) {
			_this.setState({
				scheduleStatus: event.target.value
			});
		};

		_this.state = {
			scheduleStatus: 'takingApplications',
			eventDate: ''
		};
		return _this;
	}

	_createClass(App, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			console.log(_jsCookies2.default.getItem('jwt'));
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				_reactRouterDom.BrowserRouter,
				null,
				_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(_Header2.default, null),
					_react2.default.createElement(
						_reactRouterDom.Switch,
						null,
						_react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Home2.default }),
						_react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/schedule', render: function render(props) {
								return _react2.default.createElement(_Schedule2.default, _extends({}, props, { scheduleStatus: _this2.state.scheduleStatus, scheduleStatusChange: _this2.scheduleStatusChange }));
							} }),
						_react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/apply', render: function render(props) {
								return _react2.default.createElement(_Apply2.default, _extends({}, props, { scheduleStatus: _this2.state.scheduleStatus, scheduleStatusChange: _this2.scheduleStatusChange }));
							} }),
						_react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/login', render: function render(props) {
								return _react2.default.createElement(_Login2.default, _extends({}, props, { sessionChange: _this2.sessionIdChange, scheduleStatus: _this2.state.scheduleStatus, scheduleStatusChange: _this2.scheduleStatusChange }));
							} }),
						_react2.default.createElement(_PrivateRoute2.default, { exact: true, path: '/admin', component: _AdminPage2.default }),
						_react2.default.createElement(_reactRouterDom.Route, { component: _NotFound2.default })
					)
				)
			);
		}
	}]);

	return App;
}(_react.Component);

exports.default = App;

/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(84);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _jsCookies = __webpack_require__(78);

var _jsCookies2 = _interopRequireDefault(_jsCookies);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import Admin from './Admin';


var Admin = function (_Component) {
	_inherits(Admin, _Component);

	function Admin(props) {
		_classCallCheck(this, Admin);

		var _this = _possibleConstructorReturn(this, (Admin.__proto__ || Object.getPrototypeOf(Admin)).call(this, props));

		_this.state = {
			scheduleStatus: 'takingApplications'

		};
		return _this;
	}

	_createClass(Admin, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			if (_jsCookies2.default.getItem('jwt')) {
				console.log('yes');
			} else {
				console.log('no');
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'h1',
				{ style: { marginTop: '56px' } },
				'test ',
				this.props.sessionId
			);
		}
	}]);

	return Admin;
}(_react.Component);

//ReactDOM.render(<AdminPage />, document.getElementById('app'));


exports.default = Admin;

/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ApplicationsClosed = ApplicationsClosed;

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ApplicationsClosed(props) {
  return _react2.default.createElement(
    "section",
    { id: "closed" },
    _react2.default.createElement(
      "h2",
      null,
      "Sorry Applications are Closed"
    )
  );
}

exports.default = ApplicationsClosed;

/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ApplicationForm = ApplicationForm;

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _Checkbox = __webpack_require__(174);

var _Checkbox2 = _interopRequireDefault(_Checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ApplicationForm(props) {

  var createDateCheckbox = function createDateCheckbox(date) {
    return _react2.default.createElement(_Checkbox2.default, {
      label: date,
      isSelected: props.dates[date],
      onCheckboxChange: props.handleDateChange,
      key: date
    });
  };

  var createTimeCheckbox = function createTimeCheckbox(time) {
    return _react2.default.createElement(_Checkbox2.default, {
      label: time,
      isSelected: props.times[time],
      onCheckboxChange: props.handleTimeChange,
      key: time
    });
  };

  var createBackupCheckbox = function createBackupCheckbox(backup) {
    return _react2.default.createElement(_Checkbox2.default, {
      label: 'yes',
      isSelected: props.backup,
      onCheckboxChange: props.handleBackupChange
    });
  };

  var createDateCheckboxes = function createDateCheckboxes() {
    return props.dates.map(createDateCheckbox);
  };
  var createTimeCheckboxes = function createTimeCheckboxes() {
    return props.times.map(createTimeCheckbox);
  };

  return _react2.default.createElement(
    'div',
    { className: 'application-form' },
    _react2.default.createElement(
      'div',
      { className: 'form-header' },
      _react2.default.createElement(
        'h5',
        null,
        'Please complete the form below'
      ),
      _react2.default.createElement(
        'h5',
        null,
        '*indicates a required field'
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'form-wrapper' },
      _react2.default.createElement(
        'form',
        { onSubmit: props.handleSubmit },
        _react2.default.createElement(
          'div',
          { className: 'form-item' },
          _react2.default.createElement(
            'label',
            { htmlFor: 'twitchName' },
            'Twitch Link*'
          ),
          _react2.default.createElement(
            'p',
            { className: 'description' },
            'Your profile name exactly as it appears on twitch.'
          ),
          _react2.default.createElement('input', { name: 'twitchName', onChange: props.handleTextChange, type: 'text', placeholder: 'https://www.twitch.tv/Batman' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-item' },
          _react2.default.createElement(
            'label',
            { htmlFor: 'discordName' },
            'Discord Name*'
          ),
          _react2.default.createElement(
            'p',
            { className: 'description' },
            'Please make sure you\'ve joined the official RBP Discord so we can message you easily.'
          ),
          _react2.default.createElement('input', { name: 'discordName', onChange: props.handleTextChange, type: 'text', placeholder: 'Batman' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-item' },
          _react2.default.createElement(
            'label',
            { htmlFor: 'twitterName' },
            'Twitter Name'
          ),
          _react2.default.createElement(
            'p',
            { className: 'description' },
            'Please enter your Twitter name so we may easily find and @ you during your segment.'
          ),
          _react2.default.createElement('input', { name: 'twitterName', onChange: props.handleTextChange, type: 'text', placeholder: 'Batman' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-item' },
          _react2.default.createElement(
            'label',
            { htmlFor: 'firstGame' },
            'Game 1*'
          ),
          _react2.default.createElement(
            'p',
            { className: 'description' },
            'The first game you will play during your segment.'
          ),
          _react2.default.createElement('input', { name: 'firstGame', onChange: props.handleTextChange, type: 'text', placeholder: 'Super Mario Bro. 2 BBy' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-item' },
          _react2.default.createElement(
            'label',
            { htmlFor: 'secondGame' },
            'Game 2*'
          ),
          _react2.default.createElement(
            'p',
            { className: 'description' },
            'The second game you will play during your segment.'
          ),
          _react2.default.createElement('input', { name: 'secondGame', onChange: props.handleTextChange, type: 'text', placeholder: 'Super Mario Bros. 2 again BBy' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-item' },
          _react2.default.createElement(
            'h5',
            null,
            'Available Dates*'
          ),
          _react2.default.createElement(
            'div',
            { className: 'checkbox-section' },
            createDateCheckboxes()
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-item' },
          _react2.default.createElement(
            'h5',
            null,
            'Available Times*'
          ),
          _react2.default.createElement(
            'p',
            { className: 'description' },
            'All Times are in Eastern Time, the more availability you have, the higher chance you have to get into the event!'
          ),
          _react2.default.createElement(
            'div',
            { className: 'checkbox-section' },
            createTimeCheckboxes()
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-item' },
          _react2.default.createElement(
            'label',
            { htmlFor: 'donationIncentive' },
            'Donation Incentive'
          ),
          _react2.default.createElement('input', { name: 'donationIncentive', onChange: props.handleTextChange, type: 'text', placeholder: 'Super Mario Bros. 2 again BBy' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-item' },
          _react2.default.createElement(
            'label',
            { htmlFor: 'whatDoYouLike' },
            'Why would you like to participate in RetroBlockParty? *'
          ),
          _react2.default.createElement('textarea', { name: 'whatDoYouLike', onChange: props.handleTextChange, type: 'text', placeholder: 'I like the food' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-item' },
          _react2.default.createElement(
            'h5',
            null,
            'Would you be willing to be available as a backup streamer?'
          ),
          _react2.default.createElement(
            'div',
            { className: 'checkbox-section' },
            createBackupCheckbox()
          )
        ),
        _react2.default.createElement(
          'button',
          { name: 'submint', type: 'submit' },
          ' submit'
        )
      )
    )
  );
}

exports.default = ApplicationForm;

/***/ }),

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _HrefLinks = __webpack_require__(87);

var _Checkbox = __webpack_require__(174);

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _ApplicationForm = __webpack_require__(279);

var _ApplicationForm2 = _interopRequireDefault(_ApplicationForm);

var _Validation = __webpack_require__(295);

var _history = __webpack_require__(62);

var _axios = __webpack_require__(165);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//These are temp values that should come from a DataBase for the checkboxes
var DATES = ['june 28', 'june 29'];
var TIMES = ['12:00 AM - 2:00 AM', '2:00 AM - 4:00 AM', '4:00 AM - 6:00 AM', '6:00 AM - 8:00 AM', '8:00 AM - 10:00 AM', '10:00 AM - 12:00 PM', '12:00 PM - 2:00 PM', '2:00 PM - 4:00 PM', '4:00 PM - 6:00 PM', '6:00 PM - 8:00 PM', '8:00 PM - 10:00 PM', '10:00 PM - 12:00 AM'];

var ApplicationsOpen = function (_Component) {
  _inherits(ApplicationsOpen, _Component);

  function ApplicationsOpen(props) {
    var _this2 = this;

    _classCallCheck(this, ApplicationsOpen);

    var _this = _possibleConstructorReturn(this, (ApplicationsOpen.__proto__ || Object.getPrototypeOf(ApplicationsOpen)).call(this, props));

    _this.handleTextChange = function (event) {
      var name = event.target.name;
      //set state of current textbox to user input
      _this.setState(_defineProperty({}, name, event.target.value), function () {
        _this.setState({
          formErrors: _extends({}, _this.state.formErrors, _defineProperty({}, name, (0, _Validation.validateText)(name, _this.state[name])))
        });
      });
    };

    _this.handleDateChange = function (event) {
      var name = event.target.name;
      _this.setState({
        dates: _extends({}, _this.state.dates, _defineProperty({}, name, !_this.state.dates[name]))

      }, function () {
        _this.setState({
          formErrors: _extends({}, _this.state.formErrors, {
            dates: (0, _Validation.validateCheckboxes)('dates', _this.state.dates)
          })
        });
      });
    };

    _this.handleTimeChange = function (event) {
      var name = event.target.name;
      _this.setState({
        times: _extends({}, _this.state.times, _defineProperty({}, name, !_this.state.times[name]))
      }, function () {
        _this.setState({
          formErrors: _extends({}, _this.state.formErrors, {
            times: (0, _Validation.validateCheckboxes)('times', _this.state.times)
          })
        });
      });
    };

    _this.handleBackupChange = function (event) {
      _this.setState({
        backup: !_this.state.backup
      });
    };

    _this.handleSubmit = function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(submitEvent) {
        var self, errorArr, getErrors;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                getErrors = function getErrors() {
                  //for each input name in form errors filter and return all inputs with errors
                  return Object.keys(self.state.formErrors).filter(function (error) {
                    return self.state.formErrors[error].length > 0;
                  });
                };

                submitEvent.preventDefault();
                self = _this;
                errorArr = getErrors();

                if (!(errorArr.length === 0)) {
                  _context.next = 15;
                  break;
                }

                _context.prev = 5;
                _context.next = 8;
                return _axios2.default.post('/apply', self.state).then(function (res) {
                  // self.props.history.push('/');
                  // window.scrollTo(0, 0);
                  console.log(res);
                });

              case 8:
                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context['catch'](5);

                console.log(_context.t0);
                //self.props.history.push('/apply-error');
                //window.scrollTo(0, 0);

              case 13:
                _context.next = 16;
                break;

              case 15:
                // Show Errors on bad inputs
                console.log(errorArr);

              case 16:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[5, 10]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    _this.state = {
      dates: '',
      times: '',
      discordName: "",
      donationIncentive: "",
      firstGame: "",
      secondGame: "",
      twitchName: "",
      twitterName: "",
      whatDoYouLike: "",
      backup: false,
      formErrors: {}
    };
    return _this;
  }

  _createClass(ApplicationsOpen, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({
        //Set the value of current event dates
        dates: DATES.reduce(function (dates, date) {
          return _extends({}, dates, _defineProperty({}, date, false));
        }, {}),
        //Set the value of the current event times
        times: TIMES.reduce(function (times, time) {
          return _extends({}, times, _defineProperty({}, time, false));
        }, {}),
        //Set all form Error Messages
        formErrors: (0, _Validation.getApplicationErrors)()
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'apps-open' },
        _react2.default.createElement(
          'div',
          { className: 'faq' },
          _react2.default.createElement(
            'h2',
            null,
            'Applications are Open'
          ),
          _react2.default.createElement(
            'div',
            { className: 'application-info' },
            _react2.default.createElement(
              'p',
              null,
              'The following form is for May event. Please fill out the form and make sure you are a member of ',
              _react2.default.createElement(
                'a',
                { href: _HrefLinks.HrefLinks.discord },
                'Discord'
              ),
              ' so that we may contact you.'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Retro inspired games (The Messenger, Cuphead, etc.) will be considered. However, all games are subject to the approval of RBP staff.  If you apply with Metroid and you\'ve never beaten it, your application may be denied.  Applicants must be 18 years of age and a Twitch Affiliate. '
            ),
            _react2.default.createElement(
              'p',
              null,
              'The more dates and times you are available, the higher your chance of getting in is. If you only apply for one date with only a four hour window, it\'ll be difficult to fit you in.'
            ),
            _react2.default.createElement(
              'p',
              null,
              'We look forward to reviewing your application!'
            )
          )
        ),
        _react2.default.createElement(_ApplicationForm2.default, {
          times: TIMES,
          dates: DATES,
          backup: this.state.backup,
          handleSubmit: this.handleSubmit,
          handleTextChange: this.handleTextChange,
          handleDateChange: this.handleDateChange,
          handleTimeChange: this.handleTimeChange,
          handleBackupChange: this.handleBackupChange
        })
      );
    }
  }]);

  return ApplicationsOpen;
}(_react.Component);

exports.default = ApplicationsOpen;

/***/ }),

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleScheduleStatus = undefined;
exports.Apply = Apply;

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _ApplicationsOpen = __webpack_require__(280);

var _ApplicationsOpen2 = _interopRequireDefault(_ApplicationsOpen);

var _ApplicationsClosed = __webpack_require__(278);

var _ApplicationsClosed2 = _interopRequireDefault(_ApplicationsClosed);

var _Header = __webpack_require__(86);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Apply(props) {
  return _react2.default.createElement(
    'section',
    { id: 'applications' },
    _react2.default.createElement(_Header2.default, null),
    _react2.default.createElement(
      'div',
      { className: 'applications-wrapper' },
      handleScheduleStatus(props)
    )
  );
}

var handleScheduleStatus = exports.handleScheduleStatus = function handleScheduleStatus(props) {
  switch (props.scheduleStatus) {
    case 'takingApplications':
      return _react2.default.createElement(_ApplicationsOpen2.default, { history: props.history });
    default:
      return _react2.default.createElement(_ApplicationsClosed2.default, null);
  }
};

exports.default = Apply;

/***/ }),

/***/ 282:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import {HrefLinks} from '../../.././Utils/HrefLinks';

function FaqSection() {
  return _react2.default.createElement(
    "section",
    { id: "faq-section" },
    _react2.default.createElement(
      "div",
      { className: "container" },
      _react2.default.createElement(
        "div",
        { className: "faq-grid" },
        _react2.default.createElement(
          "div",
          { className: "faq-location" },
          _react2.default.createElement(
            "div",
            { className: "title" },
            _react2.default.createElement(
              "h3",
              null,
              "Can I come to the Party?"
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "description" },
            _react2.default.createElement(
              "p",
              null,
              "Of course, The Retro Block Party is all about bringing the streaming community together for charity."
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "faq-location" },
          _react2.default.createElement(
            "div",
            { className: "title" },
            _react2.default.createElement(
              "h3",
              null,
              "So wheres the party at?"
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "description" },
            _react2.default.createElement(
              "p",
              null,
              "The Retro Block Party takes place entirely on twitch.tv allowing you to show up no matter where you are."
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "faq-location" },
          _react2.default.createElement(
            "div",
            { className: "title" },
            _react2.default.createElement(
              "h3",
              null,
              "When is the party?"
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "description" },
            _react2.default.createElement(
              "p",
              null,
              "The Retro Block Party takes place once month for whole weekend, so you can party all night long. For more details check out the current ",
              _react2.default.createElement(
                "a",
                { href: "/schedule" },
                "Schedule Page"
              )
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "faq-location" },
          _react2.default.createElement(
            "div",
            { className: "title" },
            _react2.default.createElement(
              "h3",
              null,
              "How do I join?"
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "description" },
            _react2.default.createElement(
              "p",
              null,
              "If you want to get off the lawn and on the dance floor check out the ",
              _react2.default.createElement(
                "a",
                { href: "/apply" },
                "Application Page"
              ),
              " for more info."
            )
          )
        )
      )
    )
  );
}

exports.default = FaqSection;

/***/ }),

/***/ 283:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Hero() {
  return _react2.default.createElement(
    "section",
    { id: "hero" },
    _react2.default.createElement(
      "div",
      { className: "hero-bg" },
      _react2.default.createElement(
        "div",
        { className: "rbp-img" },
        _react2.default.createElement("img", { src: "/img/RBP.png", alt: "retro block party" })
      ),
      _react2.default.createElement(
        "div",
        { className: "rbp-img2" },
        _react2.default.createElement(
          "h2",
          null,
          _react2.default.createElement(
            "span",
            null,
            "B"
          ),
          "RINGING ",
          _react2.default.createElement(
            "span",
            null,
            "R"
          ),
          "ETRO ",
          _react2.default.createElement(
            "span",
            null,
            "T"
          ),
          "OGETHER",
          _react2.default.createElement("br", null),
          _react2.default.createElement(
            "span",
            null,
            "F"
          ),
          "OR ",
          _react2.default.createElement(
            "span",
            null,
            "C"
          ),
          "HARITY"
        )
      )
    )
  );
}

exports.default = Hero;

/***/ }),

/***/ 284:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _WhatIsItSection = __webpack_require__(285);

var _WhatIsItSection2 = _interopRequireDefault(_WhatIsItSection);

var _Hero = __webpack_require__(283);

var _Hero2 = _interopRequireDefault(_Hero);

var _FaqSection = __webpack_require__(282);

var _FaqSection2 = _interopRequireDefault(_FaqSection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Home() {
  return _react2.default.createElement(
    'section',
    { id: 'home' },
    _react2.default.createElement(_Hero2.default, null),
    _react2.default.createElement(_WhatIsItSection2.default, null),
    _react2.default.createElement(_FaqSection2.default, null)
  );
}

exports.default = Home;

/***/ }),

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Home() {
  return _react2.default.createElement(
    "section",
    { className: "about-section" },
    _react2.default.createElement(
      "div",
      { className: "container" },
      _react2.default.createElement(
        "div",
        { className: "rbp-what-is" },
        _react2.default.createElement(
          "h2",
          null,
          "What is Retro Block Party?"
        ),
        _react2.default.createElement(
          "p",
          null,
          "RetroBlockParty is about bringing the retro community together monthy to support charities. Each month, a roster of streamers chosen for the opportunity to participate in something greater than themselves!"
        ),
        _react2.default.createElement(
          "p",
          null,
          "To date, the community has raised nearly $49,000 for St. Jude, American Foundation for Suicide Prevention, Child's Play, World Wildlife Fund, Stack-Up, Fuck Cancer, Anxiety Gaming, 1-Up On Cancer, and Toys For Tots! Thank you all, you crazy, amazing people! We wouldn\u2019t be where we are without YOU!  "
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "img" },
        _react2.default.createElement("img", { src: "https://media.discordapp.net/attachments/477927083809439786/587123859107610624/TFIRneon.png", alt: "the future is retro img" })
      ),
      _react2.default.createElement("div", { className: "circle" })
    )
  );
}

exports.default = Home;

/***/ }),

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(83);

var _Header = __webpack_require__(86);

var _Header2 = _interopRequireDefault(_Header);

var _axios = __webpack_require__(165);

var _axios2 = _interopRequireDefault(_axios);

var _jsCookies = __webpack_require__(78);

var _jsCookies2 = _interopRequireDefault(_jsCookies);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_Component) {
  _inherits(Login, _Component);

  function Login(props) {
    var _this2 = this;

    _classCallCheck(this, Login);

    var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

    _this.handleTextChange = function (event) {
      var name = event.target.name;
      //set state of current textbox to user input
      _this.setState(_defineProperty({}, name, event.target.value), function () {
        _this.setState({
          formErrors: _extends({}, _this.state.formErrors, _defineProperty({}, name, validateText(name, _this.state[name])))
        });
      });
    };

    _this.handleSubmit = function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(submitEvent) {
        var self, _this$props, match, location, history, getErrors;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                getErrors = function getErrors() {
                  //for each input name in form errors filter and return all inputs with errors
                  return Object.keys(self.state.formErrors).filter(function (error) {
                    return self.state.formErrors[error].length > 0;
                  });
                };

                submitEvent.preventDefault();
                self = _this;
                _this$props = _this.props, match = _this$props.match, location = _this$props.location, history = _this$props.history;
                //const errorArr = getErrors();

                if (false) {
                  _context.next = 15;
                  break;
                }

                _context.prev = 5;
                _context.next = 8;
                return _axios2.default.post('/admin/login', self.state).then(function (res) {
                  _jsCookies2.default.setItem('jwt', JSON.stringify(res.data));
                  history.push('/admin');
                });

              case 8:
                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context['catch'](5);

                console.log(_context.t0);
                //self.props.history.push('/apply-error');
                //window.scrollTo(0, 0);

              case 13:
                _context.next = 16;
                break;

              case 15:
                console.log('errorArr');

              case 16:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[5, 10]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    _this.handleSubmitLogout = function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(submitEvent) {
        var self, getErrors;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                getErrors = function getErrors() {
                  //for each input name in form errors filter and return all inputs with errors
                  return Object.keys(self.state.formErrors).filter(function (error) {
                    return self.state.formErrors[error].length > 0;
                  });
                };

                submitEvent.preventDefault();
                self = _this;

                console.log(_this.state);
                _jsCookies2.default.removeItem('jwt');

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }();

    _this.state = {
      username: '',
      password: '',
      formErrors: {
        username: '',
        password: ''
      },
      token: ''
    };
    return _this;
  }

  _createClass(Login, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var history = this.props.history;

      if (_jsCookies2.default.getItem('jwt')) {
        history.push('admin');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'login' },
        _react2.default.createElement(
          'div',
          { className: 'login-wrapper' },
          _react2.default.createElement(
            'form',
            { onSubmit: this.handleSubmit },
            _react2.default.createElement(
              'label',
              null,
              'Username:  '
            ),
            _react2.default.createElement('input', { name: 'username', onChange: this.handleTextChange, type: 'text', placeholder: 'Batman' }),
            _react2.default.createElement(
              'label',
              null,
              'Password:'
            ),
            _react2.default.createElement('input', { name: 'password', onChange: this.handleTextChange, type: 'text', placeholder: '' }),
            _react2.default.createElement(
              'button',
              { type: 'submit' },
              'test'
            )
          )
        ),
        _react2.default.createElement(
          'form',
          { onSubmit: this.handleSubmitLogout },
          _react2.default.createElement(
            'button',
            { type: 'submit' },
            'test'
          )
        )
      );
    }
  }]);

  return Login;
}(_react.Component);

exports.default = Login;

/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NotFound() {
  return _react2.default.createElement(
    "header",
    { id: "not-found" },
    "404"
  );
}

exports.default = NotFound;

/***/ }),

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authenticate = exports.isAuthenticated = exports.getRefreshToken = exports.getAccessToken = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(83);

var _jsCookies = __webpack_require__(78);

var _jsCookies2 = _interopRequireDefault(_jsCookies);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var PrivateRoute = function PrivateRoute(_ref) {
  var Component = _ref.component,
      rest = _objectWithoutProperties(_ref, ['component']);

  return _react2.default.createElement(_reactRouterDom.Route, _extends({}, rest, { render: function render(props) {
      return _jsCookies2.default.getItem('jwt') ? _react2.default.createElement(Component, props) : _react2.default.createElement(_reactRouterDom.Redirect, { to: 'login' });
    } }));
};

var AuthenticateBeforeRender = function (_Component) {
  _inherits(AuthenticateBeforeRender, _Component);

  function AuthenticateBeforeRender() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, AuthenticateBeforeRender);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = AuthenticateBeforeRender.__proto__ || Object.getPrototypeOf(AuthenticateBeforeRender)).call.apply(_ref2, [this].concat(args))), _this), _this.state = {
      isAuthenticated: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AuthenticateBeforeRender, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      authenticate().then(function (isAuthenticated) {
        _this2.setState({ isAuthenticated: isAuthenticated });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return this.state.isAuthenticated ? this.props.render() : null;
    }
  }]);

  return AuthenticateBeforeRender;
}(_react.Component);

var getAccessToken = exports.getAccessToken = function getAccessToken() {
  return _jsCookies2.default.getItem('jwt');
};
var getRefreshToken = exports.getRefreshToken = function getRefreshToken() {
  return _jsCookies2.default.getItem('refresh_token');
};
var isAuthenticated = exports.isAuthenticated = function isAuthenticated() {
  return !!getAccessToken();
};

var authenticate = exports.authenticate = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var tokens, expires, inOneHour;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!getRefreshToken()) {
              _context.next = 16;
              break;
            }

            _context.prev = 1;
            _context.next = 4;
            return refreshTokens();

          case 4:
            tokens = _context.sent;
            // call an API, returns tokens

            expires = (tokens.expires_in || 60 * 60) * 1000;
            inOneHour = new Date(new Date().getTime() + expires);

            // you will have the exact same setters in your Login page/app too

            _jsCookies2.default.setItem('access_token', tokens.access_token, { expires: inOneHour });
            _jsCookies2.default.setItem('refresh_token', tokens.refresh_token);

            return _context.abrupt('return', true);

          case 12:
            _context.prev = 12;
            _context.t0 = _context['catch'](1);

            history.push('/');
            return _context.abrupt('return', false);

          case 16:

            history.push('/');
            return _context.abrupt('return', false);

          case 18:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[1, 12]]);
  }));

  return function authenticate() {
    return _ref3.apply(this, arguments);
  };
}();

exports.default = PrivateRoute;

/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _Heart = __webpack_require__(113);

var _Heart2 = _interopRequireDefault(_Heart);

var _HrefLinks = __webpack_require__(87);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ApplicationsClosed() {
  return _react2.default.createElement(
    'div',
    { className: 'taking-applications' },
    _react2.default.createElement(_Heart2.default, null),
    _react2.default.createElement(
      'div',
      { className: 'info' },
      _react2.default.createElement(
        'h2',
        null,
        'Coming Soon!'
      ),
      _react2.default.createElement(
        'p',
        null,
        'The schedule is being processed at this very moment and could be posted any second. You could sit around refreshing this page all day but I recomend joining the ',
        _react2.default.createElement(
          'a',
          { href: _HrefLinks.HrefLinks.discord },
          'Discord Server'
        ),
        ' or following us on ',
        _react2.default.createElement(
          'a',
          { href: _HrefLinks.HrefLinks.twitter },
          'Twitter'
        ),
        ' instead! '
      ),
      _react2.default.createElement(
        'p',
        null,
        'And of course please check back soon for the complete event schedule!'
      )
    )
  );
}

exports.default = ApplicationsClosed;

/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FinishedSchedule() {
  return _react2.default.createElement(
    "div",
    { className: "taking-applications" },
    "Finished Table Need to talk with you guys about this."
  );
}

exports.default = FinishedSchedule;

/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _Heart = __webpack_require__(113);

var _Heart2 = _interopRequireDefault(_Heart);

var _HrefLinks = __webpack_require__(87);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Offseason() {
  return _react2.default.createElement(
    'div',
    { className: 'taking-applications' },
    _react2.default.createElement(_Heart2.default, null),
    _react2.default.createElement(
      'div',
      { className: 'info' },
      _react2.default.createElement(
        'h2',
        null,
        'Relax'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Don\'t worry The Retro Block Party ain\'t dead yet. We are currently setting up our next event and will be opening applications soon. Come join the ',
        _react2.default.createElement(
          'a',
          { href: _HrefLinks.HrefLinks.discord },
          'Discord Server'
        ),
        ' or follow us on ',
        _react2.default.createElement(
          'a',
          { href: _HrefLinks.HrefLinks.twitter },
          'Twitter'
        ),
        ' for up to date announcements, news or to just chat with the community! '
      ),
      _react2.default.createElement(
        'p',
        null,
        'And of course please check back soon for the application update and complete event schedule!'
      )
    )
  );
}

exports.default = Offseason;

/***/ }),

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleScheduleStatus = undefined;
exports.Schedule = Schedule;

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(86);

var _Header2 = _interopRequireDefault(_Header);

var _TakingApplications = __webpack_require__(293);

var _TakingApplications2 = _interopRequireDefault(_TakingApplications);

var _Offseason = __webpack_require__(291);

var _Offseason2 = _interopRequireDefault(_Offseason);

var _FinishedSchedule = __webpack_require__(290);

var _FinishedSchedule2 = _interopRequireDefault(_FinishedSchedule);

var _ApplicationsClosed = __webpack_require__(289);

var _ApplicationsClosed2 = _interopRequireDefault(_ApplicationsClosed);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Schedule(props) {
  return _react2.default.createElement(
    'section',
    { id: 'schedule' },
    _react2.default.createElement(_Header2.default, null),
    _react2.default.createElement(
      'select',
      { value: props.scheduleStatus, onChange: props.scheduleStatusChange },
      _react2.default.createElement(
        'option',
        { value: 'takingApplications' },
        'Taking Applications'
      ),
      _react2.default.createElement(
        'option',
        { value: 'offseason' },
        'Offseason'
      ),
      _react2.default.createElement(
        'option',
        { value: 'applicationsClosed' },
        'Applications Closed'
      ),
      _react2.default.createElement(
        'option',
        { value: 'scheduleFinished' },
        'Schedule Finished'
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'schedule-wrapper' },
      handleScheduleStatus(props.scheduleStatus)
    )
  );
}

var handleScheduleStatus = exports.handleScheduleStatus = function handleScheduleStatus(scheduleStatus) {
  switch (scheduleStatus) {
    case 'takingApplications':
      return _react2.default.createElement(_TakingApplications2.default, null);
    case 'offseason':
      return _react2.default.createElement(_Offseason2.default, null);
    case 'applicationsClosed':
      return _react2.default.createElement(_ApplicationsClosed2.default, null);
    case 'scheduleFinished':
      return _react2.default.createElement(_FinishedSchedule2.default, null);
    default:
      //// TODO: 404 error here
      break;
  }
};

exports.default = Schedule;

/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _Heart = __webpack_require__(113);

var _Heart2 = _interopRequireDefault(_Heart);

var _HrefLinks = __webpack_require__(87);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TakingApplications() {
  return _react2.default.createElement(
    'div',
    { className: 'taking-applications' },
    _react2.default.createElement(_Heart2.default, null),
    _react2.default.createElement(
      'div',
      { className: 'info' },
      _react2.default.createElement(
        'h2',
        null,
        'Join the Party'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Sorry, we don\'t currently have a schedule because we are in the process of taking applications. Check out the applications page for more details if you would like to join the party. In the meantime, come join the ',
        _react2.default.createElement(
          'a',
          { href: _HrefLinks.HrefLinks.discord },
          'Discord'
        ),
        ' or follow us on ',
        _react2.default.createElement(
          'a',
          { href: 'HrefLinks.twitter' },
          'Twitter'
        ),
        ' for up to date announcements, news or to chat with the community! '
      ),
      _react2.default.createElement(
        'p',
        null,
        'And of course please check back soon for the complete event schedule!'
      )
    )
  );
}

exports.default = TakingApplications;

/***/ }),

/***/ 294:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authenticate = exports.isAuthenticated = exports.getRefreshToken = exports.getAccessToken = undefined;

var _jsCookies = __webpack_require__(78);

var _jsCookies2 = _interopRequireDefault(_jsCookies);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var getAccessToken = exports.getAccessToken = function getAccessToken() {
  return _jsCookies2.default.getItem('jwt');
};
var getRefreshToken = exports.getRefreshToken = function getRefreshToken() {
  return _jsCookies2.default.getItem('refresh_token');
};
var isAuthenticated = exports.isAuthenticated = function isAuthenticated() {
  return !!getAccessToken();
};

var authenticate = exports.authenticate = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var tokens, expires, inOneHour;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!getRefreshToken()) {
              _context.next = 16;
              break;
            }

            _context.prev = 1;
            _context.next = 4;
            return refreshTokens();

          case 4:
            tokens = _context.sent;
            // call an API, returns tokens

            expires = (tokens.expires_in || 60 * 60) * 1000;
            inOneHour = new Date(new Date().getTime() + expires);

            // you will have the exact same setters in your Login page/app too

            _jsCookies2.default.set('access_token', tokens.access_token, { expires: inOneHour });
            _jsCookies2.default.set('refresh_token', tokens.refresh_token);

            return _context.abrupt('return', true);

          case 12:
            _context.prev = 12;
            _context.t0 = _context['catch'](1);

            history.push('/');
            return _context.abrupt('return', false);

          case 16:

            history.push('/');
            return _context.abrupt('return', false);

          case 18:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[1, 12]]);
  }));

  return function authenticate() {
    return _ref.apply(this, arguments);
  };
}();
//
// <Route exact path="/admin" render={props =>
//   <Admin {...props}  scheduleStatus={this.state.scheduleStatus} scheduleStatusChange={this.scheduleStatusChange}/>}
//   />

/***/ }),

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getApplicationErrors = getApplicationErrors;
exports.validateText = validateText;
exports.validateCheckboxes = validateCheckboxes;
var validationMessages = {
  discordName: "We need you to have a discord for event information",
  firstGame: "You have to have a game to play",
  secondGame: "You have to have a back up game",
  twitchName: "We need your twitch name to check out your content",
  whatDoYouLike: "Come on, at least say you think FTC is sexy",
  dates: "We need to know what day(s) you are available",
  times: "You need to have at least available time slot",
  twitterName: '',
  donationIncentive: ''
};

function getApplicationErrors() {
  return validationMessages;
}

function validateText(textFormName, textFormValue) {
  //return empty string for no error
  if (textFormValue) {
    return '';
    //else add form Error message
  } else {
    return validationMessages[textFormName];
  }
}

function validateCheckboxes(checkboxGroupName, checkboxGroup) {
  //For each checkbox in group, if at least one is true validate
  if (Object.keys(checkboxGroup).find(function (checkbox) {
    return checkboxGroup[checkbox] === true;
  })) {
    return '';
    //else return error message
  } else {
    return validationMessages[checkboxGroupName];
  }
}

/***/ }),

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(84);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(257);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_App2.default, null), document.getElementById('app'));

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Header() {
  return _react2.default.createElement(
    "header",
    { id: "nav" },
    _react2.default.createElement(
      "div",
      { className: "nav-wrapper" },
      _react2.default.createElement(
        "div",
        { className: "logo" },
        "RBP.im g"
      ),
      _react2.default.createElement(
        "div",
        { className: "menu-wrapper" },
        _react2.default.createElement(
          "ul",
          { className: "menu" },
          _react2.default.createElement(
            "li",
            null,
            _react2.default.createElement(
              "a",
              { href: "/" },
              "Home "
            )
          ),
          _react2.default.createElement(
            "li",
            null,
            _react2.default.createElement(
              "a",
              { href: "/schedule" },
              "Schedule"
            )
          ),
          _react2.default.createElement(
            "li",
            null,
            _react2.default.createElement(
              "a",
              { href: "/apply" },
              "  Apply"
            )
          ),
          _react2.default.createElement(
            "li",
            null,
            _react2.default.createElement(
              "a",
              { href: "/apply" },
              "organize"
            )
          ),
          _react2.default.createElement(
            "li",
            null,
            _react2.default.createElement(
              "a",
              { href: "/apply" },
              "About us"
            )
          )
        )
      )
    )
  );
}

exports.default = Header;

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var HrefLinks = exports.HrefLinks = {
  twitter: 'https://twitter.com/RetroBlockParty',
  discord: 'https://discord.gg/ppYfqHA '
};

/***/ })

},[296]);