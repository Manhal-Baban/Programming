/* 
Create a form with a required name and email field.
Write JavaScript to:
- Prevent form submission if either field is empty.
- Display an error message if fields are missing. 
*/

// Get form elements
const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const errorMessage = document.getElementById("errorMessage");

// Listen for form submission
form.addEventListener("submit", function (event) {
  // Clear any previous error
  errorMessage.textContent = "";

  // Check if name or email is empty
  if (nameInput.value.trim() === "" || emailInput.value.trim() === "") {
    event.preventDefault(); // Stop form from submitting
    errorMessage.textContent = "Please fill in both name and email.";
  }
});
