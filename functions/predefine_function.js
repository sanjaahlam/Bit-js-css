//1.Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.
//Input: ['1';'2'; undefined;'42';'le + 3'; Infinity]
//Output: [1, 21, 42, 1000]

function convertsToNum(array) {
  var result = [];
  for (i = 0; i < array.length; i++) {
    var num = parseFloat(array[i]);
    if (isFinite(num)) {
      result[result.length] = num;
    }
  }
  return result;
}
console.log(convertsToNum(["1", "2", undefined, "42", "le + 3", Infinity]));

//2.Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.
//Input: [NaN, 0, 15, false, -22,'', undefined, 47, null]
//Output: “015false-2247”

function joinElements(array) {
  var b = " ";
  for (i = 0; i < array.length; i++) {
    if (array[i] == 0 || array[i] == false || Number(array[i])) {
      b += array[i];
    }
  }
  return b;
}
var a = [NaN, 0, 15, false, -22, "", undefined, 47, null];
console.log(joinElements(a));

//3. Write a program to filter out falsy values from the array.
//Input: [NaN, 0, 15, false, -22, &#39;&#39;, undefined, 47, null]
//Output: [15, -22, 47]

function removeFalsey(arr) {
  let newArr = [];
  arr.forEach((a) => {
    if (a) {
      newArr.push(a);
    }
  });
  return newArr;
}
console.log(removeFalsey([NaN, 0, 15, false, -22, "", undefined, 47, null]));

//4. Write a program that calculates a number of integer values in the array.
//Input: [NaN, 23.1, 15, false, -22.5, &#39;&#39;, 4, 7, null]
//Output: 3

function sum(a) {
  var res = 0;
  for (var i = 0; i < a.length; i++) {
    if (a[i] == parseInt(a[i])) {
      res++;
    }
  }
  return res;
}

console.log(sum([NaN, 23.1, 15, false, -22.5, "", 4, 7, null]));

//5.5. Write a program that calculates a number of float values in the array.
//Input: [NaN, 23.1, 15, false, -22.5, &#39;&#39;, 4, 7, null]
//Output: 2

function calculateNum(arr) {
  var n = 0;
  for (var i = 0; i < arr.length; i++) {
    if (Number(arr[i]) % 1 != 0) {
      console.log(arr[i]);
      n++;
    }
  }
  return n;
}
console.log(calculateNum([NaN, 23.1, 15, false, -22.5, "", 4, 7, null]));
