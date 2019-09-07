// // Javascript Objects

// // Object initializers
// var person = {
//   firstName: "Tharun",
//   lastName: "Shiv",
//   call: function() {
//     return "Hello Shiv!";
//   }
// };

// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.call());

// Object constructors

var person = new Object();

person.name = "tharun";
person.age = 20;
person.call = function() {
  return "Hello Shiv!";
};

console.log(person["name"]);
