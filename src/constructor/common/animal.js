const defaultOptions =  {
  name: "Default Animal",
  specie: "Unspecified"
}

const Animal = function (options = defaultOptions) {

  this.name = options.name;
  this.specie = options.specie;

  this.getFullName = () => {
    return `${this.name}, ${this.specie}`;
  }

  this.getWeight = () => {
    return `${this.name}, ${this.weight}kg`;
  }
}

module.exports = Animal;
