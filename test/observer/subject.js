const expect = require("expect.js");
const sinon = require("sinon");
const Subject = require("../../build/observer/subject.js");

describe("Subject Module", function () {
  let observer1 = new Object();
  let observer2 = new Object();
  let observer3 = new Object();

  describe("#initialize", function () {

    describe("#subscribe", function () {
      const subject = new Subject();

      it("add observer to subject", function () {
        subject.subscribe(observer1);
        expect(subject.observers.length).to.be(1);
        expect(subject.observers[0]).to.be(observer1);
      });
    });

    describe("#unsubscribe", function () {
      const subject = new Subject();

      it("removes observer from subject", function () {
        subject.unsubscribe(observer1);
        expect(subject.observers.length).to.be(0);
      });
    });

    describe("#notify", function () {
      const subject = new Subject();

      observer1.notify = sinon.stub().returns("notified");
      subject.subscribe(observer1);

      it("calls notify of observer", function () {
        subject.notify(observer1);
        expect(observer1.notify).to.be.called;
      });
    });

    describe("#notifyAll", function () {
      const subject = new Subject();

      observer1.notify = sinon.stub().returns("notified");
      observer2.notify = sinon.stub().returns("notified");
      observer3.notify = sinon.stub().returns("notified");

      subject.subscribe(observer1);
      subject.subscribe(observer2);
      subject.subscribe(observer3);

      it("calls all observers notify", function () {
        //subject.notifyAll();
        expect(observer1.notify).to.be.called;
        expect(observer2.notify).to.be.called;
        expect(observer3.notify).to.be.called;
      });
    });
  });
});

