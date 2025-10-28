// "use strict";

// console.log("Завдання 2");

// const store = (value) => {
//     const elem = value;
//     return function(){
//         return elem;
//     }
// };

// let read = store(5);
// let value = read();
// console.log(value); // Output: 5

// read = store("star");
// value = read();
// console.log(value); // Output: "star"


 function seq(...args) {
  if (args.length === 0) throw "seq function should have at least one argument";

  const last = args[args.length - 1];

  if (typeof last === "number") {
    return args.reverse().slice(1).reduce(
      (acc, func) => func(acc), 
      last
    );
  }

  if (typeof last === "function") {
    return (...a) => seq(...(args.concat(a)));
  }

  throw "function should accept a number or a function as a argument";
}

const a = seq;
// const b = a(x => x + 2);
const b = (...a) => seq(...([x => x + 2].concat(a)));
// const c = b(x => x * 3);
const c = (...a) => seq(...([x => x + 2, x => x * 3].concat(a)));
// const d = c(7);
const d = 23;

console.log(d);