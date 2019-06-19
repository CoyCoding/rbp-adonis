webpackJsonp([1],{

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleScheduleStatus = undefined;
exports.Apply = Apply;

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _ApplicationsOpen = __webpack_require__(277);

var _ApplicationsOpen2 = _interopRequireDefault(_ApplicationsOpen);

var _ApplicationsClosed = __webpack_require__(276);

var _ApplicationsClosed2 = _interopRequireDefault(_ApplicationsClosed);

var _Header = __webpack_require__(72);

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
      handleScheduleStatus(props.scheduleStatus)
    )
  );
}

var handleScheduleStatus = exports.handleScheduleStatus = function handleScheduleStatus(scheduleStatus) {
  switch (scheduleStatus) {
    case 'takingApplications':
      return _react2.default.createElement(_ApplicationsOpen2.default, null);
    default:
      return _react2.default.createElement(_ApplicationsClosed2.default, null);
  }
};

exports.default = Apply;

/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ApplicationsClosed = ApplicationsClosed;

var _react = __webpack_require__(9);

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

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _HrefLinks = __webpack_require__(73);

var _Checkbox = __webpack_require__(278);

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _axios = __webpack_require__(259);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    _classCallCheck(this, ApplicationsOpen);

    //Set the value of the all the dates in the date array to false
    var _this = _possibleConstructorReturn(this, (ApplicationsOpen.__proto__ || Object.getPrototypeOf(ApplicationsOpen)).call(this, props));

    _this.handleTextChange = function (event) {
      var name = event.target.name;

      _this.setState({
        textFields: _extends({}, _this.state.textFields, _defineProperty({}, name, event.target.value))

      }, function () {
        console.log(_this.state);
      });
    };

    _this.handleDateChange = function (event) {
      var name = event.target.name;

      _this.setState({
        dates: _extends({}, _this.state.dates, _defineProperty({}, name, !_this.state.dates[name]))

      }, function () {
        Object.keys(_this.state.dates).filter(function (date) {
          return _this.state.dates[date];
        }).forEach(function (date) {
          console.log(date, "is selected.");
        });
      });
    };

    _this.handleTimeChange = function (event) {
      var name = event.target.name;

      _this.setState({
        times: _extends({}, _this.state.times, _defineProperty({}, name, !_this.state.times[name]))
      }, function () {
        Object.keys(_this.state.times).filter(function (time) {
          return _this.state.times[time];
        }).forEach(function (time) {
          console.log(time, "is selected.");
        });
      });
    };

    _this.handleBackupChange = function (event) {
      _this.setState({
        backup: !_this.state.backup

      }, function () {
        Object.keys(_this.state.times).filter(function (time) {
          return _this.state.times[time];
        }).forEach(function (time) {
          console.log(time, "is selected.");
        });
      });
    };

    _this.handleSubmit = function (submitEvent) {
      submitEvent.preventDefault();
      var data = _this.state;
      try {
        _axios2.default.post('/apply', data).then(function (res) {
          //redirect after application NEEDS STATUS 200 PAGE
          window.location = '/';
        });
      } catch (error) {
        window.location = "/appy";
      }
    };

    _this.createDateCheckbox = function (date) {
      return _react2.default.createElement(_Checkbox2.default, {
        label: date,
        isSelected: _this.state.dates[date],
        onCheckboxChange: _this.handleDateChange,
        key: date
      });
    };

    _this.createTimeCheckbox = function (time) {
      return _react2.default.createElement(_Checkbox2.default, {
        label: time,
        isSelected: _this.state.times[time],
        onCheckboxChange: _this.handleTimeChange,
        key: time
      });
    };

    _this.createBackupCheckbox = function (backup) {
      return _react2.default.createElement(_Checkbox2.default, {
        label: 'yes',
        isSelected: _this.state.backup,
        onCheckboxChange: _this.handleBackupChange
      });
    };

    _this.createDateCheckboxes = function () {
      return DATES.map(_this.createDateCheckbox);
    };

    _this.createTimeCheckboxes = function () {
      return TIMES.map(_this.createTimeCheckbox);
    };

    _this.state = {
      dates: DATES.reduce(function (dates, date) {
        return _extends({}, dates, _defineProperty({}, date, false));
      }, {}),
      //Set the value of the all the times in the date array to false
      times: TIMES.reduce(function (times, time) {
        return _extends({}, times, _defineProperty({}, time, false));
      }, {}),
      textFields: {},
      backup: false
    };
    return _this;
  }

  _createClass(ApplicationsOpen, [{
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
        _react2.default.createElement(
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
              { onSubmit: this.handleSubmit },
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
                _react2.default.createElement('input', { name: 'twitchName', onChange: this.handleTextChange, type: 'text', placeholder: 'https://www.twitch.tv/Batman' })
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
                _react2.default.createElement('input', { name: 'discordName', onChange: this.handleTextChange, type: 'text', placeholder: 'Batman' })
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
                _react2.default.createElement('input', { name: 'twitterName', onChange: this.handleTextChange, type: 'text', placeholder: 'Batman' })
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
                _react2.default.createElement('input', { name: 'firstGame', onChange: this.handleTextChange, type: 'text', placeholder: 'Super Mario Bro. 2 BBy' })
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
                _react2.default.createElement('input', { name: 'secondGame', onChange: this.handleTextChange, type: 'text', placeholder: 'Super Mario Bros. 2 again BBy' })
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
                  this.createDateCheckboxes()
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
                  this.createTimeCheckboxes()
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
                _react2.default.createElement('input', { name: 'donationIncentive', onChange: this.handleTextChange, type: 'text', placeholder: 'Super Mario Bros. 2 again BBy' })
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-item' },
                _react2.default.createElement(
                  'label',
                  { htmlFor: 'whatDoYouLike' },
                  'Why would you like to participate in RetroBlockParty? *'
                ),
                _react2.default.createElement('textarea', { name: 'whatDoYouLike', onChange: this.handleTextChange, type: 'text', placeholder: 'I like the food' })
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
                  this.createBackupCheckbox()
                )
              ),
              _react2.default.createElement(
                'button',
                { name: 'submint', type: 'submit' },
                ' submit'
              )
            )
          )
        )
      );
    }
  }]);

  return ApplicationsOpen;
}(_react.Component);

