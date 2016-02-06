"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var glitchedOverview = function glitchedOverview(outputName, outputSize, captureTime) {
  _classCallCheck(this, glitchedOverview);

  this.name = outputName;
  this.size = outputSize;
  this.captureInterval = parseFloat(captureTime) / parseFloat(this.size[1]);
};

module.exports = glitchedOverview;
