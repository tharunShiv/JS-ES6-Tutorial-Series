// functions

function hello() {
  // function body
  console.log("Hello world!");
}

hello();

// returning functions
function returnMe() {
  console.log("returning");
  return 5;
}

var x = returnMe();

// parameterized functions
function add(x, y) {
  return x + y;
}

console.log(add(5, 10));

// default function parameters
function add(x, y = 10) {
  return x + y;
}

console.log(add(5, 15));

// rest parameters
function lengthOfMe(...params) {
  console.log(params);
  return params.length;
}

console.log(lengthOfMe(5, 6, 7, 8));

// function constructor
let func = new Function("x", "y", "return x*y;");

console.log(func(5, 6));

// 6 = 6x5x4x3x2x1
function factorial(num) {
  if (num <= 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

console.log(factorial(6));

// anonymous function
(function() {
  console.log("I'm an anonymous");
})();

// parameters
// fat arrow notation
// statements
var food = (x, y, z) => {
  return x + y + z;
};

console.log("food: ", food(10, 20, 30));

// variation 1
var food = (x, y, z) => x + y + z;
console.log("food: ", food(10, 20, 30));

// variation 2
var food = x => x + 100;
console.log("food: ", food(10));

// generator functions
function* query() {
  const name = yield "What's your name?";
  const sport = yield "What's your favourite sport? ";
  return `${name}'s fav sport is ${sport}`;
}

const instance = query();
console.log(instance.next());
console.log(instance.next("Shiv"));
console.log(instance.next("Basketball"));
