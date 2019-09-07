// JS Objects

// JS Object Constructor

let myLaptop = new Object();
let propertyName = "resolution";

myLaptop.brand = "Dell";
myLaptop.cores = "8";
myLaptop.storage = "1TB";
myLaptop[propertyName] = "1080p";

console.log(
  "My Laptop Info: ",
  myLaptop.brand,
  " Cores: ",
  myLaptop["cores"],
  ", Storage: ",
  myLaptop.storage,
  "Screen Resolution",
  myLaptop.resolution
);
