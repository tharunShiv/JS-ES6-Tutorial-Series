// object destructuring

let student = new Object();
student.name = "tharun";
student.age = 21;

let { age, name } = student;
console.log("Age, Name", age, name);
