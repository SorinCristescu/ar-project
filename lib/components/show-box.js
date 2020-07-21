"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class ShowBox {
  constructor(element) {
    var _this = this;

    const box = document.querySelector('.box');
    console.log('Show Box', element);
    element.addEventListener('click', function () {
      _this.showBox(box);
    });
  }

  showBox(box) {
    box.classList.toggle('none');
  }

}

exports.default = ShowBox;