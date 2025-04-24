// numero 1

/* 
Kirjoita funktio nimeltä checkAdult:
Ota ikä parametrina.
Jos ikä on 18 tai enemmän, palauta "Olet aikuinen."
Muussa tapauksessa älä palauta mitään.
Kutsu funktiota eri ikäarvoilla ja tulosta tulos.
*/

function checkAdult(age) {
  if (age >= 18) {
    return "Olet aikuinen.";
  }
}

// Test with different ages:
console.log(checkAdult(20)); // "Olet aikuinen."
console.log(checkAdult(17)); // undefined
console.log(checkAdult(18)); // "Olet aikuinen."

//__________________
// numero 2

/* 
Kirjoita funktio nimeltä checkForFox:
Ota looginen parametri hasFox.
Jos hasFox on tosi, palauta "Sinulla on lemmikkikettu!"
Muussa tapauksessa palauta "Ei havaittu kettua!"
Kutsu funktiota arvoilla true ja false ja tulosta tulos.
*/

function checkForFox(hasFox) {}
