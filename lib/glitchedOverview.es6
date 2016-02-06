class glitchedOverview {
  constructor(outputName, outputSize, captureTime) {
    this.name = outputName;
    this.size = outputSize;
    this.interval = parseFloat(captureTime) / parseFloat(this.size[1]);
  }

  set interval(value) {
    if (typeof value !== 'number') {
      throw new Error('Interval value must be a number.');
    }
    
    this._interval = parseFloat(value);
  }

  get interval() {
    return this._interval;
  }

}

module.exports = glitchedOverview;
