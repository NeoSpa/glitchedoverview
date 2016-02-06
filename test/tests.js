'use strict';

var chai = require('chai'),
    expect = require('chai').expect,
    glitchedOverview = require('../lib/glitchedOverview.js');

describe('GlitchedOverviewMethods', function () {
  var testImage = undefined;

  beforeEach(function () {
    testImage = new glitchedOverview('aesthetic', [1200, 1200], 240);
  });

  it('Returns the interval value for the camera capture', function () {
    expect(testImage.interval).to.equal(20);
    expect(testImage.interval).to.equal(0.2);
  });
});
