export const pArray: Promise<unknown>[] = [
  new Promise((resolve) => setTimeout(() => resolve(1), 3000)),
  new Promise((resolve) => setTimeout(() => resolve(2), 2000)),
  new Promise((resolve) => setTimeout(() => resolve(3), 1000)),

  // new Promise((resolve, reject) => setTimeout(() => reject(), 1000)),
];
