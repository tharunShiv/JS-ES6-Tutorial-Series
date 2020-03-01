// Js Objects

// Object.create()
const occupation = {
  type: "none",
  displayType: function() {
    console.log(this.type);
  }
};

// police

let police = Object.create(occupation);
police.type = "police";
police.displayType();

// police

let developer = Object.create(occupation);
developer.type = "web developer";
developer.displayType();
