const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

const runMicroTask = (cb) => {
  setTimeout(() => {
    cb();
  }, 0);
};

const isPromise = (p) => {
  return !!(typeof p === 'object' && p && typeof p.then === 'function');
};

class MyPromise {
  constructor(executor) {
    try {
      this.__state = PENDING;
      this.__value = undefined;
      this.__handlers = [];
      executor(this.__resolve.bind(this), this.__reject.bind(this));
    } catch (error) {
      this.__reject(error);
      console.error(error);
    }
  }

  __resolve(data) {
    this.__changeState(FULFILLED, data);
  }

  __reject(reason) {
    this.__changeState(REJECTED, reason);
  }

  __changeState(state, data) {
    if (this.__state !== PENDING) {
      return;
    }
    this.__state = state;
    this.__value = data;
    this.__runHandlers();
  }

  __runHandlers() {
    if (this.__state === PENDING) {
      return;
    }
    while (this.__handlers[0]) {
      const handler = this.__handlers.shift();
      this.__runOneHandler(handler);
    }
  }

  __runOneHandler({ executor, state, resolve, reject }) {
    runMicroTask(() => {
      if (this.__state !== state) {
        return;
      }
      try {
        const res = executor(this.__value);
        if (isPromise(res)) {
          res.then(resolve, reject);
        } else {
          resolve(res);
        }
      } catch (error) {
        reject(error);
        console.error(error);
      }
    });
  }

  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      this.__pushHandler(onFulfilled, FULFILLED, resolve, reject);
      this.__pushHandler(onRejected, REJECTED, resolve, reject);
      this.__runHandlers();
    });
  }

  __pushHandler(executor, state, resolve, reject) {
    this.__handlers.push({
      executor,
      state,
      resolve,
      reject,
    });
  }
}

const p = new MyPromise((resolve, reject) => {
  resolve(1);
});

p.then(
  (res) => {
    return new MyPromise((resolve) => {
      resolve(1);
    });
  },
  (err) => {
    console.log(err, 'then err');
  },
).then((res) => {
  console.log('then2 ', res);
});
