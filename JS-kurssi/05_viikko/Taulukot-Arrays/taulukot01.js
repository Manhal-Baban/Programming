// Exercise 1: Determine array length and conditional check
let myAlphabet = ["A", "B", "C", "D", "E", "F", "G"];
arraylength = myAlphabet.length;
console.log(arraylength);

/*
Create a function called myAlphabetLength that logs the length of the myAlphabet array.
If the length is 5 or more, log: "Array length is sufficient".
Otherwise, log: "Array length is too short."
*/
// Write your function here
function myAlphabetlength() {
  console.log("The arrry length is", arraylength);
  if (arraylength >= 5) {
    console.log("The array length is enough");
  } else {
    console.log("The array length is too short");
  }
}
myAlphabetlength();

// Exercise 2: Iterate over the planets array and log each planet with its index
const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter"];
planets.forEach(function (planet, index) {
  console.log(planet, index);
});

/*
Log each planet in the planets array along with its index.
Expected outcome:
"Planet: Mercury, Index: 0"
...
"Planet: Jupiter, Index: 4"
*/
// Write your code here
planets.forEach(function (planet, index) {
  console.log(`planet: ${planet} index; ${index}`);
});

// Exercise 3: Log array items with their types using mixedValues array
const mixedValues = [42, "Hello", true, { name: "Fox" }, null, undefined];

/*
Iterate over the mixedValues array, logging each item, its index, and data type.
Expected outcome:
"Item: 42, Index: 0, Type: number"
...
"Item: undefined, Index: 5, Type: undefined"
*/
// Write your code here
mixedValues.forEach((mixedVal, index) => {
  console.log(`object: ${mixedVal}, Index: ${index}, Type: ${typeof mixedVal}`);
});

// Exercise 4: Log each item of myArr without using a loop
let myArr = [1, "Dog", 3.14, false];

/*
Log each item in myArr without explicitly using a loop.
Expected outcome: 1, "Dog", 3.14, false
*/
// Write your code here
console.log(myArr[0]);
console.log(myArr[1]);
console.log(myArr[2]);
console.log(myArr[3]);

// Exercise 5: Find common animal species between reserve1Animals and reserve2Animals
let elainvarasto1 = ["Fox", "Deer", "Owl", "Bear"];
let elainvarasto2 = ["Bear", "Wolf", "Eagle", "Fox"];

/*
Identify and log any animal species found in both reserve1Animals and reserve2Animals.
Expected outcome:
"Common species: Fox"
"Common species: Bear"
*/
// Write your code here
// vaihtoehto 1:
console.log("Option 1");
for (let i = 0; i < elainvarasto1.length; i++) {
  if (elainvarasto2.includes(elainvarasto1[i])) {
    console.log(`Yhteinen laji: ${elainvarasto1[i]}`);
  }
}

// vaihtoehto 2:
console.log("Option 2");

let yhteiset = elainvarasto1.filter((elain) => elainvarasto2.includes(elain));
yhteiset.forEach((elain) => console.log(`Yhteinen laji: ${elain}`));

// vaihtoehto 3:
console.log("Option 3");

for (let elain of elainvarasto1) {
  if (elainvarasto2.indexOf(elain) !== -1) {
    console.log(`Yhteinen laji: ${elain}`);
  }
}

// Exercise 6: Log each letter of names from the animalNames array
let animalNames = ["Lion", "Tiger", "Panda"];

/*
For each item in the animalNames array, log every letter.
Expected outcome:
"Letters in 'Lion': L, i, o, n"
...
"Letters in 'Panda': P, a, n, d, a"
*/
// Write your code here
animalNames.forEach((name) => {
  let letters = name.split("").join(", ");
  console.log(`kirjaimet sanassa ${name}: ${letters}`);
});

// Exercise 7: Filter only positive temperatures from the temperatures array
let temperatures = [-10, 5, -3, 15, -8, 20, 2];

/*
Write a function getPositiveTemperatures that returns a new array
containing only temperatures greater than 0 from the temperatures array.
Expected outcome: [5, 15, 20, 2]
*/
// Write your function here
let positiveTemps = temperatures.filter((temp) => temp > 0);
console.log(positiveTemps);

// Exercise 8: Find the index of "Fox" in the zooAnimals array
let zooAnimals = ["Elephant", "Giraffe", "Panda", "Fox", "Kangaroo"];

/*
Find and store the index of "Fox" in the zooAnimals array.
Expected outcome: "Index of Fox: 3"
*/
// Write your code here

let foxIndex = zooAnimals.indexOf("Fox");
console.log(`The Fox index: ${foxIndex}`);

