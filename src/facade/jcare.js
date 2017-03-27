const jCare = function(document) {
  if (!document) throw new Error("document needs to be passed as argument");

  this.document = document;

  return {
    findClass(className) {
      let elements;

      if (document.querySelector) {
        elements = document.querySelector(`.${className}`);
      } else {
        elements = document.getElementsByClassName(className);
      }

      return elements;
    },
  };
};

module.exports = jCare;
