// Täydennä funktio convertNumberToString niin, että se muuntaa saamansa numeron merkkijonoksi.
function convertNumberToString(number) {

return number.toString();
}
console.log(convertNumberToString(33));

console.log(typeof convertNumberToString(33));


// Täydennä funktio convertStringToNumber niin, että se muuntaa saamansa merkkijonon numeroksi.
function convertStringToNumber(string) {

return Number.parseInt(string);
}
console.log(convertStringToNumber(55));

console.log(typeof convertStringToNumber(55));



// Määrittele funktio, joka muuntaa lämpötilan Fahrenheit-asteista Celsius-asteiksi.
// Tämä funktio käyttää kaavaa (Fahrenheit - 32) * 5/9
// Saatu lämpötila pyöristetään yhteen desimaaliin tarkkuuden vuoksi.
function FahrenheitToCelsius(fahr) {
    let tmp = ((fahr - 32) * 5) / 9;
    return tmp.toFixed(1);

}

function FahrenheitToCelsius(fahr) {
    return (((fahr - 32) *5) / 9).toFixed(1);
}

console.log(FahrenheitToCelsius(21));


//1 maili on 1.609344 kilometriä

function milesToKilometers (miles) {
    let km = miles * 1.609344;
    console.log (km);
    return km;

}
console.log("pyöristetty tulos",milesToKilometers(8));


//Luo muuttuja nimeltä 'num1' ja anna sille liukulukuarvo.
//Luo muuttuja nimeltä 'num2' ja anna sille eri liukulukuarvo.
let num1 = 1.5;
let num2 = 19990.34;
console.log ("num1 arvo on:",num1);
console.log ("num2 arvo on:",num2);

// Pyöristä sekä 'num1' että 'num2' lähimpään kokonaislukuun ja tallenna tulokset muuttujiin 'roundedNum1' ja 'roundedNum2'.
let roundedNum1 = Math.round(num1);
console.log("roundednum1 arvo on:", roundedNum1);

let roundedNum2 = Math.round(num2);
console.log("roundednum2 arvo on:", roundedNum2);


// Laske neliöjuuri 'roundedNum1':stä ja tallenna se muuttujaan nimeltä 'sqrtNum1'.
let sqrtNum1 = Math.sqrt(num1);
console.log("sqrtnum1 arvo on", sqrtNum1);

// Etsi suurempi numero 'roundedNum1':n ja 'roundedNum2':n välillä ja tallenna se muuttujaan nimeltä 'maxNum'.
let maxNum = Math.max(num1, num2);
console.log("suurempi luku on:", maxNum);

// Käytä typeof operaattoria tarkistaaksesi jokaisen uuden muuttujan tietotyypin ja tulosta tulos käyttäen console.log().

console.log("num1 is a", typeof num1, "num2 is a", typeof num2);


//Tehtävä: Jakolasku

//Kuvitellaan, että olet matematiikan opettaja, ja haluat laatia yksinkertaisen tehtävän oppilaillesi. Tehtäväsi on luoda ohjelma, joka laskee kahden luvun jakolaskun ja tulostaa tuloksen.
//Luo kaksi muuttujaa, ja anna niille arvot.
let numero1 = 4903;
let numero2 = -23;

//Laske näiden kahden numeron jakolaskun tulos ja tallenna se uuteen muuttujaan.
let osamaara = numero1 / numero2
//Tulosta vastaus konsoliin.
console.log("division result is", osamaara);


/** Tehtävä: Ostoskori
 * Kuvitellaan, että olet kehittämässä yksinkertaista verkkokauppasovellusta. Sinun tehtäväsi on luoda ohjelma, joka laskee ostoskorissa olevien tuotteiden yhteishinnan ja tulostaa sen.
 * - Määrittele muuttujat kullekin ostoskorissa olevalle tuotteelle ja niiden hinnoille.
 * - Laske tuotteiden yhteishinta ja tallenna se muuttujaan, esimerkiksi yhteishinta.
 * - Tulosta yhteishinta konsoliin.
 */

let milk = 2;

let chips = 3;

let chocobars = 4;

let shopping_cart = milk + chips + chocobars;

console.log("total price is", shopping_cart);

