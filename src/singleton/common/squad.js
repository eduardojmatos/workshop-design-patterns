const FootballPlayer = require("../../module/common/football-player.js");

const Squad = function() {
  let instance = null;

  const init = function() {
    const players = [];

    return {
      addPlayer: (options) => {
        const newPlayer = new FootballPlayer({
          name: options.name, age: options.age,
        });

        players.push(newPlayer);

        return players;
      },
      getPlayers: () => players,
    };
  };

  return {
    getInstance: () => {
      if (!instance) {
        instance = init();
      }

      return instance;
    },
  };
};

module.exports = Squad;
