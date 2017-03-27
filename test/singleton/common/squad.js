import expect from "expect.js";
import Squad from "../../../src/singleton/common/squad.js";

describe("Squad Singleton", function () {
  let instance, squad;

  before(() => {
    squad = new Squad();
    instance = squad.getInstance();
  });

  describe("#initialize", function () {
    it("instantiates the Squad", function () {
      const players = instance.getPlayers();

      expect(players).not.to.be_null;
      expect(players.length).to.be_empty;
    });

    it("instantiates the Squad", function () {
      const players = instance.getPlayers();

      expect(players).not.to.be_null;
      expect(players.length).to.be_empty;
    });

    describe("#addPlayer", function () {
      it("with parameters returns specific player", function () {
        instance.addPlayer({ name: "My Player", age: 30 });

        expect(instance.getPlayers()[0].name).to.be("My Player");
        expect(instance.getPlayers()[0].age).to.be(30);
      });
    });

    describe("#getPlayers", function () {
      before(() => {
        instance.addPlayer({ name: "My Player 2", age: 42 });
        instance.addPlayer({ name: "My Player 3", age: 22 });
      });

      it("returns all players of squad", function () {
        const players = instance.getPlayers();

        expect(players).not.to.be.empty;
        expect(players.length).to.be(3);
      });
    });
  });
});
