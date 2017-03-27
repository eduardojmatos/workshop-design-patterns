import expect from "expect.js";
import sinon from "sinon";
import Animal from "../../src/constructor/common/animal.js";
import Observer from "../../src/observer/observer.js";

describe("Observer Module", function () {
  describe("#notify", function () {
    const observer = new Observer();

    it("calls notify of observer", function () {
      const notified = observer.notify("test");
      expect(notified).to.be("Observer message: test");
    });
  });
});

