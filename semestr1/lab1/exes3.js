"use strict";
console.dir("Завдання№2.1");

const array = [
  1,
  4.5,
  -90,
  "yes",
  true,
  null,
  undefined,
  {},
  [],
  function () {},
  "t",
  45,
  -3.6,
  null,
  undefined,
  false,
  0,
  123n,
];

const f = {
  number: 0,
  string: 0,
  boolean: 0,
  undefined: 0,
  function: 0,
  object: 0,
  bigint: 0,
};
for (let i of array) {
  f[typeof i]++;
}

console.log(f);