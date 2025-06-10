"use strict";

/* Task 1: Try-Catch for Debugging
/*
Task: Wrap the code inside a `try-catch` block.
      Simulate an error by calling an undefined function.

Test cases:
task1(); // Should log: "Error caught: function is not defined"
*/
// Your code here
function task1() {
  try {
    taskFunction(); //undefined / määrittelmätön
  } catch (error) {
    console.log("Error occured in code:", error.message);
  }
}
task1(); // it means it gives error

/* Task 2: Handle ReferenceError
/*
Task: Try using a variable that hasn’t been declared.
      Catch the error and log: "ReferenceError caught: [error message]"

Test cases:
task2(); // Should log: "ReferenceError caught: myVariable is not defined"
*/
// Your code here
function task2() {
  try {
    const x = newValue;
    return x;
  } catch (error) {
    console.log("error occured in code:", error.message);
  }
}
task2();

/* Task 3: Using Finally
/*
Task: Simulate an error, log it, and ensure "Task completed." always runs.

Test cases:
task3(); // Should log an error message and "Task completed."
*/
// Your code here
function task3() {
  try {
    const x = newValue;
    return x;
  } catch (error) {
    console.log("Error occured in code:", error.message);
  } finally {
    console.log("process ended");
  }
}
task3();

/* Task 4: Fix JSON Parsing Error
/*
Task: Try to parse invalid JSON. If it fails, log `"Invalid JSON format"`

Test cases:
parseJSON('{"name": "Alice", "age": 25}'); // Should return object
parseJSON("Invalid JSON text"); // Should log an error and return null
*/
// Your code here
function parseJSON(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.log("incorrect JSON-form", error.message);
  }
}
parseJSON('{"name": "Alice", "age": 25}');
parseJSON("Invalid JSON text");

/* Task 5: Throwing a Custom Error
/*
Task: If age is below 18, throw `"You must be at least 18."`

Test cases:
checkAge(20); // Should log: "Access granted."
checkAge(16); // Should log: "Error: You must be at least 18."
*/
// Your code here

function checkAge(age) {
  if (age < 18) {
    throw new Error("You must be at least 18.");
  }
  console.log("Access granted.");
}

try {
  checkAge(20); // Access granted.
  checkAge(16); // This will go to catch block
} catch (err) {
  console.log("Error: " + err.message);
}

/* Task 6: Save and Retrieve from LocalStorage
/*
Task: Write a function to store an object in **LocalStorage**.
      Then retrieve it and handle errors if JSON is invalid.

Test cases:
saveUser({ name: "Alice", age: 25 }); // Should save user
console.log(getUser()); // Should return saved user object
localStorage.setItem("user", "{ invalid JSON }"); // Simulate corruption
console.log(getUser()); // Should log an error and return null
*/
function saveUser(user) {
  localStorage.setItem("user", JSON.stringify(user));
}

function getUser() {
  try {
    const fetchedUser = JSON.parse(localStorage.getItem("user"));
    return fetchedUser;
  } catch (error) {
    console.log(error.message);
  }
}

/* Task 7: Check if Object Property Exists
/*
Task: If a property is missing, log `"Property not found"`

Test cases:
checkProperty({ name: "Bob", age: 30 }, "name"); // Should log value
checkProperty({ name: "Bob", age: 30 }, "email"); // Should log "Property not found"
*/

function checkProperty(obj, key) {
  if (key in obj) {
    console.log(obj[key]);
  } else {
    console.log("Property not found");
  }
}
checkProperty({ name: "Bob", age: 30 }, "name"); // Logs: "Bob"
checkProperty({ name: "Bob", age: 30 }, "email"); // Logs: "Property not found"

/* Task 8: Fetch API Error Handling
/*
Task: Use `fetch()` to get data, handle errors properly.

Test cases:
fetchData("https://jsonplaceholder.typicode.com/users"); // Should log API data
fetchData("invalid-url"); // Should log network error
*/

async function fetchData(url) {
  // Your code here
}

/* Task 9: Fix a URI Error
/*
Task: Try decoding a broken URI string.

Test cases:
task9("https%3A%2F%2Fexample.com"); // Should decode properly
task9("%"); // Should log URIError
*/

function task9(malformedURI) {
  // Your code here
}

/* Task 10: Clear LocalStorage
/*
Task: Ensure LocalStorage is cleared safely.

Test cases:
clearStorage(); // Should log "LocalStorage cleared."
*/

function clearStorage() {
  // Your code here
}
