'use strict';

const calcAvg = (firstScore , secondScore , thirdScore) => (firstScore + secondScore + thirdScore) / 3;


let dolphinFirstScore = 85;
let dolphinSecondScore = 54;
let dolphinThirdScore = 41;


let koalasFirstScore = 23;
let koalasSecondScore = 34;
let koalasThirdScore = 27;


const dolphinsAvg = calcAvg(dolphinFirstScore , dolphinSecondScore , dolphinThirdScore);

const koalasAvg = calcAvg(koalasFirstScore , koalasSecondScore , koalasThirdScore);

console.log(dolphinsAvg , koalasAvg);
function checkWinner(avgDolphins , avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) return "Dolphins";
    if (avgKoalas >= 2 * avgDolphins) return "Koalas";
    return "There Is No Winner";
}

console.log(checkWinner(dolphinsAvg , koalasAvg));


