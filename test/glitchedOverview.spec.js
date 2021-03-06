'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var chai = require('chai'),
    expect = require('chai').expect,
    GlitchedOverview = require('../lib/glitchedOverview.js');

describe('GlitchedOverviewMethods', function () {
  var testImage = new GlitchedOverview('aesthetic', [1200, 1200], 2);

  it('Returns the interval value for the camera capture', function () {
    expect(testImage.interval).to.equal(100);
  });

  it('Verify the type of Capture method', function () {
    expect(_typeof(testImage.capture)).to.equal('function');
  });

  it('Verify the output image generated by capture method', function () {
    // TODO...
    testImage.capture();
    testImage.cropAndMerge();
  });
});
