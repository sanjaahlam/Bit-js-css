//1.Write a function to count vowels in a provided string. Vowels are a, e, i, o, and u as well as A,
//E, I, O, and U.
function countVowels(input) {
  let vowelsNumbers = 0;
  for (let i = 0; i < input.length; i++) {
    if (
      input[i] === "a" ||
      input[i] === "e" ||
      input[i] === "i" ||
      input[i] === "o" ||
      input[i] === "A" ||
      input[i] === "E" ||
      input[i] === "I" ||
      input[i] === "O"
    ) {
      vowelsNumbers++;
    }
  }
  return vowelsNumbers++;
}
console.log(countVowels("Danas je utorak"));

//2.Write a function that combines two arrays by alternatingly taking elements.
//['a','b','c'], [1,2,3] -> ; ['a',1,'b',2,'c',3]

function combinesArrays(input1, input2) {
  let array = [];
  for (let i = 0; i < input1.length; i++) {
    array.push(input1[i]);
    array.push(input2[i]);
  }
  return array;
}
console.log(combinesArrays(["a", "b", "c"], [1, 2, 3]));

//3.Write a function that rotates a list by k elements.
//For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]

function rotates(input, k) {
  for (let i = 0; i < k; i++) {
    let element = input[0];
    input.shift(0);
    input.push(element);
  }

  return input;
}
console.log(rotates([1, 2, 3, 4, 5, 6], 2));

//4.Write a function that takes a number and returns array of its digits.

function arrayDigits(input) {
  let array = [];
  let a = [] + input;
  for (let i = 0; i < a.length; i++) {
    array.push(a[i]);
  }
  return array;
}
console.log(arrayDigits(123456789));

//5.Write a program that prints a multiplication table for numbers up to 12.

function multiplicationTable(input) {
  for (let i = 1; i <= input; i++) {
    let table = [];
    for (let j = 1; j <= input; j++) {
      table += j * i + " ";
    }
    console.log(table);
  }
}
console.log(multiplicationTable(12));

//6.Write a function to input temperature in Centigrade and convert to Fahrenheit.

function CentigradeToFahrenheit(input) {
  let result = input * 1.8 + 32;
  return result;
}
console.log(CentigradeToFahrenheit(35));

// 7.Write a function to find the maximum element in array of numbers. Filter out all non-number elements.

function maxInArray(array) {
  maxNum = -Infinity;
  for (i = 0; i < array.length; i++) {
    if (!isNaN(array[i])) {
      if (array[i] > maxNum) {
        maxNum = array[i];
      }
    }
  }
  return maxNum;
}
console.log(maxInArray([-3, false, NaN, null, 11, 0, 29.5, 9, 2, 245, 99]));

// 8.Write a function to find the maximum and minimum elements. Function returns an array.

function maxAndMinFromArray(array) {
  maxNum = -Infinity;
  minNum = Infinity;
  for (i = 0; i < array.length; i++) {
    if (!isNaN(array[i] && array[i] !== null)) {
      if (array[i] > maxNum) {
        maxNum = array[i];
      } else if (array[i] < minNum) {
        minNum = array[i];
      }
    }
  }
  return [minNum, maxNum];
}
console.log(maxAndMinFromArray([-3, false, NaN, 11, 29.5, 9, 2, 245, 99]));

// 9.Write a function to find the median element of array.

function medianOfArray(array) {
  var result;
  if (array.length % 2 === 0) {
    result = (array[array.length / 2] + array[array.length / 2 - 1]) / 2;
    return result;
  } else {
    result = array[array.length / 2 - 0.5];
    return result;
  }
}
console.log(medianOfArray([1, 2, 3, 4, 5]));

// 10.Write a function to find the element that occurs most frequently.
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

// 11.Write a function to find and return the first, middle and last element of an array if the array has odd number of elements. If number of elements is even, return just the first and the last. In other cases (empty array), input array should be returned.

function firstMiddleLast(array) {
  var first = array[0];
  var last = array[array.length - 1];
  var mid;
  var result;
  if (array.length % 2 !== 0) {
    mid = array[array.length / 2 - 0.5];
    result = first + " " + mid + " " + last;
    return result;
  } else {
    result = first + " " + last;
    return result;
  }
}
console.log(firstMiddleLast([1, 2, 3, 4, 5]));

// 12.Write a function to find the average of N elements. Make the function flexible to receive dynamic number or parameters.

function findAverage() {
  var sum = 0;
  var average;
  for (i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  average = sum / arguments.length;
  return average;
}
console.log(findAverage(3, 4, 5, 20));

// 13.Write a function to find all the numbers greater than the average.

function average(nums) {
  var sum = 0;
  var avrg;
  for (i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  avrg = sum / nums.length;
  return avrg;
}

function greaterThenAverage() {
  var result = [];
  var avrg = average(arguments);
  for (i = 0; i < arguments.length; i++) {
    if (arguments[i] > avrg) result[result.length] = arguments[i];
  }
  return result;
}
console.log(greaterThenAverage(1, 2, 1, 4, 5));

// 14. The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to the square of the height (in meters). Write a function that takes two parameters, weight and height, computes the BMI, and prints the corresponding BMI category:
// ● Starvation: less than 15
// ● Anorexic: less than 17.5
// ● Underweight: less than 18.5
// ● Ideal: greater than or equal to 18.5 but less than 25
// ● Overweight: greater than or equal to 25 but less than 30
// ● Obese: greater than or equal to 30 but less than 40
// ● Morbidly obese: greater than or equal to 40

function bmi(weight, height) {
  var result = weight / (height * height);
  var message;
  switch (true) {
    case result < 15:
      message = "Starvation: less than 15";
      break;
    case result < 17.5 && result >= 15:
      message = "Anorexic: less than 17.5";
      break;
    case result < 18.5 && result >= 17.5:
      message = "Underweight: less than 18.5";
      break;
    case result < 25 && result >= 18.5:
      message = "Ideal: greater than or equal to 18.5 but less than 25";
      break;
    case result < 30 && result >= 25:
      message = "Overweight: greater than or equal to 25 but less than 30";
      break;
    case result < 40 && result >= 30:
      message = "Obese: greater than or equal to 30 but less than 40";
      break;
    case result >= 40:
      message = "Morbidly obese: greater than or equal to 40";
      break;
  }
  return message;
}
console.log(bmi(99, 1.77));

// 15.Write a function that takes a list of strings and prints them, one per line, in a rectangular
// frame:
// For example the list ["Hello", "World", "in", "a", "frame"] gets printed as:
// *********
// * Hello *
// * World *
// * in    *
// * a     *
// * frame *
// *********

function listOfStrings(array) {
  var max = 0;
  var frame = "";
  var inFrame = "";
  var output = "";

  for (var i = 0; i < array.length; i++) {
    if (array[i].length > max) {
      max = array[i].length;
    }
    inFrame += "* " + array[i] + " *" + "\n";
  }
  for (var j = 0; j < max + 6; j++) {
    frame += "*";
  }
  output = frame + "\n" + inFrame + frame;
  return output;
}
console.log(listOfStrings(["Hello", "World", "in", "a", "frame"]));
