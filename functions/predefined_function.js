//1.Write a function that converts an array of strings into an array of numbers. Filter
//out all non-numeric values.

function convertArray(arr) {
  b = [];
  for (i = 0; i < arr.length; i++) {
    if (Number(arr[i]) && Number(arr[i]) != Infinity) {
      b.push(Number(arr[i]));
    }
  }
  return b;
}

console.log(convertArray(["1", "21", undefined, "42", "1e+3", Infinity]));

//2.Write a function that converts an array of strings into an array of numbers. Filter
//out all non-numeric values.

function filter_array(arr) {
  var b = "";
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == 0 || arr[i] == false || Number(arr[i])) {
      b += arr[i];
    }
  }
  return b;
}

console.log(filter_array([NaN, 0, 15, false, -22, "", undefined, 47, null]));

//3. Write a program to filter out falsy values from the array.

function removeFalsey(arr) {
  b = [];
  arr.forEach((e) => {
    if (Number(e)) {
      b.push(e);
    }
  });

  return b;
}

console.log(removeFalsey([NaN, 0, 15, false, -22, "", undefined, 47, null]));

//4.Write a program that calculates a number of integer values in the array.

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

//5. Write a program that calculates a number of float values in the array.

function calculateNum(arr) {
  var n = 0;
  for (i = 0; i < arr.length; i++) {
    if (Number(arr[i]) && Number(arr[i]) % 1 != 0) {
      console.log(arr[i]);
      n++;
    }
  }
  return n;
}

console.log(calculateNum([NaN, 23.1, 15, false, -22.5, "", 4, 7, null]));
