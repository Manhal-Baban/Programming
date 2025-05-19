/* Task 1
Store a string `"Hello, LocalStorage!"` in LocalStorage under the key `"message"`.
Retrieve it and log it to the console.
*/

// Your code here
localStorage.setItem("message", "hello localStorage");
const messageFromStorage = localStorage.getItem("message");
console.log(messageFromStorage);

/* Task 2
Create an object `userSettings` with:
- `theme` ("dark" or "light")
- `language` ("English", "Spanish", etc.)

Convert it to a JSON string and store it in LocalStorage.
Retrieve it, parse it, and log the `theme` property.
*/

// Your code here
const userSettings = { theme: "dark", language: "English" };
let userSettingsJSON = JSON.stringify(userSettings);
localStorage.setItem("userSettings", userSettingsJSON);
let storedUserSettingsJSON = localStorage.getItem("userSettings");
let storedUserSettings = JSON.parse(storedUserSettingsJSON);
console.log(storedUserSettings.theme);

// mudar example
localStorage.setItem("userSettings", JSON.stringify(userSettings));
console.log(JSON.parse(localStorage.getItem("userSettings")).theme);

/* Task 3
Define an array `favoriteBooks` with at least three book objects (`title` and `author`).
Store the array in LocalStorage.
Retrieve and parse it, then log the titles of all books.
*/

// Your code here
let favoriteBooks = [
  { title: "Sinuhe egyptiläinen", author: "Mika Waltari" },
  { title: "Taru sormusten herrasta", author: "J.R.R. Tolkien" },
  { title: "Ylpeys ja ennakkoluulo", author: "Jane Austen" },
];

let favoriteBooksJSON = JSON.stringify(favoriteBooks);
localStorage.setItem("favoriteBooks", favoriteBooksJSON);
let localFavoriteBooksJSON = localStorage.getItem("favoriteBooks");
let localFavoriteBooks = JSON.parse(localFavoriteBooksJSON);
console.log(localFavoriteBooks[0].title);
console.log(localFavoriteBooks[1].title);
console.log(localFavoriteBooks[2].title);

/* Task 4
Write a function `saveToLocalStorage(key, object)` that:
- Converts an object to JSON.
- Stores it in LocalStorage under the provided key.
Test it by saving an object and retrieving it.
*/

// Your code here
const saveToLocalStorage = (key, object) => {
  localStorage.setItem(key, JSON.stringify(object));
};
saveToLocalStorage("books", favoriteBooks);
console.log(JSON.parse(localStorage.getItem("books")));

/* Task 5
Write a function `getFromLocalStorage(key)` that:
- Retrieves a value from LocalStorage.
- Parses it if it's JSON.
- Logs the retrieved value.
*/

// Your code here
const getFromLocalStorage = (key) => {
  const value = localStorage.getItem(key);
  try {
    // yrittää ajaa tätä
    console.log(JSON.parse(value));
    return JSON.parse(value);
    // jos tuottaa virheen
  } catch (error) {
    // se siirtty tähän
    console.log(value);
    return value;
  }
};
getFromLocalStorage("books");
getFromLocalStorage("message");

/* Task 6
Create an object `userProfile` with:
- `username`
- `email`
- `preferences` (an object with `theme` and `notifications`)

Save it to LocalStorage.
Retrieve and update the `theme` property to `"dark mode"`, then log the updated object.
*/

// Your code here
let userProfile = {
  username: "exampleUser",
  email: "user@example.com",
  preferences: {
    theme: "light",
    notifications: true,
  },
};
saveToLocalStorage("profile", userProfile);
getFromLocalStorage("profile");

userProfile.preferences.theme = "dark";

saveToLocalStorage("profile", userProfile);
getFromLocalStorage("profile");

/* Task 7
Define an object `shoppingList` with an array `items` (strings).
Save it to LocalStorage.
Write a function `addItemToList(item)` that:
- Retrieves `shoppingList` from LocalStorage.
- Adds a new item.
- Saves the updated list back to LocalStorage.
- Logs the updated list.
*/

// Your code here

const shoppingList = {
  items: ["maito", "leipä", "juusto", "omena"],
};
saveToLocalStorage("shoppingList", shoppingList);

const addItemToList = (item) => {
  const list = getFromLocalStorage("shoppingList");
  list.items.push(item);
  saveToLocalStorage("shoppingList", list);
  console.log(list);
};
addItemToList("mätitahna");

/* Task 8
Create a counter object with:
- `count` (starting at 0)
Store it in LocalStorage.
Write a function `incrementCounter()` that:
- Retrieves the counter.
- Increases `count` by 1.
- Saves the updated counter.
- Logs the new count.
*/

// Your code here
let counter = { count: 0 };
saveToLocalStorage("counter", counter);
const incrementCounter = () => {
  let inc = getFromLocalStorage("counter"); // hakee olion "counter"
  inc.count++; // ksvatta yhdellä
  saveToLocalStorage("counter", inc); // tallentaa sen
  console.log(inc.count);
};
incrementCounter();
incrementCounter();
incrementCounter();
incrementCounter();

/* Task 9
Create an array `tasks`, where each task is an object (`id`, `description`, `completed`).
Save it to LocalStorage.
Write a function `markTaskComplete(taskId)` that:
- Retrieves `tasks` from LocalStorage.
- Finds the task with the given ID and sets `completed` to `true`.
- Saves the updated tasks.
- Logs the updated list.
*/

// Your code here
const tasks = [
  { id: 1, description: "Vie roskat", completed: false },
  { id: 2, description: "Tee kotitehtävät", completed: false },
  { id: 3, description: "Käy kaupassa", completed: false },
];

saveToLocalStorage("tasks", tasks);
const markTaskComplete = (taskId) => {
  let tasks = getFromLocalStorage("tasks");
  let task = tasks.find((t) => t.id === taskId);
  if (task) {
    task.completed = true;
  }
  saveToLocalStorage("tasks", tasks);
  console.log(tasks);
};

markTaskComplete(2);

/* Task 10
Write a function `clearLocalStorage()` that removes all data stored in LocalStorage.
Call it and confirm LocalStorage is empty.
*/

// Your code here
function clearLocalStorage() {
  localStorage.clear();
}
clearLocalStorage();
