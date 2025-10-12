"use strict";

console.log("Завдання 1");

const pipe = (...fns) => {
  return (x) => {
    try {
      for (const i of fns.reverse()) {
        x = i(x);
      }
      return x;
    } catch (error) {
      return undefined;
    }
  };
};

//Examples Sh
const inc = (x) => ++x;
const twice = (x) => x * 2;
const cube = (x) => x ** 3;

//Examples realisation
const f1 = pipe(inc, twice, cube); //
const f2 = pipe(inc, inc); //
const f3 = pipe(inc, 7, cube); // const with typeof != "function"

console.log(f1(5)); //251
console.log(f2(7)); //9
console.log(f3()); //