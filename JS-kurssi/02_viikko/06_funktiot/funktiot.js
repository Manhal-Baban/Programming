// Functions
//numero 1

//Luo funktio nimeltä add, joka:
//Ottaa kaksi parametria, a ja b.
//Palauttaa a:n ja b:n summan.
//Kutsu funktiota arvoilla 10 ja 5.
//Tulosta tulos käyttäen console.log().
//Bonus: Kutsu funktiota useita kertoja eri argumenteilla ja tulosta kaikki tulokset.

// Funktio, joka ottaa kaksi parametria ja palauttaa niiden summan
function add(a, b) {
  return a + b;
}
// Kutsutaan funktiota arvoilla 10 ja 5
let result1 = add(10, 5);
console.log(result1); // Tulostaa: 15

// Bonus: Kutsutaan funktiota useilla eri arvoilla
let result2 = add(3, 7);
let result3 = add(20, 30);
let result4 = add(-5, 5);
let result5 = add(0, 0);

// Tulostetaan kaikki tulokset
console.log(result2); // Tulostaa: 10
console.log(result3); // Tulostaa: 50
console.log(result4); // Tulostaa: 0
console.log(result5); // Tulostaa: 0

//_________________________________

// numero 2

//Luo funktio nimeltä isEven, joka:
//Ottaa yhden parametrin, num.
//Palauttaa true, jos num on parillinen, muuten palauttaa false.
//Kutsu funktiota arvoilla 4 ja 7.
//Tulosta tulokset käyttäen console.log().
// Bonus: Muokkaa funktiota käyttämään implisiittistä palautusta.

function isEven(num) {
  return num % 2 === 0; // if remains 0 = true
}

console.log(isEven(4));
console.log(isEven(7));

// Bonus: Muokataan funktiota käyttämään implisiittistä palautusta
const isEvenImplicit = (num) => num % 2 === 0; // Sama toiminto nuolifunktiolla

// Kutsutaan funktiota uudelleen implisiittisellä palautuksella
console.log(isEvenImplicit(4)); // Tulostaa: true
console.log(isEvenImplicit(7)); // Tulostaa: false

//________________________

//numero 3

// Luo funktio nimeltä getLength, joka:
// Ottaa yhden parametrin, str.
// Palauttaa str:n pituuden käyttäen .length.
// Kutsu funktiota merkkijonolla "JavaScript".
// Tulosta tulos käyttäen console.log().

function getLength(str) {
  return str.length;
}

console.log(getLength("JavaScript"));

//_____________________

// numero 4

/* Luo funktio nimeltä capitalize, joka:
Ottaa yhden parametrin, str.
Palauttaa merkkijonon siten, että ensimmäinen kirjain on iso ja loput pieniä.
Kutsu funktiota merkkijonolla "javascript".
Tulosta tulos käyttäen console.log().

Vinkki: Käytä str[0].toUpperCase() ja str.slice(1).toLowerCase().
*/
function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

console.log(capitalize("javascript"));

//________________________

// numero 5
/* Luo funktio nimeltä generateRandomNumber, joka:
Ottaa kaksi parametria, min ja max.
Palauttaa satunnaisen kokonaisluvun min:n ja max:n väliltä (mukaan lukien).
Kutsu funktiota arvoilla 1 ja 10.
Tulosta tulos käyttäen console.log().

Vinkki: Käytä Math.random(), Math.floor() ja yksinkertaista matikkaa.
*/

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(generateRandomNumber(1, 10));

//________________________

// numero 6
/* Luo funktio nimeltä replaceWord, joka:
Ottaa kolme parametria, sentence, oldWord ja newWord.
Palauttaa lauseen, jossa oldWord on korvattu newWordilla.
Kutsu funktiota lauseella "I like apples.", oldWord: "apples" ja newWord: "bananas".
Tulosta tulos käyttäen console.log().
*/

function replaceWord(sentence, oldWord, newWord) {
  return sentence.replace(oldWord, newWord);
}

console.log(replaceWord("I like apples.", "apples", "bananas"));

//_________________

// numero 7

/* Luo funktio nimeltä containsWord, joka:
Ottaa kaksi parametria, sentence ja word.
Palauttaa true, jos sentence sisältää sanan word, muuten false.
Kutsu funktiota lauseella "JavaScript is fun!" ja sanalla "fun".
Tulosta tulos käyttäen console.log().

Bonus: Muokkaa funktiota käyttämään implisiittistä palautusta.
*/
function containsWord(sentence, word) {
  return sentence.includes(word);
}

console.log(containsWord("JavaScript is fun!", "fun"));

//____________________

// numero 8

/* Luo funktio nimeltä roundNumber, joka:
Ottaa kaksi parametria, num ja precision.
Palauttaa luvun pyöristettynä annetun tarkkuuden mukaan (desimaalien määrä).
Kutsu funktiota arvoilla 19.56789 ja 2.
Tulosta tulos käyttäen console.log().

Vinkki: Käytä .toFixed().
*/

function roundNumber(num, precision) {
  return parseFloat(num.toFixed(precision));
}

console.log(roundNumber(19.56789, 2)); // Output: 19.57

//_________________

//numero 9

/* Luo funktio nimeltä findMax, joka:
Ottaa kolme parametria, a, b ja c.
Palauttaa suurimman näistä kolmesta luvusta.
Kutsu funktiota arvoilla 12, 7 ja 20.
Tulosta tulos käyttäen console.log().

Vinkki: Käytä Math.max().
*/

function findMax(a, b, c) {
  return Math.max(a, b, c);
}

console.log(findMax(12, 7, 20)); // Output: 20

//_______________

// numero 10

/* Luo funktio nimeltä cleanAndTransform, joka:
Ottaa yhden parametrin, str.
Poistaa ylimääräiset välilyönnit, muuntaa merkkijonon pieniksi kirjaimiksi ja korvaa sanan "powerful" sanalla "amazing".
Palauttaa muunnetun merkkijonon.
Kutsu funktiota merkkijonolla " JavaScript is powerful! ".
Tulosta tulos käyttäen console.log().
*/

function cleanAndTransform(str) {
  return str.trim().toLowerCase().replace("powerful", "amazing");
}

console.log(cleanAndTransform(" JavaScript is powerful! "));
