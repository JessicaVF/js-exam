"use strict";
let tableaux = ["test", 42, 0.0];
tableaux.push("second test");
console.log(tableaux.indexOf("test"));

function multiply(x, y) {
  if (typeof x == "number" && typeof y == "number") {
    let z = x * y;
    return z;
  } else {
    return 0;
  }
}
console.log(multiply(2, 10));

function affine(x, y) {
  if (typeof x == "number" && typeof y == "number") {
    if (x > 8) {
      let a = x * 4;
      let b = y * 3;
      let z = a + b + 6;
      return z;
    } else if (y <= 4) {
      let a = x * 3;
      let b = y * 2;
      let z = a - b + 12;
      return z;
    } else {
      let a = x * 2;
      let b = y * 2;
      let z = a + b + 2;
      return z;
    }
  } else {
    return 0;
  }
}
console.log(affine(10, 5));
console.log(affine(7, 4));
console.log(affine(7, 5));
