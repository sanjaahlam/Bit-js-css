// 1.Find the min and max element in the following array and switch their places. Print out the modified array in the console.
// Input:  [ 3, 500, 12, 149, 53, 414, 1, 19 ]
// Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]

function arraySwitch(array) {
  var max = array[0];
  var maxIndex = 0;
  var min = array[0];
  var minIndex = 0;
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
      maxIndex = i;
    }
    if (array[i] < min) {
      min = array[i];
      minIndex = i;
    }
  }
  array[minIndex] = max;
  array[maxIndex] = min;

  return array;
}
console.log(arraySwitch([3, 500, 12, 149, 53, 414, 1, 19]));

// 2.Use the following array to make a new one by dividing its values by two and adding 5. If a given element's value is 0, change it to 20.
// Input:  [ 3, 500, -10, 149, 53, 414, 1, 19 ]
// Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ]

function dividingArray(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    array[i] = array[i] / 2 + 5;
    if (array[i] === 0) {
      result[result.length] = 20;
    } else {
      result[result.length] = array[i];
    }
  }
  return result;
}
console.log(dividingArray([3, 500, -10, 149, 53, 414, 1, 19]));

// 3.Initialize two arrays. The first one should contain student names, the second one the number of points for each student. Display students' names with their corresponding grade. Use the following ranges:
// 51-60 -> 6,
// 61-70 -> 7,
// 71-80 -> 8,
// 81-90 -> 9,
// 91-100 -> 10.
// Input:
// [ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99, 51, 83, 59 ]
// Output:
// Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete the exam.

function correspondingGrades(students, points) {
  var grade;
  var messagePass;
  var messageFail;
  var result = "";
  for (var i = 0; i < students.length; i++) {
    if (points[i] < 51) {
      grade = 5;
      messageFail =
        students[i] +
        " acquired " +
        points[i] +
        " and failed to complete the exam";
      result += messageFail + "\n";
    } else if (points[i] >= 51 && points[i] < 60) {
      grade = 6;
      messagePass =
        students[i] + " acquired " + points[i] + " and earned " + grade + ".";
      result += messagePass + "\n";
    } else if (points[i] >= 60 && points[i] < 70) {
      grade = 7;
      messagePass =
        students[i] + " acquired " + points[i] + " and earned " + grade + ".";
      result += messagePass + "\n";
    } else if (points[i] >= 70 && points[i] < 80) {
      grade = 8;
      messagePass =
        students[i] + " acquired " + points[i] + " and earned " + grade + ".";
      result += messagePass + "\n";
    } else if (points[i] >= 80 && points[i] < 90) {
      grade = 9;
      messagePass =
        students[i] + " acquired " + points[i] + " and earned " + grade + ".";
      result += messagePass + "\n";
    } else {
      grade = 10;
      messagePass =
        students[i] + " acquired " + points[i] + " and earned " + grade + ".";
      result += messagePass + "\n";
    }
  }
  return result;
}
console.log(
  correspondingGrades(
    ["Michael", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill"],
    [50, 39, 63, 72, 99, 51, 83, 59]
  )
);

// 4.Sort a previously defined array. Place its sorted values into a new array whose values are equivalent to the first array's values multiplied by 2.
// Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
// Output: [ 2, 10, 12, 16, 22, 24, 26, 30 ]

function definedArray(array) {
  result = [];
  var minElement = array[0];
  var position = 0;
  for (var i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] !== undefined) {
        if (array[j] < minElement) {
          minElement = array[j];
          position = j;
        }
      }
    }
    result[i] = minElement * 2;
    array[position] = undefined;
    minElement = Infinity;
  }
  return result;
}
console.log(definedArray([13, 11, 15, 5, 6, 1, 8, 12]));

// 5.Sort a previously defined array in a descending order and display it in the console.
// Input:  [ 13, 11, 15, 5, 6, 1, 8, 12 ]
// Output: [ 15, 13, 12, 11, 8, 6, 5, 1 ]

