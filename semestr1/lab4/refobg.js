'use strict';

console.log("Завдання 3");

const persons = {
  mariiasvad: { born: 1867, died: 1934 },
  maomao: { born: 1964, died: 1999 },
  napoleon: { born: 1769, died: 1821 },
  hirohito: { born: 1901, died: 1989 },
};
const ages = (obg) =>{
    for (let key in obg){
        const born = persons[key].born;
        const died = persons[key].died;
        obg[key] = died -born;
    }
    return obg;
}
console.log(ages(persons));
