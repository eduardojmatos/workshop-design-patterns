const expect = require("expect.js");
const Animal = require("../../../build/constructor/common/animal.js");

describe("Animal", function () {
  describe("#constructor", function () {
    describe("without parameters", function () {
      let animal = new Animal();

      it("should be instantiate Animal", function () {
        expect(animal.name).to.be("Default Animal");
        expect(animal.specie).to.be("Unspecified");
      });
    });

    describe("#getWeight", function () {
      let lion = new Animal({name: "Lion", specie: "Mammal"});
      lion.weight = 500;

      it("returns animal weigth", function () {
        expect(lion.weight).to.be(500);
        expect(lion.getWeight()).to.be("Lion, 500kg");
      });
    });

    describe("with parameters", function () {
      let lion = new Animal({name: "Lion", specie: "Mammal"});

      it("should be instantiate a Lion", function () {
        expect(lion.name).to.be("Lion");
        expect(lion.specie).to.be("Mammal");
      });
    });
  });

  describe("#getFullName()", function () {
    let animal = new Animal();

    it("should return full name of animal", function () {
      expect(animal.getFullName()).to.be("Default Animal, Unspecified");
    });
  });
});

