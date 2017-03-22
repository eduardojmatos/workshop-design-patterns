const expect = require("expect.js");
const Squad = require("../../../build/singleton/common/squad.js");

describe("Squad Module", function () {
  let squad;

  beforeEach(() => {
    squad = Squad.getInstance();
  });

  describe("#initialize", function () {
    it("instantiates the Squad", function () {
      const players = squad.getPlayers();

      expect(players).not.to.be_null;
      expect(players.length).to.be_empty;
    });

    describe("#addPlayer", function () {
      it("without parameters returns player default", function () {
        const addPlayer = squad.addPlayer();

        expect(addPlayer[0].name).to.be("Default");
        expect(addPlayer[0].age).to.be(18);
      });

      it("with parameters returns specific player", function () {
        const addPlayer = squad.addPlayer({
          name: "My Player",
          age: 30
        });

        expect(addPlayer[1].name).to.be("My Player");
        expect(addPlayer[1].age).to.be(30);
      });
    });

    describe("#getPlayer", function () {
      it("returns all players of squad", function () {
        const players = squad.getPlayers();

        expect(players).not.to.be.empty;
        expect(players.length).to.be(2);
      });
    });
  });
});

