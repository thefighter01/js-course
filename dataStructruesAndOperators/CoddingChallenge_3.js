"use strict";

const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
  // minuate , values or events
  // football has 90 minuates plus 2 extra time
]);

const events = [...new Set(gameEvents.values())];
console.log(events);
gameEvents.delete(64);
console.log(gameEvents);
const calcAvg = function (mp) {
  const sz = mp.size;
  let minutes = 90;
  console.log(`An evnet happened , on average every ${minutes / sz} minutes`);
};

calcAvg(gameEvents);
for (const [key, value] of gameEvents) {
  const ans = `${
    key <= 45 ? "[FIRST HALF]" : "[SECOND HALF]"
  } ${key} : ${value}`;
  console.log(ans);
}