// Exercise 9: Try to find the index of an animal not in zooAnimals
/*
Find the index of "Penguin" in the zooAnimals array.
If it's not found, log "Penguin is not in the zoo."
Expected outcome: -1
*/
// Write your code here
const searchAnimal = (animal) => {
  let animalIndex = zooAnimals.indexOf(animal);
  if (animalIndex == -1) {
    console.log(`${animal} is not in the zoo`);
    console.log(animalIndex);
  }
};
searchAnimal("Pinguin");

// Exercise 10: Replace "Giraffe" with "Cheetah" in zooAnimals
/*
Replace "Giraffe" with "Cheetah" in the zooAnimals array.
Expected outcome: ['Elephant', 'Cheetah', 'Panda', 'Fox', 'Kangaroo']
*/
// Write your code here
let giraffeIndex = zooAnimals.indexOf("Giraffe");
//If the index is not -1,the excute
// the !== -1 means if it's not minus 1
if (giraffeIndex !== -1) {
  zooAnimals[giraffeIndex] = "Cheetah";
}
console.log(zooAnimals);

// Exercise 11: Sort the safariAnimals array alphabetically
let safariAnimals = ["Zebra", "Leopard", "Elephant", "Gazelle"];

/*
Sort the safariAnimals array in alphabetical order.
Expected outcome: ['Elephant', 'Gazelle', 'Leopard', 'Zebra']
*/
// Write your code here
let sortedAnimals = [...safariAnimals].sort();
console.log(sortedAnimals);

// Exercise 12: Reverse the order of the safariAnimals array
/*
Reverse the order of the safariAnimals array.
Expected outcome: ['Zebra', 'Leopard', 'Gazelle', 'Elephant']
*/
// Write your code here
let reversedAnimals = [...sortedAnimals].reverse();
console.log(reversedAnimals);

// Exercise 13: Check if "Tiger" is in zooAnimals
/*
Check if the zooAnimals array includes "Tiger".
Expected outcome:
true (if the array contains "Tiger")
false (if it does not)
*/
// Write your code here
let isTiger = safariAnimals.includes("Tiger");
console.log(isTiger);

// Exercise 14: Find all occurrences of "John" in attendees
let attendees = ["John", "Sarah", "John", "Alex", "John"];

/*
Find all positions where "John" appears in the attendees array.
Expected outcome: [0, 2, 4]
*/
// Write your code here
let johnIndexes = [];

attendees.forEach((name, index) => {
  if (name == "John") {
    johnIndexes.push(index);
    //console.log(index)
  }
});
console.log(johnIndexes);

// Exercise 15: Convert all names in attendees array to uppercase
/*
Create a new array where every name in attendees is written in uppercase.
Expected outcome: ['JOHN', 'SARAH', 'JOHN', 'ALEX', 'JOHN']
*/
// Write your code here

let uppercaseName = attendees.map((name) => name.toUpperCase());
console.log(uppercaseName);

// Exercise 16: Merge forestAnimals and farmAnimals arrays
let forestAnimals = ["Deer", "Bear", "Wolf"];
let farmAnimals = ["Cow", "Sheep", "Goat"];

/*
Merge forestAnimals and farmAnimals into a new array.
Expected outcome: ['Deer', 'Bear', 'Wolf', 'Cow', 'Sheep', 'Goat']
*/
// Write your code here
let allAnimals = forestAnimals.concat(farmAnimals);
console.log(allAnimals);

// Exercise 17: Remove first and last elements from birdSpecies
let birdSpecies = ["Eagle", "Owl", "Hawk", "Sparrow", "Penguin"];

/*
Remove the first and last elements from the birdSpecies array.
Expected outcome: ['Owl', 'Hawk', 'Sparrow']
*/
// Write your code here
let newArray = birdSpecies.slice(1, -1);
console.log(newArray);

// Exercise 18: Use `splice` to remove and replace elements in numbers
let numbers = [10, 20, 30, 40, 50];

/*
Use splice to remove "30" and replace it with "25" and "27".
Expected outcome: [10, 20, 25, 27, 40, 50]
*/
// Write your code here
numbers.splice(2, 1, 25, 27);
console.log(numbers);

// Exercise 19: Increase each price by 10% using `map`
let prices = [5, 10, 15, 20];

/*
Create a new array where each price is increased by 10%.
Expected outcome: [5.5, 11, 16.5, 22]
*/
// Write your function here
let increasedPrices = prices.map((price) => price * 1.1);
console.log(increasedPrices);

// Exercise 20: Filter words longer than 5 letters using `filter`
let words = ["apple", "banana", "cherry", "kiwi", "strawberry"];

/*
Create a new array containing only words longer than 5 letters from the words array.
Expected outcome: ['banana', 'cherry', 'strawberry']
*/
// Write your function here
let longWords = words.filter((word) => word.length > 5);
console.log(longWords);
