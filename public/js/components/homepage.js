webpackJsonp([2],{

/***/ 259:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _WhatIsItSection = __webpack_require__(290);

var _WhatIsItSection2 = _interopRequireDefault(_WhatIsItSection);

var _Hero = __webpack_require__(288);

var _Hero2 = _interopRequireDefault(_Hero);

var _FaqSection = __webpack_require__(287);

var _FaqSection2 = _interopRequireDefault(_FaqSection);

var _Header = __webpack_require__(75);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Home() {
  return _react2.default.createElement(
    'section',
    { id: 'home' },
    _react2.default.createElement(_Header2.default, null),
    _react2.default.createElement(_Hero2.default, null),
    _react2.default.createElement(_WhatIsItSection2.default, null),
    _react2.default.createElement(_FaqSection2.default, null)
  );
}

exports.default = Home;

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

/***/ 288:
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

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(49);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Home = __webpack_require__(259);

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_Home2.default, null), document.getElementById('app'));

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

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(89);

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

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(143)(true);
// Module
exports.push([module.i, "", "",{"version":3,"sources":[],"names":[],"mappings":"","file":"Header.scss"}]);


/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(82);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(165)(content, options);

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

},[289]);