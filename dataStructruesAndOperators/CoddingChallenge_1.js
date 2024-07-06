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

const [players1, players2] = game.players;

const [gk, ...fieldPlayers] = players1;

// console.log(players1, players2);

// console.log(gk, fieldPlayers);
const allplayers = [...players1, ...players2];

const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];

const { team1, x: draw, team2 } = game.odds;

// console.log(allplayers);
// console.log(draw, team1, team2);

const printGoals = function (...x) {
  const sz = x.length;
  console.log("the number of goals is " + sz);
  for (let i = 0; i < sz; ++i) {
    console.log(`in iteration ${i} we have ${x[i]}`);
  }
};

// printGoals("Davies", "Mullar", "Lewandowski", "kimmich");

// printGoals(...game.scored);

team1 < team2 && console.log("team 1 is more likely to win");

team2 < team1 && console.log("team2 is more likely to win");
