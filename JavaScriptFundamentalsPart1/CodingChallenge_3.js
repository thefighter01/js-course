let dolphin1  = 96;
let dolphin2 =108;
let dolphin3 = 89;


let koalas1 = 88;
let koalas2 = 91;
let koalas3 = 110;

let dolphinAvg = (dolphin1 + dolphin2 + dolphin3) / 3;

let koalasAvg = (koalas1 + koalas2 + koalas3) / 3;

if (dolphinAvg > koalasAvg && dolphinAvg >= 100){
    console.log("Dolphin is the winner");
}
else if (dolphinAvg < koalasAvg && koalasAvg >= 100){
    console.log("Koalas is the winner");

} else if (dolphinAvg === koalasAvg && dolphinAvg >= 100) console.log ("Draw Case , Dolphin Average and Koalas Average is the same");
else{
    console.log ('there is no a winner for this battle');
}
