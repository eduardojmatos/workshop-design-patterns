const FootballPlayer = function (options = {name: "Default Name", age: 18}) {
  let modality = "Football";

  const hasMinimalAge = (age) => age >= 18;

  return {
    name: options.name,
    age: options.age,
    getModality: () => modality,
    setModality: function (newModality = modality) {
      if (!hasMinimalAge(this.age)) {
        throw new Error("Has no minimal age for Football");
      }

      modality = newModality;
      return modality;
    },
    setAge: function (newAge = age) {
      if (!hasMinimalAge(newAge)) {
        return null;
      }

      this.age = newAge;
      return this.age;
    }
  }
}

module.exports = FootballPlayer;
