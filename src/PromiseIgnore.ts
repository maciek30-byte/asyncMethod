export const promiseIgnoreErrors = (
  arrayOfPromise: Promise<unknown>[]
): Promise<unknown> => {
  return new Promise((resolve, reject) => {
    let results: unknown[] = [];
    let counterOfPromises: number = 0;
    arrayOfPromise.forEach((promise) => {
      Promise.resolve(promise)
        .then((value) => {
          counterOfPromises += 1;
          results.push(value);
          if (counterOfPromises === arrayOfPromise.length) {
            resolve(results);
          }
        })
        .catch((err) => {
          counterOfPromises++;
          if (counterOfPromises === arrayOfPromise.length) {
            resolve(results);
          }
        });
    });
  });
};

export const ignoreE = async (
  promises: Promise<unknown>[]
): Promise<unknown> => {
  let counterOfPromises: number = 0;
  let results: unknown[] = [];
  for (let promise of promises) {
    // ask const or let
    try {
      const result = await promise;
      results.push(result);
    } catch (e) {
      console.log("error occured",e);
      // do nothing
    }
  }
  return results;
};
