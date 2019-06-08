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
