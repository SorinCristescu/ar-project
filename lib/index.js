"use strict";

var _helloWorld = _interopRequireDefault(require("./components/hello-world"));

var _showBox = _interopRequireDefault(require("./components/show-box"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const components = [{
  class: _helloWorld.default,
  selector: '.hello',
  options: {
    order: 1
  }
}, {
  class: _showBox.default,
  selector: '.show-box',
  options: {
    order: 2
  }
}];
components.forEach(function (component) {
  if (document.querySelector(component.selector) !== null) {
    document.querySelectorAll(component.selector).forEach(function (element) {
      return new component.class(element, component.options);
    });
  }
});