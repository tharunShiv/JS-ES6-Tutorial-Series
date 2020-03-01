// Js Objects
// Object.assign()

// cloning
// let student = {
//   name: "tharun",
//   age: 21
// };
// let tutor = {};

// tutor = Object.assign({}, student);

// console.log("Student: ", student);
// console.log("Tutor: ", tutor);

// appending
// let student = {
//   name: "tharun",
//   age: 21
// };
// let skills = {
//   languages: "Python, Javascript",
//   experience: 3
// };

// student = Object.assign({}, student, skills);
// console.log("Student: ", student);
// console.log("Skills: ", skills);

// merging
let student = {
  name: "tharun",
  age: 21
};
let skills = {
  languages: "Python, Javascript",
  experience: 3
};
let hobbies = {
  hobby1: "Book reading"
};

// student = Object.assign({}, student, skills, hobbies);
Object.assign(student, student, skills, hobbies);
console.log("Student: ", student);
