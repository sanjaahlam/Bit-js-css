//1. Write a program that calculates the maximum of two given numbers.

function max() {
    var ans = arguments[0];

    for ( i = 1; i < arguments.length; i++) {
        if (arguments[i] > ans) {
            ans = arguments[i];
        }
    }
    return ans;
}
console.log(max());
console.log(max(3, 2, 1));



//1. Write a program that calculates the maximum of two given numbers.
var veci;
function max( a, b) {
    if (a == b){
    console.log ("Brojevi su isti");
     } else if (a > b) {
        veci = a;
     } else {
        veci= b;
     }
        return veci;
    }
console.log(max(3,4))

//2.Write a program that checks if a given number is odd.
var paran;
    if(a % 2 == 0) {
    paran= 'Broj je paran';
} else {
    paran= 'Broj je neparan';
}
console.log (isOdd(4))


//3. Write a program that checks if a given number is a three digit long number.
var isThreeDigit;
function threeDigit(a){
  if (a>99 && a <1000){
    isThreeDigit ='Broj je trocifren';
  } else {
    isThreeDigit ='Broj nije trocifren';
  }
  return isThreeDigit;
}
console.log(threeDigit(165)) 

//4. Write a program that calculates an arithmetic mean of four numbers.

var prosek;
function average(a,b,c,d){
prosek=(a+b+c+d) / 4;
return prosek;
}
console.log((average(1,2,3,4)));

//5.Write a program that draws a square of a given size. For example, if the size of square is 5 the program should draw:
//*****
//* *
//* *
//* *
//*****

function drawASquare(a) {
    console.log ("*****");
    for(i = 1; i < a-1; i++) {
        console.log ("*   *");
 
   }
   console.log ("*****");
}
drawASquare(5);

function drawHorChart(a,b,c)
//6.

var strA = "";
var strB = "";
var strC= "";
function drawHorChart(a,b,c){

    for (i = 0; i < a; i++){
        strA += '*';
    }
    console.log(strA);
   

    for (y = 0; y < b; y++) {
        strB += '*';
       
    }
        console.log(strB)

     for (z = 0; z < c; z++){
            strC += '*';
     }

console.log(strC);
}
drawHorChart(4,18,5)
//7
function numberOfDigits(a){
var aString= '' + a;
console.log('Broj cifara u broju ' + a + 'je:', aString.length);
}
    numberOfDigits(254);
    numberOfDigits(1762);
    numberOfDigits(62); 
    numberOfDigits(17762);

//8.
var niz= [2,4,7,8,7,7,1,]
var broj=7;
function numberofApperance(a, params){
    for (i=0; i< params.length; i++){
if (params[i ==a]){
    console.log(niz);
    console.log('Broj' +a + 'je na poziciji', i+1);
    return;
}
    }
    console.log(niz);
    console.log('Broj ' + a + ' nije u nizu');
}
numberofApperance(broj,niz);
//9.
var niz=[2, 4, 7, 9, 10];
function sumOfOdd (params){
    var suma= 0;
    for( i=0; i < params.length; i++) {
        if (params[i] % 2 !=0){
         suma+=params[i];
        }
    }
    return suma;
}
console.log(sumOfOdd(niz));

//10.
var str = 'reklakazala';
function numberOfAppearances(rec) {
    var brojPrikaza = 0;
    var brojPrikazA = 0;
    for (i = 0; i< rec.length;i++);{
        if (rec[i] == 'a'){
            brojPrikaza +=1;
         }else if (rec[i] =='A'){
           brojPrikazA += 1; 
         }
    }
    console.log (rec);
    console.log ('Slovo a se pojavljuje ' + brojPrikaza + 'puta.' );
    console.log ('Slovo A se pojavljuje ' + brojPrikazA + 'puta.' ); 
}