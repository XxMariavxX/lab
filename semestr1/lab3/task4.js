'use strict';

console.log("Завдання 4");

// const iface = { number1: 12, number2: 72, number3: 65 };

// const separate = (iface) => {
//   const array = [];
//   for (const elements in iface) {
//     array.push([elements, iface[elements]]);
//   }
//   return array;
// };

// console.log(separate(iface));

const iface = {
  m1: x => [x],
  m2: function (x, y) {
    return [x, y];
  },
  m3 (x, y, z) {
    return [x, y, z];
  },
}

const count = obj =>{
  const arr =[];
  for (const key in iface){
    if (typeof obj[key] == 'function'){
      arr.push([key, obj[key].length]);
    }
  }
  return arr;
}
console.log(count(iface));
