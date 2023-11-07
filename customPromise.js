const PROMISE_STATE = {
  PENDING: "PENDING",
  REJECTED: "REJECTED",
  FULFILLED: "FULFILLED",
};

const customPromise = (doSomething) => {
  let state = PROMISE_STATE.PENDING;
  let value;

  const catchFunc = (err) => {};

  const resolve = () => {
    state = PROMISE_STATE.FULFILLED;
    return value;
  };

  const reject = (err) => {
    console.log(err);
    state = PROMISE_STATE.REJECTED;
    throw err;
  };
  const thenFunc = (doSomethingAfterCompletion) => {
    return doSomethingAfterCompletion(value);
  };

  const getState = () => {
    return state;
  };

  try {
    value = doSomething();
    return {
      value: resolve(),
      then: thenFunc,
      catch: catchFunc,
    };
  } catch (err) {
    reject(err);
  }
};

// callAPI

const doSomething = (num) => {
  return num * 2;
};

const doSomethingAfterCompletion = (num) => {
  return num / 2;
};

const value = customPromise(() => doSomething(2)).then(
  doSomethingAfterCompletion,
);

console.log(value);
