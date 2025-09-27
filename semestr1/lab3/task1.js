"use strict";

console.log("Завдання 1")

function random(min, max) {
    if (max === undefined) {
        min = 0;
        max = min;
    }
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
console.log(random(5, 15));

