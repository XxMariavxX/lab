'use strict';

console.log("Завдання 2.2");

const array = [
  1, 4.5, -90, "yes", true, null, undefined, {}, [], function (){}, "t", 45, -3.6, null, undefined, false, 0, 123n,
];

const arr = {};
for (let i of array) {
  arr[typeof i] = arr[typeof i] ? arr[typeof i] + 1 : 1; // тернарний оператор ? якщо значення існує,  +1, ні додаємо в об'єкт новий ключ arr[typeof i] зі значенням 1 
}

console.log(arr);
