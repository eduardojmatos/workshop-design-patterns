const Subject = function () {

  return {
    observers: [],

    subscribe: function(observer) {
      this.observers.push(observer);
    },

    unsubscribe: function (observer) {
      const index = this.observers.indexOf(observer);

      if (index > -1) {
        this.observers.splice(index, 1);
      }
    },

    notify: function(observer, value) {
      const index = this.observers.indexOf(observer);

      if (index > -1) {
        this.observers[index].notify(value);
      }
    },

    notifyAll: function(value) {
      for (let i = 0; i < this.observers.length; i++) {
        this.observers[i].notify(value);
      }
    }
  }
}

if(typeof module !== 'undefined') {
  module.exports = Subject;
}