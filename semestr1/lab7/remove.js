"use strict";

console.log("Завдання 1");

const removeElement = (array, item) => {
  const index = array.indexOf(item);
  return array.splice(index, 1);
};
//example
let array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 5);
console.log(array);

array = ["Kiev", "Beijing", "Lima", "Saratov"];
removeElement(array, "Lima"); // remove 'Lima' from array
removeElement(array, "Berlin"); //  -1
console.log(array);
// Result: ['Kiev', 'Beijing', 'Saratov']
