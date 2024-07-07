"use strict";

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const elements = flights.split("+");
// console.log(elements);

const getWord = function (s) {
  const myS = s.slice(0, 3).toUpperCase();
  return myS;
};
for (const item of elements) {
  const dummyData = item.split(";");
  const currentName = dummyData[0].replaceAll("_", " ").trim();
  const addStr = currentName.startsWith("Delayed") ? "🔴" : "";
  const from = getWord(dummyData[1]);
  const to = getWord(dummyData[2]);
  const hour = dummyData[3].replace(":", "h");
  console.log(
    `${addStr} ${currentName} from ${from} to ${to} (${hour})`.padStart(50)
  );
}
