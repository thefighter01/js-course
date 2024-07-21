"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-07-26T17:01:17.194Z",
    "2020-07-28T23:36:17.929Z",
    "2020-08-01T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2024-07-19T14:43:26.374Z",
    "2024-07-21T18:49:59.371Z",
    "2024-07-22T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////
// Functions

const formatMovementsDate = function (date, locale) {
  const fromMsecondsTodays = a => Math.round(a / (1000 * 60 * 60 * 24));

  const calcDaysPassed = (date1, date2) =>
    fromMsecondsTodays(Math.abs(date1 - date2));

  const daysPassed = calcDaysPassed(new Date(), date);
  if (daysPassed === 0) return "Today";
  else if (daysPassed === 1) return "Yesterday";
  else if (daysPassed <= 7) return `${daysPassed} days ago`;
  // console.log(daysPassed);
  // const day = `${date.getDate()}`.padStart(2, 0);
  // const month = `${date.getMonth() + 1}`.padStart(2, "0");
  // const year = date.getFullYear();
  //return `${day}/${month}/${year}`;
  return new Intl.DateTimeFormat(locale).format(date);
};

const formatCurrency = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = "";

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementsDate(date, acc.locale);

    const formattedMov = formatCurrency(mov, acc.locale, acc.currency);
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
    <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = formatCurrency(
    acc.balance,
    acc.locale,
    acc.currency
  );
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCurrency(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCurrency(
    Math.abs(out),
    acc.locale,
    acc.currency
  );

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCurrency(
    interest,
    acc.locale,
    acc.currency
  );
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map(name => name[0])
      .join("");
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

const startLogOutTimer = function () {
  // set time to 5 minutes
  let time = 120;

  const tick = function () {
    const min = String(Math.floor(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    labelTimer.textContent = `${min}:${sec}`;
    // when 0 seconds, stop timer and log out user
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = "Log in to get started";
      containerApp.style.opacity = 0;
    }
    // decrease 1s
    time--;
  };

  tick();

  // call the timer every second
  const timer = setInterval(tick, 1000);
  return timer;
};

///////////////////////////////////////
// Event handlers
let currentAccount, timer;

// experimenting with api

// fake always logged in

// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

// const now = new Date();

// const day = `${now.getDate()}`.padStart(2, 0);
// const month = `${now.getMonth() + 1}`.padStart(2, "0");
// const year = now.getFullYear();
// const hour = now.getHours();
// const min = now.getMinutes();
// labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;
// day / month / year

btnLogin.addEventListener("click", function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  // console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;
    // create current date and time
    // startLogOutTimer();
    const now = new Date();

    const options = {
      hour: "numeric",
      minute: "numeric",
      day: "numeric",
      month: "numeric",
      year: "numeric",
    };
    const locale = navigator.language;
    //console.log(locale);

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();

    if (timer) clearInterval(timer);
    timer = startLogOutTimer();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Math.floor(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = "";

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movements.push(amount);
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);
  console.log(amount, typeof amount);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function () {
      // Add movement
      currentAccount.movements.push(amount);
      currentAccount.movementsDates.push(new Date().toISOString());
      // Update UI
      updateUI(currentAccount);

      clearInterval(timer);
      timer = startLogOutTimer();
    }, 2500);
  }
  inputLoanAmount.value = "";
});

btnClose.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = "";
});

let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
// lec1 on parsing and converting and isNaN and isNumber

// console.log(0.1 + 0.2);

// console.log(0.3 === 0.1 + 0.2);
// // convert string into number
// console.log(Number('23'));
// console.log(+'23');

// // parsing
// console.log(Number.parseInt('243abc43'));

// console.log(Number.parseInt('01', 2));
// console.log(Number.parseInt('ea', 10));

// console.log(Number.parseFloat('          2.5      rem          '));

// console.log(Number.parseInt('2.5rem'));

// // checking if value is NaN
// console.log(Number.isNaN(20));
// console.log(+'x');
// console.log(Number.isNaN(+'20px'));
// console.log(Number.isNaN('20'));
// console.log(Number.isNaN(23 / 0));

// console.log('/////////////////////////////////////');
// // checking if value is number
// console.log(Number.isFinite(20));
// console.log(Number.isFinite('20'));
// console.log(Number.isFinite(+'20x'));

// console.log(Number.isFinite(23 / 0));

// console.log(Number.isInteger(20));
// console.log(Number.isInteger(23.0));
// console.log(Number.isInteger(23.1));
// console.log(Number.isInteger(Infinity));

// lec 2 some math functions

// console.log(Math.sqrt(25));
// console.log(25 ** (1 / 2));
// console.log(8 ** (1 / 3));

// console.log(Math.max(5, 18, 23, 11, 2));
// console.log(Math.max(5, 18, 11, 2, "23"));
// console.log(Math.max(5, 18, "23px", 11, 2));

// console.log(Math.min(5, 18, 23, 11, 2));

// console.log(Math.PI * Number.parseFloat("10px") ** 2);

// console.log(Math.floor(Math.random() * 6) + 1);
// const randomInt = (min, max) =>
//   min + Math.floor(Math.random() * (max - min + 1));

// console.log(randomInt(2, 4));

// // rounding integers
// console.log(Math.round(23.3));
// console.log(Math.round(24.5));

