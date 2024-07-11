'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';
  // .textContent = 0

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  movs.forEach(function (movement, index) {
    const type = movement > 0 ? 'deposit' : 'withdrawal';

    const html = `  <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}</div>
          <div class="movements__value">${movement}€</div>
        </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

//displayMovements(account1.movements);

const createUserNames = function (accounts) {
  accounts.forEach(function (user, index) {
    const userName = user.owner
      .toLowerCase()
      .split(' ')
      .map(word => word[0])
      .join('');
    user.userName = userName;
  });
};
createUserNames(accounts);
//console.log(accounts);
//console.log(createUserNames('Steven Thomas Williams'));

const calcDisplayBalance = function (account) {
  account.balance = account.movements.reduce(
    (acc, movement) => acc + movement,
    0
  );
  labelBalance.textContent = `${account.balance}€`;
};

//calcDisplayBalance(account1.movements);

const calcDisplaySummary = function (acc) {
  const income = acc.movements
    .filter(movement => movement > 0)
    .reduce((acc, mov) => acc + mov);

  labelSumIn.textContent = `${income}€`;

  const out = acc.movements
    .filter(movement => movement < 0)
    .reduce((acc, mov) => acc - mov, 0);
  labelSumOut.textContent = `${out}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(cur => cur >= 1)
    .reduce((acc, cur) => acc + cur);
  labelSumInterest.textContent = `${interest}€`;
};

//calcDisplaySummary(account1.movements);

// Event handlers

let currentAccount;

const updateUI = function (account) {
  // display summary
  calcDisplaySummary(account);
  // disply shit
  displayMovements(account.movements);

  calcDisplayBalance(account);
};
btnLogin.addEventListener('click', function (e) {
  // prevent form from submitting
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.userName === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // welcome word
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    // clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    // change the opacity
    containerApp.style.opacity = 100;

    updateUI(currentAccount);

    //  console.log('LogIn');
  }
});

// event handlers

btnTransfer.addEventListener('click', function (e) {
  const userName = inputTransferTo.value;
  const amount = Number(inputTransferAmount.value);
  inputTransferAmount.value = inputTransferTo.value = '';
  // prevent loading the page
  e.preventDefault();
  const recieverAccout = accounts.find(acc => acc.userName === userName);
  // check for undefined

  console.log(amount, recieverAccout);

  if (
    amount > 0 &&
    currentAccount.balance >= amount &&
    recieverAccout &&
    recieverAccout?.userName !== currentAccount.userName
  ) {
    console.log('Transfering ');
    currentAccount.movements.push(-amount);
    recieverAccout.movements.push(amount);
    updateUI(currentAccount);
  }
});

// event handlers

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  const userName = inputCloseUsername.value;
  const pin = Number(inputClosePin.value);
  if (userName !== currentAccount.userName || pin !== currentAccount.pin) {
    const accountClosed = accounts.findIndex(
      acc => acc.userName === userName && acc.pin === pin
    );
    if (accountClosed !== -1) {
      accounts.splice(accountClosed, 1); // mutates the array itself already
    }

    console.log('Delete');
  }
  console.log(accounts);
  console.log('button clicked');

  inputCloseUsername.value = inputClosePin.value = '';
  // we can hide ui
  containerApp.style.opacity = 0;
});

// event handlers

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  const canLoan = currentAccount.movements.some(mov => mov >= 0.1 * amount);
  if (amount > 0 && canLoan) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
    console.log('can Loan');
  }
  console.log('loan clicked');
});

// event handlers
let state = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  state = !state;
  displayMovements(currentAccount.movements, state);
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// calcDisplayBalance(movements);
/////////////////////////////////////////////////

// // slice // doesn't cahnge the original array
// let arr = ['a', 'b', 'c', 'd', 'e'];

// console.log(arr);
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));

// console.log(arr.slice(-2));

// console.log(arr.slice(-1));

// console.log(arr.slice(1, -2));
// console.log(arr.slice()); // return a shallow copy of the array

// console.log('splice');
// // splice // change the original array
// const newArray = arr.splice();
// console.log(newArray, arr);

// arr.splice(-1);
// console.log(arr);

// arr.splice(1, 2);
// console.log(arr);

// console.log('reverse');
// // reverse // change the original array
// arr = ['a', 'b', 'c', 'd', 'e'];

// const arr2 = ['j', 'i', 'h', 'g', 'f'];

// console.log(arr2.reverse());
// console.log(arr2);

// // concat doesn't cahnge the original array
// console.log('concat');
// const letters = arr.concat(arr2);

// console.log(letters);
// console.log([...arr, ...arr2]);
// // join
// console.log('join');
// console.log(letters.join(' - '));

// // at method
// arr = [23, 11, 64];

// console.log(arr[0]);
// console.log(arr.at(0));

// // getting the last element of an array
// console.log(arr.at(-1));
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);

// console.log('jonas'.at(0));
// console.log('jonas'.at(-1));

