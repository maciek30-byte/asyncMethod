import {ignoreE} from "./PromiseIgnore";
const p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "Ta jako 1");
});
const p2 = new Promise((resolve, reject) => {
    setTimeout(reject, 1000, "Ta jako 2");
});
const p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "To powinna byc jako 3");
});

export const arrayPromises = [p1, p2, p3];

ignoreE(arrayPromises).then((r)=> console.log('ignore',r))

