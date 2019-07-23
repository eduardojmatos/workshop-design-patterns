const defaultOptions = {
  name: 'Default Animal',
  specie: 'Unspecified',
};

const Animal = function(options = defaultOptions) {
  this.name = options.name;
  this.specie = options.specie;

  return this;
};

Animal.prototype.getFullName = function() {
  return `${this.name}, ${this.specie}`;
};

export default Animal;
