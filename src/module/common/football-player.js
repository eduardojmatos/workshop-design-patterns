(function () {
  const minimalAge = 18;

  const FootballPlayer = function () {
    let modality = "Football";

    //const hasMinimalAge = () => this.age > minimalAge;

    return {
      name: "Default Name",
      age: 18,
      setModality: (newModality = modality) => {
        modality = newModality;
        return modality;
      },
      getModality: () => modality,
    };
  };

  module.exports = FootballPlayer;
})();
