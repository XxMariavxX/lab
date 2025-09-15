"use strict";

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