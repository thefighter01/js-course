
let bill = 40;

let tip = (bill >= 50 && bill <= 300) ? 0.15 * bill : 0.20 * bill;

console.log(`the bill was ${bill} and the tip was ${tip} and the final value is ${bill + tip}`);