'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   console.log(firstName);
//   return age;
// }

/* creating new variables with the same name as outer scope's variables  is not a problem at all */
const test = function (birthYear) {
  const age = 2037 - birthYear;
  const firstName = 'hhh';

  function printAge() {
    const firstName = 'me is an idiot';

    const output = `${firstName} , you are ${age} , born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var milllenial = true;
      const str = `Oh you are a millenial, ${firstName}`;
      console.log(str);
    }

    function add(a, b) {
      return a + b;
    }

    console.log(add(2, 3));
  }

  printAge();
  return age;
};

const firstName = 'jonas';

console.log(test(1991));

// console.log(age);

// console.log(calcAge(1991));
