const defaultOptions = {
  name: "Default Name",
  age: 18,
};

const Player = function(options = defaultOptions) {
  return {
    name: options.name,
    age: options.age,
  };
};

export default Player;
