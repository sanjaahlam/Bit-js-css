//1.Create an object that represents your favourite coffee. Please include coffee name, strength, flavour, milk, sugar, … everything you like!

var coffee = {
  name: "Esspreso",
  strenght: "Double",
  flavour: "Without sugar",
  milk: true,
  sugar: false,
  candy: "Caramel",
};
console.log(coffee);

//2.Create an object that represents your favourite movie. Please include title, actors, director, genre, popularity.

var movie = {
  name: "PS I love you",
  actors: ["Hilary Swank", "Gerard Butler", "Lisa Kudrow"],
  director: "Richard LaGravenese",
  genre: "drama",
  popularity: 7.0,
};
console.log(movie);

//3.Write a function that creates an object that represents a project. Each project is described by:
//description,  programming language, git repository, boolean status that says if the project is in development or not.
//Add a method that prints out the project's repository,  a method that checks if the project is written in JavaScript as well as a method that checks if the project is in development or not.

function project(des, lan, repository, stat) {
  var obj = {
    description: des,
    language: lan,
    git: repository,
    status: stat,
    printStatus: function () {
      if (stat) {
        return "In develop";
      }
      return "Finished";
    },
    printRep: function () {
      console.log(repository);
    },
    printWritten: function () {
      if (lan == "JavaScript") {
        return "Using JavaScript";
      }
      return "Do not using JavaScript";
    },
  };
  return obj;
}
var func = project("E-commerce", "JavaScript", "SomeGitHubProfile", true);
console.log(func.printStatus());

//4.Write a function that creates an object that represents a culinary recipe. Each recipe is described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients, preparing time, preparing instruction.
//	Add a method that prints out all the ingredients necessary for the meal preparation.
//	Add a method that checks if a meal can be prepared for 15 minutes.
//	Add a method that changes the type of cuisine to the given value.
//	Add a method that delete a given ingredient from the list of ingredients.

function Pizazarecipe(name, cuis, complexity, ingr, time, instructions) {
  this.name = name;
  this.cuisine = cuis;
  this.complexity = complexity;
  this.ingredients = ingr;
  this.time = time;
  (this.instructions = instructions),
    (this.ingred = function () {
      return ingr.toString();
    });
  this.preparation = function () {
    if (this.time < 15) {
      return "Less than 15 minutes";
    }
    return "More than 15 minutes";
  };
  this.typeCuisine = function (cuis) {
    this.cuisine = cuis;
  };
  this.deleteIngredient = function (value) {
    this.ingredients = this.ingredients.filter(function (ingr) {
      return ingr !== value;
    });
  };
}

var pizza = new Recipe(
  "Pizza",
  "Italy",
  2,
  ["Olives", "Cheese", "Ham", "Mushrooms"],
  10,
  "Create pastry for Pizza, put ingredienst on it, make 250 degrees and wait for 10 miuntes"
);

var spagheti = new Recipe(
  "Spagheti",
  "France",
  1,
  ["Beef", "Cheese", "Ham", "Pastry"],
  25,
  "Create pastry for Pizza, put ingredienst on it, make 250 degrees and wait for 10 miuntes"
);

console.log(pizza);
pizza.deleteIngredient("Ham");
console.log(pizza);
