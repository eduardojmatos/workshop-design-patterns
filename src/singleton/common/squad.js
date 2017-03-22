const Squad = (function () {
  const FootballPlayer = require("../../module/common/football-player.js");
  var instance = null;

  function init() {
    let players = [];

    return {
      addPlayer: (options = {name: "Default", age: 18}) => {
        const newPlayer = new FootballPlayer();

        newPlayer.name = options.name;
        newPlayer.age = options.age;

        players.push(newPlayer);

        return players;
      },
      getPlayers: () => {
        return players;
      }
    };
  }

  return {
    getInstance: () => {
      if ( !instance ) {
        instance = init();
      }

      return instance;
    }
  }
})();

module.exports = Squad;
