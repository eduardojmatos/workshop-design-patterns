const expect = require("expect.js");
const sinon = require("sinon");
const Subject = require("../../build/observer/subject.js");
const Observer = require("../../build/observer/observer.js");

describe("Subject Module", function () {
  describe("#subscribe", function () {
    const subject = new Subject();
    const observer1 = new Observer();

    it("add observer to subject", function () {
      subject.subscribe(observer1);

      expect(subject.observers.length).to.be(1);
      expect(subject.observers[0]).to.be(observer1);
    });
  });

  describe("#unsubscribe", function () {
    const subject = new Subject();
    const observer1 = new Observer();
    const observer2 = new Observer();
    const observer3 = new Observer();

    it("removes observer from subject", function () {
      subject.unsubscribe(observer1);
      expect(subject.observers.length).to.be(0);
    });
  });

  describe("#notify", function () {
    const subject = new Subject();
    const observer1 = new Observer();

    it("calls notify of observer", function () {
      observer1.notify = sinon.stub().returns("notified");
      subject.subscribe(observer1);
      subject.notify(observer1);

      expect(observer1.notify).to.be.called;
    });
  });

  describe("#notifyAll", function () {
    const subject = new Subject();
    const observer1 = new Observer();
    const observer2 = new Observer();

    it("calls all observers notify method", function () {
      subject.subscribe(observer1);
      subject.subscribe(observer2);

      const observerSpy1 = sinon.spy(observer1, "notify");
      const observerSpy2 = sinon.spy(observer2, "notify");

      subject.notifyAll();

      sinon.assert.called(observerSpy1);
      sinon.assert.called(observerSpy2);
    });
  });
});

