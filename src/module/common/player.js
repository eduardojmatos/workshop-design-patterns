const defaultOptions = {
  name: 'Default Name',
  age: 18,
}

const Player = function(options = defaultOptions) {

  return {
    name: options.name,
    age: options.age,
    getFullName() {
      return `${this.name}, ${this.age}`
    },
  }
};

export default Player;
