"use strict";

console.log("Завдання 1");

const seq = (...args) => {

    if (args.length === 0) throw "seq needs at least one argument";

    const last = args[args.length - 1];

    if (typeof last === "number") {
      return args
        .reverse()
        .slice(1)
        .reduce((acc, func) => func(acc), last);
    }

    if (typeof last === "function") {
      return (...a) => seq(...args.concat(a));
    }

    throw "function should accept a number or a function as a argument";
  };

console.log(seq(x => x + 7)
   (x => x * 2)(5));

// Результат: 17
console.log(seq(x => x * 2)
   (x => x + 7)(5));

// Результат: 24
console.log(seq(x => x + 1)
   (x => x * 2)
   (x => x / 3)
   (x => x - 4)(7));

// Результат: 3

//My examples
console.log(seq(5));
console.log(seq()(5));
