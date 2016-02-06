class glitchedOverview {
  constructor(outputName, outputSize, captureTime) {
    this.name = outputName;
    this.size = outputSize;
    this.captureInterval = (parseFloat(captureTime) / parseFloat(this.size[1]));
  };
}

module.exports = glitchedOverview;
