'use strict';


const calcTip = bill => (bill >= 50 && bill<= 300) ? .15 * bill : .2 * bill;


const bills = [125 , 555 , 44];

const tips = [calcTip(bills[0]) , calcTip(bills[1]) , calcTip(bills[2])];

const total = [tips[0]+bills[0] , tips[1]+bills[1] , tips[2]+bills[2]];

console.log(bills);
console.log(tips);

console.log(total);