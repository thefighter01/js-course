'use strict';

// // test();
// // // const test2 = function () {
// // //   console.log('inside test2');
// // //   test();
// // // };

// // const test = function () {
// //   console.log(me);
// // };

// // let me = 'mahmoud';

// // test2();

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   function printAge() {
//     const output = `${firstName} You are age ${age} , born in ${birthYear}`;
//     console.log(output);
//   }
//   console.log(this);

//   if (birthYear >= 1981 && birthYear <= 1996) {
//     const str = `Oh , and you area  millenial , ${firstName}`;
//     var Millenial = true;

//     function add(a, b) {
//       return a + b;
//     }
//   }
//   //console.log(add(2, 3));
//   // functions are block scope in strict mode only else its a function scope
//   // we can create a new variable with the same name of scope parent

//   printAge();
//   return age;
// }

// const firstName = 'jonas';

// calcAge(1991);

// // console.log(me);

// // var me = 'Jonas';
// // let job = 'teacher';
// // const year = 1991;

// console.log(addExpr);

// //console.log(addExpr(2, 3));
// function addDecl(a, b) {
//   return a + b;
// }

// var addExpr = function (a, b) {
//   return a + b;
// };

// //Example

// if (!numProducts) deleteShoppingCart();
// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All Products deleted!');
// }

// var x = 1;
// let y = 2;
// const z = 3;

// // only variables with var creates a property on the window object

// console.log(x === window.x);

// console.log(this);

// this an object literal

// var firstName = 'matilda';

// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     // console.log(this);
//     console.log(2037 - this.year);
//     // solution one
//     // const self = this;
//     // const isMallenial = function () {
//     //   console.log(this);
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     // };
//     // isMallenial();

//     // solution two

//     const isMallenial = () =>
//       console.log(this.year >= 1981 && this.year <= 1996); // arrow fucntion use this keyword of the parent fucntion

//     isMallenial();
//   },
//   greet: function () {
//     console.log(`Hey ${this.firstName}`);
//   }, // this points to window object}
// };

// jonas.calcAge();
// jonas.greet();

// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };

// console.log(addExpr(2, 3));

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };

// console.log(addArrow(2, 3));

let age = 30;

let oldAge = age;

age = 31;

console.log(age, oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};

const friend = me;

friend.age = 27;

console.log(friend, me);

//privamtive datatypes is [number , string , boolean , null , undefined , symbol , bigint , ]
// everything else is an object like functions and arrays

let lastName = 'williams';

let oldLastName = lastName;

lastName = 'Davis';

console.log(lastName, oldLastName);

// refrence types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;

marriedJessica.lastName = 'Davis';
console.log('Before Marrigae ', jessica);
console.log('After Marriage ', marriedJessica);

// copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'williams',
  age: 27,
  family: ['alice', 'bob'],
};

const jessicaCopy = Object.assign({}, jessica2);

jessicaCopy.lastName = 'mahmoud';
jessicaCopy.family.push('john');
console.log(jessica2, jessicaCopy);
