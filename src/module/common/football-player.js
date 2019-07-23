const defaultOptions = {
  name: 'Default Name',
  age: 18,
}

const GenericPlayer = function(options = defaultOptions) {
  const minimalAge = 18;
  let modality = 'Football';
  const hasMininalAge = age => age > minimalAge;

  return {
    name: options.name,
    age: options.age,
    getModality: () => modality,
    setModality(newModality) {
      modality = newModality;
      return modality;
    },
    setAge(newAge) {
      if (!hasMininalAge(newAge)) {
        return null;
      }

      this.age = newAge;
      return this.age;
    }
  }
};

export default GenericPlayer;
