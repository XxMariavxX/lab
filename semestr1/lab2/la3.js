"use strict";

console.log("Завдання 7");

function fn() {
    const objconst = {name: ""}; 
    objconst.name = "Lena"; //зміна значення поля ПРАЦЮЄ
    //objconst = {name: "Bob"}; помилка, не можна змінювати значення повністю const об'єкта
    let objlet = {name:""}; //створення посилання на об'єкт
    objlet.name = "Olena"; //зміна значення поля
    console.log(objlet); 
    objlet = {name: "Bol"}; //створення нового об'єкта
    console.log(objconst);
    console.log(objlet);
}

fn();


console.log('Завдання 8')


function createUser(name, city){
    return {name: name, city: city};
}

console.log(createUser("Mariia", "Lviv"));

console.log("Завдання 9");
 
let array =[];
array.push({name: "Mariia", phone: 38098234592});
array.push({name: "Olena", phone: 380673456789});
array.push({name: "Anna", phone: 380501234567});

function findPhoneByName(name){
    for (const contact of array) { 
        if (contact.name === name){ 
            return contact.phone;
        }
    }
}
console.log(findPhoneByName("Olena"));


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