(function () {
  const defaultOptions = {
    name: "Default Animal",
    specie: "Unspecified"
  };

  const Animal = function (options = defaultOptions) {
    this.name = options.name;
    this.specie = options.specie;

    this.getFullName = () => `${this.name}, ${this.specie}`;
  };

  module.exports = Animal;
})();
