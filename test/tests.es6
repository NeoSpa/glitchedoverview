let chai = require('chai'),
    expect = require('chai').expect,
    glitchedOverview = require('../lib/glitchedOverview.js');

describe('GlitchedOverviewMethods', () => {
  let testImage;

  beforeEach(() => {
    testImage = new glitchedOverview('aesthetic', [1200,1200], 240);
  });


  it('Returns the interval value for the camera capture', () => {
    expect(testImage.interval).to.equal(0.2);
  });
});
