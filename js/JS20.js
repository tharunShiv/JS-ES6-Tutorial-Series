// Arrays

let arr = [1, 2, 3, 4];

console.log(arr[0]);

let arr1 = new Array(4);

arr1[0] = 10;
arr1[1] = 30;
arr1[2] = 30;
arr1[3] = 40;

console.log(arr1);

let arr2 = new Array("tharun", "shiv", "nandi", 2, 3);
console.log(arr2);

// Array Methods

// concatenate

let arr3 = arr.concat(arr1);
console.log(arr3);

// pop push
arr3.pop();
arr3.pop();

console.log(arr3);

console.log(arr3.push(100));
console.log(arr3);

// reverse
arr3.reverse();
console.log(arr3);

// string
let stringArr = arr3.toString();
console.log(stringArr);
