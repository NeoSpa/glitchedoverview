let imagesnap = require('imagesnap'),
    fs = require('fs');

class GlitchedOverview {
  constructor(outputName, outputSize, captureTime) {
    this.name = outputName;
    this.size = outputSize;
    this.interval = parseFloat(captureTime) / parseFloat(this.size[1]);
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
    let tempFilename = 'temp'+tempDate.getSeconds().toString()+tempDate.getHours().toString()+tempDate.getDate().toString()+tempDate.getMonth().toString()+tempDate.getFullYear().toString()+'.jpg';
    let tempImageStream = fs.createWriteStream(tempFilename);
    imagesnap().pipe(tempImageStream);

  };


}

module.exports = GlitchedOverview;
