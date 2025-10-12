"use strict";

console.log("Завдання 2");

const store = (value) => {
    const elem = value;
    return function(){
        return elem;
    }
};

let read = store(5);
let value = read();
console.log(value); // Output: 5

read = store("star");
value = read();
console.log(value); // Output: "star"