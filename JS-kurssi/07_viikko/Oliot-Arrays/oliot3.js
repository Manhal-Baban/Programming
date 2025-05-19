/* Task 1
Create a constructor function `User` that takes `username` and `email` as parameters.
It should create an object with these properties and a method `showInfo` that logs user details.
Instantiate a new user and call `showInfo()`.
*/

/* Task 2
Modify Task 1: Use an ES6 `class` instead of a constructor function to define `User`.
Add a method `changeEmail(newEmail)` that updates the user's email.
*/

// Your code here
class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }
  showInfo() {
    console.log(`Username: ${this.username}, Email: ${this.email}`);
  }
  changeEmail(newEmail) {
    // muutetaan email
    this.email = newEmail;
  }
}
const user1 = new User("Manhal", "email@gmail.com");
user1.showInfo();
user1.changeEmail("newEmail@example.com");
user1.showInfo();

/* Task 3
Create an object `theme` with properties `name` (light or dark) and `isActive`.
Add a button in HTML. When clicked, toggle the theme between light and dark, updating the `isActive` property.
*/

// Your code here
let theme = {
  name: "light",
  isActive: true,
};

document.getElementById("themeBtn").addEventListener("click", () => {
  if (theme.name === "light") {
    theme.name = "dark";
  } else {
    theme.name = "light";
  }
  // Ei ole niin tarpeellinen
  if (theme.name === "dark") {
    theme.isActive = true;
  } else {
    theme.isActive = false;
  }
  document.body.setAttribute("data-theme", theme.name);
});

/* Task 4
Create an object `counter` with a `value` property.
Add two buttons in HTML: one to increase `value`, another to decrease it.
Display `value` in an HTML element and update it dynamically when buttons are clicked.
*/

// Your code here

const counter = {
  value: 0,
};
const val = document.getElementById("val");
document.getElementById("inc").addEventListener("click", () => {
  console.log("Increase clicked");
  counter.value++;
  val.textContent = counter.value;
});

document.getElementById("dec").addEventListener("click", () => {
  console.log("Decrease clicked");
  counter.value--;
  val.textContent = counter.value;
});
/* Task 5
Create an object `product` with `name`, `price`, and `quantity`.
Add an input field in HTML where the user can enter a quantity to purchase.
Update the `quantity` property and display the total price dynamically.
*/

// Your code here
const product = { name: "Product", price: 10.0, quantity: 1 };
document.getElementById("itemName").textContent = product.name;
document.getElementById("itemPrice").textContent = product.price;

const qtyInput = document.getElementById("qty");
const total = document.getElementById("total");

const updateTotal = () => {
  product.quantity = parseInt(qtyInput.value);
  total.textContent = `total € ${product.price * product.quantity}`;
};
qtyInput.addEventListener("input", updateTotal);
updateTotal();

/* Task 6
Define a `Task` constructor that takes `title`, `description`, and `completed`.
Add a button in HTML that, when clicked, adds a new `Task` object to a `tasks` array and displays it on the page.
*/

// Your code here
class Task {
  constructor(title, description, completed) {
    this.title = title;
    this.description = description;
    this.completed = completed;
  }
}
const tasks = [];

document.getElementById("addTask").addEventListener("click", () => {
  const title = document.getElementById("title").value;
  const description = document.getElementById("desc").value;
  const completed = document.getElementById("completed").checked;

  const task = new Task(title, description, completed);
  tasks.push(task);

  const li = document.createElement("li");
  li.textContent = `${task.title} - ${task.description} (${
    task.completed ? "completed" : "not finished"
  })`;
  document.getElementById("taskList").appendChild(li);
});

/* Task 7
Create an object `weatherApp` with a method `fetchWeather(city)`.
Use `fetch` to get weather data from an API and display it in an HTML element.
(API: OpenWeather or any free weather API)
*/

// Your code here

/* Task 8
Create a constructor function `Car` that takes `brand`, `model`, and `year`.
In the constructor, add a method `age()` that calculates the car’s age.
Instantiate a new `Car` and display its age on the webpage.
*/

// Your code here
class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  getAge() {
    let age = new Date().getFullYear() - this.year;
    return age;
  }
}

const myCar = new Car("Bat", "Mobile", 2025);
console.log(myCar.getAge());

document.getElementById("carInfo").textContent = `Car: ${myCar.brand}, ${
  myCar.model
}, Age: ${myCar.getAge()} year`;

/* Task 9
Create an array `users` where each user has `name` and `score`.
Add a button in HTML that sorts the users by score in descending order and updates the displayed list.
*/

// Your code here
const users = [
  {
    name: "Alice",
    score: 85,
  },
  {
    name: "Bob",
    score: 92,
  },
  {
    name: "Charlie",
    score: 78,
  },
  {
    name: "Diana",
    score: 88,
  },
];

const userList = document.getElementById("userList");

