'use strict';

const calcAvgHumanAge = function (ages) {
  const humanAges = ages
    .map(age => (age <= 2 ? 2 * age : 16 + 4 * age))
    .filter(age => age >= 18);

  const ans = humanAges.reduce((acc, age) => acc + age) / humanAges.length;
  return ans;
};

console.log(calcAvgHumanAge([5, 2, 4, 1, 15, 8, 3]));

console.log(calcAvgHumanAge([16, 6, 10, 5, 6, 1, 4]));
