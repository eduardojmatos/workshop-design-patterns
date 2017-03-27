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
});

