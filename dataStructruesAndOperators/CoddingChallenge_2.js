"use strict";

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

for (const [i, player] of game.scored.entries()) {
  const ans = `Goal ${i + 1} : ${player}`;
  console.log(ans);
}

const calcAvg = function (ob) {
  const arr = Object.values(ob);
  const sz = arr.length;
  let sum = 0;
  for (const item of arr) {
    //console.log(item);
    sum += item;
  }
  console.log(sum / sz);
};

calcAvg(game.odds);

// task3

for (const [key, value] of Object.entries(game.odds)) {
  //console.log(key, value);
  const curStr = key === "x" ? "draw" : `victory ${game[key] ?? ""}`;
  const ans = `Odd of ${curStr} : ${value}`;
  console.log(ans);
}

// Bouns
const scorers = {};

const calcGoals = function (p, arr) {
  let ans = 0;
  for (const item of arr) ans += p == item;
  return ans;
};

const myArr = game.scored;

for (const item of myArr) {
  scorers[item] ? scorers[item]++ : (scorers[item] = 1);
}

console.log(scorers);
