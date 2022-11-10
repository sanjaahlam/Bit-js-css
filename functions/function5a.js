//1.Napisati funkciju u JavaScript-u koja na osnovu niza 6 različitih citata i autora,ispisuje na stranici po jedan citat, ali tako da se citat promeni kada se program pokrene.
//“Budi ljubazan kad god je to moguće, a moguće je uvek!”
//Dalaj Lama
//“Najviše vas mrze oni koji vam najviše duguju.”
//Duško Radović
//“Ono što je najvažnije je koliko dobro hodaš kroz vatru.”
//Čarls Bukovski
//“Znanje ima granica, dok neznanje ih nema.”
//Branislav Nušić
//“Ništa nije neizbežno. Sve je neizvesno.”
//Borislav Pekić
//“Neki ljudi imaju mnogo para, pa opet ne žive kao ljudi.”
//Bugarska poslovica
quotes = new Array(6);
authors = new Array(6);
quotes[0] = "Budi ljubazan kad god je to moguće, a moguće je uvek";
authors[0] = "Dalaj Lama";
quotes[1] = "Najviše vas mrze oni koji vam najviše duguju.";
authors[1] = "Duško Radović";
quotes[2] = "Ono što je najvažnije je koliko dobro hodaš kroz vatru.";
authors[2] = "Čarls Bukovski";
quotes[3] = "“Znanje ima granica, dok neznanje ih nema.”";
authors[3] = "Branislav Nušić";
quotes[4] = "Ništa nije neizbežno. Sve je neizvesno.";
authors[4] = "Borislav Pekić";
quotes[5] = "Neki ljudi imaju mnogo para, pa opet ne žive kao ljudi.";
authors[5] = "Bugarka poslovica";

index = Math.floor(Math.random() * quotes.length);
console.log("<DL>\n");
console.log("<DT>" + '"' + quotes[index] + '"\n');
console.log("<DD>" + "- " + authors[index] + "\n");
console.log("</DL>\n");

// Exercise 2 - Napisati funkciju koja za godinu (kao ceo pozitivan broj) proverava da li je prestupna. Godina je prestupna ako je deljiva sa 4 i nije godina veka (znači ako nije deljiva sa 100 - 1900. nije bila prestupna). Od toga odstupa svaka četvrta godina veka (znači ako je deljiva sa 400, onda je ipak prestupna - npr. 2000. je prestupna).
function prestupnaGodina(input) {
    if (input % 4 == 0) {
        if (input % 100 != 0) {
            console.log(input + '. je prestupna godina.');
        } else if (input % 100 == 0 && input % 400 == 0) {
            console.log(input + '. je prestupna godina.');
        } else {
            console.log(input + '. nije prestupna godina.');
        }
    } else {
        console.log(input + '. nije prestupna godina.');
    }
}

prestupnaGodina(1976);
prestupnaGodina(2000);
prestupnaGodina(1900);
prestupnaGodina(2004);
prestupnaGodina(1999);


// Exercise 3 - Napisati funkciju koja za zadatu reč (ili rečenicu) proverava koliko ima samoglasnika i koliko suglasnika.
function samoglasniciSuglasnici(input) {
    var b = input.toLowerCase();
    var brSamoglasnici = 0;
    var brSuglasnici = 0;
    for (i = 0; i <= b.length; i++) {
        var x = b[i];
        switch(x) {
            case 'a' :
            case 'e' :
            case 'i' :
            case 'o' :
            case 'u' :
            case 'y' :
                brSamoglasnici++;
                break;
            case 'b' :
            case 'c' :
            case 'd' :
            case 'f' :
            case 'g' :
            case 'h' :
            case 'j' :
            case 'k' :
            case 'l' :
            case 'm' :
            case 'n' :
            case 'p' :
            case 'q' :
            case 'r' :
            case 's' :
            case 't' :
            case 'v' :
            case 'w' :
            case 'x' :
            case 'z' :
                brSuglasnici++;
                break;
            default : 
                brSamoglasnici = brSamoglasnici;
                brSuglasnici = brSuglasnici;
        }
    }
    console.log('"' + input + '"' + ' ima ' + brSamoglasnici + ' samoglasnika i ' + brSuglasnici + ' suglasnika');
}

samoglasniciSuglasnici('Darija nervira Milana');
samoglasniciSuglasnici('Nikad nemoj odustati');
samoglasniciSuglasnici('Misli dobro, pa će dobro i biti.');


// Exercise 4 - Kreirati funkciju koja prihvata array, a na izlazu ispisuje niz koji sadrži tipove podataka pojedinačnih elemenata ulaznog niza.
function typeOfElement(input) {
    niz = [];
    for (i = 0; i < input.length; i++) {
        niz.push(typeof(input[i]));
    }
    console.log(niz);
}

var a = [NaN, 0, 15, false, -22, '', undefined, 47, null]
typeOfElement(a);


