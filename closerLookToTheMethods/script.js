'use strict';

// closure practice
// Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(2 * a);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(2 * b);
  };
};

g();
f();
console.dir(f);

// re-assigning
h();
f();
console.dir(f);

// Example 2 timer

const boardPassengers = function (n, wait) {
  const perGroup = n / 3; // closure have priority over scope cahin

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups , each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};
const perGroup = 1000;
boardPassengers(180, 3);

// closures

// const secureBooding = function () {
//   let count = 0;
//   return function () {
//     count++;
//     console.log(`${count} passengers`);
//   };
// };

// const booker = secureBooding();

// booker();

// booker();

// booker();

// console.dir(booker);

/////////////////////////////////////////////////////////////////
// functions that only excuted onece
// immediately invocked function expression
// (function () {
//   console.log('this will never called again');
//   const isPrivate = 24;
// })();

// (() => console.log('i will never called again'))();

// {
//   const isPirvate = 23;
//   var notPirvate = 46;
// }

// //console.log(isPirvate);
// console.log(notPirvate);
/////////////////////////////////////////////////////////////////
// call and apply methods

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
//   },
// };

// lufthansa.book(239, 'Jonas Schmedtmann');
// lufthansa.book(635, 'Jhon Smith');

// console.log(lufthansa);

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'Ew',
//   bookings: [],
// };

// const book = lufthansa.book;

// // Doesn't work
// //book(23, 'Sarah Williams');
// book.call(eurowings, 23, 'Sarah Willimas');
// console.log(eurowings);

// book.call(lufthansa, 239, 'Mary Cooper');

// const swiss = {
//   airline: 'swiss',
//   iataCode: 'LX',
//   bookings: [],
// };

// book.call(swiss, 583, 'test');
// // Apply method takes an array

// const flightData = [583, 'George Cooper'];

// book.apply(swiss, flightData);

// book.call(swiss, ...flightData);

// // bind method
// console.log('bind');
// const bookEW = book.bind(eurowings);
// const bookKLH = book.bind(lufthansa);
// const bookKLX = book.bind(swiss);

// bookEW(23, 'Steven Williams');

// const bookEW23 = book.bind(eurowings, 23);

// bookEW23('Jonas Schmedtmann');
// bookEW23('Martha Copper');

// lufthansa.planes = 300;

// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };

// // lufthansa.buyPlane();

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// // partial applications
// const addTax = (rate, value) => value + value * rate;

// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// console.log(addVAT(100));

// console.log(addVAT(23));

// // task

// const fn = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

// const addVAT2 = fn(0.23);
// console.log(addVAT2(100));
// console.log(addVAT2(23));

///////////////////////////////////
// return a method
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('Hey');
// greeterHey('ma7moud');
// greeterHey('jonas');

// greet('Hello')('Steven');

// // task with arrow method
// const test = greeting => name => console.log(`${greeting} ${name}`);

// test('welcome')('jonas');

// test('Helloo')('pretty');
//////////////////////////////////////
//3rd part of methods
// const oneWord = function (str) {
//   return str.replaceAll(" ").toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(" ");
//   return [first.toUpperCase(), ...others].join(" ");
// };

// // Higher-order function
// // this method don't care about the details of fn method , it's really concerned about transforming the input string itself , no matter how that transforming itself actually works
// const transformer = function (str, fn) {
//   console.log(`Original string : ${str}`);

//   console.log(`Transformed string : ${fn(str)}`);

//   console.log(`Transformed by : ${fn.name}`);
// };

// transformer("JavaScript is the best!", upperFirstWord);

// transformer("JavaScript is the best!", oneWord);
// // Js uses callback fucntions all the time
// const high5 = function () {
//   console.log("Hi brother");
// };

// document.body.addEventListener("click", high5);

// ["ma7moud", "hasan", "a7mad", "elbor3y"].forEach(high5);
/////////////////////////////////////////////////////////////////
// second part of functions
// const flight = "LH234";

// const jonas = {
//   name: "Jonas Schmedtmann",
//   passport: 24739479284,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = "LH999";
//   passenger.name = "Mr. " + passenger.name;
//   if (passenger.passport === 24739479284) {
//     alert("Checked in");
//   } else {
//     alert("Wrong passport!");
//   }
// };

// checkIn(flight, jonas);

// console.log(flight);

// console.log(jonas);

// // Is the same as doning ...
// const flightNum = flight;
// const passenger = jonas; // will copy the refrence

// const newPassport = function (person) {
//   person.passport = Math.floor(Math.random() * 10000000000);
// };

// newPassport(jonas);

// checkIn(flight, jonas);
////////////////////////////////////////////////////////////////////
// first part of methods
// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };

//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking("LH123");

// createBooking("LH123", 2, 800);

// createBooking("LH123", 2);
// createBooking("LH123", 5);

// createBooking("LH123", undefined, 1000);
