const expect = require("expect.js");
const FootballPlayer = require("../../../build/module/common/football-player.js");

describe("FootballPlayer Module", function () {
  describe("#initialize", function () {
    describe("without parameters", function () {
      let footballPlayer = new FootballPlayer();

      it("instantiate Player", function () {
        expect(footballPlayer.name).to.be("Default Name");
        expect(footballPlayer.age).to.be(18);
      });

      describe("#getModality", function () {
        it("returns player modality", function () {
          expect(footballPlayer.getModality())
            .to.be("Football");
        });
      });

      describe("#setModality", function () {
        it("returns new modality", function () {
          const newModality = "Voleyball";

          expect(footballPlayer.setModality(newModality))
            .to.be("Voleyball");
        });
      });

      describe("#setAge", function () {
        it("set new age to player", function () {
          expect(footballPlayer.setAge(22)).to.be(22);
        });

        it("set invalid new age to player", function () {
          expect(footballPlayer.setAge(17)).to.be(null);
        });

        it("set again a new age to player", function () {
          expect(footballPlayer.setAge(19)).to.be(19);
        });
      });
    });

    describe("with parameters", function () {
      let footballPlayer = new FootballPlayer();

      it("should be instantiate Player", function () {
        expect(footballPlayer.name).to.be("Default Name");
        expect(footballPlayer.age).to.be(18);
      });
    });
  });
});

