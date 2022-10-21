var e = 3;
var q = -7;
var m = 2;

var p = e * q * m;
if (p > 0) {
  console.log("The sign product is +");
} else {
  console.log("The sign product is -");
}

var a = -5;
var b = -2;
var c = -6;
var d = 0;
var f = -1;
if (a > b && a > c && a > d && a > f) {
  console.log(a);
} else if (b > a && b > c && b > d && b > f) {
  console.log(b);
} else if (c > a && c > b && c > d && c > f) {
  console.log(c);
} else if (d > a && d > c && d > b && d > f) {
  console.log(d);
} else {
  console.log(f);
}

var x = 0;
var y = -1;
var z = 4;
if (x > y && x > z) {
  if (y > z) {
    console.log(x + ", " + y + ", " + z);
  } else {
    console.log(x + ", " + z + ", " + y);
  }
} else if (y > x && y > z) {
  if (x > z) {
    console.log(y + ", " + x + ", " + z);
  } else {
    console.log(y + ", " + z + ", " + x);
  }
} else if (z > x && z > y) {
  if (x > y) {
    console.log(z + ", " + x + ", " + y);
  } else {
    console.log(z + ", " + y + ", " + x);
  }
}

var num1 = 10;
var num2 = 7;

if (typeof num1) {
  if (num1 % 2 == 0) {
    console.log(num1 / 2);
  } else {
    console.log("x");
  }
}
if (typeof num2) {
  if (num2 % 2 == 0) {
    console.log(num2 / 2);
  } else {
    console.log("x");
  }
}

var k = 44;
var s = 60;

if (k > s) {
  console.log("Prvi broj je veci");
} else {
  console.log("Drugi broj je veci");
}

var cel = 60;
var fahr = (9 * cel) / 5 + 32;
console.log(fahr + " °F");

var numb1 = 11;
var numb2 = 32;

if (numb1 > 13) {
  console.log(2 * (numb1 - 13));
} else {
  console.log("x");
}

if (numb2 > 13) {
  console.log(2 * (numb2 - 13));
} else {
  console.log("x");
}

var numb3 = 12;
var numb4 = 5;

var numb5 = 8;
var numb6 = 8;

if (numb5 == numb6) {
  console.log(3 * (numb5 + numb6));
} else {
  console.log(numb5 + numb6);
}

var numb7 = 5;
var numb8 = 54;

var numb9 = 6;
var numb10 = 50;

var numb11 = 40;
var numb12 = 10;

if (numb7 == 50 || numb8 == 50 || numb7 + numb8 == 50) {
  console.log(true);
} else {
  console.log(false);
}

if (numb9 == 50 || numb10 == 50 || numb9 + numb10 == 50) {
  console.log(true);
} else {
  console.log(false);
}

if (numb11 == 50 || numb12 == 50 || numb11 + numb12 == 50) {
  console.log(true);
} else {
  console.log(false);
}

var numb13 = 13;
var numb14 = 34;
var numb15 = 256;

if (numb13 >= 20 && numb13 < 100) {
  console.log("20 <--> 100");
} else if (numb13 >= 100 && numb13 < 400) console.log("100 <--> 400");
else {
  console.log("-");
}

if (numb14 >= 20 && numb14 < 100) {
  console.log("20 <--> 100");
} else if (numb14 >= 100 && numb14 < 400) console.log("100 <--> 400");
else {
  console.log("-");
}

if (numb15 >= 20 && numb15 < 100) {
  console.log("20 <--> 100");
} else if (numb15 >= 100 && numb15 < 400) console.log("100 <--> 400");
else {
  console.log("-");
}
