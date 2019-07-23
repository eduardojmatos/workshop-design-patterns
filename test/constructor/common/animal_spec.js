import expect from "expect.js";
import Animal from "../../../src/constructor/common/animal";

describe("Animal", function () {
  describe("#constructor", function () {
    describe("without parameters", function () {
      let animal = new Animal();

      it("should be instantiate Animal", function () {
        expect(animal.name).to.be("Default Animal");
        expect(animal.specie).to.be("Unspecified");
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

