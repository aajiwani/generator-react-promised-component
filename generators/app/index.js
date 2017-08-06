'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _yeomanGenerator = require('yeoman-generator');

var _yeomanGenerator2 = _interopRequireDefault(_yeomanGenerator);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _questions = require('./questions.js');

var _questions2 = _interopRequireDefault(_questions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactPromisedComponentGenerator = function (_Generator) {
  _inherits(ReactPromisedComponentGenerator, _Generator);

  function ReactPromisedComponentGenerator(args, opts) {
    _classCallCheck(this, ReactPromisedComponentGenerator);

    // This makes `gen-path` a required argument.
    var _this = _possibleConstructorReturn(this, (ReactPromisedComponentGenerator.__proto__ || Object.getPrototypeOf(ReactPromisedComponentGenerator)).call(this, args, opts));

    _this.argument('gen_path', {
      type: String,
      required: true,
      desc: 'A generation path for promised component'
    });

    _this.log('Generation path : ', _this.options.gen_path);

    if (!_fs2.default.accessSync(_this.options.gen_path, _fs2.default.constants.R_OK | _fs2.default.constants.W_OK)) {
      _this.log('Supplied generation path must be visible to the generator and must have a read and write access');
      throw new Error('Invalid directory path');
    }
    return _this;
  }

  _createClass(ReactPromisedComponentGenerator, [{
    key: 'prompting',
    value: function prompting() {
      var _this2 = this;

      return this.prompt(_questions2.default).then(function (answers) {
        _this2.log('Component Name', answers.componentName);
        _this2.log('Require parent props', answers.shallRequireParentProps);
        _this2.log('Generate wrapper', answers.isSeperateScreen);
        _this2.log('Overwrite path', answers.shallOverwrite);
      });
    }
  }]);

  return ReactPromisedComponentGenerator;
}(_yeomanGenerator2.default);

exports.default = ReactPromisedComponentGenerator;
;
module.exports = exports['default'];