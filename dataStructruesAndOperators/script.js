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
// string

// // split and join
// console.log("a+very+nice+string".split("+"));

// console.log("ma7moud hasan".split(" "));

// const [firstName, lastName] = "ma7moud hasan".split(" ");

// const newName = ["Mr.", firstName, lastName.toLocaleLowerCase()].join(" ");
// console.log(newName);

// const capitaliszeName = function (name) {
//   const names = name.split(" ");
//   const namesUpper = [];
//   for (const n of names) {
//     // const cur = n[0].toUpperCase() + n.slice(1);
//     const cur = n.replace(n[0], n[0].toUpperCase());
//     namesUpper.push(cur);
//   }
//   console.log(namesUpper.join(" "));
// };

// capitaliszeName("jessica ann smith davis");
// capitaliszeName("jonas schmedtmann");

// // padding

// const message = "Go to gate 23!";
// console.log(message.padStart(20, "+").padEnd(30, "+"));
// console.log("ma7moud".padStart(20, "+").padEnd(30, "+"));

// const maskCreditCard = function (number) {
//   const str = number + ""; // turns the number into string
//   const last = str.slice(-4);
//   return last.padStart(str.length, "*");
// };

// console.log(maskCreditCard(64637836));
// console.log(maskCreditCard(43378463864647384));
// console.log(maskCreditCard("334859493847755774747"));

// // Repeat

// const message2 = "Bad waether... All Depatures Delayed...";

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line ${"shit ".repeat(n)}`);
// };

// planesInLine(5);
// planesInLine(3);
// planesInLine(12);
/// strings

// // fix capitalization in name
// const passenger = "jOnas";
// const passengerLower = passenger.toLocaleLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);

// console.log(passengerCorrect);

// // Comparing emails
// const email = "hello@jonas.io";
// const loginEmail = "      Hello@Jonas.Io  \n   ";

// const correctEmail = loginEmail.toLocaleLowerCase().trim();
// console.log(correctEmail);
// console.log(email === correctEmail);

// const priceGB = "288,97E";
// const priceUS = priceGB.replace("E", "$").replace(",", ".");
// console.log(priceUS);

// const announcement =
//   "All passengers come to barding door 23. Boarding door 23!";

// console.log(announcement.replaceAll("door", "gate"));
// console.log(announcement.replace(/door/g, "gate"));

// // Booleans

// const plane = "Airbus A320neo";
// console.log(plane.includes("A320"));
// console.log(plane.includes("Boeing"));
// console.log(plane.startsWith("Airb"));

// if (plane.startsWith("Airbus") && plane.endsWith("neo"))
//   console.log("Part of the NEW Airbus family");

// // practise exercise

// const checkBaggage = function (items) {
//   const baggage = items.toLocaleLowerCase();
//   if (baggage.includes("knife") || baggage.includes("gun")) {
//     console.log("You are NOT allwed on board");
//   } else {
//     console.log("Welcome aboard!");
//   }
// };

// checkBaggage("I have a laptop, some Food and a pocket Knife");

// checkBaggage("Socks and camera");
// checkBaggage("Got some snacks and a gun for protection");

// strings
//const airLine = "TAP Air Portugal";

// const plane = "A320";

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log("B737"[0]);

// console.log(airLine.length);
// console.log("B737".length);

// console.log(airLine.indexOf("r"));

// console.log(airLine.lastIndexOf("r"));
// console.log(airLine.indexOf("Portugal")); // case sensetive +

// console.log(airLine.slice(4));

// console.log(airLine.slice(4, 7));
// console.log(airLine.slice(0, airLine.indexOf(" ")));
// console.log(airLine.slice(airLine.lastIndexOf(" ") + 1));

// console.log(airLine.slice(-2));
// console.log(airLine.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//   // B and E are middle seats
//   const s = seat.slice(-1);
//   if (s === "E" || s === "B") console.log("you got the middle seat");
//   else console.log("You are lucky");
// };

// checkMiddleSeat("11B");
// checkMiddleSeat("23C");
// checkMiddleSeat("3E");

// console.log(new String("ma7moud"));

// console.log(typeof new String("ma7moud"));

// console.log(typeof new String("ma7moud").slice(1));
///////////////////////////////////
// maps
// const question = new Map([
//   ["question", "What is the best programming language in the world?"],
//   [1, "C"],
//   [2, "Java"],
//   [3, "JavaScript"],
//   ["correct", 3],
//   [true, "Correct"],
//   [false, "Try again!"],
// ]);

// console.log(question);

// // ConverOjbect to Map
// const hoursMap = Object.entries(openingHours);

// console.log(hoursMap);
// // Quiz App
// console.log(question.get("question"));
// for (const [key, value] of question) {
//   if (typeof key === "number") {
//     console.log(`Answer ${key} : ${value}`);
//   }
// }

// const answer = 3;

// console.log(question.get(answer === question.get("correct")));

// console.log([...question]);

// console.log([...question.keys()]);
// console.log(question.entries());

// console.log([...question.values()]);
/////////////////////////////////////////////////////
// Maps fundamentals

// const reset = new Map();

// reset.set("name", "Classico Italiano");
// reset.set(1, "Firenze, Italy");

// console.log(reset.set(2, "Lisbon, Potugal"));

// reset.set(1, "x");
// reset.set(1, "y");

// console.log(reset.get(1));

// reset
//   .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
//   .set("open", 11)
//   .set("close", 23)
//   .set(true, "We are open :D")
//   .set(false, "We are closed :(");

// console.log(reset.get("name"));

// console.log(reset.get(true));

// console.log(reset.get(1));

// const time = 21;
// console.log(reset.get(time >= reset.get("open") && time <= reset.get("close")));

// console.log(reset.has("categories"));

// reset.delete(2);
// //reset.clear();
// console.log(reset);
// console.log(reset.size);

// const arr = [1, 2];
// reset.set(arr, "Test");

// reset.set(document.querySelector("h1"), "Heading");
// console.log(reset);

// console.log(reset.size);

// console.log(reset.get(arr));

///////////////////////////////////////
// Sets in javaScript

// const ordersSet = new Set([
//   "Pasta",
//   "Pizza",
//   "Pizza",
//   "Pasta",
//   "Pizza",
//   "Risotto",
// ]);

// console.log(ordersSet);

// console.log(new Set("ma7moud"));

// console.log(ordersSet.size);
// console.log(ordersSet.has("Pizza"));

// console.log(ordersSet.has("Bread"));

// ordersSet.add("Garlic Bread");
// ordersSet.add("Garlic Bread");

// ordersSet.delete("Risotto");
// //ordersSet.clear();
// console.log(ordersSet);

// for (const order of ordersSet) console.log(order);

// // Example
// const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];

// const staffUnique = [...new Set(staff)];

// console.log(staffUnique);

// console.log(new Set(staff).size);

// console.log(new Set("ma7moud").size);
//////////////////////////

// // property NAMES
// const properties = Object.keys(openingHours);

// console.log(properties);

// let openStr = `We are open on ${properties.length} days :`;

// for (const day of properties) {
//   openStr += " " + day;
// }

// console.log(openStr);

// // property VALUES

// const values = Object.values(openingHours);
// console.log(values);

// for (const item of Object.values(openingHours)) {
//   console.log(item);
// }

// // Entire Ojbect

// const entries = Object.entries(openingHours);
// console.log(entries);

// // key and value
// for (const [key, { open: o, close: c }] of entries) {
//   console.log(key + " " + o + " " + c);
// }
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