exports.default = ApplicationsOpen;

/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(9);

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

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(48);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Apply = __webpack_require__(251);

var _Apply2 = _interopRequireDefault(_Apply);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ApplyPage = function (_Component) {
	_inherits(ApplyPage, _Component);

	function ApplyPage(props) {
		_classCallCheck(this, ApplyPage);

		var _this = _possibleConstructorReturn(this, (ApplyPage.__proto__ || Object.getPrototypeOf(ApplyPage)).call(this, props));

		_this.scheduleStatusChange = function (event) {
			_this.setState({
				scheduleStatus: event.target.value
			});
		};

		_this.state = {
			scheduleStatus: 'takingApplications'
		};
		return _this;
	}

	_createClass(ApplyPage, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(_Apply2.default, { scheduleStatus: this.state.scheduleStatus });
		}
	}]);

	return ApplyPage;
}(_react.Component);

exports.default = ApplyPage;


_reactDom2.default.render(_react2.default.createElement(ApplyPage, null), document.getElementById('app'));

/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(86);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Header() {
  return _react2.default.createElement(
    'header',
    { id: 'nav' },
    _react2.default.createElement(
      'div',
      { className: 'nav-wrapper' },
      _react2.default.createElement(
        'div',
        { className: 'logo' },
        'RBP.im g'
      ),
      _react2.default.createElement(
        'div',
        { className: 'menu-wrapper' },
        _react2.default.createElement(
          'ul',
          { className: 'menu' },
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: '/' },
              'Home '
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: '/schedule' },
              'Schedule'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: '/apply' },
              '  Apply'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: '/apply' },
              'organize'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: '/apply' },
              'About us'
            )
          )
        )
      )
    )
  );
}

exports.default = Header;

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var HrefLinks = exports.HrefLinks = {
  twitter: 'https://twitter.com/RetroBlockParty',
  discord: 'https://discord.gg/ppYfqHA '
};

/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(140)(true);
// Module
exports.push([module.i, "", "",{"version":3,"sources":[],"names":[],"mappings":"","file":"Header.scss"}]);


/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(79);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(160)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../../../node_modules/css-loader/dist/cjs.js??ref--1-1!../../../../../node_modules/sass-loader/lib/loader.js??ref--1-2!./Header.scss", function() {
		var newContent = require("!!../../../../../node_modules/css-loader/dist/cjs.js??ref--1-1!../../../../../node_modules/sass-loader/lib/loader.js??ref--1-2!./Header.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ })

},[279]);