// import chalk from 'chalk';
// console.log(chalk.blue('Rainbow Dash is the best'))
"use strict";
console.log("Завдання 5");

function rangeodd (start, end) {
    const ar = [];
    for (let i = (start - start %2 + 1); i <= end; i += 2) {
        ar.push(i);
    }
    return ar;
}

console.log(rangeodd(15, 30));
