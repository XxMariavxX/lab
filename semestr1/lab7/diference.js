"use strict";

console.log("Завдання 1");

const difference = (array1, array2) => array1.filter(array1 => !array2.includes(array1));

let array1 = [7, -2, 10, 5, 0];
let array2 = [0, 10];
let result = difference(array1, array2);
console.log(result); // Result: [7, -2, 5]

array1 = ["Beijing", "Kiev"];
array2 = ["Kiev", "London", "Baghdad"];
result = difference(array1, array2);
console.log(result); // Result: ['Beijing']
