const Player = function (options = {name: "Default Name", age: 18}) {

  return {
    name: options.name,
    age: options.age
  }
}

module.exports = Player;
