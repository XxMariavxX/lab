"use strict";

console.log("Завдання 3 ");

const ipNumber = (ip = "127.0.0.1") => {
  return ip
    .split(".") //'10.0.0.1' → ['10', '0', '0', '1']
    .map(Number) //['10', '0', '0', '1'] → [10, 0, 0, 1]
    .reduce((acc, byte, i) => {
      return acc + (byte << ((3 - i) * 8));
    }, 0);
};

console.log(ipNumber("10.0.0.1"));
console.log(ipNumber());
console.log(ipNumber("192.168.1.10 ")); //think about
