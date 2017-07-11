const jCare = function (domDocument) {
  if (!domDocument) throw new Error("document needs to be passed as argument");

  const document = domDocument;

  return {
    findClass(className) {
      if (!className) throw new Error("a class needs to be passed");

      if (document.querySelectorAll) {
        return document.querySelectorAll(`.${className}`);
      }

      return document.getElementsByClassName(className);
    }
  }
}

export default jCare;
