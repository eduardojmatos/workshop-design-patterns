import FootballPlayer from '../../module/common/football-player.js';

const Squad = function() {
  let instance = null;

  const init = function() {
    const players = [];

    return {
      getPlayers: () => players,
      addPlayer: (options) => {
        const newPlayer = new FootballPlayer(options);

        players.push(newPlayer);

        return players;
      }
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

export default Squad;
