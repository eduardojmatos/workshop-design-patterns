const Observer = function () {
  return {
    notify(msg) {
      return `Observer message: ${msg}`;
    }
  }
}

export default Observer;
