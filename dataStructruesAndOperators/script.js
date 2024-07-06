"use strict";

const weekDays = ["mon", "tue", "wen", "thu", "fri", "sat", "sun"];
const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours,

  order(starterIdx, mainIdex) {
    return [this.starterMenu[starterIdx], this.mainMenu[mainIdex]];
  },

  orderDelivery(starterIdx = 1, address, mainIndex, name) {
    console.log("Lol");
    console.log(starterIdx, address, name, mainIndex);
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `here is your declicious pasta with ${ing1} , ${ing2} , ${ing3}`
    );
  },

  orderPizza(mainIngerdient, ...otherIngredient) {
    console.log(mainIngerdient, otherIngredient);
  },
};

// property NAMES
const properties = Object.keys(openingHours);

console.log(properties);

let openStr = `We are open on ${properties.length} days :`;

for (const day of properties) {
  openStr += " " + day;
}

console.log(openStr);

// property VALUES

const values = Object.values(openingHours);
console.log(values);

for (const item of Object.values(openingHours)) {
  console.log(item);
}

// Entire Ojbect

const entries = Object.entries(openingHours);
console.log(entries);

// key and value
for (const [key, { open: o, close: c }] of entries) {
  console.log(key + " " + o + " " + c);
}
///////////////////////////////////////////////

// // optional chaining
// if ("") console.log("shit");
// else console.log("not shit");

// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// // console.log(restaurant.openingHours.mon.open); /// oepn

// console.log(restaurant.openingHours.mon?.open);

// console.log(restaurant.openingHours?.mon?.open);

// console.log("for loop");
// for (const day of weekDays) {
//   const open = restaurant.openingHours[day]?.open ?? "closed";
//   console.log(`on ${day} , we open at ${open}`);
// }

// // optional chaining on method

// console.log(restaurant.order?.(0, 1) ?? "method does not exist");

// console.log(restaurant.orderRisotto?.(0, 1) ?? "method does not exist");

// const users = [{ name: "ma7moud", email: "mahmoudbubg1234@gmail.com" }, 10];

// console.log(users[0]?.name ?? "user array empty");

/////////////////////////////////////

// for of loop
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) {
//   console.log(item);
// }

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1} : ${el}`);
// }

///////////////////////////
// restaurant.orderDelivery({
//   name: "22: 30",
//   address: "Via del sole , 21",
//   mainIndex: 2,
//   starterIdx: 2,
// });

// const myArr = [2, 3, 4, 5, 7, 8];

// const [x, y, z] = myArr;
// console.log(x, y, z, myArr);

// let [first, , second] = restaurant.categories;

// console.log(first, second);

// // swaping elements
// [second, first] = [first, second];

// console.log(first, second);

// const result = restaurant.order(2, 0);

// console.log(typeof result, result);

// // the type of array is object

// const [stater, mainCourse] = result;

// const nasted = [2, 4, [5, 6]];

// const [First, , third] = nasted;

// console.log(First, third);

// // nasted Destructruing

// const [i, , [j, k]] = nasted;

// console.log(i, j, k);

// // Default values

// const [p, q, r] = [8, 9];

// console.log(p, q, r);

// const { name, openingHours, categories } = restaurant;

// const {
//   name: newName,
//   openingHours: newOpeningHours,
//   categories: newCategories,
// } = restaurant;

// console.log(newName, newOpeningHours, newCategories);

// const { meanu = [], starterMenu: staters = [] } = restaurant;

// console.log(meanu, staters);
// // mutating variables

// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ b, a } = obj);
// console.log(a, b);

// // nested objects

// const {
//   fri: { open: o = 1, close: c = 1 },
// } = openingHours;
// console.log(o, c);

// const myArray = [7, 8, 9];

// const badNewArray = [1, 2, myArray[0], myArray[1], myArray[2]];

// console.log(badNewArray);

// const newArray = [1, 2, ...myArray];

// console.log("again", newArray);

// console.log("shit", ...myArray);

// const newMenu = [...restaurant.mainMenu, "Gnocci"];

// console.log(newMenu);

// // copy array

// const mainMenuCopy = [...restaurant.mainMenu];

// // join 2  arrays or more

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

// console.log(menu);

// // Iterables are arrays , sets , maps , strings but not an objects

// const str = "ma7moud";

// const letters = [...str, " ", "lol"];

// console.log(letters);

// console.log(...str);

// // const ingredients = [
// //   prompt("let's make pasta! Ingeredient1!"),
// //   prompt("let's make pasta! Ingeredient2!"),
// //   prompt("let's make pasta! Ingeredient3!"),
// // ];

// // console.log(ingredients);

// // restaurant.orderPasta(...ingredients);

// /// objects

// const newRestruent = { ...restaurant, founder: "lol" };

// console.log(newRestruent);

// const restaurantCopy = { ...restaurant };

//"matilda";const ingredients = [
//   prompt("let's make pasta! Ingeredient1!"),
//   prompt("let's make pasta! Ingeredient2!"),
//   prompt("let's make pasta! Ingeredient3!"),
//];

// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// restaurantCopy.name = "just dump";

// restaurantCopy.openingHours.close = "-1";

// console.log(restaurant, restaurantCopy);

// destructuring
// spread
// const arr = [1, 2, ...[3, 4]];

// // rest
// const [a, b, ...others] = [1, 2, 3, 4, 5];

// console.log(a, b, others);

// const [pizza, risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// console.log(pizza, risotto, otherFood);

// // Objects

// const { sat, ...weekdays } = restaurant.openingHours;

// console.log(sat, weekdays);

// // 2) functions

// const add = function (...numbers) {
//   console.log(numbers);
//   const sz = numbers.length;
//   let sum = 0;
//   for (let i = 0; i < sz; ++i) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };

// add(2, 3);
// add(5, 3, 7, 2);

// const x = [23, 5, 7];

// add(...x);

// restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");

// console.log("-----OR-----");

// console.log(3 || "Jonas");

// console.log("" || "Jonas");

// console.log(0 || 0);

// console.log(undefined, null);

// // restaurant.numGuests = 0;
// // const { numGuests: guests = 10 } = restaurant;

// console.log(restaurant.numGuests ?? 10);

// console.log("-----AND-----");

// console.log(0 && "ma7moud  ");

// console.log(1 && "ma7moud");

// if (restaurant.orderPizza) {
//   restaurant.orderPizza("mushrooms", "spinach");
// }

// restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");

// const rest1 = {
//   name: "Capri",
//   numberGuests: 20,
// };

// const rest2 = {
//   name: "La Piazza",
//   owner: "Givoanni Rossi",
//   numberGuests: 0,
// };

// // set default number of guests that not have this property

// // OR assignment operator
// // nullish (null , undefined)
// rest1.numberGuests ??= 10;

// rest2.numberGuests ??= 10;

// rest1.owner &&= "anonymous";

// rest2.owner &&= "anonymous";

// console.log(rest1, rest2);
