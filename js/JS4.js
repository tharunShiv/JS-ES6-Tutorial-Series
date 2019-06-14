var num = 100;
//global scope
function test() {
  //local scope
  var num = -100;
  console.log("inside: " + num);
}

console.log("outside: " + num);
test();
