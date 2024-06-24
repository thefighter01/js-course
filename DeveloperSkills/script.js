'use strict';

const xyz = 20;

const calcAge = birthYear => 2025 - birthYear;

console.log(calcAge(2019));

const calcTempAmplitude = function (arr) {
  const sz = arr.length;
  let mn, mx;
  mx = mn = arr[0];
  // corner case what if the first element of the array is an string
  for (let i = 0; i < sz; ++i) {
    const curTemp = arr[i];
    if (typeof curTemp === 'string') continue;
    mx = Math.max(mx, curTemp);
    mn = Math.min(mn, curTemp);
  }
  return mx - mn;
};

const cur = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
console.log(calcTempAmplitude(cur));
