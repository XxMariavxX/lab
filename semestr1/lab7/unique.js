"use strict";

console.log("Завдання 3");

const unique = (array) => [...new Set(array)];

let result = unique([2, 1, 1, 3, 2]);
console.log(result); // Result: [2, 1, 3]

result = unique(["top", "bottom", "top", "left"]);
console.log(result); // Result: ['top', 'bottom', 'left']