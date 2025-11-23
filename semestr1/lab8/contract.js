"use strict";

console.log("Завдання 3");

const contract = (fn, ...types) => {
  return (...args) => {
    if (args.length !== types.length - 1) {
      throw new TypeError("Incorrect number of symbols");
    }
    for (let i = 0; i < args.length; i++) { 
      const expectedType = types[i].name.toLowerCase();
      if (typeof args[i] !== expectedType) {
        throw new TypeError(`Arguments should be ${expectedType}`);
      }
    }
    const result = fn(...args);

    const expectResultType = types[types.length - 1].name.toLowerCase();
    if (expectResultType !== typeof result) {
      throw new TypeError(`Result type should be ${expectResultType}`);
    }
    return result;
  };
};

// const contract = (fn, ...types) => {
//   return (...args) => {
//      try{
//            if (args.length !== types.length - 1) {
//       throw new TypeError("TypeError");
//     }
//     for (let i = 0; i < args.length; i++) { 
//       const expectedType = types[i].name.toLowerCase();
//       if (typeof args[i] !== expectedType) {
//         throw new TypeError("TypeError");
//       }
//     }
//     const result = fn(...args);
//     const expectResultType = types[types.length - 1].name.toLowerCase();
//     if (expectResultType !== typeof result) {
//       throw new TypeError("TypeError");
//     }
//     return result;      
//      }
//      catch(e) {
//           console.log("TypeError");
//           return null;
//      }
//   };
// };

try{
let add = (a, b) => a + b;
let addNumbers = contract(add, Number, Number, Number);
let res = addNumbers(2, 3);
console.dir(res); // Output: 5

let concat = (s1, s2) => s1 + s2;
let concatStrings = contract(concat, String, String, String);
res = concatStrings("Hello ", "world!");
console.dir(res); // Output: Hello world!

add = (a, b) => a + b;
addNumbers = contract(add, Number, Number);
res = addNumbers(2, 3);
console.dir(res); // Output: Incorrect number of symbols
}
catch(e){
     console.error(e);
}