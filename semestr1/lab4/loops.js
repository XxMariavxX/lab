'use strict';

console.log("Завдання 1");

// const sum = (...args) => {
//     let total = 0;
//     for (let i = 0; i < args.length; i++ ){
//         total += args[i];
//     }
//     return total;
// }

// const sum = (...args) => {
//   let total = 0;
//   for (let i of args) {
//     total += i;
//   }
//   return total;
// };

// const sum = (...args) => {
//     let i = 0;
//     let total = 0;
//     while (i < args.length){
//         total += args[i];
//         i++;
//     }
//     return total;
// }

// const sum = (...args) => {
//   let total = 0;
//   let i = 0;
//   if (args.length === 0) return 0;
//   do {
//      total += args[i];
//      i++;

//   } while (i < args.length);
//   return total;
// };

const sum = (...args) => {
    return args.reduce((acc, value) => acc + value,0);
}

const a = sum(1, 2, 3); // a === 6
const b = sum(0); // b === 0
const c = sum(); // c === 0
const d = sum(1, -1, 1); // d === 1
const e = sum(10, -1, -1, -1); // e === 7
console.log([a, b, c, d, e].join(', '));
