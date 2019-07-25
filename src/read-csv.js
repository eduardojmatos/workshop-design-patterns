const stream = require("stream");
const Transform = stream.Transform;
const {
  url: '',
  bulkFile: '',
  onCrawled: '',
}

class ReadCsv {
  constructor(options = defaultOptions) {
    this.url = url;
    this.transformStream = new Transform({ transform(chunk, encoding, callback) {
      callback(null, chunk);
    }});

    transformStream.on("data", this.onData);
  }

  onData() {
  }
}
