'use strict';

console.log("Завдання 6.1");

function average(a, b){
    return (a+b)/2;
}

console.log(average(30,15));

console.log("Завдання 6.2");

function square(a){
    return a**2;
}

console.log(square(3));

console.log("Завдання 6.3");

function cube(a){
    return a**3;

}
console.log(cube(2));

console.log("Завдання 6.4");

function calculate () {
    const arr = [];
    for (let i = 0; i < 10; i++) {
        let sq = square(i);
        let cb = cube(i);
        let calcul = average(sq, cb);
        arr.push(calcul);
    }
    return arr;
}

console.log(calculate());

