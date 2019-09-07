// JS Objects

// Js Object initialization
let student = {
  usn: "114",
  firstName: "Tharun",
  lastName: "Shiv",
  greet: function() {
    return "Hello Guys";
  },
  subjects: ["Web dev", "AI", "blockchain"]
};

console.log("Output is: ", student.firstName);
console.log("Output is: ", student.greet());
console.log("Output is: ", student.subjects[2]);
