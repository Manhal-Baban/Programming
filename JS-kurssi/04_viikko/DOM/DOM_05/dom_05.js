/*
Create an HTML file with:
- A <button> to change the background color.
- A <input> field for users to enter a color.
- A <p> element where the text color changes based on the input.

Write JavaScript to:
- Change the background color to a random color when the button is clicked.
- Update the paragraph’s text color to match the user’s input value
*/

// Get elements from the DOM
const bgButton = document.getElementById("bgButton");
const colorInput = document.getElementById("colorInput");
const colorText = document.getElementById("colorText");

// Function to generate a random color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Change background color when button is clicked
bgButton.addEventListener("click", () => {
  const randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;
});

// Change text color of <p> when user types a color
colorInput.addEventListener("input", () => {
  const userColor = colorInput.value;
  colorText.style.color = userColor;
});
