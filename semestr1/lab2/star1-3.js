'use strict';

console.log("Завдання 3");

let firstName = 'Mariia';
const year = 2007;

function print(name) {
    console.log(`Hello, ${name}`); 
    if (typeof name !== 'string') throw new Error('Name expected to be string');
}
print(firstName);