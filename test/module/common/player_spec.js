import expect from "expect.js";
import Player from "../../../src/module/common/player.js";

describe("Player Module", function () {
  describe("#initialize", function () {
    describe("without parameters", function () {
      let player = new Player();

      it("should be instantiate Player", function () {
        expect(player.name).to.be("Default Name");
        expect(player.age).to.be(18);
      });
    });

    describe("with parameters", function () {
      let player = new Player({name: "Ronaldo", age: 40});

      it("should be instantiate Player", function () {
        expect(player.name).to.be("Ronaldo");
        expect(player.age).to.be(40);
      });
    });
  });

  describe("#getFullName", function() {
    describe("without parameters", function() {
      let player = new Player();

      it("should return Name and age", function() {
        expect(player.getFullName()).to.be("Default Name, 18");
      });
    });

    describe("with parameters", function() {
      let player = new Player({name: "Ademir da Guia", age: 70});

      it("should return Name and age", function() {
        expect(player.getFullName()).to.be("Ademir da Guia, 70");
      });
    });
  });
});

