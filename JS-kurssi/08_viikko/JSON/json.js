/* Task 1
Create a JavaScript object named `student` with properties:
- `name`
- `age`
- `grade`
Convert the object into a JSON string and log it to the console.
*/

// Your code here
const student = { name: "Manhal", age: 33, grade: 100 };

const jsonString = JSON.stringify(student);
console.log(jsonString);

/* Task 2
Take the JSON string from Task 1 and convert it back into a JavaScript object.
Log the `name` property of the converted object.
*/

// Your code here
const studentObject = JSON.parse(jsonString);
console.log(studentObject);

/* Task 3
Create an array named `classroom`, where each element is an object representing a student.
Each student object should have properties for `name`, `age`, and `grade`.
Convert the array into a JSON string and log it to the console.
*/

// Your code here
const classroom = [
  {
    name: "Alice",
    age: 14,
    grade: "8th",
  },
  {
    name: "Bob",
    age: 15,
    grade: "9th",
  },
  {
    name: "Charlie",
    age: 13,
    grade: "7th",
  },
];

const clasRoomJson = JSON.stringify(classroom);
console.log(clasRoomJson);

/* Task 4
Take the JSON string from Task 3, convert it back into a JavaScript array,
and log the names of all students in the classroom.
*/

// Your code here
const classRoomObject = JSON.parse(clasRoomJson);
console.log(classRoomObject);

/* Task 5
Create an object named `weatherReport` with the following properties:
- `temperature`
- `humidity`
- `conditions` (e.g., "Sunny", "Rainy")

Convert the object into a JSON string and store it in a variable named `weatherJSON`.
Then, parse the JSON string back into an object and log the `conditions` property.
*/

// Your code here
const weatherReport = {
  temperature: 22, // in degrees Celsius
  humidity: 60, // in percentage
  conditions: "Sunny", // could also be "Rainy", "Cloudy", etc.
};

const weatherJSON = JSON.stringify(weatherReport);
console.log(weatherJSON);

const weatherCondition = JSON.parse(weatherJSON);
console.log("The weather condition is", weatherCondition.conditions);

/* Task 6
Define an array named `movies`, where each movie has:
- `title`
- `director`
- `rating`

Convert this array into a JSON string, then parse it back into a JavaScript object.
Log all movie titles with a rating higher than 8.
*/

// Your code here

const movies = [
  {
    title: "Inception",
    director: "Christopher Nolan",
    rating: 8.8,
  },
  {
    title: "The Matrix",
    director: "Lana Wachowski & Lilly Wachowski",
    rating: 8.7,
  },
  {
    title: "Spirited Away",
    director: "Hayao Miyazaki",
    rating: 8.6,
  },
];

const mvoiesJason = JSON.stringify(movies);
console.log(mvoiesJason);

const moviesObject = JSON.parse(mvoiesJason);
console.log(moviesObject);

console.log("Checking atr", movies.rating);

movies.forEach((obj) => {
  if (obj.rating >= 8) {
    console.log(obj.title);
  }
});

/* Task 7
Write a function `filterHighRatedMovies(jsonString)` that:
- Takes a JSON string representing an array of movie objects.
- Converts it into a JavaScript array.
- Returns a new array containing only movies with a rating higher than 8.
*/

// Your code here

function filterHighRatedMovies(jsonString) {
  const arr = JSON.parse(jsonString);

  return arr.filter((movie) => movie.rating > 8);
}

console.log(filterHighRatedMovies(mvoiesJason));

/* Task 8
Define an object named `shoppingCart` with:
- `items` (an array of product objects, each with `name` and `price`)
Convert `shoppingCart` into a JSON string and log it to the console.
*/

// Your code here
const shoppingCart = {
  items: [
    { name: "Apple", price: 1.5 },
    { name: "Milk", price: 2.0 },
    { name: "Bread", price: 2.5 },
  ],
};

const jsonCart = JSON.stringify(shoppingCart);
console.log(jsonCart);

/* Task 9
Write a function `totalCartValue(jsonString)` that:
- Takes a JSON string representing a shopping cart.
- Converts it into a JavaScript object.
- Returns the total price of all items in the cart.
*/

// Your code here

function totalCartValue(jasonString) {
  const cart = JSON.parse(jasonString);
  let sum = 0;
  cart.items.forEach((item) => {
    sum += item.price;
  });
  return sum;
}

console.log("the price is:", totalCartValue(jsonCart));

/* Task 10
Create an object named `gameProgress` with:
- `level`
- `score`
- `livesRemaining`

Convert the object into a JSON string and log it.
Parse the JSON back into an object and update the `score` property by adding 100 points.
Log the updated object.
*/

// Your code here

const gameProgress = {
  level: 3,
  score: 1500,
  livesRemaining: 2,
};

const progressJson = JSON.stringify(gameProgress);
console.log(progressJson);

const parsedProgress = JSON.parse(progressJson);
parsedProgress.score += 100;
console.log(parsedProgress);
