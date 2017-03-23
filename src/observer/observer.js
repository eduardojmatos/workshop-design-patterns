const Observer = () => {

  return {
    notify: function (msg) {
      const message = `Observer message: ${msg}`;

      // could send to another point
      // ex: console.log(msg, "=>", message);

      return message;
    }
  };
};

module.exports = Observer;
