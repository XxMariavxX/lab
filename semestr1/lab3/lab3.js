"use strict";

console.log("Завдання 1 функц")
function random(min, max) {
    if (max === undefined) {
        min = 0;
        max = min;
    }
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
console.log(random(5, 15));

console.log("Завдання 2 ")

function generateKey(length, characters){
    let key = '';
    for (let i = 0; i < length; i++) {
        const ind = Math.floor(Math.random() * (characters.length ));
        key += characters[ind];
    }
    return key
}
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(10, characters);
console.log(key);

console.log("Завдання 3 ")