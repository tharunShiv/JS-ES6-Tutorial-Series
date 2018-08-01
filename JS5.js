// "use strict";

// function test() {
//   var num = 1000;
//   console.log("Var num : " + num);
//   {
//     console.log("Inner block of code");
//     let num = 200;
//     console.log("Let num : " + num);
//   }
// }

// test();

// var Den = 5;
// var Den = 10;
// console.log(Den);

// let Den = 5;
// Den = 10;
// console.log(Den);

// const Den = 5;
// Den = 10;

//Let is block Scoped
//Var is Global Scoped

// for (var i = 0; i < 5; i++) {
//   console.log(i);
// }
// // i is valid outside the scope also
// console.log(i);

for (let i = 0; i < 5; i++) {
  console.log(i);
}
// i is valid outside the scope also
console.log(i);
