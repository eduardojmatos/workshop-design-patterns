const defaultOptions = {
  name: "Default Name",
  age: 18
};

const Player = function (options = defaultOptions) {
  const minimalAge = 18;

  return {
    name: options.name || "Default Name",
    age: options.age || 18
  }
};

module.exports = Player;
