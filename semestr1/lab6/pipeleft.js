"use strict";

console.log("Завдання 1");

const pipe = (...fns) => {

    for (const i of fns) {
      if (typeof i !== "function") {
        throw new Error ("argument is not a function!");
      }
    }

    return (x) => fns.reduce((acc, i) => i(acc), x);
};

//Examples Sh
const inc = (x) => ++x;
const twice = (x) => x * 2;
const cube = (x) => x ** 3;

//Examples realisation
const f1 = pipe(inc, twice, cube); //
const f2 = pipe(inc, inc); //
//const f3 = pipe(inc, 7, cube); // const with typeof != "function"

console.log(f1(5)); //1728
console.log(f2(7)); //9
//console.log(f3()); //error
