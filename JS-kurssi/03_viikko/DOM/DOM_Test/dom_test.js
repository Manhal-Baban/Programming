document.getElementById("nappi").addEventListener("click", function () {
  document.getElementById("textOutput").textContent =
    document.getElementById("textInput").value;
  console.log("ensimmäinen tapahtui");
});

//ylempi tekee saman kuin tämä alempi koodi

function naytaSyote() {
  //asetetaan muuttujan arvo silloin, kun nappia on painettu
  const kayttajaInput = document.getElementById("textInput").value;
  //korvataan olemassa oleva teksti muuttujan arvolla
  document.getElementById("textOutput").textContent = kayttajaInput;
  console.log("toinen tapahtui");
}
//kutsutaan funktiota, kun nappia painetaan
document.getElementById("nappi").addEventListener("click", naytaSyote);
