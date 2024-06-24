
mark = {
    firstName : 'Mark',
    lastName : 'Miller',
    mass :  78,
    height : 1.69,

    calcBMI : function(){
       return this.BMI = this.mass / (this.height * this.height);
    }
};

john = {
    firstName : 'John',
    lastName : 'Smith',
    mass :  92,
    height : 1.95,

    calcBMI : function(){
       return this.BMI = this.mass / (this.height * this.height);
    }
};

if (mark.calcBMI() > john.calcBMI()){
    console.log(`${mark.firstName} BMI is (${mark.calcBMI()}) is heigher than ${john.firstName} BMI (${john.calcBMI()})`);

}
else if (mark.calcBMI() < john.calcBMI()){
    console.log(`${john.firstName} BMI is (${john.calcBMI()}) is heigher than ${mark.firstName} BMI (${mark.calcBMI()})`);

}
else{
    console.log("they are equal interms of BMI");
}