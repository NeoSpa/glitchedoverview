let chai = require('chai'),
    expect = require('chai').expect,
    GlitchedOverview = require('../lib/glitchedOverview.js');

describe('GlitchedOverviewMethods', () => {
  let testImage;

  beforeEach(() => {
    testImage = new GlitchedOverview('aesthetic', [1200,1200], 240);
  });


  it('Returns the interval value for the camera capture', () => {
    expect(testImage.interval).to.equal(0.2);
    expect(textImage.capture).to.be('Function');
  });
});
