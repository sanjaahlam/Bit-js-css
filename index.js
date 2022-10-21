// 1.
var a = 44;
var b = "Sanja";
var c = 23;
var d;

console.log(a);
console.log(b);
console.log(c);
console.log(d);

var numOne = 20,
  numTwo = 10;

var res = numOne + numTwo;
console.log(res);

res = numOne - numTwo;
console.log(res);

res = numOne * numTwo;
console.log(res);

res = numOne / numTwo;
console.log(res);

//2.
var f, j, h, d;

f = 3;
j = 2;
h = 31;

var res2 = f - j - h;
console.log(res2);

j = 5;
h = 7;
d = 3;

res2 = f * j - h / d;
console.log(res2);

f = 4;
j = 2;
h = 1.14;
d = 3;
res2 = f / j - h * d;
console.log(res2);

//3.
var oneKgGram = 1000;
var bananaWeight = 1.2;
var gramWeightBananas = bananaWeight * oneKgGram;
console.log(gramWeightBananas + "gr");

//4.
var oneMinSec, anaLate, tomLate, extraSeconds;

oneMinSec = 60;
anaLate = 5;
tomLate = 30;
extraSeconds = oneMinSec * anaLate;
console.log(extraSeconds + "s");
extraSeconds = oneMinSec * tomLate;
console.log(extraSeconds + "s");

//5.
//1GB = 1000Mb
//4 GB = 4000Mb
// 1MB = 1000kb
// 4000MB = 4000000kb
// 4000000kb / 98kb = 40000kb

var onGb = 1000;
var additionalMemory = onGb * 4;
console.log(additionalMemory + "MB");

var fourThousandMb = 4000000;
var newsArticlesEachSize = 98;
var newsArticles = fourThousandMb / newsArticlesEachSize;
console.log(newsArticles + "KB");

//6.

a = a * 2;
a *= 2;
b = b + 3;
b += 3;
c = c / 5;
c /= 5;
d = d - 7;
d -= 7;

//7.
var myName, age, desc;

myName = "Sanja";
age = 38;
desc = "Sanja doesn't have a cat";

console.log(myName);
console.log(age);
console.log(desc);

//8.

console.log("number");
console.log(true);
console.log(null);
console.log("false");
console.log(56);

//9
var variable;
typeof variable === "boolean";
if (variable === true || variable === false);

//10.

var matejaAge = 30;

if (matejaAge > 0) {
  console.log("Ovo je pozitivan broj");
}

if (matejaAge > 120) {
  console.log("Mateja je stariji");
} else {
  console.log("Mateja je mladji");
}
