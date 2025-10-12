"use strict";

console.log("Завдання 1");

const iterate = (object, callback) => {
    for (let i in object){
        callback(i, object[i]);
    }
};

let obj = { a: 1, b: 2, c: 3 };
iterate(obj, (key, value) => {
  console.log({ key, value });
}); 
// { key: 'a', value: 1 }
// { key: 'b', value: 2 }
// { key: 'c', value: 3 }

