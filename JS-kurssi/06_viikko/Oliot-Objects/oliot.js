/* Task 1
Create a JavaScript array named `library` that represents a collection of books.
Each book should have properties for `title`, `author`, and `yearPublished`.
Add at least two book objects to this collection.
*/

// Your code here
const library = [
  {
    title: "Death and Pinguins",
    author: "Kurkov, Andrei",
    yearPublished: 1996,
  },
  {
    title: "Eloquent JavaScript, 4th edition",
    author: "Haverbeke, Marjin",
    yearPublished: 2024,
  },
  {
    title: "nevermoor: Morriganin koetukset",
    author: "Townsend, Jessica",
    yearPublished: 2018,
  },
];

/* Task 2
Access the `title` of the first book in the `library` collection and log it to the console.
Modify the `yearPublished` for the second book in the collection to a new year, then log the updated book object to the console.
*/

// Your code here
console.log(
  "The 1st book is: ",
  library[0].title,
  library[0].yearPublished,
  library[0].author
);

console.log(
  "The 2nd book is: ",
  library[1].title,
  library[1].yearPublished,
  library[1].author
);
console.log(
  "The 3rd book is: ",
  library[2].title,
  library[2].yearPublished,
  library[2].author
);

/* Task 3
Use dot notation to add a new property `genres` (an array of strings) to the first book in the `library`.
Use bracket notation to add a boolean property `isAvailable` to the same book, indicating its availability.
*/

// Your code here
library[0].geners = ["Absurd", "Tragic Comedy"];
console.log(library[0]);

/* Task 4
Define a constructor function named `Book` that can create new book objects with properties for `title`, `author`, `yearPublished`, and `genres`.
Using the `Book` constructor, create a new book object with the provided input values and add it to the `library` collection.
*/

// Your code here
class Book {
  constructor(title, author, yearPublished, genres) {
    this.title = title;
    this.author = author;
    this.yearPublished = yearPublished;
    this.genres = genres;
  }
}
const newBook = new Book(
  "The Corpes Washer",
  "Sinan Antoon",
  2013,
  "Historical Fiction"
);

library.push(newBook);
console.log(`The New Book is: ${newBook.title}`);

/* Task 5
Write a function named `createBook` that takes parameters for `title`, `author`, `yearPublished`, and `genres` (an array).
The function should return a new book object with these properties.
Test `createBook` by creating a new book object with user-provided input and logging the new book object to the console.
*/
function createBook(title, author, yearPublished, genres) {
  const book = {
    title: title,
    author: author,
    yearPublished: yearPublished,
    genres: genres,
  };
  return book;
}

// Example test input
const newBook1 = createBook("The Alchemist", "Paulo Coelho", 1988, [
  "Adventure",
  "Philosophy",
]);

console.log("New book object:", newBook);

// Your code here

/* Task 6
Convert the `library` collection to a JSON string and log it to the console.
Parse the JSON string back into a JavaScript object and log the first book's title to the console.
*/

// Your code here

/* Task 7
Create an array named `students`, where each student has a `name`, `age`, and `grade`.
Log the name of any student who has a grade higher than 90.
*/

// Your code here

const students = [
  { name: "Liisa", age: 28, grade: 88 },
  { name: "Matti", age: 27, grade: 93 },
  { name: "Emma", age: 32, grade: 70 },
  { name: "Antti", age: 41, grade: 95 },
];
let goodGrades = students.filter((student) => student.grade > 90);

goodGrades.forEach((topStudent) => {
  console.log("Top Student:", topStudent.name);
});

/* Task 8
Define an object named `car` with properties for `brand`, `model`, `year`, and `isElectric`.
Use a function to check if the car is electric. If it is, log `"This car is eco-friendly!"`. Otherwise, log `"This car runs on fuel."`
*/

// Your code here
const car = {
  brand: "Tesla",
  model: "Model 3",
  year: 2022,
  isElectric: true,
};

if (car.isElectric) {
  console.log("This car is eco-friendly!");
} else {
  console.log("This car runs on fuel.");
}

if (car.year) {
  console.log("The car is new");
} else {
  console.log("The car is old");
}
// Alternative if statement
car.isElectric
  ? console.log("This car is eco-friendly!")
  : "This car runs on fuel.";

