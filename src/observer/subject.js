const Subject = () => {

  return {
    observers: [],

    subscribe: function(observer) {
      this.observers.push(observer);
    },

    unsubscribe: function(observer) {
      const index = this.observers.indexOf(observer);

      if (index > -1) {
        this.observers.splice(index, 1);
      }
    },

    notify: function(observer) {
      const index = this.observers.indexOf(observer);

      if (index > -1) {
        this.observers[index].notify(index);
      }
    },

    notifyAll: function() {
      for (let i = 0; i < this.observers.length; i++){
        this.observers[i].notify(i);
      };
    }
  };
};

module.exports = Subject;
