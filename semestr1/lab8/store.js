"use strict";

console.log("Завдання 2");

const store = (value) => {
    return function(){
        return value;
    }
};

let read = store(5);
let value = read();
console.log(value); // Output: 5

read = store("star");
value = read();
console.log(value); // Output: "star"