//  IIFE = Immediately Invoked Function Expressions

// 1. Write IIFE that replaces the first and the last element of the given array and prints out its
// elements.
// Input array: [4, 5, 11, 9]
// Output array: [ 9, 5, 11, 4]

(function replaceEl(arr) {
  let result = [];

  result[0] = arr[arr.length - 1];
  for (let i = 1; i < arr.length; i++) {
    result[i] = arr[i];
  }

  result[arr.length - 1] = arr[0];
  console.log(result);
})([4, 5, 11, 9]);

// 2. Write IIFE that calculates the surface area of the given rectangle with sides a and b.
// Input: 4 5
// Output: 20

(function rectangle(a, b) {
  var surface = a * b;
  console.log(
    "surface area of the given rectangle with sides " +
      a +
      " and " +
      b +
      " is " +
      surface
  );
})(4, 5);

// 3. Write IIFE that replaces all appearances of the letters m or M with * and returns the
// number of replacements.
// Input: prograMming
// Output: progra**ing, 2

(function (letter) {
  let counter = 0;
  let newStr = "";

  for (let i = 0; i < letter.length; i++) {
    if (letter[i].toUpperCase() === "M") {
      newStr += "*";
      counter++;
    } else {
      newStr += letter[i];
    }
  }
  console.log(newStr, counter);
})("prograMming");

// 4. Write a function with parameters name and surname that returns a function that
// suggests an email in the form name.surname@gmail.com.
// Input: pera peric
// Output: pera.peric@gmail.com

(function (name, surname) {
  let suggests = name + "." + surname + "@gmail.com";
  console.log(suggests);
})("pera", "peric");

// 5. Write a function that returns a function that calculates a decimal value of the given octal number.
// Input: 034
// Output: 28

function calculateDec() {
  return function (octal) {
    console.log(octal);
  };
}

var a = calculateDec();
a(034);

// 6. Write a function that checks if a given string is valid password. The password is valid if it
// is at least 6 characters long and contains at least one digit. The function should receive
// two callbacks named successCallback and errorCallback that should be called in case
// password is correct or invalid.
// Input: JSGuru
// Output: Your password is invalid!
// Input: JSGuru123
// Output: Your password is cool!

function successCallback() {
  console.log("Your password is cool!");
}

function errorCallback() {
  console.log("Your password is invalid!");
}

function checkPass(str, successCallback, errorCallback) {
  let howLong = str.length;
  let isThereNum = /\d/.test(str);

  if (isThereNum && howLong >= 6) {
    successCallback();
  } else {
    errorCallback();
  }
}

checkPass("JSGuru", successCallback, errorCallback);

// 7. Write a function that filters elements of the given array so that they satisfy a condition
// given by the callback function.
// Input: [2, 8, 11, 4, 9, 3], callback function checks if the number is odd
// Output: [11, 9, 3]

function checkOdd(arr) {
  let result = [];
  let index = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      result[index] = arr[i];
      index++;
    }
  }
  return result;
}

function filterEl(arr, callback) {
  console.log(callback(arr));
}

filterEl([2, 8, 11, 4, 9, 3], checkOdd);

/**
 * Take a look at this common scenario–you have a function that returns a value,
 * which you then pass to another function. In our example, the first function,
 * multiplyByTwo(), loops through passed input array, multiplies each element
 * by two, and returns an array containing the result. The second function,
 * addOne(), takes a value, adds one to it, and returns it
 */

function addOne(a) {
  return a + 1;
}

function multiplyByTwo(inputArray) {
  var newArray = [];

  for (var i = 0; i < inputArray.length; i++) {
    var element = inputArray[i];
    newArray[i] = element * 2;
    newArray[i] = addOne(newArray[i]); // one array used
  }

  return newArray;
}

// Let's test these functions:
var inputOne = [1, 2, 3];
var outputArray = multiplyByTwo(inputOne);
console.log(outputArray); // [2, 4, 6]

// var outputNum = addOne(100);
// console.log(outputNum); // 101

// Now, let's say you want to have an array, myarr,
// that contains three elements, and each of the elements
// is to be passed through both functions
var inputTwo = [10, 20, 30];
var myarr = multiplyByTwo(inputTwo);
console.log(myarr);

// Now, loop through each element, passing it to addOne()
// for (var i = 0; i < 3; i++) {
//   myarr[i] = addOne(myarr[i]);
// }
// console.log(myarr); // [21, 41, 61]

// As you can see, everything works fine, but there's room for improvement.
// For example, there were two loops. Loops can be expensive if they go through
// a lot of repetitions. You can achieve the same result with only one loop.
