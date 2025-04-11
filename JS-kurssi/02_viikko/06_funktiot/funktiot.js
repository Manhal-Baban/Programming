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
  console.log(result1);  // Tulostaa: 15
  
  // Bonus: Kutsutaan funktiota useilla eri arvoilla
  let result2 = add(3, 7);
  let result3 = add(20, 30);
  let result4 = add(-5, 5);
  let result5 = add(0, 0);
  
  // Tulostetaan kaikki tulokset
  console.log(result2);  // Tulostaa: 10
  console.log(result3);  // Tulostaa: 50
  console.log(result4);  // Tulostaa: 0
  console.log(result5);  // Tulostaa: 0

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

console.log(isEven(4))
console.log(isEven(7))

// Bonus: Muokataan funktiota käyttämään implisiittistä palautusta
const isEvenImplicit = num => num % 2 === 0;  // Sama toiminto nuolifunktiolla

// Kutsutaan funktiota uudelleen implisiittisellä palautuksella
console.log(isEvenImplicit(4));  // Tulostaa: true
console.log(isEvenImplicit(7));  // Tulostaa: false