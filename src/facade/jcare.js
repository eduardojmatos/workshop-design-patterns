const jCare = function(document) {
  if (!document) throw new Error("document needs to be passed as argument");

  this.document = document;

  return {
    findClass(className) {
      if (!className) throw new Error("a class needs to be passed");

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

export default jCare;
