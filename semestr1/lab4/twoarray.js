"use strict";

console.log("Завдання 2");
const max = (args) => {
  let maxNumb = - Infinity;
  for (let arr of args) {
    for (let i of arr) {
      maxNumb = i > maxNumb ? i : maxNumb;
    }
  }
  return maxNumb;
};
// const m = max([
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ]);

const m = max([
  [-1, -2, -4],
  [-4, -8, -6],
  [-7, -8, -9],
]);

console.log(m); //1. 9 //2. 0
