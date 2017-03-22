(function () {
  const FootballPlayer = function () {
    const minimalAge = 18;
    const hasMinimalAge = (age) => age > minimalAge;

    let modality = "Football";

    return {
      name: "Default Name",
      age: minimalAge,
      setModality: (newModality = modality) => {
        modality = newModality;
        return modality;
      },
      getModality: () => modality,
      setAge: function(age) {
        if (!hasMinimalAge(age)) {
          return null;
        }

        this.age = age;
        return this.age;
      },
    };
  };

  module.exports = FootballPlayer;
})();
