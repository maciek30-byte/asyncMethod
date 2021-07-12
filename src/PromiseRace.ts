

export const promiseRace = (promisesArray: Promise<unknown>[]) => {
  return new Promise((resolve, reject) => {
    promisesArray.forEach((promise) => {
      promise.then(resolve).catch(reject);
    });
  });
};

