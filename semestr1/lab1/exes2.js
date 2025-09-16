'use strict';

console.log("Завдання 1.2");

const obj = { n: 5 };
const inc = (num) => {
     num.n++;
}; 

inc(obj);

console.dir(obj);