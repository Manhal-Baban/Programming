//Luo kaksi muuttujaa:
//num1 arvolla "10".
//num2 arvolla "notANumber".

let num1 = "10";
let num2 = "notanumber";

// Muunna num1 ja num2 käyttäen parseFloat()-metodia.

num1 = parseFloat(num1);
num2 = parseFloat(num2);

console.log("This is num1: ",num1)
console.log("This is num2: ",num2)


let sum = num1 + num2
console.log(typeof num1)
console.log(typeof num2)
//Tulosta num1:n ja num2:n summa käyttäen console.log().
//(Huom: Jos toinen arvoista on NaN, tulokseksi tulee NaN, joka tulostuu automaattisesti.)
//Esimerkkituloste:
//NaN (jos yhteenlaskussa on virheellinen syöte).
//10 (jos molemmat syötteet ovat kelvollisia numeroita).
