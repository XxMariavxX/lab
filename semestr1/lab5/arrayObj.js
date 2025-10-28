"use strict";

console.log("Завдання 2");

function array() {
  const data = [];

  const grab = (index) => data[index];
  grab.push = (value) => data.push(value);
  grab.pop = () => data.pop();
  return grab;
}
const arr = array();
console.log(arr);
console.log(arr.push("first"));
console.log(arr.push("second"));
console.log(arr.push("third"));

console.log(arr(0)); // Выводит: first
console.log(arr(1)); // Выводит: second
console.log(arr(2)); // Выводит: third

console.log(arr.pop()); // Выводит: third
console.log(arr.pop()); // Выводит: second
console.log(arr.pop()); // Выводит: first

console.log(arr.pop()); // Выводит: undefined