// Exercise 5 - Kreirati funkciju koja prijvata niz stringova kao ulazni parametar, a na izlazu ispisuje samo stringove koji u sebi ne sadrže brojeve. 
// Primer: ulazni niz [“12bb”, “pp”, “as23s”, “00sd”] => rezultat [“pp”].
function nizStringova(ar) {
    var niz = [];
    for (i = 0; i < ar.length; i++) {
        var b = ar[i];
        for (j = 0; j < b.length; j++) {
            if (b[j] == 0 || b[j] == 1 || b[j] == 2 || b[j] == 3 || b[j] == 4 || b[j] == 5 || b[j] == 6 || b[j] == 7 || b[j] == 8 || b[j] == 9) {
                var x = false;
                break;
            } else {
                x = true;
            }
        }
        if (x) {
            niz.push(ar[i]);
        }
    }
    console.log(niz);
}


nizStringova(["12bb", "pp", "as23s", "00sd"]);


// Exercise 6 - Kreirati funkciju koja prima string a kao rezultat ispisuje niz koji u sebi ima: dužinu stringa, prvi karakter stringa, poslednji karakter, središnji karakter ako string ima neparan broj znakova odnosno središnja dva karaktera ako ima paran broj znakova, indeks drugog ponavljanja drugog karaktera u formatu “@ Index # ” ili “not found” ako nema ponavljanja.
// Primer 1: "Computer" => [8, "C", "r", "pu", "not found"] ,
// Primer 2: "Science" => [7, "S", "e", "e", "@ index 5"]
function razno(input) {
    var niz = [];
    niz.push(input.length);
    niz.push(input[0]);
    niz.push(input[input.length-1]);
    if (input.length % 2 != 0) {
        niz.push(input[parseInt(input.length/2)]);
    } else {
        var a = input[input.length/2 - 1];
        var b = input[input.length/2];
        niz.push(a + b);
    }
    
    var postoji;
    for (i = 2; i < input.length; i++) {
         if (input[i] == input[1]) {
            var c = "@ index " + i;
            niz.push(c);
            postoji = true;
            break;
        } else {
            var postoji = false;
        }
    }
    if (postoji == false) {
        niz.push("not found");
    }

    console.log(niz);
}

razno('Computer');
razno('Science');


// Exercise 7 - Dat je ulazni niz [9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8] gde se svaki element ponavlja bar jednom osim dva elementa. Kreirati funkciju koja ispisuje dva elementa koja se ne ponavljaju.
function notRepeat(a) {
    var n_0 = 0;
    var n_1 = 0;
    var n_2 = 0;
    var n_3 = 0;
    var n_4 = 0;
    var n_5 = 0;
    var n_6 = 0;
    var n_7 = 0;
    var n_8 = 0;
    var n_9 = 0;
    for (i = 0; i < a.length; i++) {
        switch(a[i]) {
            case 0 :
                n_0++;
                break;
            case 1 :
                n_1++;
                break;
            case 2 :
                n_2++;
                break;
            case 3 :
                n_3++;
                break;
            case 4 :
                n_4++;
                break;
            case 5 :
                n_5++;
                break;
            case 6 :
                n_6++;
                break;
            case 7 :
                n_7++;
                break;
            case 8 :
                n_8++;
                break;
            case 9 :
                n_9++;
                break;
            default :
                break;
        }
    }
    if (n_0 == 1) {
        console.log(0);
    }
    if (n_1 == 1) {
        console.log(1);
    }
    if (n_2 == 1) {
        console.log(2);
    }
    if (n_3 == 1) {
        console.log(3);
    }
    if (n_4 == 1) {
        console.log(4);
    }
    if (n_5 == 1) {
        console.log(5);
    }
    if (n_6 == 1) {
        console.log(6);
    }
    if (n_7 == 1) {
        console.log(7);
    }
    if (n_8 == 1) {
        console.log(8);
    }
    if (n_9 == 1) {
        console.log(9);
    }
}


notRepeat([8, 4, 3, 8, 7, 7, 1, 1, 7, 2, 2, 5, 8]);


// Exercise 8 - Kreirati funkciju koja ulazni niz deli u podnizove duzine N i ispisuje ih.
// Primer 1: ([2, 3, 4, 5], N=2) => [[2, 3], [4, 5]]
// Primer 2: ([2, 3, 4, 5, 6], N=3) => [[2, 3, 4], [5, 6]]
function podnizovi(arr, n) {
    var niz1 = [];
    var niz2 = [];
    for (i = 0; i < arr.length; i++) {
        if (i < n) {
            niz1.push(arr[i]);
        }  else {
            niz2.push(arr[i]);
        }
    }
    console.log(arr);
    console.log(niz1);
    console.log(niz2);
}

podnizovi([2, 3, 4, 5], 2);

podnizovi([2, 3, 4, 5, 6], 3);
