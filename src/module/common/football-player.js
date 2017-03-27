const defaultOptions = {
  name: "Default Name",
  age: 18
};

const FootballPlayer = function (options = defaultOptions) {
  const minimalAge = 18;
  let modality = "Football";

  const hasMinimalAge = (age) => age > minimalAge;

  return {
    name: options.name || "Default Name",
    age: options.age || minimalAge,
    setModality: (newModality = modality) => {
      modality = newModality;
      return modality;
    },
    getModality: () => modality,
    setAge: (age, ...args) => {
      if (!hasMinimalAge(age)) {
        return null;
      }

      this.age = age;
      return this.age;
    },
  };
};

module.exports = FootballPlayer;
