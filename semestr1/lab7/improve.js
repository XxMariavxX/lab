"use strict";

console.log("Завдання 2");

//with filter
const removeElement = (array, ...items) => {
  return array.filter((elem) => !items.includes(elem));
}

//example

let array = [1, 2, 3, 4, 5, 6, 7];
let newArray = removeElement(array, 5, 1, 6);
console.log(newArray); // [2, 3, 4, 7]
console.log(array);

array = ["Kiev", "Beijing", "Lima", "Lviv"];
newArray = removeElement(array, "Lima", "Berlin", "Kiev");
console.log(newArray); // Result: ['Beijing', 'Saratov']
console.log(array);

//without filter
const removeElements = (array, ...items) => {
  for (let item of items) {
    let index;
    while ((index = array.indexOf(item)) !== -1) {
      array.splice(index, 1);
    }
  }
  return array;
};

//example

array = [1, 2, 3, 4, 5, 6, 7];
removeElements(array, 5, 1, 6);
console.log(array);

array = ["Kiev", "Beijing", "Lima", "Lviv"];
removeElements(array, "Lima", "Berlin", "Kiev");
console.log(array);