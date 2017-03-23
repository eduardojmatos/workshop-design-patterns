const expect = require("expect.js");
const sinon = require("sinon");
const Observer = require("../../build/observer/observer.js");

describe("Observer Module", function () {
  describe("#notify", function () {
    const observer = new Observer();

    it("calls notify of observer", function () {
      const notified = observer.notify("test");
      expect(notified).to.be("Observer message: test");
    });
  });
});

