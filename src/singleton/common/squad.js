import GenericPlayer from '../../module/common/football-player';

const Squad = function() {
  let instance;

  const init = function () {
    const players = [];

    return {
      getPlayers: () => players,
      addPlayer: (options) => {
        const newPlayer = new GenericPlayer(options);
        players.push(newPlayer);

        return players;
      }
    }
  }

  return {
    getInstance: () => {
      if (!instance) {
        instance = init();
      }

      return instance;
    }
  }
};

export default Squad;
