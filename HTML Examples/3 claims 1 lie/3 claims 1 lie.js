function checkAnswers() {
  const guess1 = document.getElementById("guess1").checked;
  const guess2 = document.getElementById("guess2").checked;
  const guess3 = document.getElementById("guess3").checked;

  const truth1 = document.getElementById("truth1").value === "true";
  const truth2 = document.getElementById("truth2").value === "true";
  const truth3 = document.getElementById("truth3").value === "true";

  let resultMessage = "";

  resultMessage += checkOne("Claim 1", guess1, truth1);
  resultMessage += checkOne("Claim 2", guess2, truth2);
  resultMessage += checkOne("Claim 3", guess3, truth3);

  document.getElementById("result").innerText = resultMessage;
}

function checkOne(label, guess, truth) {
  if (guess === truth) {
    return `${label}: ✅ Correct!\n`;
  } else {
    return `${label}: ❌ Wrong!\n`;
  }
}
