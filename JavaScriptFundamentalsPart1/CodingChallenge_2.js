let markMass , johnMass , markHeight , johnHeight;


markMass = 78;
markHeight = 1.69;

johnMass = 92;
johnHeight = 1.95;

const markBMI = markMass / (markHeight ** 2);

const johnBMI = johnMass / (johnHeight ** 2);


let markHeightBMI = markBMI > johnBMI;

// console.log(markBMI , johnBMI);

// console.log(markHeightBMI);

if (markBMI > johnBMI){
    console.log("mark has a higher a BMI");
    console.log(`mark's BMI ${markBMI} is higher than john's BMI ${johnBMI}`);

}
else if (johnBMI > markBMI){
    console.log("john has a higher a BMI");
    console.log(`john's BMI ${markBMI} is higher than mark's BMI ${johnBMI}`);

}else{
    console.log(`they are equal in BMI 
and the BMI of mark is ${markBMI} 
and the BMI of john is ${johnBMI}`);
}