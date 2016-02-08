let imagesnapjs = require('imagesnapjs'),
    gm = require('gm').subClass({imageMagick: true}),
    fs = require('fs');

class GlitchedOverview {
  constructor(outputName, outputSize, captureTime) {
    this.name = outputName;
    this.size = outputSize;
    this.interval = parseFloat(captureTime * 60000) / parseFloat(this.size[1]);
  };

  set interval(value) {
    if (typeof value !== 'number') {
      throw new Error('Interval value must be a number.');
    }

    this._interval = parseFloat(value);
  };

  get interval() {
    return this._interval;
  };


  capture() {
    let tempDate = new Date();
    let tempFilename = './tmp/temp'+tempDate.getSeconds().toString()+tempDate.getHours().toString()+tempDate.getDate().toString()+tempDate.getMonth().toString()+tempDate.getFullYear().toString()+'.jpg';
    imagesnapjs.capture(tempFilename, {}, (err) => {
      console.log(err ? err : 'Captured '+tempFilename);

    });

  };

  cropAndMerge() {
    fs.readdir('./tmp', (err, files) => {
      files.forEach((file) => {
        gm('./tmp/'+file).crop(640, 640, 640, 10);
      });
    });
  }

}

module.exports = GlitchedOverview;
