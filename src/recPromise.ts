import { Simulate } from "react-dom/test-utils";
import error = Simulate.error;

const callTasks = async (
  promises: Promise<unknown>[],
  loopCounter: number = 0,
  results: unknown[] = []
): Promise<unknown> => {
  if (promises.length === loopCounter) {
    return results;
  }

  try {
    const result: unknown = await promises[loopCounter];
    loopCounter++;
    results.push(result);
  } catch (e) {
    console.error(e.stack);
    return results;
  }
 
  return callTasks(promises, loopCounter, results);
};

export const recursiveThen = (
  promises: Promise<unknown>[],
  loopCounter: number = 0,
  results: unknown[] = []
): Promise<unknown[]> => {
  const promise = promises[loopCounter]
    .then((response) => {
      loopCounter = loopCounter + 1;
      results.push(response);
      if (promises.length === loopCounter) {
        return results;
      }
      return recursiveThen(promises, loopCounter, results);
    })
    .catch((e) => {
      console.error("error occured", e);
      return results;
    });

  return promise;
};

const lang = {
  a:{b:{c:'...'}}
}

const flatLang = {
  'a.b.c':'...'
}