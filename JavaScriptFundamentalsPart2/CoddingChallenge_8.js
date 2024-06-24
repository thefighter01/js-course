
const bills = [22 , 295 , 176 , 440 , 37 , 105 , 10 , 1100 , 86 , 52];

const tips = [];

const total = [];

const calcTip = bill => (bill >= 50 && bill<= 300) ? .15 * bill : .2 * bill;

for (let i = 0 ; i < bills.length; ++i){
    tips.push(calcTip(bills[i]));
    total.push(tips[i]+bills[i]);
}

console.log(tips);
console.log(total);


function calcAvg (r){
    let ans = 0;
    let sz = r.length;
    for (let i = 0; i < sz; ++i){
        ans+= r[i];
    }
    return ans / sz;
};


console.log(calcAvg(total));