// Map - Reduce
employee1 = {
  name: "Tharun",
  position: "CTO",
  salary: 100000,
};
employee2 = {
  name: "Chandu",
  position: "CEO",
  salary: 190000,
};
employee3 = {
  name: "Venkat",
  position: "CFO",
  salary: 50000,
};
employee4 = {
  name: "Naveen",
  position: "Manager",
  salary: 20000,
};
employee5 = {
  name: "Uma",
  position: "HR",
  salary: 70000,
};
employee6 = {
  name: "Vasu",
  position: "Engineer",
  salary: 10000,
};
employee7 = {
  name: "Saravana",
  position: "Engineer",
  salary: 40000,
};
employee8 = {
  name: "Ravi",
  position: "Engineer",
  salary: 50000,
};
employee9 = {
  name: "Shiv",
  position: "Engineer",
  salary: 30000,
};
employee10 = {
  name: "Govind",
  position: "Engineer",
  salary: 60000,
};
employee11 = {
  name: "Bhaskar",
  position: "Engineer",
  salary: 12000,
};
employee12 = {
  name: "Krishna",
  position: "Engineer",
  salary: 25000,
};
employee13 = {
  name: "Radha",
  position: "Engineer",
  salary: 25000,
};
employee14 = {
  name: "Praveen",
  position: "Engineer",
  salary: 25000,
};
employee15 = {
  name: "Mohith",
  position: "Engineer",
  salary: 25000,
};

employees = [
  employee1,
  employee2,
  employee3,
  employee4,
  employee5,
  employee6,
  employee7,
  employee8,
  employee9,
  employee10,
  employee11,
  employee12,
  employee13,
  employee14,
  employee15,
];

// USING MAP
// Task : Increase the salary by 25%

// employees.map((employee) => {
//   employee["salary"] *= 1.25;
//   console.log(employee);
// });

// let newSalaryList = employees.map((employee) => employee["salary"] * 1.25);
// console.log(newSalaryList);

// console.log(employee1);

// USING REDUCE
// Task :  To find the total salary of the new increased salaries

// let finalTotalSalary = newSalaryList.reduce(
//   (totalSalary, currentEmployeeSalary) => totalSalary + currentEmployeeSalary
// );

// console.log(finalTotalSalary);

// USING FILTER
// Task :  To find the employees who have a salary less than 40000

// let basicEmployees = employees.filter(
//   (employee) => employee["salary"] <= 40000
// );

// console.log(basicEmployees);

// USING SOME
// Task:To find if any employee has salary less than 15000

// let isSalLessThan15 = employees.some((employee) => employee["salary"] < 15000);
// console.log(isSalLessThan15);

// USING EVERY
// Task: To find if all the employess have salary above 20000

// let isSalMoreThan20 = employees.every((employee) => employee["salary"] > 20000);
// console.log(isSalMoreThan20);

// USING FIND
// Task: Getting the employee details with the name "tharun"

// let tharunDetails = employees.find((employee) => employee["name"] === "Tharun");
// console.log(tharunDetails);

// USING FINDINDEX
// let umaDetails = employees.findIndex((employee) => employee["name"] === "Uma");
// console.log(umaDetails);
