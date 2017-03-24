const Observer = function () {
  return {
    notify: function(msg) {
      console.log(msg);
      return `Observer message: ${msg}`;
    }
  }
}

