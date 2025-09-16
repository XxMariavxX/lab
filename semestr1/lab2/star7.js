'use strict';

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