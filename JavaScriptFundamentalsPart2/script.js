'use strict';

function fruitProcessor(apples , oranges){
    console.log(apples , oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

let juice = fruitProcessor(5);

console.log(juice);


function logger(a ){
    console.log("here we go");
}

logger(4 , 40);


/// function expression

const calcAge = function(birthYear){
    return 2037 - birthYear;
}

const age = calcAge(2018);


console.log(age);

const calcAge2 = (birthYear) => {
    return 2037 -birthYear;
}


console.log(calcAge2(2018));


let friends = ['mahmoud' , 'mark' , 'max'];

let size = friends.length;


friends = ['kill' , 'me'];
console.log(friends);


const mahmoud = {
    firstName : 'mahmoud',
    lastName : 'hasan',
    age : 21,
    friends:  ['theKiller' , 'theFigther' , 'theSniper'],
    married: false,

    calcYears : function(current){
        return 2025 - current;
    },

    getSummary : function(){
        this.summary = `${this.firstName} is a ${this.calcYears(2020)} old teacher, and is married ${this.married}`;
        return this.summary;
    }
};

console.log(mahmoud);


const cur = "Name";

console.log(mahmoud['first'+cur]);
console.log(mahmoud['last'+cur]);

const interstedIn = prompt('what do you want to know about 7oda choose between first and last name , age , job , and firends');

console.log("77777777777777777777777777777777");

console.log(mahmoud[interstedIn]);

// udefined is a falsy value


console.log(`${mahmoud.firstName} has ${mahmoud.friends.length} friends, and his best friend is called ${mahmoud.friends[0]}`);


console.log(mahmoud.calcYears(2020));

console.log(mahmoud.getSummary());


















































