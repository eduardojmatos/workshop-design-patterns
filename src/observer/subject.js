const Subject = function() {
  return {
    observers: [],

    subscribe(observer) {
      this.observers.push(observer)
    },

    unsubscribe(observer) {
      const index = this.observers.indexOf(observer)

      if (index > -1) {
        this.observers.splice(index, 1)
      }
    },

    notify(observer, value) {
      const index = this.observers.indexOf(observer)

      if (index > -1) {
        this.observers[index].notify(value);
      }
    },

    notifyAll(value) {
      for (let i = 0; i < this.observers.length; i += 1) {
        this.observers[i].notify(value);
      }
    },
  };
};

export default Subject;
