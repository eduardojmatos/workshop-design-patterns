import { expect, describe, it } from "expect.js";
import sinon from "sinon";
import jsdom from "mocha-jsdom";
import jCare from "../../src/facade/jcare";

describe("jCare", function() {
  jsdom();

  before(function() {
    this.foundedElement = document.createElement("div");
    this.foundedElement.classList.add("test");
    document.body.appendChild(this.foundedElement);
  });

  describe("instantiate jCare", function() {
    it("without document argument", () => {
      expect(jCare).to.throwException(/document needs to be passed as argument/);
    });

    it("with document argument", () => {
      expect(jCare).withArgs(document).to.not.throwException();
    });
  });

  describe("#findClass", () => {
    let $;

    beforeEach(function () {
      $ = new jCare(document);
    });

    it("with argument return elements", () => {
      expect($.findClass("test")).not.to.be.empty;
      expect($.findClass("test")[0].classList).to.be(this.foundedElement.classList);
    });

    it("without argument returns error", () => {
      expect($.findClass).to.throwException(/a class needs to be passed/);
    });

    it("uses querySelectorAll if browser supports", () => {
      const querySelectorAll = sinon.spy(document, "querySelectorAll");

      $.findClass("test");

      sinon.assert.calledOnce(querySelectorAll);
    });

    it("uses getElementsByClassName if browser dont supports querySelectorAll", () => {
      $ = new jCare(document);
      document.querySelectorAll = null;

      const getElementsByClassName = sinon.spy(document, "getElementsByClassName");

      $.findClass("test");

      sinon.assert.calledOnce(getElementsByClassName);
    });
  });
});
