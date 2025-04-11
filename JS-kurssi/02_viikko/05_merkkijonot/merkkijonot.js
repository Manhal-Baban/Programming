// Merkkijonot
//numero 1
//Määritä kolme merkkijonovakiota käyttäen yksinkertaisia lainausmerkkejä, kaksoislainausmerkkejä ja backtick-merkkejä. Esimerkiksi:
//'Yksinkertaisilla lainausmerkeillä merkitty merkkijono (')
let a = '10';
//"Kaksoislainausmerkeillä merkitty merkkijono (")
let b = "5";
//`Mallimerkkijono (`)
let c = `3`;
//Tulosta kaikki kolme merkkijonoa käyttäen console.log().
console.log(a,b,c)

//__________________

// numero 2

//Määritä muuttuja language ja anna sille arvoksi "JavaScript".
let language = "Python";

//Luo mallimerkkijono käyttäen backtick-merkkejä sanoaksesi: "I am learning JavaScript." upottamalla language-muuttuja merkkijonoon.
let message = `ìm learning ${language}.`;

//Tulosta muodostettu merkkijono käyttäen console.log().
console.log(message)

//_________________

//numero 3

//Luo muuttuja nimeltä multiLine ja anna sille monirivinen merkkijono käyttäen backtick-merkkejä. Esimerkiksi:
//This is line one.
//This is line two.
//This is line three.
let multiLine = 
`This is line one
This is line two
This is line three`;
//Tulosta multiLine-muuttuja käyttäen console.log().
console.log(multiLine)

//__________________
 

// numero 4

//Määritä muuttuja nimeltä text ja anna sille arvoksi "Hello, World!".
//Käytä .length-ominaisuutta selvittääksesi merkkijonon pituuden ja tallenna se muuttujaan nimeltä textLength.
//Tulosta viesti, kuten: "The length of the text is 13."

let text = "Hello, World!";

let textLength = text.length;

console.log("the length of the text is",textLength)

//__________________

// numero 5 

//Määritä muuttuja nimeltä word ja anna sille arvoksi "JavaScript".
//Käytä hakasulkunotaatiota päästäksesi käsiksi:
//Merkkijonon ensimmäiseen merkkiin.
//Merkkijonon viimeiseen merkkiin.
//Tulosta näiden avulla viestit, kuten:
//"The first character is J."
//"The last character is t."

let word = "JavaScript";

let first_character = word [0];
let last_character = word [9];
console.log("the 1st character is", first_character, "the last characher is", last_character);
 
//_________________

// numero 6

//Määritä kaksi muuttujaa: num1 ja num2 arvoilla 7 ja 5.
//Luo merkkijono käyttäen backtick-merkkejä sanoaksesi: "The sum of 7 and 5 is 12." upottamalla summauslauseke suoraan mallimerkkijonoon.
//Tulosta muodostettu merkkijono.

let num1 = 7;
let num2 = 5;
let result = `the sum of ${num1} and ${num2} is ${num1 + num2}`;
console.log(result)

//___________________

// numero 7

//Luo muuttuja nimeltä greeting ja anna sille arvoksi "Hello, World!".
//Muunna merkkijono:
//Isoiksi kirjaimiksi käyttäen .toUpperCase().
//Pieniksi kirjaimiksi käyttäen .toLowerCase().
//Tulosta molemmat tulokset käyttäen console.log().
//Esimerkkituloste:
//"HELLO, WORLD!"
//"hello, world!"

let greeting = "Hello, World";

let iso = greeting.toUpperCase();
let pieni = greeting.toLowerCase();
console.log(iso,pieni)

//___________________

// numero 8

// Luo muuttuja nimeltä sentence ja anna sille arvoksi "Learning JavaScript is fun!".
// Käytä .substring()-menetelmää erottaaksesi sanan "JavaScript" lauseesta.
// Tulosta erotettu sana käyttäen console.log().
// Esimerkkituloste:
// "Extracted word: JavaScript"

let sentence = "Learning JavaScript is fun!";
let  ExtractedWord = sentence.substring(9,19);
console.log("the extraced word is", ExtractedWord)

//______________

// numero 9

//Luo muuttuja nimeltä messyString ja anna sille arvoksi " Clean me up! ".
//Käytä .trim()-menetelmää poistaaksesi ylimääräiset välilyönnit merkkijonon alusta ja lopusta.
//Tulosta siistitty merkkijono käyttäen console.log().

//Esimerkkituloste:
//"Cleaned string: Clean me up!"


let messyString = "Clean me up!";
let Cleanedstring = messyString.trim();
console.log(Cleanedstring)

//____________________

// numero 10

//Luo muuttuja nimeltä phrase ja anna sille arvoksi "JavaScript is versatile and powerful."
//Käytä .includes()-menetelmää tarkistaaksesi, sisältääkö merkkijono sanan "powerful".
//Tulosta tulos käyttäen console.log().

//Esimerkkituloste:
//"Does the phrase include 'powerful'? true"

let phrase = "JavaScript is versatile and powerful.";
 
let containsPowerful = phrase.includes("powerful");

console.log("does the phrase includes 'powerful'?", containsPowerful)

//______________

// numeero 12

//Luo muuttuja nimeltä longText ja anna sille arvoksi "The quick brown fox jumps over the lazy dog."
//Käytä .slice()-menetelmää erottaaksesi "quick brown fox".
//Tulosta erotettu osa käyttäen console.log().

//Esimerkkituloste:
//"Sliced text: quick brown fox"

let longText = "the quick brown fox jumps over the lazy dog";
let slicedText = longText.slice(4, 19);
console.log("sliced text:", slicedText)

//_______________

// numero 13

/* Luo muuttuja nimeltä description ja anna sille arvoksi " JavaScript is Fun and powerful! ".
Tee seuraavat toimenpiteet:
- Poista ylimääräiset välilyönnit käyttäen .trim().
- Muunna merkkijono pieniksi kirjaimiksi.
- Tarkista, sisältääkö se sanan "fun".
- Korvaa "powerful" sanalla "amazing".
- Tulosta lopullinen merkkijono ja tieto siitä, sisältääkö se sanan "fun" käyttäen console.log().

Esimerkkituloste:
"Final description: javascript is fun and amazing!"
"Does it include 'fun'? true"
*/

let description = "Javascript is fun and powerful";

description = description.trim();

description = description.toLowerCase();

let containsFun = description.includes("fun");

description = description.replace("powerful", "amazing");

console.log("final description:", description)
console.log("does it include 'fun'?", containsFun)
