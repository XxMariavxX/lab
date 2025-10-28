"use strict";

console.log("Завдання 3");

const persons = {
  mariiasvad: { born: 1867, died: 1934 },
  maomao: { born: 1964, died: 1999 },
  napoleon: { born: 1769, died: 1821 },
  hirohito: { born: 1901, died: 1989 },
};
const ages = (obj) => {
  for (let key in obj) {
    const born = persons[key].born;
    const died = persons[key].died;
    obj[key] = died - born;
  }
  return obj;
};
console.log(ages(persons));
