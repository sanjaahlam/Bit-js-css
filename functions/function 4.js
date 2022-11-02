// 1. Write a program that checks if a given element e is in the array a.
// Input: e = 3, a = [5, -4.2, 3, 7]
// Output: yes
// Input: e = 3, a = [5, -4.2, 18, 7]
// Output: no

function checkElement(array, element) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === element) {
      result = "yes";
      break;
    } else {
      result = "no";
    }
  }
  return result;
}
console.log(checkElement([5, -4.2, 3, 7], 3));

//Drugi način

function checks(a, e) {
  for (var i in a) {
    if (e == i) {
      return "u nizu postoji taj broj";
      break;
    }
  }
}
console.log(checks([5, -4.2, 3, 7]), 3);

// 2. Write a program that multiplies every positive element of a given array by 2.
// Input array: [-3, 11, 5, 3.4, -8]
// Output array: [-3, 22, 10, 6.8, -8]

//Prvi način

function multiplies(array, input) {
  for (var i = 0; i < array.length; i++) {
    var element = array[i];
    if (element > 0) {
      array[i] = element * input;
      return array;
    }
  }
}
console.log(multiplies([-3, 11, 5, 3.4, -8], 2));

//Drugi način

function multiplePositive(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      array[i] *= 2;
    }
  }
  return array;
}
console.log(multiplePositive([-3, 22, 10, 6.8, -8]));

// 3. Write a program that finds the minimum of a given array and prints out its value and
// index.
// Input array: [4, 2, 2, -1, 6]
// Output: -1, 3

function minimumValue(array) {
  var min = array[0];
  var index = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
      index = i;
    }
  }
  return min + ",\t" + index;
}
console.log(minimumValue([4, 2, 2, -1, 6]));

//drugi način
function minimum(a) {
  var lowest = 0;
  for (var i = 1; i < a.length; i++) {
    if (a[i] < a[lowest]) lowest = i;
  }
  return lowest;
}

console.log(minimum([4, 2, 2, -1, 6]));

// 4. Write a program that finds the second smallest number and prints out its value.
// Input array: [4, 2, 2, -1, 6]
// Output: 2

function smallestNumber(array) {
  var min = Infinity;
  var min2 = Infinity;
  for (var i = 0; i < array.length; i++) {
    if (min > array[i]) {
      min2 = min;
      min = array[i];
    } else if (min2 > array[i]) {
      min2 = array[i];
    }
  }
  return min2;
}
console.log(smallestNumber([4, 2, 2, -1, 6]));

// 5.Write a program that calculates the sum of positive elements in the array.
// Input array: [3, 11, -5, -3, 2]
// Output: 16

function positivieSum(array) {
  var result = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      result = result + array[i];
    }
  }
  return result;
}
console.log(positivieSum([3, 11, -5, -3, 2]));

// 6.Write a program that checks if a given array is symmetric. An array is symmetric if it can
// be read the same way both from the left and the right hand side.
// Input array: [2, 4, -2, 7, -2, 4, 2]
// Output: The array is symmetric.
// Input array: [3, 4, 12, 8]
// Output: The array isn’t symmetric.

function symmetricArray(array) {
  var result;
  for (var start = 0, end = array.length - 1; start < end; start++, end--) {
    if (array[start] === array[end]) {
      result = "The array is symmetric";
    } else {
      result = "The array isn’t symmetric";
    }
  }
  return result;
}
console.log(symmetricArray([2, 4, -2, 7, -2, 4, 2]));

// 7.Write a program that intertwines two arrays. You can assume the arrays are of the same length.
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 3, 5, 8, 6, 11, 2, 9]

function intertwinesArray(array1, array2) {
  var newArray = [];
  for (var i = 0; i < array1.length; i++) {
    newArray[newArray.length] = array1[i];
    newArray[newArray.length] = array2[i];
  }
  return newArray;
}
console.log(intertwinesArray([4, 5, 6, 2], [3, 8, 11, 9]));

//8. Write a program that concatenates two arrays.
//Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
//Output array: [4, 5, 6, 2, 3, 8, 11, 9].

function concatenatesArrays(array1, array2) {
  var result = [];
  for (var i = 0; i < array2.length; i++) {
    array1[array1.length] = array2[i];
  }
  return array1;
}
console.log(concatenatesArrays([4, 5, 6, 2], [3, 8, 11, 9]));

// 9.Write a program that deletes a given element e from the array a.
// Input: e = 2, a = [4, 6, 2, 8, 2, 2]
// Output array: [4, 6, 8]

function deletedElement(array) {
  var e = 2;
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] !== e) {
      newArray[newArray.length] = array[i];
    }
  }
  return newArray;
}
console.log(deletedElement([4, 6, 2, 8, 2, 2]));

// 10. Write a program that inserts a given element e on the given position p in the array a. If
// the value of the position is greater than the array length, print the error message.
// Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
// Output: [2, -2, 33, 78, 12, 5, 8]

function insertsElement(array, element, position) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (i === position) {
      newArray[newArray.length] = element;
      newArray[newArray.length] = array[i];
    } else {
      newArray[newArray.length] = array[i];
    }
  }
  return newArray;
}
console.log(insertsElement([2, -2, 33, 12, 5, 8], 78, 3));
