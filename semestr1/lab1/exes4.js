console.dir("Завдання№2.2");
let array = [
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
const arr = {};
for (let i of array) {
  arr[typeof i] = arr[typeof i] ? arr[typeof i] + 1 : 1; // тернарний оператор ? якщо існує такий ключ, то збільшуємо на 1 інакше створюємо і присвоюємо 1
}
console.log(arr);
