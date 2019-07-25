const defaultOptions = {
  name: 'Default Animal',
  specie: 'Unspecified'
};

class Animal {
  constructor(options = defaultOptions) {
    this.name = options.name;
    this.specie = options.specie;

    return this;
  }

  getFullName() {
    return `${this.name}, ${this.specie}`;
  }
}

export default Animal;