function descendingArray(array) {
  result = [];
  var maxElement = array[0];
  var position = 0;
  for (var i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] !== undefined) {
        if (array[j] > maxElement) {
          maxElement = array[j];
          position = j;
        }
      }
    }
    result[i] = maxElement;
    array[position] = undefined;
    maxElement = -Infinity;
  }
  return result;
}
console.log(descendingArray([13, 11, 15, 5, 6, 1, 8, 12]));

// 6.Write a program that uses a loop to add all the even numbers from 1 to 1000 and subtracts all the odd numbers 1 to 500 from the calculated sum. The result should then be multiplied by 12.5 and displayed in console.
// Output: 2350000

function loopAndAdd() {
  var sum = 0;
  for (var i = 1; i <= 1000; i++) {
    if (i % 2 === 0) {
      sum += i;
    } else if (i % 2 !== 0 && i <= 500) sum -= i;
  }
  sum *= 12.5;
  return sum;
}
console.log(loopAndAdd());

// 7.Define a 10 element array. Take the first two letters from every string (that has at least 2 letters) in the array and create a new string from them. Print it out in the console.
// Input: [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]
// Output: AnStJoJoDaMa

function firstTwoLetters(array) {
  var result = "";
  var string = "";
  for (var i = 0; i < array.length; i++) {
    if (typeof array[i] === "string" && array[i].length >= 2) {
      string = array[i];
      result += string[0] + string[1];
    }
  }
  return result;
}
console.log(
  firstTwoLetters([
    "M",
    "Anne",
    12,
    "Steve",
    "Joe",
    "John",
    "David",
    "Mark",
    true,
    "A",
  ])
);

// 8.Write a program that takes a string and prints its characters out in reversed order in the console.
// Input:  Belgrade Institute of Technology
// Output: ygolonhceT fo etutitsnI edargleB

function reverseOrder(string) {
  var result = "";
  for (var i = string.length - 1; i >= 0; i--) {
    result += string[i];
  }
  return result;
}
console.log(reverseOrder("Belgrade Institute of Technology"));

// 9.Write a program that displays all the combinations of two numbers between 1 and 7. Don't display two of the same numbers at the same time. Display the number of possible combinations, as well. (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...).

function possibleCombinations() {
  var count = 0;
  var result = "";
  var message;
  for (var i = 1; i <= 7; i++) {
    for (j = 1; j <= 7; j++) {
      if (i !== j) {
        result += "(" + i + "," + j + ")\n";
        count++;
      }
    }
  }
  message = result + count;
  return message;
}
console.log(possibleCombinations());

// 10.Write a program that checks if the entered number is a prime number (i.e. divisible only by 1 and by itself).
// Input:  17    | 15
// Output: true  | false

function primeNumber(number) {
  if (number === 1) {
    return false;
  } else if (number < 1) {
    return false;
  } else if (number > 1) {
    for (var i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
  }
  return true;
}
console.log(primeNumber(15));

// 11.Check if a given string is a palindrome (spaces are ignored).
// Input:  eye  | Geek  | a nut for a jar of tuna
// Output: true | false | true

function isStringPalindrome(string) {
  var reverse = "";
  var stringMod = "";
  for (var i = string.length - 1; i >= 0; i--) {
    if (string[i] !== " ") {
      reverse += string[i];
    }
  }
  for (var j = 0; j < string.length; j++) {
    if (string[j] !== " ") {
      stringMod += string[j];
    }
  }
  if (stringMod === reverse) {
    return true;
  }
  return false;
}
console.log(isStringPalindrome("eye"));

// 12.Write a program that calculates the greatest common divisor of two integers. Note: The greatest common divisor of two non-zero integers is the greatest positive number that divides both numbers with no remainder.
// Input:  192 42 | 81 9
// Output: 6      | 9

function greatestDivisor(num1, num2) {
  var divisor = 0;
  var minNum = num1;
  if (num2 <= num1) {
    minNum = num2;
  }

  for (var i = 1; i <= minNum; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      divisor = i;
    }
  }
  return divisor;
}
console.log(greatestDivisor(81, 9));
