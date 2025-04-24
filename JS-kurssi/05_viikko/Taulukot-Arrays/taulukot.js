//Alkuperäinen data:
//let teamMembers = ['Joni', 'Emilia', 'Mikko', 'Sade'];

//1. Käy `teamMembers`-taulukko läpi ja tulosta jokainen nimi konsoliin.
let teamMembers = ["Joni", "Emilia", "Mikko", "Sade"];
console.log(teamMembers);

//2. Poista taulukon ensimmäinen jäsen.
teamMembers.shift();
console.log(teamMembers);

//3. Poista taulukon viimeinen jäsen.
teamMembers.pop();
console.log(teamMembers);

//4. Lisää uusi jäsen "Alex" taulukon alkuun.
teamMembers.unshift("Alex");
console.log(teamMembers);

//5. Lisää uusi jäsen "Linda" taulukon loppuun.
teamMembers.push("Linda");
console.log(teamMembers);

//6. Luo uusi taulukko, joka ei sisällä kahta ensimmäistä jäsentä ja jätä alkuperäinen muuttumattomaksi.
let teamMembers2 = teamMembers.slice(2);
console.log(teamMembers2);

//7. Etsi "Mikko":n indeksi taulukossa.
console.log(teamMembers.indexOf("Mikko"));

//8. Yritä etsiä "Jake":n indeksi (ei ole taulukossa).
console.log(teamMembers.indexOf("Jake"));

//9. Korvaa "Mikko" kahdella uudella jäsenellä: "Maria" ja "Netta".
teamMembers.splice(2, 1, "Maria", "Netta");
console.log(teamMembers);

//10. Liitä "Ahmad" taulukkoon ja tallenna tulos uuteen taulukkoon, alkuperäistä muuttamatta.
let aTeamMember = ["Ahmad"];
let combined = teamMembers.concat(aTeamMember);
console.log(combined);

//11. Kopioi koko `teamMembers`-taulukko `slice`-metodilla ja tallenna se uuteen muuttujaan.
let copy = teamMembers.slice();
console.log(copy);

//12. Luo `newMembers`-taulukko, jossa on "Tiina" ja "Myrsky", ja yhdistä se `teamMembers`-taulukkoon uuteen taulukkoon.
let newMembers = ["Tiina", "Myrsky"];
let TwoNewMembers = teamMembers.concat(newMembers);
console.log(TwoNewMembers);

//13. Etsi kaikki "Joni":in esiintymät ja tallenna niiden indeksit uuteen taulukkoon.
let joniIndexes = [];
for (i = 0; i <= teamMembers.length - 1; i++) {
  if (teamMembers[i] == "Joni") {
    joniIndexes.push(i);
  }
}
console.log(joniIndexes);

//14. Muunna kaikki nimet taulukossa isoiksi kirjaimiksi, muuttamatta alkuperäistä taulukkoa.
let teamMembersBig = [...teamMembers];
for (i = 0; i <= teamMembers.length - 1; i++) {
  teamMembersBig[i] = teamMembersBig[i].toUpperCase();
}
console.log(teamMembersBig);

// other way to do 14
let teamMembersUp = [];
teamMembers.forEach(function (member) {
  teamMembersUp.push(member.toUpperCase());
});
console.log(teamMembersUp);

//15. Lajittele `teamMembers` aakkosjärjestykseen.
let teamMembersABC = teamMembers.sort();
console.log(teamMembersABC);

//16. Käännä `teamMembers`-taulukon järjestys päinvastaiseksi.
let teamMembersReversed = teamMembers.reverse();
console.log(teamMembersReversed);

//17. Tarkista, onko ainakin yksi jäsen nimeltään "Joni".
let isThereAny = teamMembers.some((teamMembers) => teamMembers == "Johni");
console.log(isThereAny);

//18. Tarkista, onko kaikilla nimillä yli kolme kirjainta.
let allOverThree = teamMembers.every(function (name) {
  return name.length > 3;
});
console.log("all over 3 letters?", allOverThree);
