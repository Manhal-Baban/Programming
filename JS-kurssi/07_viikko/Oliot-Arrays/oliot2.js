/* Task 1
Create an object `weather` that contains properties `temperature`, `humidity`, and `condition` (e.g., "Sunny", "Rainy").
Write a function that logs `"Take an umbrella!"` if it's rainy.
*/

// Your code here
let weather = { temp: 22, humidity: 80, condition: "Rainy" };

let weather2 = { temp: 25, humidity: 20, condition: "Sunny" };

function checkWeather(weather) {
  if (weather.condition == "Rainy") {
    console.log("take an umbrealla!");
  } else if (weather.condition == "Sunny") {
    console.log("Use Sunglasses");
  } else {
    console.log("Have Fun");
  }
}
checkWeather(weather);
checkWeather(weather2);

/* Task 2
Define an object named `shoppingCart` that contains an array of items.
Each item has `name`, `price`, and `quantity`.
Write a function that calculates the total price of all items in the cart.
*/

// Your code here

let shoppingCart = [
  { name: "Milk", price: 1.5, quantity: 2 },
  { name: "Bread", price: 2.0, quantity: 1 },
  { name: "Cheese", price: 3.5, quantity: 1 },
];

function calculateTotal(cart) {
  let total = 0;
  cart.map((item) => {
    total += item.price * item.quantity;
  });
  return total;
}
console.log("Total:", calculateTotal(shoppingCart));

/* Task 3
Create an array of objects named `restaurants`, each with properties `name`, `cuisineType`, and `rating`.
Write a function that returns only the restaurants with a rating of 4 or higher.
*/

// Your code here
let restaurants = [
  {
    name: "Bella Italia",
    cuisineType: "Italian",
    rating: 4.5,
  },
  {
    name: "Sushi World",
    cuisineType: "Japanese",
    rating: 3.7,
  },
  {
    name: "Curry House",
    cuisineType: "Indian",
    rating: 4.2,
  },
  {
    name: "Burger Haven",
    cuisineType: "American",
    rating: 4.0,
  },
  {
    name: "Taco Fiesta",
    cuisineType: "Mexican",
    rating: 4.3,
  },
];

const topRated = (list) => {
  return list.filter((value) => value.rating >= 4);
};
console.log(topRated(restaurants));

/* Task 4
Define an object named `bankAccount` with properties `accountHolder`, `balance`, and `transactions` (an array of numbers).
Write a function that calculates the total balance after all transactions.
*/

// Your code here
let bankAccount = {
  accountHolder: "Manhal Baban",
  balance: 1500, // example balance in euros
  transactions: [200, -50, -100, 300, -25], // example transactions: deposits (+) and withdrawals (-)
};

const getFinalBalance = (account) => {
  let total = account.balance;
  account.transactions.map((t) => {
    total += t;
  });
  return total;
};
console.log("Final Balance:", getFinalBalance(bankAccount));

/* Task 5
Create an array `students` where each student has `name`, `scores` (array of numbers), and `averageScore` (initially null).
Write a function that calculates and updates each student's `averageScore`.
*/

// Your code here
let students = [
  { name: "Kalle", scores: [85, 90, 78], averageScore: null },
  { name: "Manhal", scores: [100, 99, 98], averageScore: null },
  { name: "Ahmed", scores: [77, 91, 92], averageScore: null },
  { name: "Abdi", scores: [87, 95, 76], averageScore: null },
];

const calcWithMap = (students) => {
  students.forEach((student) => {
    let total = 0;
    // loopataan kunkin opiskelijan "score"
    student.scores.map((score) => {
      total += score;
    });
    // päivitetään keskiarvo
    student.averageScore = total / student.scores.length;
  });
};
calcWithMap(students);
console.log(students);

/* Task 6
Define an array named `courses`, each containing `courseName`, `instructor`, and `studentsEnrolled`.
Write a function that logs the course name of any course with more than 30 students.
*/

// Your code here
const courses = [
  { courseName: "Intro to BS", instructor: "Tommi", studentsEnrolled: 33 },
  {
    courseName: "Hypergeometric Calculators",
    instructor: "Timo",
    studentsEnrolled: 28,
  },
  {
    courseName:
      "Existentialism: How to be philosophical about how nothing matters",
    instructor: "Thomas",
    studentsEnrolled: 31,
  },
];
const printLargeCourse = (courses) => {
  courses.map((c) => {
    if (c.studentsEnrolled >= 30) {
      console.log(c.courseName);
    }
  });
};
printLargeCourse(courses);

/* Task 7
Create an object `pet` with properties `species`, `name`, and `isVaccinated`.
Write a function that returns `"Vaccination required"` if the pet is not vaccinated.
*/

// Your code here

const pet = { species: "Dog", name: "Rekku", isVaccinated: false };

const checkVaccination = (pet) => {
  return pet.isVaccinated ? "Vaccinated" : "Not vaccinated";
};
console.log(checkVaccination(pet));

/* Task 8
Define an object named `city` with properties `name`, `population`, and `landmark`.
Write a function that logs `"This is a big city!"` if the population exceeds 1,000,000.
*/

// Your code here

const city = {
  name: "Helsinki",
  population: 1300000,
  landmark: "Tuomoikirkko",
};

const checkCitySize = (city) => {
  if (city.population > 1000000) {
    console.log("This is a big city");
  }
};
checkCitySize(city);

/* Task 9
Create an array `transactions`, where each transaction is an object with `type` ("credit" or "debit") and `amount`.
Write a function that calculates the total balance after processing all transactions.
*/

// Your code here

let transactions = [
  { type: "credit", amount: 1000 },
  { type: "debit", amount: 1500 },
  { type: "credit", amount: 850 },
  { type: "debit", amount: 900 },
];

