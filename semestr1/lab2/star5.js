'use strict';

console.log("Завдання 5");

function rangeOdd (start, end) {
    const ar = [];
    for (let i = start; i <= end; i++) {
        if (i % 2 != 0){
            ar.push(i);
        }
    }
    return ar;
}

console.log(rangeOdd(15, 30));