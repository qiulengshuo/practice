const Singleton = (function () {
  let instance;
  return {
    getInstance() {
      if (!instance) {
        instance = {
          a: 1,
        };
      }
      return instance;
    },
  };
})();

const obj1 = Singleton.getInstance();
const obj2 = Singleton.getInstance();

console.log(obj1 === obj2);
