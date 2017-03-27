const Observer = function () {
  return {
    notify: function(msg) {
      //console.log(msg);
      return `Observer message: ${msg}`;
    }
  }
}

// to use on browsers
if (typeof module !== 'undefined') {
	module.exports = Observer;
}
