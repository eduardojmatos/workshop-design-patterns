const expect = require("expect.js");
const sinon = require("sinon");
const jsdom = require("mocha-jsdom");
const jCare = require("../../build/facade/jcare.js");

describe("jCare", function () {
  jsdom();

  before(function () {
    this.foundedElement = document.createElement("div");
    this.foundedElement.classList.add("test");
    document.body.appendChild(this.foundedElement);
  });

  it("#findClass", function () {
    const $ = new jCare(document);

    expect($.findClass("test")).not.to.be.empty;
    expect($.findClass("test").classList).to.be(this.foundedElement.classList);
  });
});
