function* myGenerator(name) {
  yield `Hi ${name}`;
  yield "Bye!";
}

let gen = myGenerator("shiv");
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
