// id="textInput" id="textOutput"
document
  .getElementById("textInput")
  .addEventListener("input", function (event) {
    document.getElementById("textOutput").textContent = event.target.value;
  });

//ylempi tekee saman kuin alla
// funktio tarvitse toimiakseen parametrin funktion ulkopuolelta
function liveupdate(event) {
  //muokataan käyttäjän syöte sivun p-elemnttiin
  document.getElementById(textOutput).textContent = event.target.value;
}
//funktiota kutsutsaan, kun kenttään syötetään tekstiä
document.getElementById("textInput").addEventListener("input", liveupdate);
