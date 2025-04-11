//Luo kaksi muuttujaa: make 2 variables
//numString1 arvolla "42".
//numString2 arvolla "3.14".
let numString1 = "42"; 
let numString2 = "3.14";

//Käytä parseInt()-funktiota muuntaaksesi numString1 kokonaisluvuksi.
let parsednum1 = parseInt(numString1);

//Käytä parseFloat()-funktiota muuntaaksesi numString2 liukuluvuksi.
 let parsednum2 = parseInt(numString2);

//Tulosta tulokset käyttäen console.log() viestien kera:
console.log("Kokonaisluku on",parsednum1, "Liukuluku on", parsednum2);
//"Kokonaisluku on 42."
//"Liukuluku on 3.14.

//__________________________

/* Luo muuttuja nimeltä price ja anna sille arvoksi 19.56789.
Käytä .toFixed()-metodia:
Pyöristääksesi hinnan kahden desimaalin tarkkuuteen.
Pyöristääksesi hinnan ilman desimaaleja.
Tulosta molemmat tulokset käyttäen console.log() viestien kera:
"Hinta 2 desimaalilla: 19.57"
"Hinta ilman desimaaleja: 20"
*/

let price = 19.56789;
let a = price.toFixed(2); 
let b = price.toFixed(0);
console.log("Hinta 2 desimaalilla",a, "Hinta ilman desimaaleja",b);

//__________________________________


//Luo kaksi muuttujaa:
//num1 arvolla "10".
//num2 arvolla "notANumber".

let num1 = "10";
let num2 = "notanumber";

// Muunna num1 ja num2 käyttäen parseFloat()-metodia.
console.log(typeof num1)
console.log(typeof num2)
num1 = parseFloat(num1);
num2 = parseFloat(num2);

console.log("This is num1: ",num1)
console.log(num2)


let sum = num1 + num2
//Tulosta num1:n ja num2:n summa käyttäen console.log().
//(Huom: Jos toinen arvoista on NaN, tulokseksi tulee NaN, joka tulostuu automaattisesti.)
//Esimerkkituloste:
//NaN (jos yhteenlaskussa on virheellinen syöte).
//10 (jos molemmat syötteet ovat kelvollisia numeroita).
console.log(sum);


//______________________________________

//Luo muuttuja userInput ja anna sille arvo "25.75 omenaa".
let userInput = "25.75 omenaa";

//Käytä parseFloat() metodia irrottamaan numeerinen arvo muuttujasta.
userInput = parseFloat(userInput);

//Käytä .toFixed() tuloksen pyöristämiseen 1 desimaalin tarkkuudella.
let omenaa = userInput.toFixed(1);

//Tulosta luku console.log().

//(Jos syöte eli input ei ala numerolla, tulos on NaN.)
//Esimerkkivastaukset:
//"25.8" (kun syöte alkaa numerolla).
//"NaN" (kun syöte ei kelpaa).
console.log("this is", userInput)
console.log("this is", omenaa)


//____________________________

// 1. Luo muuttuja num ja aseta sille arvoksi 5.67.


let num = 5.67;

// 2. Käytä Math.round() metodia sen pyöristämiseen lähimpään kokonaislukuun. 
num1 = Math.round(num);
console.log(num1) 
// 3. Käytä Math.floor() metodia sen pyöristämiseen alaspäin edelliseen lähimpään kokonaislukuun.
num2 = Math.floor(num);
console.log(num2)
// 4. Käytä Math.ceil() metodia sen pyöristämiseen ylöspäin seuraavaan lähimpään kokonaislukuun.
num3 = Math.ceil(num);
console.log(num3)
// 5. Tulosta kaikki saamasi tulokset console.log() avulla ja lisää jokaiselle selittävät teksti.

//numero 11____________________


//1. Käytä Math.random() metodia satunnaisluvun generoimiseen lukujen 0 ja 1 väliltä.
let randomNum = Math.random();

//2. Kerro saamasi tulos kymmenellä ja käytä Math.floor()  metodia sen pyöristämiseen lähimpään kokonaislukuun. 
let result = Math.floor(randomNum * 10);


//3. Tulosta lopputulos console.log() avulla, jossa viesti on esimerkiksi: "Arvottu lukusi on 4
console.log("Arvottu lukusi on 4", "but the result actually is", result)


//numero 12_________________

//1. Luo kolme muuttujaa: a = 12, b = 7 ja c = 20.
let x = 12;
let y = 7;
let z = 20;
//2. Käytä Math.max()-metodia löytääksesi suurimman luvun a:n, b:n ja c:n joukosta.
let maxNum = Math.max(x, y, z);
//3. Käytä Math.min()-metodia löytääksesi pienimmän luvun niiden joukosta.

let minNum = Math.min(x, y, z);
//4. Tulosta tulokset käyttäen console.log():ää viestien kera, kuten:
console.log(maxNum,minNum)

//"The largest number is 20."
//"The smallest number is 7."

