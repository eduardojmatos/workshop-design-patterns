import FootballPlayer from "./../../module/common/football-player";

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

export default Squad;
