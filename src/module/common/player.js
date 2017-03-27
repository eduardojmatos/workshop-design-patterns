const defaultOptions = {
  name: "Default Name",
  age: 18,
};

const Player = function(options = defaultOptions) {
  return {
    name: options.name || "Default Name",
    age: options.age || 18,
  };
};

export default Player;