// console.log(Math.ceil(23.3));
// console.log(Math.ceil(24.9));

// console.log(Math.floor(23.3));
// console.log(Math.floor("24.9"));

// console.log(Math.trunc(23.3));

// console.log(Math.trunc(-23.3));
// console.log(Math.floor(-23.3));

// // rounding decimals
// console.log((2.4).toFixed(0));
// console.log(+(2.7).toFixed(3));
// console.log((2.345).toFixed(2));
// console.log(+(2.345).toFixed(2));

// lec3

// console.log(-4 % 2);

// console.log(5 % 2);
// console.log(5 / 2);

// console.log(8 % 3);
// console.log(8 / 3);

// console.log(6 % 2);
// console.log(6 / 2);

// console.log(7 % 2);
// console.log(7 / 2);

// const isEven = n => n % 2 === 0;

// console.log(isEven(8));
// console.log(isEven(23));
// console.log(isEven(514));

// const rows = [...document.querySelectorAll(".movements__row")]; // will return a noteList and i will convert it to array

// console.log(rows);
// labelBalance.addEventListener("click", function (e) {
//   e.preventDefault();
//   [...document.querySelectorAll(".movements__row")].forEach(function (row, i) {
//     if (isEven(i)) {
//       //console.log(i);
//       row.style.backgroundColor = "red";
//     }
//     if (i % 3 === 0) {
//       row.style.backgroundColor = "blue";
//     }
//   });
// });

// // lec4

// const diameter = 287_460_000_000;
// console.log(diameter);

// const price = 345_99;
// console.log(price);

// const transferFee1 = 15_00;
// const transferFee2 = 1_500;
// console.log(transferFee1, transferFee2);

// const pI = 3.1415;
// console.log(pI);

// console.log(Number("230_000"));

// lec5

// console.log(2 ** 53 - 1);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(2 ** 53 + 1);
// console.log(2 ** 53 + 2);
// console.log(2 ** 53 + 3);
// console.log(2 ** 53 + 4);

// console.log(37872398748927892987489728787n);
// console.log(BigInt(38874387)); // must take number <= maxSafeInteger

// console.log(100n + 5n);
// console.log(784937289738927894789274n * 8298478932894729874n);
// const huge = 84372984729874982n;
// const num = 23;
// console.log(huge * BigInt(num));

// // exceptions
// console.log(20n > 15);
// console.log(20n === 20);
// console.log(typeof 20n);
// console.log(20 == 20n);

// console.log(huge + "  is really Big !!! ");
// // divisions
// console.log(10n / 3n);
// console.log(10 / 3);

// // lec 6 dates

// const now = new Date();
// console.log(now);

// console.log(new Date("Aug 02 2020 18:05:41"));
// console.log(new Date("Decmeber 24, 2015"));
// console.log(new Date(account1.movementsDates[0]));

// console.log(new Date(10, 19, 15, 5, 23, 2037));

// console.log(new Date(2037, 10, 19, 15, 23, 5));
// console.log(new Date(2037, 10, 31));

// console.log(new Date(0)); // in ms

// console.log(new Date(3 * 24 * 60 * 60 * 1000));

// const future = new Date(2037, 10, 19, 15, 23);
// console.log(future);
// console.log(future.getFullYear());
// console.log(future.getMonth());
// console.log(future.getDate()); // the day of the month
// console.log(future.getDay()); // the day of the week
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());

// console.log(future.toISOString());

// // to get the time stamp for this day 1 january 1970

// console.log(future.getTime());
// console.log(new Date(future.getTime()));

// // the current time stamp
// console.log(Date.now());
// future.setFullYear(20);
// console.log(future.getFullYear());

//////////////////////////////////////////////////////////////////////
// lec 7
// worked on the real application

////////////////////////////////

// // lec 8

// const fromMsecondsTodays = a => a / (1000 * 60 * 60 * 24);

// const future = new Date(2037, 10, 19, 15, 23);
// console.log(+future);

// const calcDaysPassed = (date1, date2) =>
//   fromMsecondsTodays(Math.abs(date1 - date2));

// const days1 = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));

// console.log(days1);

// // some work on the app
////////////////////////////////////////////////////
// lec 9
// some work on the app
// lec 10

// const num = 3884764.23;

// const options = {
//   style: "currency",
//   unit: "celsius",
//   currency: "EUR",
//   // useGrouping: false,
// };

// console.log(
//   "Us            ",
//   new Intl.NumberFormat("en-US", options).format(num)
// );

// console.log(
//   "Germany            ",
//   new Intl.NumberFormat("de-DE", options).format(num)
// );

// console.log(
//   "Syria           ",
//   new Intl.NumberFormat("ar-SY", options).format(num)
// );

// console.log(
//   navigator.language,
//   new Intl.NumberFormat(navigator.language, options).format(num)
// );
// some work on the app
//////////////////////////////////////////////////////////////////////
// lec 11
// timers

// const ingredients = ["olives", "spinach"];

// const pizzaTimer = setTimeout(
//   (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2} `),
//   3000,
//   ...ingredients
// );

// console.log("Waiting...");

// if (ingredients.includes("spinach")) clearTimeout(pizzaTimer);
// console.log("setTimeout will not be implemented");

// // setInterval

// setInterval(function () {
//   const now = new Date();
//   console.log(now);
// }, 1000);

// lec 12
