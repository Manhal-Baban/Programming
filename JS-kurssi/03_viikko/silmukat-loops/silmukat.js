/* tulosta luvat 1-10 */
let laskuri = 1;
while(laskuri<=10) {
    console.log(laskuri);

laskuri++; // sama kuin laskuri = laskuri + 1
}

/* sama for-lauseella*/
for(let laskuri = 1; laskuri <= 10; laskuri ++) {
console.log (laskuri);
}

while(true) {
    //pyydä käyttäjältä salasanaa
    let salasanaa = prompt("Anna salasana.")
    if(salasanaa == "sala") {
        alert("Oikein!");
        //beak "rikkoo" eli loprttaa silmukan
        break;
    }
}


//______________________________

// silmukat_01

//Tee funktio nimeltä logOddNumbers:
// - Se tulostaa konsoliin kaikki parittomat numerot 1 ja 100 välillä.
// Eli 1, 3, 5, 7, 9, 11 jne. lukuun 99 asti.

function logOddNumbers(){
    let laskuri = 1
    while(laskuri<=99){
console.log(laskuri)
laskuri+=2;
    }
}
logOddNumbers();


//_________________
//silmukat_02

// Tee funktio logEvenNumbers, joka:
// - tulostaa kaikki parilliset kokonaisluvut 1 ja 99 välillä tällä kaavalla:  2, 98, 4, 96, ..., 50.
// - Tulosta luvut samalle riville konsolissa.

function logEvenNumbers(){
    let calculater = 2
    while(calculater<=50){
        console.log(100 - calculater)
        calculater+=2;
    }
    
}
logEvenNumbers();


//_______________
//silmukat_03

/* Luo funktio averageSpeed, joka pyytää jatkuvasti käyttäjää syöttämään etäisyyden (kilometreinä)
 ja ajan (tunteina) ja laskee sitten keskinopeuden.
 Ohjelman tulisi lopettaa, kun käyttäjä syöttää 0 etäisyydeksi.
 Saadessaan etäisyyden 0 ohjelman ei pitäisi pyytää enempää syöttöä. */

// Tehdään tämä opettajan esimerkkinä, koska promptin käyttö ei ole vielä tuttua.


function averageSpeed(){
    while(true) {
        let distance = parseFloat(prompt("Anna etäisyys."))

        //ohjelman tulisi lopettaa, kun käyttäjä syöttää 0 etäisyydeski.
        if(distance == 0){
            break;
        }

        // ei ole luku tai on negatiivinen
        if(isNaN(distance) || distance < 0) {
            //palaa silmukan alkuun
            continue;
        }
        let time = parseFloat(prompt("Anna aika."))
        
        //ei ole luku tai on negatiivinen
        if(isNaN(time) || time < 0) {
            //palaa silmukan alkuun
            continue;
    }
    let average = distance / time;
    alert("average speed is" + average);
    }
}
averageSpeed()

//_________________

// numero 4

// Tee funktio countEvenNumbers, joka pyytää käyttäjää syöttämään 20 lukua.
// Kun kaikki luvut on syötetty, ohjelman tulisi näyttää konsolissa montako
// näistä luvuista on parillisia.
// Koska käytössä on prompt, tämä toimii selaimessa html-sivun kautta.

function countEvenNumbers() {
    let evenCount = 0;
  
    for (let i = 0; i < 20; i++) {
      let input = prompt(`Syötä luku ${i + 1}/20:`);
      let number = parseInt(input);
  
      if (!isNaN(number) && number % 2 === 0) {
        evenCount++;
      }
    }
  
    console.log(`Parillisia lukuja: ${evenCount}`);
  }
  
  // Kutsutaan funktiota
  countEvenNumbers();


  //___________________

  // number 5

  function calculateAverageUntilZero() {
    let totalOfAllNumbers = 0;
    let numberOfEntries = 0;
  
    let number = parseFloat(prompt("Enter a number (0 to stop):"));
  
    while (number !== 0) {
      // What should we do inside the loop?
    }
  }
  