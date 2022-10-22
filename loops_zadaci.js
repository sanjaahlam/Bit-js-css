//1
for (var x=0 ; x<=15; x++){
    if (x===0){
        console.log ( x + 'is even');
    }
    else if (x +  'is even');
        console.log (x + 'is even');
    }
     else{
    console.log  ( x + ' is odd');
}

//1

for (var x=0; x<=15; x++){
if (x===0){
    console.log ( x + 'is even');
    }
else if (x % 2 ===0){

    console.log ( x + 'is even');
    }

else{
    console.log(x+  

var sum = 0;
for (var x = 0; x < 1000; x++){

    if (x % 3 === 0 || x % 5 === 0){
        sum += x
    }
}
    console.log (sum)

//3
var array = [3, 4, 5, 6, 8, 10],
    s = 0,
    p = 1,
    i;
for (i = 0; i < array.length; i += 1) 
   {
    s += array[i];
    p *= array[i];
    }
console.log('Sum : '+s + ' Product :  ' +p); 

//4

var x = ['1,', 'A ', 'B' , 'c', 'r', true , NAN, undefined]
{
toString(var x);
  
}

//5
var a =[
    [1, 2, 1, 24]
    [8, 11, 9, 4]
    [7, 0, 8, 27]
    ]
    for (var i in a){
        console.log('row' + i);
        for (var j in a[i]){
            console.log (' '+ a[i] [j]);
        }
}
//6

  function sum_sq(array) {
    var sum = 0, 
        i = array.length;
    while (i--) 
     sum += Math.pow(array[i], 2);
    return sum;
  }
   
  console.log(sum_sq([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])); 

  //7

  var students = [['David', 80], ['Marko', 77], ['Danny', 88], ['John', 95], ['Thomas', 68]];

var Avgmarks = 0;

for (var i=0; i < students.length; i++) {
        Avgmarks += students[i][1];
        var avg = (Avgmarks/students.length);
}

console.log("Average grade: " + (Avgmarks)/students.length);

        if (avg < 60){
          console.log("Grade : F");      
          } 
        else if (avg < 70) {
                console.log("Grade : D"); 
                  } 
        else if (avg < 80) 
             {
                console.log("Grade : C"); 
        } else if (avg < 90) {
                console.log("Grade : B"); 
        } else if (avg < 100) {
                console.log("Grade : A"); 
}

//8
for ( var num = 1; num < 101; num ++ ) {
  
    // check if the number is divisible by 3 or 5
    var checkForThree = num % 3;
    var checkForFive = num % 5;
    
    // if the number is divisible by both 3 and 5, then print FizzBuzz
    if ( (checkForThree == 0) && (checkForFive == 0) ) 
        console.log( "FizzBuzz");
    
    // if the number is divisible by 3, then print Fizz
    else if (checkForThree == 0)
      console.log( "Fizz");
    
    // if the number is divisible by 5, then print Buzz
    else if (checkForFive == 0)
      console.log( "Buzz");
    
    // otherwise just print the number
    else
      console.log( num );
  } 
  
  