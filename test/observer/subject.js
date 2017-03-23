const expect = require("expect.js");
const sinon = require("sinon");
const Subject = require("../../build/observer/subject.js");
const Observer = require("../../build/observer/observer.js");

describe("Subject Module", function () {
  before(function () {
    this.subject = new Subject();
    this.observer1 = new Observer();
    this.observer2 = new Observer();
    this.observer3 = new Observer();
  });

  describe("#subscribe", function () {
    it("add observer to subject", function () {
      this.subject.subscribe(this.observer1);

      expect(this.subject.observers.length).to.be(1);
      expect(this.subject.observers[0]).to.be(this.observer1);
    });
  });

  describe("#unsubscribe", function () {
    it("removes observer from subject", function () {
      this.subject.unsubscribe(this.observer1);
      expect(this.subject.observers.length).to.be(0);
    });
  });

  describe("#notify", function () {
    it("calls notify of observer", function () {
      this.observer1.notify = sinon.stub().returns("notified");
      this.subject.subscribe(this.observer1);
      this.subject.notify(this.observer1);

      expect(this.observer1.notify).to.be.called;
    });
  });

  describe("#notifyAll", function () {
    before(function () {
      this.subject.subscribe(this.observer1);
      this.subject.subscribe(this.observer2);
      this.subject.subscribe(this.observer3);

      this.observer1 = sinon.stub().returns("notified 1");
      this.observer2 = sinon.stub().returns("notified 2");
      this.observer3 = sinon.stub().returns("notified 3");
    });

    it("calls all observers notify method", function () {
      this.subject.notifyAll();

      expect(this.observer1.notify).to.not.be.called;
      expect(this.observer2.notify).to.not.be.called;
      expect(this.observer3.notify).to.not.be.called;
    });
  });
});

