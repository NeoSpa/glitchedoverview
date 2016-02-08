'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var imagesnapjs = require('imagesnapjs'),
    gm = require('gm').subClass({ imageMagick: true }),
    fs = require('fs');

var GlitchedOverview = function () {
  function GlitchedOverview(outputName, outputSize, captureTime) {
    _classCallCheck(this, GlitchedOverview);

    this.name = outputName;
    this.size = outputSize;
    this.interval = parseFloat(captureTime * 60000) / parseFloat(this.size[1]);
  }

  _createClass(GlitchedOverview, [{
    key: 'capture',
    value: function capture() {
      var tempDate = new Date();
      var tempFilename = './tmp/temp' + tempDate.getSeconds().toString() + tempDate.getHours().toString() + tempDate.getDate().toString() + tempDate.getMonth().toString() + tempDate.getFullYear().toString() + '.jpg';
      imagesnapjs.capture(tempFilename, {}, function (err) {
        console.log(err ? err : 'Captured ' + tempFilename);
      });
    }
  }, {
    key: 'cropAndMerge',
    value: function cropAndMerge() {
      fs.readdir('./tmp', function (err, files) {
        files.forEach(function (file) {
          gm('./tmp/' + file).crop(640, 640, 640, 10);
        });
      });
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
