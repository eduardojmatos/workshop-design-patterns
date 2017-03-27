const Observer = function() {
  return {
    notify(msg) {
      return `Observer message: ${msg}`;
    },
  };
};

// to use on browsers
if (typeof module !== "undefined") {
  module.exports = Observer;
}