// Alternative if statement
console.log(car.isElectric ? "electric car" : "runs on fuel");

/* Task 9
Create a `movies` array where each movie is an object with properties for `title`, `director`, and `rating`.
Write a loop that logs all movie titles with a rating higher than 8.
*/

// Your code here

const movies = [
  { title: "The Lord Of The Rings", director: "Peter Jackson", rating: 8.9 },
  { title: "Inception", director: "Christopher Nolan", rating: 8.8 },
  { title: "The Dark Knight", director: "Christopher Nolan", rating: 9 },
  { title: "The Shawshank Redemption", director: "Stephen King", rating: 9.3 },
  { title: "Cast Away", director: "Robert Zemeckis", rating: 7.8 },
];

movies.forEach((movie) => {
  if (movie.rating > 8) console.log(movie.title);
});

/* Task 10
Write a function `findOldestCar` that takes an array of car objects and returns the car with the earliest `year`.
*/

// Your code here
function findOldestCar(cars) {
  let oldest = cars[0];

  for (const car of cars) {
    if (car.year < oldest.year) {
      oldest = car;
    }
  }

  return oldest;
}

/* Task 11
Define a `userProfiles` array containing objects representing users.
Each user should have a `username`, `email`, and `isAdmin` property.
Write a function that filters and returns only the users who are administrators.
*/

// Your code here

const userProfiles = [
  { userName: "Kalle", Email: "kalle.koivuniemi@gmail.com", isAdmin: true },
  { userName: "Ahmed", Email: "ahmed.Alazzawi@gmail.com", isAdmin: true },
  { userName: "Manhal", Email: "manhal.baban@gmail.com", isAdmin: false },
  { userName: "Abdi", Email: "abdi.warea@gmail.com", isAdmin: false },
];

function getAdmins(users) {
  return users.filter((user) => user.isAdmin);
}

console.log("Admins are:", getAdmins(userProfiles));

/* Task 12
Define an array named `orders`, where each order contains `orderId`, `customerName`, `totalAmount`, and `status` (either "pending" or "completed").
Write a function that returns only the completed orders.
*/

// Your code here

const orders = [
  { orderId: 97, customerName: "Bob", totalAmount: 89.5, status: "completed" },
  { orderId: 98, customerName: "Ghost", totalAmount: 59.9, status: "pending" },
  { orderId: 99, customerName: "Soap", totalAmount: 99.9, status: "pending" },
];

const readyOrders = orders.filter(
  (readiness) => readiness.status === "completed"
);
console.log("Ready Orders:", readyOrders);

/* Task 13
Create an object named `smartphone` with properties for `brand`, `model`, `batteryLife`, and `is5GEnabled`.
Write a function that logs `"This phone supports 5G!"` if `is5GEnabled` is `true`, otherwise logs `"This phone does not support 5G."`
*/

// Your code here
const smartphone = {
  brand: "Samsung",
  model: "Galaxy S24",
  batteryLife: "24 hours",
  is5GEnabled: true,
};

function check5GSupport(phone) {
  if (phone.is5GEnabled) {
    console.log("This phone supports 5G!");
  } else {
    console.log("This phone does not support 5G.");
  }
}

// Example usage
check5GSupport(smartphone);

/* Task 14
Define an object named `fox` with properties `name`, `age`, and `habitat`.
Write a function that logs `"This fox is young"` if its age is under 3, `"This fox is an adult"` if 3 or older.
*/

// Your code here
const fox = {
  name: "Foxy",
  age: 3,
  habitat: "forest",
};

function adultFox(theFox) {
  if (theFox.age < 3) {
    console.log("This fox is young");
  } else {
    console.log("This fox is an adult");
  }
}

adultFox(fox);

/* Task 15
Define an array named `employees`, where each employee has `name`, `position`, and `salary`.
Write a function that calculates the total salary of all employees in the company.
*/

// Your code here
const employees = [
  { name: "Alice", position: "Manager", salary: 50000 },
  { name: "Jake", position: "Developer", salary: 45000 },
  { name: "Charlie", position: "Designer", salary: 40000 },
];

function salarySum(workers) {
  let total = 0;
  for (const pay of workers) {
    total += pay.salary;
  }
  return total; // Return the total sum
}

console.log("The total sum of salaries is:", salarySum(employees));
