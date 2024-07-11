'use strict';

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];
// 1
dogs.forEach(function (dog) {
  dog.recFood = Math.floor(dog.weight ** 0.75 * 28);
  console.log(dog);
});

// 2
const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));

const eatingTooMuch = sarahDog.curFood > sarahDog.recFood;

// eationg okay 10% above or 10% below

// eationg too much curfood > recommended food

console.log('sarah Dog eating Too much ' + eatingTooMuch);

// 3
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .map(dog => dog.owners)
  .flat();
const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood <= dog.recFood)
  .flatMap(dog => dog.owners);

console.log(ownersEatTooMuch);

console.log('ooo');
console.log(ownersEatTooLittle);
//4
const str = ownersEatTooMuch
  .join(' And ')
  .concat(
    `dogs eat too much! and ${ownersEatTooLittle.join(
      ' And '
    )} dogs eat Too Little`
  );

console.log(str);

// 5

console.log(dogs.some(dog => dog.recFood === dog.curFood));

// 6
const check = function (dog) {
  return dog.curFood >= dog.recFood * 0.9 && dog.curFood <= dog.recFood * 1.1;
};
console.log(dogs.some(check));
// 7
const eatingOkay = dogs.filter(check);
console.log(eatingOkay);
// 8
const copy = dogs.slice().sort((a, b) => a.recFood - b.recFood);

console.log(copy);
