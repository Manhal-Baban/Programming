/*
Create an HTML file with a <p> element and a button.
Write JavaScript to toggle the visibility of the paragraph each time the button is clicked.
 */

// Get the paragraph and button elements
const paragraph = document.getElementById("myParagraph");
const button = document.getElementById("toggleVisibility");

// Add a click event listener to the button
button.addEventListener("click", function () {
  // Check if the paragraph is visible
  if (paragraph.style.display === "none") {
    // Show it
    paragraph.style.display = "block";
  } else {
    // Hide it
    paragraph.style.display = "none";
  }
});
