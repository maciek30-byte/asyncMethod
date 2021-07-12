export const promiseLast = (arrayPromises: Promise<unknown>[]) => {
  return new Promise((resolve, reject) => {
    let resolvedCounter = 0;
    arrayPromises.forEach((promise) => {
      promise
        .then((response) => {
          resolvedCounter += 1;
          if (resolvedCounter === arrayPromises.length) {
            resolve(response);
          }
        })
        .catch((e) => {
          throw new Error(e.message);
        });
    });
  });
};

const pLast = async (arrayPromises: Promise<unknown>[]) => {
  let result: unknown

  try {
    for (const promise of arrayPromises) {
      result = await promise
    }
  } catch (e) {
    throw new Error(e.message)
  }
  
  return result



}

