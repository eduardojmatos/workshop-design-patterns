var Observer = function () {

  return {
    notify: function (msg) {
      const message = `Observer message: ${msg}`;
      console.log(message);

      return message;
    }
  };
};

module.exports = Observer;
