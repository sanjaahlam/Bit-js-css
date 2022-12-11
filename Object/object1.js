//Create a function that takes an array of objects (groceries) which calculates the total price and returns it as a number. A grocery object has a product, a quantity and a price,for example:
//}
//"product":Milk,
//"quantity": 1,
//"price": 1.50
//}

function getTotalPrice(groceries) {
  let total = 0;
  groceries.forEach((x) => {
    total = total + x.price * x.quantity;
  });
  var result = parseFloat(total).toFixed(2);
  return Number(result);
}
j;

console.log(
  getTotalPrice([
    { product: "Tomato", quantity: 1, price: 1.5 },
    { product: "Eggs", quantity: 12, price: 0.1 },
    { product: "Coffee", quantity: 2, price: 1.6 },
    { product: "Potatoes", quantity: 1, price: 4.5 },
  ])
);

//2.You go to a jewelry shop and try to find the most expensive piece of jewelry. You write down the name of each piece of jewelry and its price. Create a function that gets the
//name of the piece of jewelry with the highest price and returns "The most expensive
//one is the {name of jewelry piece};.

var jewelry = [
  { name: "Diamond Ring", price: 980 },

  {
    name: "Diamond Earings",
    price: 1000,
  },

  {
    name: "Rolex",
    price: 500,
  },
];
function mostExpensive(jewelry) {
  var expensive = 0;
  var result;
  for (var i = 0; i < jewelry.length; i++) {
    if (jewelry[i].price > expensive) {
      expensive = jewelry[i].price;
      result = jewelry[i].name;
    }
  }
  return result;
}
console.log(mostExpensive(jewelry));

//3.Given a word, create an object that stores the indexes of each letter in an array. Make sure the letters are the keys. Make sure the letters are symbols. Make sure the indexes
//are stored in an array and those arrays are values.
//Examples:
//mapLetters("dodo") ➞ { d: [0, 2], o: [1, 3] }
//mapLetters("froggy") ➞ { f: [0], r: [1], o: [2], g: [3, 4], y: [5] }
//mapLetters("grapes") ➞ { g: [0], r: [1], a: [2], p: [3], e: [4], s: [5] }

function mapLetters(str) {
  const map = {};
  for (let i = 0; i < str.length; i++) {
    if (map.hasOwnProperty(str[i])) {
      map[str[i]] = map[str[i]].concat(i);
    } else {
      map[str[i]] = [i];
    }
  }
  return map;
}
console.log(mapLetters("dodo"));
console.log(mapLetters("froggy"));
console.log(mapLetters("grapes"));

//4.And who cursed the most in the fight between you and your spouse? Given an object  with three rounds, with nested objects as your scores per round, return a string of who
//cursed the most: If you, return "ME"! If your spouse, return "SPOUSE!"; If a draw, return "DRAW!".

function whoCursedTheMost(curse) {
  var scoreMe = 0;
  var scoreSpouse = 0;
  for (var i = 0; i < curse.length; i++) {
    scoreMe += curse[i].me;
    scoreSpouse += curse[i].spouse;
  }
  if (scoreMe > scoreSpouse) return "Me";
  else if (scoreMe < scoreSpouse) return "Spouse";
  else return "Draw";
}
console.log(
  whoCursedTheMost([
    { me: 10, spouse: 5 },
    { me: 5, spouse: 10 },
    { me: 10, spouse: 10 },
  ])
);

//5. Create a function that converts color in RGB format to Hex format.
//Examples:
//rgbToHex({red: 0, green: 128, blue: 192}) ➞ "#0080c0&";

var a = { red: 0, green: 128, blue: 192 };
var b = { red: 79, green: 113, blue: 12 };
var c = { red: 220, green: 32, blue: 0 };

function rgbToHex(input) {
  var hexR = input.red.toString(16);
  var hexG = input.green.toString(16);
  var hexB = input.blue.toString(16);
  if (hexR.length == 1) {
    hexR = "0" + hexR;
  }
  if (hexG.length == 1) {
    hexG = "0" + hexG;
  }
  if (hexB.length == 1) {
    hexB = "0" + hexB;
  }

  return console.log(`${input} : #${hexR}${hexG}${hexB}`);
}

rgbToHex(a);
rgbToHex(b);
rgbToHex(c);

//  6. Create a function that takes an amount of monetary change (e.g. 47 cents) and breaks down the most efficient way that change can be made using USD quarters, dimes, nickels and pennies. Your function should return an object.
// COIN     VALUE
// Penny    0.01
// Nickel   0.05
// Dime     0.10
// Quarter  0.25
// Examples:
// makeChange(47) ➞ { "q": 1, "d": 2, "n": 0, "p": 2 }
// makeChange(24) ➞ { "q": 0, "d": 2, "n": 0, "p": 4 }
// makeChange(92) ➞ { "q": 3, "d": 1, "n": 1, "p": 2 }

function makeChange(input) {
  var a = new Object();

  var q = input / 25;
  var qInt = Math.floor(q);

  var d = (input % 25) / 10;
  var dInt = Math.floor(d);

  var n = ((input % 25) % 10) / 5;
  var nInt = Math.floor(n);

  var p = ((input % 25) % 10) % 5;

  a["q"] = qInt;
  a["d"] = dInt;
  a["n"] = nInt;
  a["p"] = p;

  return a;
}

console.log(makeChange(47));
console.log(makeChange(24));
console.log(makeChange(92));

//  7.Create a function that takes an array of objects like { name: "John", notes: [3, 5, 4]} and returns an array of objects like { name: "John", avgNote: 4 }. If student has no notes (an empty array) then let's assume avgNote: 0.
//    Examples:
//    [ { name: "John", notes: [3, 5, 4]} ] ➞ [ { name: "John", avgNote: 4 } ]

function avgNotes(students) {
  var studentsWithAvg = [];
  var sum = [];
  var avg = [];

  for (let i = 0; i < students.length; i++) {
    // predefine sum at index with 0
    sum[i] = 0;

    for (let j = 0; j < students[i].notes.length; j++) {
      sum[i] += students[i].notes[j];
    }

    avg[i] = sum[i] / students[i].notes.length;

    studentsWithAvg[i] = {
      name: students[i].name,
      avgNote: Math.round(avg[i] * 10) / 10,
    };
  }

  return studentsWithAvg;
}
console.log(
  avgNotes([
    { name: "John", notes: [3, 5, 4] },
    { name: "Jelena", notes: [1, 2, 3] },
    { name: "Milan", notes: [3, 2, 3] },
  ])
);

//  8. Given an object with students and the grades that they made on the tests that they took, determine which student has the best Test Average. The key will be the student's name and the value will be an array of their grades. You will only have to return the student's name. You do not need to return their Test Average.
// getBestStudent([{ name: ‘John’, grades: [100, 90, 80]}, {name: ‘Bob’, grades: [100, 70, 80]}…]) ➞ "John" // John's avg = 90 // Bob's avg = 83.33

function average(arr) {
  var sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

function theBestStudent(student) {
  var averageGrade = 0;
  var bestStudent = student[0].name;
  for (let i = 0; i < student.length; i++) {
    var x = average(student[i].grades);
    if (x > averageGrade) {
      averageGrade = x;
      bestStudent = student[i].name;
    }
  }
  return bestStudent;
}

var students = [
  { name: "John", grades: [100, 90, 80] },
  { name: "Bob", grades: [100, 70, 80] },
];

console.log("The best student is:", theBestStudent(students));
