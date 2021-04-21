"use strict";

let shoes = [
  "Heracles air max ++",
  "Zeus de chantier",
  "Hermes ultra fast",
  "Poseidon étanches",
  "Hadès méga-dark",
];
let i = 0;
console.log("loop while");
while (i < shoes.length) {
  console.log(shoes[i]);
  i++;
}
console.log("loop for");
for (let j = 0; 0 < shoes.length; j++) {
  console.log(shoes[j]);
}
console.log("loop for in");
for (shoe in shoes) {
  console.log(shoe);
}
