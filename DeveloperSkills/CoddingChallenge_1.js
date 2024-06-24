'use strict';

const printForecast = function (arr) {
  const sz = arr.length;
  let ans = '';
  for (let i = 0; i < sz; ++i) {
    const cur = arr[i];
    if (i > 0) ans += ' ';
    ans += `... ${cur}*C in ${i + 1} days`;
  }
  console.log(ans);
};

console.table(printForecast([17, 21, 23]));

console.table(printForecast([12, 5, -5, 0, 4]));
