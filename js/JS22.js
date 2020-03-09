// Classes

class Desert {
  constructor(calories = 100) {
    // console.log("This desert has ", calories, " calories");
    this.ingredients = [];
    this.calories = calories;
  }

  addIngredients(ingredient) {
    this.ingredients.push(ingredient);
  }

  getIngredients() {
    console.log(this.ingredients);
  }
}

// inheritance
class IceCream extends Desert {
  constructor(flavor, calories, toppings = [], ingredients = []) {
    super(calories, ingredients);
    this.flavor = flavor;
    this.toppings = toppings;
  }

  static shopStatus = true;

  static getShopStatus = function() {
    console.log(this.shopStatus);
  };

  static setShopStatus = function(status) {
    this.shopStatus = status;
  };

  getIcecream() {
    console.log(
      `This is a ${this.flavor} flavoured IceCream, which has ${this.calories} calories`
    );
  }
}

// static variables and methods
const vanillaBooster = new IceCream(
  "Vanilla",
  275,
  ["choco chips", "jellies"],
  ["milk", "sugar", "vanilla flavour"]
);
vanillaBooster.getIcecream();
IceCream.getShopStatus();
IceCream.setShopStatus(false);
IceCream.getShopStatus();

// const vanilla = new Desert(275);
// // console.log(vanilla.calories);
// vanilla.addIngredients("milk");
// vanilla.addIngredients("sugar");
// vanilla.addIngredients("vanilla flavor");
// vanilla.getIngredients();

// const strawberry = new Desert(150);
// // console.log(strawberry.calories);
// strawberry.addIngredients("milk");
// strawberry.addIngredients("strawberry fruit");
// strawberry.addIngredients("strawberry flavor");
// strawberry.getIngredients();

// const vanillaBooster = new IceCream(
//   "Vanilla",
//   275,
//   ["choco chips", "jellies"],
//   ["milk", "sugar", "vanilla flavour"]
// );

// vanillaBooster.getIcecream();

// console.log(typeof vanillaBooster);
// console.log(typeof IceCream);

// function IceCream(flavor, calories) {
//   this.flavor = flavor;
//   this.calories = calories;
// }

// IceCream.prototype.getIcecream = function() {
//   console.log(
//     `This is a ${this.flavor} flavoured IceCream, which has ${this.calories} calories`
//   );
// };

// const vanillaBooster = new IceCream("vanilla", 275);

// vanillaBooster.getIcecream();
