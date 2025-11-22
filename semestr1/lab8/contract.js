"use strict";

console.log("Завдання 3");

// const contract = (fn, ...types) => {
//     return (...args) => {
//         args.forEach((elem, index) => {
//             const expected = types[index];
//             const actual= Object.prototype.toString.call(elem).slice(8, -1);
//             if (types[index]) {
//                 throw new TypeError(`Аргумент ${index + 1} має невірний тип. Очікувався ${type[index].name}`);
//             }
//         });
//         if (types.lenght - 1 != args.length){
//             throw new Error("Error");
//         }
//         console.log(args);
//     }
// }

const contract = (fn, ...types) => {
     return (...args) => {
        
     }


}

let add = (a, b) => a + b;
let addNumbers = contract(add, Number, Number, Number);
let res = addNumbers(2, 3);
console.dir(res);// Output: 5

add = (a, b) => a + b;
addNumbers = contract(add, Number, Number);
res = addNumbers(2, 3);
console.dir(res);

concat = (s1, s2) => s1 + s2;
concatStrings = contract(concat, String, String, String);
res = concatStrings('Hello ', 'world!');
console.dir(res); // Output: Hello world!
