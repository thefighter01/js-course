let markMass , johnMass , markHeight , johnHeight;


markMass = 78;
markHeight = 1.69;

johnMass = 92;
johnHeight = 1.95;

const markBMI = markMass / (markHeight ** 2);

const johnBMI = johnMass / (johnHeight ** 2);


let markHeightBMI = markBMI > johnBMI;

console.log(markBMI , johnBMI);

console.log(markHeightBMI);