// ForEach on array

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1} : You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdraw ${Math.abs(movement)}`);
//   }
// }

// console.log('ForEach --------');
// movements.forEach(function (movement, index, array) {
//   if (movement > 0) {
//     console.log(`Movement ${index + 1} : You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${index + 1} : You withdraw ${Math.abs(movement)}`);
//   }
// });

// forEach on Map and sets

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// // with Map
// currencies.forEach(function (value, key, map) {
//   console.log(`${key} : ${value}`);
// });

// // with Set

// const currenciesUnique = new Set(['ma7moud', 'hasn', 'lol2', 'noBodyCares']);
// console.log(currenciesUnique);

// currenciesUnique.forEach(function (value, _value, set) {
//   console.log(`${value} : ${_value}`);
// });

//////////////////////////////////////////////
// map method

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurToUsd = 1.1;

// const movementsUsd = movements.map(function (movement) {
//   return eurToUsd * movement;
// }); // this way follows functional programming
// console.log(movements);

// console.log(movementsUsd);

// const movementsUSDFor = [];

// for (const movement of movements) {
//   movementsUSDFor.push(eurToUsd * movement);
// }
// console.log(movementsUSDFor);

// const movementsArrow = movements.map(movement => movement * eurToUsd);

// console.log('lol', movementsArrow);

// const movementDescriptions = movements.map(
//   (movement, index) =>
//     `Movement ${index + 1} : You ${
//       movement > 0 ? 'deposited' : 'withdraw'
//     } ${movement}`
// );

// console.log(movementDescriptions);

// movementDescriptions.forEach(function (mov) {
//   mov = 'lol';
// });

// console.log(movementDescriptions);

// console.log('filter Method');
// ////////////////////////////////////////////
// // filter method

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const deposit = movements.filter(function (move) {
//   return move > 0;
// });

// console.log(movements);
// console.log(deposit);

// const depositsFor = [];

// for (const move of movements) if (move > 0) depositsFor.push(move);

// console.log(depositsFor);

// const withdrawls = movements.filter(move => move < 0);

// console.log(withdrawls);

// console.log('reduce method');

// /////////////////////////////////////
// reduce method

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// console.log(movements);

// // accmulator -> snowball

// const balance = movements.reduce((acc, movement) => acc + movement, 100);

// console.log(balance);

// let balance2 = 0;

// movements.forEach(movement => (balance2 += movement));
// console.log(balance2);

// // Maximum Value

// let max = movements.reduce(
//   (acc, movement) => Math.max(movement, acc),
//   movements.at(0)
// );
// console.log(max);
///////////////////////////////////////////////
// chaining
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurToUsd = 1.1;
// const totalDepositsUSD = movements
//   .filter(movement => movement > 0)
//   .map(movement => movement * eurToUsd)
//   .reduce((acc, movement) => acc + movement);

// // .map((mov, i, arr) => {
// //   console.log(arr);
// //   return mov * eurToUsd;
// // });

// console.log(totalDepositsUSD);
///////////////////////////////////////////////////////////
// find method
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const firstWithdrawl = movements.find(mov => mov < 0);
// console.log(movements);
// console.log(firstWithdrawl);

// console.log(accounts);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

////////////////////////////////////////////
// console.log('Some and Every');
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// // some and every
// // tests for equality
// console.log(movements.includes(-130));

// // condition

// console.log(movements.some(mov => mov === -130));
// const anyDeposit = movements.some(mov => mov > 1500);
// console.log(anyDeposit);

// // Every

// console.log(
//   'lol',
//   account1.movements.every(mov => mov > 0)
// );

// // seperate callback we can use the method multiple times so save some time and follow good practice and dry principle

// console.log('flat and flatMap');

// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];

// console.log(arr.flat());
// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat(2));

// const accountMovements = accounts.map(cur => cur.movements).flat();
// console.log(accountMovements);

// const allBalance = accountMovements.reduce((acc, m) => m + acc, 0);
// console.log(allBalance);

// const overallBalance = accounts
//   .map(cur => cur.movements)
//   .flat()
//   .reduce((acc, m) => m + acc, 0);

// console.log(overallBalance);

// // flatMap goes one level deep , takes what map take

// const test2 = accounts
//   .flatMap(cur => cur.movements)
//   .reduce((acc, m) => m + acc, 0);

// console.log(test2);

///////////////////////////////////////////

// sort work with strings by default

// const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];

// // sort mutates the original array

// console.log(owners.sort());

// // to sort numbers
// // when you return > 0 will swap the positions , <= 0 will save the current order
// console.log(owners);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements);

// // sort ascending
// movements.sort((a, b) => a - b);

// console.log(movements);
// // descending
// movements.sort((a, b) => b - a);
// console.log(movements);
///////////////////////////////////////
// filling the arrays

// const arr = [1, 2, 3, 4, 5, 6, 7];

// console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// const x = new Array(7);

// console.log(x);

// x.fill(1, 3, 5);
// // 2 ,3 , 4
// // 1 1 1
// console.log(x);

// x.fill(23, 4, 6);
// console.log(x);

// // Array.from
// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);

// const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z);

// labelBalance.addEventListener('click', function () {
//   const movemetnsUI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     cur => Number(cur.textContent.replace('€', ''))
//   );
//   console.log(movemetnsUI);

//   const movementsUI2 = [...document.querySelectorAll('.movements__value')];
// });

////////////////// Array Practise

// 1
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((acc, cur) => acc + cur, 0);

console.log(bankDepositSum);

// 2

const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, cur) => acc + (cur >= 1000), 0);

console.log(numDeposits1000);

// 3

const obj = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (acc, cur) => {
      acc[cur > 0 ? 'deposits' : 'withdrawl'] += cur;
      return acc;
    },
    { deposits: 0, withdrawl: 0 }
  );

const { deposits, withdrawl } = obj;

console.log(deposits, withdrawl);
// 4

const convertTitleCase = function (title) {
  const capitalize = function (word) {
    return word[0].toUpperCase() + word.slice(1);
  };
  const exceptions = ['a', 'an', 'the', 'with', 'or', 'but', 'in', 'on', 'and'];
  const ans = title
    .toLowerCase()
    .split(' ')
    .map(word => {
      return exceptions.includes(word) ? word : capitalize(word);
    })
    .join(' ');
  return capitalize(ans);
};

console.log(convertTitleCase('this is a nice title'));

console.log(convertTitleCase('this is a LONG title but not too long'));

console.log(convertTitleCase('and here is anohter title with an EXAMPLE'));
