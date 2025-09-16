'use strict';

console.log("Завдання 10");

let phoneup = {
    "Mariia": 38098234592,
    "Olena": 380673456789,
    "Anna": 380501234567,
}
function findphoneByName (name) {
    return phoneup[name] || "This number not found";

}
console.log(findphoneByName("Ann"));
console.log(findphoneByName("Olena"));