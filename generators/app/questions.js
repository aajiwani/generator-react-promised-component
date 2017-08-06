'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = [{
  name: 'componentName',
  type: 'input',
  message: 'Enter component name:',
  validate: function validate(value) {
    var re = new RegExp('^[A-Za-z]+\\w*$', 'g');
    return re.test(value) ? true : 'Please enter a component name matching regex(^[A-Za-z]+\\w*$)';
  }
}, {
  name: 'shallRequireParentProps',
  type: 'confirm',
  message: 'Success component requires parent props support? :',
  default: true
}, {
  name: 'isSeperateScreen',
  type: 'confirm',
  message: 'Shall generate a wrapper component? :',
  default: true
}, {
  name: 'shallOverwrite',
  type: 'confirm',
  message: 'Shall we overwrite if the directory already exists? :',
  default: false
}];
module.exports = exports['default'];