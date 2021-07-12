import { pArray } from "./mockup";

export const promiseAll = (arrayPromises: Promise<unknown>[]) => {
  return new Promise((resolve, reject) => {
    const results: unknown[] = [];
    let resolvedCounter: number = 0;
    const start = Date.now();

    arrayPromises.forEach((promise, index) => {
      promise
        .then((result) => {
          results[index] = result;
          resolvedCounter += 1;
          if (arrayPromises.length === resolvedCounter) resolve(results);
        })
        .catch((error) => {
          reject(error.message);
        });
    });
  });
};

export const aPromiseAll = async (arrayPromises: Promise<unknown>[]) => {
  const results: unknown[] = [];
  try {
    for await (const promise of arrayPromises) {
      results.push(promise);
      if (results.length === arrayPromises.length) {
        return results;
      }
    }
  } catch (e) {
    console.error(e.message);
    throw new Error(e.message);
  }}



