// Luo muuttuja nimeltään age ja anna sille kokonaislukuarvo.
let age = 33;

// Luo muuttuja nimeltään name ja anna sille merkkijonoarvo.
let name = "Manhal";

// Luo muuttuja nimeltään isStudent ja anna sille totuusarvo (boolean).
let isStudent = true;


// Luo muuttuja nimeltään hobbies ja anna sille taulukko, joka sisältää muutamia merkkijonoarvoja (esim. harrastukset).
let hobbies = ["reading","basketball"];

//Luo info-olio eli objekti, jossa on kaksi ominaisuutta: schoolName (merkkijono) ja grade (kokonaisluku).
const studentinfo = {

    schoolName: "Helsinki Business College",
    grade: "180"
};

// Käytä console.log() -metodia tulostamaan jokainen muuttuja konsoliin.
console.log (name);
console.log (age);
console.log (isStudent)
console.log (hobbies)
console.log (studentinfo.schoolName, studentinfo.grade);

// Käytä typeof-operatoria tarkistaaksesi jokaisen muuttujan tietotyypin ja tulosta tulos console.log()-metodilla.

console.log(typeof name);
console.log(typeof age);
console.log(typeof isStudent);
console.log(typeof hobbies);

