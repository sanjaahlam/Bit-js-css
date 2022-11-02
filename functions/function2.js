// 1. Write a function to check whether the `input` is a string or not.
// "My random string" -> true
// 12 -> false

function stringOrNot(a) {
  var result = "";
  if (typeof a === "string") {
    result += a + " -> true";
  } else {
    result += a + " -> false";
  }
  return result;
}

var str = 12;
console.log(stringOrNot(str));

// 2.Write a function to check whether a string is blank or not.
// "My random string" -> false
// " " -> true
// 12 -> false
// false -> false

function blankOrNot(a) {
  var result = "";
  if (typeof a === "string") {
    if (a.length === 0) {
      result += a + " -> true";
    } else {
      result += a + " -> false";
    }
  } else {
    result += a + " -> false";
  }
  return result;
}
var a = 12;
console.log(blankOrNot(a));

// 3.Write a function that concatenates a given string n times (default is 1).
// 	"Ha" -> "Ha"
// "Ha", 3 -> "HaHaHa"

function concateTimes(string, times) {
  var result = "";
  {
    while (times > 0) {
      result += string;
      times--;
    }
  }
  return result;
}
console.log(concateTimes("HA", 3));

// 4.Write a function to count the number of letter occurrences in a string.
// "My random string", "n" -> 2

function countLetter(string, letter) {
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    if (letter === string[i]) {
      count++;
    }
  }
  return count;
}
console.log(countLetter("My random string", "n"));

// 5.Write a function to find the position of the first occurrence of a character in a string. The result should be the position of character. If there are no occurrences of the character, the function should return -1.

function stringLetter(string, letter) {
  var index = 0;
  for (var i = 0; i < string.length; i++) {
    if (letter == string[i]) {
      index = i;
      break;
    } else index = -1;
  }
  return index;
}
console.log(stringLetter("Mystring", "s"));

// 6.Write a function to find the position of the last occurrence of a character in a string. The result should be in human numeration form. If there are no occurrences of the character, function should return -1

function lastOccurance(string, letter) {
  var index = 0;
  for (var i = string.length - 1; i > -1; i--) {
    if (letter == string[i]) {
      index = i;
      break;
    } else index = -1;
  }
  return index;
}
console.log(lastOccurance("My string", "g"));

// 7.Write a function to convert string into an array. Space in a string should be represented as “null” in new array.

// "My random string" -> ["M", "y", null, "r", "a"]
// "Random" -> ["R", "a", "n", "d", "o", "m"]

function convertString(string) {
  var result = [];
  for (var i = 0; i < string.length; i++) {
    if (string[i] != " ") result[i] = string[i];
    else if (string[i] == " ") {
      result[i] = "null";
    }
  }
  return result;
}
console.log(convertString("Ivana"));

// 8.Write a function that accepts a number as a parameter and checks if the number is prime or not.
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

function PrimeNumber(number) {
  var result = "";
  if (number === 1) {
    result = "The number 1 is not a prime or a composite number";
  } else if (number === 2) {
    result = "The number 2 is a prime number"; // prime brojevi su deljeivi sa samim sobom i sa 1
  }
  for (i = 2; i < number; i++) {
    if (number % i == 0) {
      result = "The " + number + " is a composite number"; // composite brojevi slozeni i deljivi su sa vise brojeva
      break;
    } else {
      result = "The " + number + " is a prime number";
    }
  }
  return result;
}
console.log(PrimeNumber(12));

// 9. Write a function that replaces spaces in a string with provided separator. If separator is not provided, use “-” (dash) as the default separator.
//     "My random string", "_" -> "My_random_string"
//     "My random string", "+" -> "My+random+string"
//     "My random string" -> "My-random-string"

function replaceSpaces(string, separator) {
  var result = [];
  for (i = 0; i < string.length; i++) {
    if (separator == "") {
      separator = "-";
    }
    if (string[i] != " ") {
      result[i] = string[i];
    } else if (string[i] == " ") {
      result[i] = separator;
    }
  }
  return result.join("");
}
console.log(replaceSpaces("My random string", "_"));
console.log(replaceSpaces("My random string", "+"));
console.log(replaceSpaces("My random string", ""));

// 10.Write a function to get the first n characters and add “...” at the end of newly created string.

function firstCharacter(string, n) {
  var result = "";
  for (var i = 0; i <= n; i++) {
    result += string[i];
  }
  return result + "...";
}
console.log(firstCharacter("I love coding", 5));

// 11.Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.
// ["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000]

function convertArrayToString(array) {
  var result = [];
  for (i = 0; i < array.length; i++) {
    if (parseFloat(array[i]) && isFinite(parseFloat(array[i]))) {
      result[result.length] = parseFloat(array[i]);
    }
  }
  return result;
}
console.log(
  convertArrayToString(["1", "21", undefined, "42", "1e+3", Infinity])
);

// 12.Write a function to calculate how many years there are left until retirement based on the year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is already retired, a proper message should be displayed.

function retirement(gender, birth) {
  var c;
  if (gender === "m") {
    if (2021 - birth < 60) {
      c = birth + 60 - 2021;
    } else {
      c = "You're already retired";
    }
  } else {
    if (2021 - birth < 65) {
      c = birth + 65 - 2021;
    } else {
      c = "You're already retired";
    }
  }
  return c;
}
console.log(retirement("m", 1979));

// 13.Write a function to humanize a number (formats a number to a human-readable string) with the correct suffix such as 1st, 2nd, 3rd or 4th.
// 1 -> 1st
// 11 -> 11th

function humanize(a) {
  var b = a + "";
  var c = "";
  var d = 0;
  if (a > 0 && a < 14) {
    switch (a) {
      case 1:
        c = "1st";
        break;

      case 2:
        c = "2nd";
        break;

      case 3:
        c = "3rd";
        break;

      case 11:
        c = "11th";
        break;

      case 12:
        c = "12th";
        break;

      case 13:
        c = "13th";
        break;

      default:
        c = b + "th";
    }
  } else if (a >= 14) {
    d = b[b.length - 1];
    switch (d) {
      case "1":
        c = b + "st";
        break;

      case "2":
        c = b + "nd";
        break;

      case "3":
        c = b + "rd";
        break;

      default:
        c = b + "th";
    }
  }
  return c;
}
var result = humanize(42);
console.log(result);
