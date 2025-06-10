/* Task 1: Use "strict mode"
/*
Task: Create a function `task1` that uses `"use strict"`. 
      Inside the function, try using a variable without declaring it first.
      Catch the error and log: "Strict mode error: [error message]"

Example:
task1(); // Logs: "Strict mode error: variable is not defined"
*/
// Code here

function task1() {
  "use strict";
  try {
    variable1 = 45;
  } catch (err) {
    //err means error
    console.log("strict mode error:", err.message);
  } finally {
    console.log("function completed");
  }
}
task1();

/* Task 2: Declare Variables Correctly
/*
Task: Declare a constant `MAX_USERS = 100` and a `let` variable `currentUsers = 10`.
      Try changing `MAX_USERS` and catch the error.

Expected:
- The error should be caught and logged.
- `MAX_USERS` should not change.
*/
// Code here

function task2() {
  const MAX_USERS = 100;
  let currentUsers = 10;
  try {
    currentUsers += 10;
    MAX_USERS += 10;
    currentUsers += 5;
  } catch (error) {
    console.log("the constant cannot be changed!", error.message);
  }
  console.log("MAX_USERS:", MAX_USERS);
  console.log("currentUsers:", currentUsers);
}
task2();

/* Task 3: Create and Log an Object
/*
Task: Create an object `userProfile` with:
      - `name`
      - `email`
      - `isAdmin` (true or false)
      Log the object.

Expected:
- Console logs: { name: "Alice", email: "alice@example.com", isAdmin: true }
*/
// Code here
class UserProfile {
  constructor(name, email, isAdmin) {
    this.name = name;
    this.email = email;
    this.isAdmin = isAdmin;
  }
}
function task3() {
  const user1 = new UserProfile("Manhal", "Manhal.baban@gmail.com", true);
  const user2 = new UserProfile(true, 45, "something");
  console.log(user1);
  console.log(user2);
}

task3();

/* Task 4: Write a Simple Function
/*
Task: Create `calculateArea` function that returns the area of a rectangle.
      The function should take `width` and `height` as inputs.

Example:
calculateArea(5, 10) → 50
*/
// Code here

function calculateArea(width, height) {
  return width * height;
}

console.log("area 5x10 =", calculateArea(5, 10));

/* Task 5: Avoid Magic Numbers
/*
Task: Define `const DISCOUNT = 0.1`. 
      Write `applyDiscount(price)` that reduces the price by the discount.

Example:
applyDiscount(100) → 90
*/
// Code here
const DISCOUNT = 0.1;
function applyDiscount(price) {
  return price - price * DISCOUNT;
}
console.log(applyDiscount(100)); //90

/* Task 6: Write Useful Comments
/*
Task: Write a function `greetUser(name)` that returns a greeting.
      Use a meaningful comment explaining the function.

Example:
greetUser("Bob") → "Hello, Bob!"
*/
// Code here
function greetUser(name) {
  return `hello, ${name}!`;
}
console.log(greetUser("Bob")); // "Hello, Bob!"

/* Task 7: Refactor Unclear Code
/*
Task: Improve this function to make it clear and readable.

Before:
function f(n){return n<0 ? 'negative' : 'positive';}

After:
- Use better naming and proper formatting.
*/
// Code here
function f(n) {
  return n < 0 ? "negative" : "positive";
}
function checkNumber(number) {
  if (number < 0) {
    return "negatvie";
  } else {
    return "positive";
  }
}
console.log(f(8));
console.log(checkNumber(8));

/* Task 8: Fix Formatting
/*
Task: Rewrite this code to make it **formatted correctly**.

Before:
let x=10; function example(){console.log(x);}

After:
- Proper indentation and spacing.
*/

function example() {
  let x = 10;
  console.log(x);
}

example();
