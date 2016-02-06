let chai = require('chai'),
    expect = require('chai').expect,
    GlitchedOverview = require('../lib/glitchedOverview.js');

describe('GlitchedOverviewMethods', () => {
  let testImage = new GlitchedOverview('aesthetic', [1200,1200], 2);


  it('Returns the interval value for the camera capture', () => {
    expect(testImage.interval).to.equal(100);
  });

  it('Verify the type of Capture method', () => {
    expect(typeof testImage.capture).to.equal('function');
  });

});