function calculateTransactionBalance(transactions) {
  let balance = 0;
  transactions.map((t) => {
    if (t.type == "credit") {
      balance += t.amount;
    } else if (t.type == "debit") {
      balance -= t.amount;
    }
  });
  return balance;
}
console.log("Balance:", calculateTransactionBalance(transactions));

/* Task 10
Define an object named `foxPack` containing an array of fox objects.
Each fox has `name`, `age`, and `furColor`.
Write a function that filters out only the foxes that are younger than 2.
*/

// Your code here
const foxPack = {
  foxes: [
    {
      name: "Rusty",
      age: 3,
      furColor: "Red",
    },
    {
      name: "Snow",
      age: 2,
      furColor: "White",
    },
    {
      name: "Shadow",
      age: 4,
      furColor: "Black",
    },
    {
      name: "Amber",
      age: 1,
      furColor: "Orange",
    },
  ],
};

const filterAges = (pack) => {
  return pack.foxes.filter((fox) => fox.age < 2);
};

console.log(filterAges(foxPack));

/* Task 11
Create an object `gameCharacter` with properties `name`, `level`, `health`, and `inventory` (an array).
Write a function that logs all items in the character’s inventory.
*/

// Your code here
const gameCharacter = {
  name: "Arin the Brave",
  level: 5,
  health: 100,
  inventory: ["Sword", "Shield", "Health Potion"],
};

const printInventory = (character) => {
  console.log(character.inventory);
  console.log(character.inventory.join(", "));
};
console.log(gameCharacter);

/* Task 12
Define an array named `employees`, where each employee has a `name`, `role`, and `workingHours`.
Write a function that finds and logs employees who work more than 40 hours.
*/

// Your code here
const employees = [
  {
    name: "Sami",
    role: "Manager",
    workingHours: 40,
  },
  {
    name: "Lina",
    role: "Cashier",
    workingHours: 41,
  },
  {
    name: "Tom",
    role: "Security Guard",
    workingHours: 20,
  },
  {
    name: "Nora",
    role: "Cleaner",
    workingHours: 45,
  },
];
// the e you use whatever inside the parentheses
const workhours = (e) => {
  if (e.workingHours > 40) {
    console.log(e.name);
  }
};
employees.forEach(workhours);

/* Task 13
Create an array `musicAlbums` where each album has `title`, `artist`, and `releaseYear`.
Write a function that logs albums released after 2000.
*/

// Your code here
const musicAlbums = [
  {
    title: "Thriller",
    artist: "Michael Jackson",
    releaseYear: 1982,
  },
  {
    title: "Back in Black",
    artist: "AC/DC",
    releaseYear: 1980,
  },
  {
    title: "Rumours",
    artist: "Fleetwood Mac",
    releaseYear: 1977,
  },
  {
    title: "21",
    artist: "Adele",
    releaseYear: 2011,
  },
  {
    title: "Future Nostalgia",
    artist: "Dua Lipa",
    releaseYear: 2020,
  },
];

function albumReleased(album) {
  album.forEach((a) => {
    if (album.releaseYear >= 2000) {
      console.log(a.title, ": was released after 2000");
    } else {
      console.log(a.title, ": was released before 2000");
    }
  });
}
albumReleased(musicAlbums);
/* Task 14
Define an array named `cars`, each containing `brand`, `model`, and `horsepower`.
Write a function that finds and returns the car with the highest horsepower.
*/

// Your code here

const cars = [
  {
    brand: "Toyota",
    model: "Corolla",
    horsepower: 132,
  },
  {
    brand: "Ford",
    model: "Mustang",
    horsepower: 450,
  },
  {
    brand: "BMW",
    model: "320i",
    horsepower: 184,
  },
  {
    brand: "Tesla",
    model: "Model 3",
    horsepower: 283,
  },
  {
    brand: "Audi",
    model: "A4",
    horsepower: 201,
  },
];

const getMostPowerful = (cars) => {
  // käytetään säilyttämään haluttu auto
  let largest;

  // käytetään vertailemaan hevosvoima
  let measurement = 0;

  cars.map((car) => {
    // jos löytyy auto suuremmalla hevosvoimaalla juin entinen suurin:
    if (car.horsepower > measurement) {
      // päivitä hevosvoima ja vahvin auto
      measurement = car.horsepower;

      largest = car;
    }
  });
  // paluata vahvin auto
  return largest;
};

console.log(getMostPowerful(cars));

/* Task 15
Create an array of `airports`, where each airport has `name`, `country`, and `flightsPerDay`.
Write a function that finds the airport with the most daily flights.
*/

// Your code here
/* Task 15
Create an array of `airports`, where each airport has `name`, `country`, and `flightsPerDay`.
Write a function that finds the airport with the most daily flights.
*/

const airports = [
  {
    name: "Helsinki-Vantaa Airport",
    country: "Finland",
    flightsPerDay: 350,
  },
  {
    name: "Heathrow Airport",
    country: "United Kingdom",
    flightsPerDay: 1200,
  },
  {
    name: "John F. Kennedy International Airport",
    country: "USA",
    flightsPerDay: 1000,
  },
  {
    name: "Tokyo Haneda Airport",
    country: "Japan",
    flightsPerDay: 1100,
  },
  {
    name: "Dubai International Airport",
    country: "United Arab Emirates",
    flightsPerDay: 1400,
  },
];

const getMostDailyFlight = (planes) => {
  let largest;
  let measurement = 0;

  planes.map((plane) => {
    if (plane.flightsPerDay > measurement) {
      measurement = plane.flightsPerDay;
      largest = plane;
    }
  });

  return largest;
};

console.log(getMostDailyFlight(airports));
