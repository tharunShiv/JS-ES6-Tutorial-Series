// Declaration inside a scope
// for (var i = 0; i < 5; i++) {
//   let num = 100;
//   console.log("Num var: " + num);
//   {
//     let num = 10;
//     console.log("Num let: " + num);
//   }
// }

// Redeclaration
// var num = 100;
// let num = 10;

// const
// const x = 10;
// x = 100;

// Let is block Scoped
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }
// console.log(i);
// Var is Global Scoped
for (var i = 0; i < 5; i++) {
  console.log(i);
}
console.log(i);
