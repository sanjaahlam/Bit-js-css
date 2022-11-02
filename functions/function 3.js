// 1.Write a program to insert a string within a string at a particular position (default is 1, beginning of a string).

// "My random string", "JS " -> "JS My random string"
// "My random string", "JS ", 10 -> "My random JS string"

function insertStringToPosition(string, insertion, position) {
  var result = [];
  position = position || 1;
  if (position === 1) {
    return insertion + string;
  }
  for (i = 0; i < string.length; i++) {
    if (i === position) {
      result += insertion;
    }
    result += string[i];
  }
  return result;
}
console.log(insertStringToPosition("My random string", "JS "));
console.log(insertStringToPosition("My random string", "JS ", 10));

//  2.Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.
// [NaN, 0, 15, false, -22, '', undefined, 47, null]

function joinElements(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    var num = parseFloat(array[i]); //parseFloat filtrira samo brojeve a sve ostalo je NaN num = [1, 21, NaN, 42, 1000, Infinity ]
    if (isFinite(num)) {
      result[result.length] = num;
    }
  }
  return result;
}
console.log(joinElements([NaN, 0, 15, false, -22, "", undefined, 47, null]));

// 3.Write a program to filter out falsy values from the array.
// [NaN, 0, 15, false, -22, '', undefined, 47, null] -> [15, -22, 47]

function falsyValues(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (parseInt(array[i])) {
      result[result.length] = array[i];
    }
  }
  return result;
}
console.log(falsyValues([NaN, 0, 15, false, -22, "", undefined, 47, null]));

// 4.Write a function that reverses a number. The result must be a number.
// 12345 -> 54321 // Output must be a number

var a = 12345;

function reverseNumbers(numb) {
  var result = 0;
  while (numb !== 0) {
    result *= 10;
    result += numb % 10;
    numb = numb - (numb % 10);
    numb = numb / 10;
  }
  return result;
}
console.log(reverseNumbers(a));

// 5.Write a function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.
// [7, 9, 0, -2] -> -2
// [7, 9, 0, -2], 2 -> [0, -2]

var array = [7, 9, 0, -2];
var num = 2;

function lastElement(array, num) {
  a = num || 1;
  var newArray = [];
  var j = 0;
  for (var i = array.length - a; i < array.length; i++) {
    newArray[j] = array[i];
    j++;
  }
  return newArray;
}
var func = lastElement(array, num);
console.log(func);

// 6.Write a function to create a specified number of elements with pre-filled numeric value array.
// 6, 0 -> [0, 0, 0, 0, 0, 0]
// 2, "none" -> ["none", "none"]
// 2 -> [null, null]

var result = [];

function preFilled(num, element) {
  for (var i = 0; i < num; i++) {
    result[i] = element;
  }
  return result;
}
console.log(preFilled(6, 0));

// 7.Write a function that says whether a number is perfect.
// 28 -> 28 is a perfect number.

// Note: According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).

// E.g.: The first perfect number is 6, because 1, 2 and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: (1 + 2 + 3 + 6) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.

function is_perfect(number) {
  var temp = 0;
  for (var i = 1; i <= number / 2; i++) {
    if (number % i === 0) {
      temp += i;
    }
  }

  if (temp === number && temp !== 0) {
    console.log("It is a perfect number.");
  } else {
    console.log("It is not a perfect number.");
  }
}
is_perfect(28);

// 8.Write a function to find a word within a string.
// 'The quick brown fox', 'fox' -> "'fox' was found 1 times"
// 'aa bb cc dd aa', 'aa' -> "'aa' was found 2 times"

function findWord(text, string) {
  var counter = 0;
  text += "";
  var result = "";
  for (var i = 0; i < text.length; i++) {
    result = "";
    for (j = 0; j <= string.length; j++) {
      if (j < string.length) {
        result += text[i + j];
      }
      if (
        result === string &&
        j === string.length &&
        (text[j + i] === "!" ||
          text[j + i] === "." ||
          text[j + i] === "'" ||
          text[j + i] === "?" ||
          text[j + i] === " " ||
          text[j + i] === '"' ||
          text[j + i] === "," ||
          text[j + i] === text[text.length - 1 + text[text.length]])
      ) {
        counter++;
      }
    }
  }
  return "'" + string + "'" + " was found " + counter + " times";
}
console.log(findWord("aa bb cc dd aa", "aa"));

// 9.Write a function to hide email address.
// "myemailaddress@bgit.rs" -> "mye...@bgit.rs"

function hideEmail(email) {
  var res1 = "";
  var res2 = "";
  var result;
  for (var i = 0; i < email.length; i++) {
    if (email[i] !== "@" && i < 3) {
      res1 += email[i];
    }
    if (email[i] === "@") {
      for (var j = i; j < email.length; j++) {
        res2 += email[j];
      }
    }
    result = res1 + "..." + res2;
  }
  return result;
}
console.log(hideEmail("myemailaddress@bgit.rs"));

// 10.Write a program to find the most frequent item of an array.
// [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]

function mostFreqItem(array) {
  var mostFrequent;
  var counter = 0;
  var maxCounter = 0;
  for (var i = 0; i < array.length; i++) {
    maxCounter = 0;
    for (var j = 0; j < array.length; j++) {
      if (array[j] === array[i]) {
        maxCounter++;
      }
      if (maxCounter > counter) {
        counter = maxCounter;
        mostFrequent = array[j];
      }
    }
  }
  return mostFrequent;
}
console.log(mostFreqItem([3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3]));
