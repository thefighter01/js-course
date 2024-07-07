"use strict";

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  const list = text.split("\n");
  let Ok = "";
  for (const [i, value] of list.entries()) {
    // const idx = item.indexOf("_");
    // const cur = item.slice(idx, idx + 2);
    // const anotherName = item.replace(cur, cur[1].toLocaleUpperCase());
    // // const newName =
    // //   item.slice(0, idx) + item[idx + 1].toUpperCase() + item.slice(idx + 2);
    // console.log(cur, anotherName);
    // Ok = Ok.padEnd(i + 1, "7 ");
    const [firstName, secondName] = value.toLowerCase().trim().split("_");
    const output = `${firstName}${secondName.replace(
      secondName[0],
      secondName[0].toUpperCase()
    )}`;

    console.log(`${output.padEnd(20, " ")}${"sa7 ".repeat(i + 1)}`);
    // console.log(output);
  }
});
