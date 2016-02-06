'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var imagesnap = require('imagesnap'),
    fs = require('fs');

var GlitchedOverview = function () {
  function GlitchedOverview(outputName, outputSize, captureTime) {
    _classCallCheck(this, GlitchedOverview);

    this.name = outputName;
    this.size = outputSize;
    this.interval = parseFloat(captureTime) / parseFloat(this.size[1]);
  }

  _createClass(GlitchedOverview, [{
    key: 'capture',
    value: function capture() {
      var tempDate = new Date();
      var tempFilename = 'temp' + tempDate.getSeconds().toString() + tempDate.getHours().toString() + tempDate.getDate().toString() + tempDate.getMonth().toString() + tempDate.getFullYear().toString() + '.jpg';
      var tempImageStream = fs.createWriteStream(tempFilename);
      imagesnap().pipe(tempImageStream);
    }
  }, {
    key: 'interval',
    set: function set(value) {
      if (typeof value !== 'number') {
        throw new Error('Interval value must be a number.');
      }

      this._interval = parseFloat(value);
    },
    get: function get() {
      return this._interval;
    }
  }]);

  return GlitchedOverview;
}();

module.exports = GlitchedOverview;
