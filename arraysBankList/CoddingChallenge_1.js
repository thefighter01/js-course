'use strict';

const checkDogs = function (juliaDogs, kateDogs) {
  const realDogs = juliaDogs.slice(1, -2);
  console.log(realDogs, juliaDogs);
  const correctData = [...realDogs, ...kateDogs];
  // const correctData = realDogs.concat(kateDogs);

  correctData.forEach(function (dog, index) {
    console.log(
      `"Dog number ${index + 1} is and ${
        dog >= 3 ? 'adult' : 'puppy'
      } and is ${dog} years old"`
    );
  });
};

const julia = [3, 5, 2, 12, 7];
const kate = [4, 1, 15, 8, 3];

checkDogs(julia, kate);
