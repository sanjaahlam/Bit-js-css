// 1. Write a JavaScript function that reverses a number. typeof result of the function should be “number”.
// 12345 -> 54321

function reverseNumber(num) {
  var el = num + " ";
  return Number(el.split("").reverse().join(""));
}
var reverse = reverseNumber(12345);
console.log(reverseNumber(12345));
console.log(typeof reverse);
