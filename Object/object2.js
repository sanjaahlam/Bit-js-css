//Write a functional expression that duplicates each element of a given array.
//Input: [2, 4, 7, 11, -2, 1]
//Output: [2, 2, 4, 4, 7, 7, 11, 11, -2, -2, 1, 1]

var arr = [2, 4, 7, 11, -2, 1];
function duplicates(input) {
  var newArr = [];
  input.forEach(function (el) {
    newArr.push(el, el);
  });
  return newArr;
}
console.log(duplicates(arr));

//2. Write a functional expression that removes all duplicates in a given array.
//Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
//Output: [1, 4, 8, 9, 12, 13]

var arr2 = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];
var newArray = arr2.filter(function (item, pos) {
  return arr2.indexOf(item) === pos;
});
function compNum(a, b) {
  return a - b;
}
console.log(newArray.sort(compNum));

//3.a. Write a function that checks if a given array has odd number of elements.
//Input: [1, 2, 9, 2, 1]
//Output: true
//3.b. Write a function that counts the number of elements less than the middle element. If the given array has an even number of elements, print out an error message.
//Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
//Output: 4

//a.
var arr3 = [1, 2, 9, 2, 1];
function oddElements(input) {
  if (input.length % 2 !== 0) {
    return true;
  }
  return false;
}
console.log(oddElements(arr3));

//b.

var arr4 = [-1, 8.1, 3, 6, 2.3, 44, 2.11];
function middleElement(input) {
  var output;
  if (input.length % 2 === 0) {
    return "Ovaj niz ima paran broj elemenata";
  } else {
    output = input.length / 2 + 0.5;
    return output;
  }
}
console.log(middleElement(arr4));

//4.Write a function that finds the smallest element of a given array. The function should return an object that contains the smallest value and its last position in the array.
//Input: [1, 4, -2, 11, 8, 1, -2, 3]
//Output: { minValue: -2, minLastIndex: 6 }

var arr5 = [1, 4, -2, 11, 8, 1, -2, 3];
function smallestElement(input) {
  var minValue = Math.min(...input);
  var minLastIndex = input.lastIndexOf(minValue);
  return { minValue, minLastIndex };
}
console.log(smallestElement(arr5));

//5.a. Write a function that finds all the elements in a given array less than a given element.
//Input: [2, 3, 8, -2, 11, 4], 6
//Output: [2, 3, -2, 4]

//b. Write a function that finds all the elements in a given array that start with the “pro”substring. The function should be case insensitive.
//Input: [’JavaScript’, ’Programming’, ’fun’, ’product’]
//Output: [’Programming’, ‘product’]

//c. Write a function that expects an array and a callback function that filters out some of the elements. Use functions defined in a) or b) to test it.

var arr6 = [2, 3, 8, -2, 11, 4];
var value = 6;
function givenArr(input1, input2) {
  var output = input1.filter(function (numb) {
    return numb < input2;
  });
  return output;
}
console.log(givenArr(arr6, value));