function renderSortedUsers() {
  // Clear the old list
  userList.innerHTML = "";

  // Render sorted users
  users.forEach((u) => {
    const li = document.createElement("li");
    li.textContent = `${u.name} - ${u.score}`;
    userList.appendChild(li);
  });
}

// Sort and render when button is clicked
document.getElementById("sortUsers").addEventListener("click", () => {
  users.sort((a, b) => b.score - a.score);
  renderSortedUsers();
});

// Initial render
renderSortedUsers();

/* Task 10
Create an object `shoppingList` with an array `items`.
Add an input field and button to allow users to add new items to `items` and display the updated list.
*/

// Your code here
const shoppingList = { items: [] };

const listElement = document.getElementById("list");

document.getElementById("addItem").addEventListener("click", () => {
  const item = document.getElementById("itemInput").value;
  if (item) {
    shoppingList.items.push(item);
    const li = document.createElement("li");
    li.textContent = item;
    listElement.appendChild(li);
    document.getElementById("itemInput").value = "";
  }
});

/* Task 11
Create an array of `posts` where each post has `title`, `content`, and `likes`.
Add a "Like" button next to each post that increases the `likes` count and updates the display.
*/

// Your code here
const posts = [
  {
    title: "My First Post",
    content: "Today I started learning JavaScript. It's really fun!",
    likes: 12,
  },
  {
    title: "A Day in My Life",
    content: "I went to school, studied coding, and worked the night shift.",
    likes: 25,
  },
  {
    title: "JavaScript Tips",
    content: "Always use const or let. Avoid var. Comment your code.",
    likes: 33,
  },
];

const postsElement = document.getElementById("posts");

const renderPosts = () => {
  postsElement.innerHTML = "";

  posts.forEach((post, index) => {
    const li = document.createElement("li");

    li.innerHTML = `<strong>${post.title}</strong>: ${post.content}
    <br />
    <button data-id="${index}">Like (${post.likes})</button>
    `;
    postsElement.appendChild(li);
  });
};

postsElement.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const index = e.target.getAttribute("data-id");
    posts[index].likes++;
    renderPosts();
  }
});

renderPosts();

/* Task 12
Create a constructor function `Employee` with `name`, `position`, and `salary`.
Add a method `increaseSalary(percent)` that increases the salary by a given percentage.
Create an employee and increase their salary dynamically.
*/

// Your code here

class Employee {
  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }

  increaseSalary(percentage) {
    this.salary = parseFloat((this.salary * percentage).toFixed(2));
  }

  getInfo() {
    console.log(
      `Employee: ${this.name} -- ${this.position}. Salary is: ${this.salary}`
    );
  }
}

const employee = new Employee("Manhal Baban", "CEO", 100);
employee.getInfo(); // Salary is: 100
employee.increaseSalary(1.15);
employee.getInfo(); // Salary is: 115.00

/* Task 13
Create an object `timer` with `seconds` and a method `start()` that counts seconds up.
Display the timer in an HTML element and update it every second.
*/

// Your code here
const timer = {
  seconds: 0,
  intervalId: null,

  start() {
    if (this.intervalId) return; // Prevent multiple timers
    this.intervalId = setInterval(() => {
      this.seconds++;
      document.getElementById("timer").textContent = this.seconds;
    }, 1000);
  },

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  },

  reset() {
    this.stop(); // Stop the timer
    this.seconds = 0; // Reset seconds
    document.getElementById("timer").textContent = this.seconds;
  },
};

document.getElementById("start").addEventListener("click", () => {
  console.log("Start button clicked");
  timer.start();
});

document.getElementById("stop").addEventListener("click", () => {
  console.log("Stop button clicked");
  timer.stop();
});

/* Task 14
Create a constructor function `Book` that takes `title`, `author`, and `pages`.
Create a simple book library that allows users to add books via an HTML form and displays them dynamically.
*/

// Your code here

class Book {
  constructor(name, author, pages) {
    this.name = name;
    this.author = author;
    this.pages = pages;
  }
}

document.getElementById("bookForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;

  const book = new Book(name, author, pages);
  console.log(book);

  const li = document.createElement("li");
  li.textContent = `${book.name} by ${book.author}, ${book.pages} pages`;
  document.getElementById("books").appendChild(li);

  e.target.reset();
});

/* Task 15
Create an object `foxTracker` with a `foxes` array.
Add an input field and button that allows users to add new foxes (with name and location) to the array.
Display the list of foxes dynamically in an HTML element.
*/

// Your code here
const foxTracker = {
  foxes: [],
};

document.getElementById("addFox").addEventListener("click", () => {
  console.log("Here");
  const name = document.getElementById("foxname").value;
  const location = document.getElementById("loc").value;

  console.log(name);
  console.log(location);

  if (name && location) {
    console.log("Goes here");
    foxTracker.foxes.push({ name, loc });

    const li = document.createElement("li");
    li.textContent = `${name} @ ${location}`;
    document.getElementById("foxes").appendChild(li);

    document.getElementById("name").value = "";
    document.getElementById("loc").value = "";
  }
});
