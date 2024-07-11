'use strict';

const calcAvgHumanAge = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + 4 * age))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
console.log(calcAvgHumanAge([5, 2, 4, 1, 15, 8, 3]));

console.log(calcAvgHumanAge([16, 6, 10, 5, 6, 1, 4]));
