"use strict";

let shoes = [
  "Heracles air max ++",
  "Zeus de chantier",
  "Hermes ultra fast",
  "Poseidon étanches",
  "Hadès méga-dark",
];
let i = 0;
while (i < shoes.length) {
  console.log(shoes[i]);
  i = i + 1;
}
for (let j = 0; j < shoes.length; j++) {
  console.log(shoes[j]);
}
shoes.forEach(function (shoe) {
  console.log(shoe);
});
let nombre = prompt("Donnez moi un nombre entre 0 et 4");
while (isNaN(nombre) || nombre < 0 || nombre > 4) {
  nombre = prompt("Donnez moi un nombre entre 0 et 4");
}
console.log(shoes[nombre]);
