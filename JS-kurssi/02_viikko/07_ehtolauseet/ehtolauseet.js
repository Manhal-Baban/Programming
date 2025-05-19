// numero 1

/* 
Kirjoita funktio nimeltä checkAdult:
Ota ikä parametrina.
Jos ikä on 18 tai enemmän, palauta "Olet aikuinen."
Muussa tapauksessa älä palauta mitään.
Kutsu funktiota eri ikäarvoilla ja tulosta tulos.
*/

function checkAdult(age) {
  if (age >= 18) {
    return "Olet aikuinen.";
  }
}

// Test with different ages:
console.log(checkAdult(20)); // "Olet aikuinen."
console.log(checkAdult(17)); // undefined
console.log(checkAdult(18)); // "Olet aikuinen."

//__________________
// numero 2

/* 
Kirjoita funktio nimeltä checkForFox:
Ota looginen parametri hasFox.
Jos hasFox on tosi, palauta "Sinulla on lemmikkikettu!"
Muussa tapauksessa palauta "Ei havaittu kettua!"
Kutsu funktiota arvoilla true ja false ja tulosta tulos.
*/

function checkForFox(hasFox) {
  if (hasFox) {
    return "Sinulla on lemmikkikettu!";
  } else {
    return "Ei havaittu kettua!";
  }
}

// Test the function
console.log(checkForFox(true)); // Expected output: "Sinulla on lemmikkikettu!"
console.log(checkForFox(false)); // Expected output: "Ei havaittu kettua!"

//__________________
//numero 3

/* 
Write a function named getGrade:
Take a score as a parameter.
If score is 90 or higher, return "Grade A".
If score is between 80 and 89, return "Grade B".
For any other score, return "Grade C".
Call the function with scores like 85 and 75 and print the result. 
*/

function getGrade(score) {
  if (score >= 90) {
    return "Grade A";
  } else if (score >= 80) {
    return "Grade B";
  } else {
    return "Grade C";
  }
}

console.log(getGrade(85)); // Call with score 85
console.log(getGrade(75)); // Call with score 75

//_____________
//numero 4

/* 
Write a function named canEat:
Take two parameters: isHungry and hasFood.
If both are true, return "Time to eat!".
If either is false, return "You need to find food!"
Call the function with different combinations of isHungry and hasFood. 
*/

function canEat(isHungry, hasFood) {
  if (isHungry && hasFood) {
    return "Time to eat!";
  } else {
    return "You need to find food!";
  }
}

// Test the function with different combinations
console.log(canEat(true, true)); // Expected output: "Time to eat!"
console.log(canEat(true, false)); // Expected output: "You need to find food!"
console.log(canEat(false, true)); // Expected output: "You need to find food!"
console.log(canEat(false, false)); // Expected output: "You need to find food!"

//________________
// numero 5

/* 
Write a function named checkAnimal:
Take a parameter animalType.
Use a ternary operator to return:
"You have a clever companion!" if animalType is "fox".
"Not a fox, but still cool!" otherwise.
Call the function with values like "fox" and "cat". 
*/

function checkAnimal(animalType) {
  return animalType === "fox"
    ? "You have a clever companion!"
    : "Not a fox, but still cool!";
}

// Test the function with different values
console.log(checkAnimal("fox")); // Expected output: "You have a clever companion!"
console.log(checkAnimal("cat")); // Expected output: "Not a fox, but still cool!"

//_________
// numero 6

/*
Write a function named isEven:
Take a number as a parameter.
Return true if the number is even, or false if it’s odd.
Call the function with numbers like 4 and 7, and print "The number is even!" or "The number is odd!" based on the result. 
*/

function isEven(number) {
  return number % 2 === 0;
}

// Call the function and print messages based on the result
let result1 = isEven(4);
if (result1) {
  console.log("The number is even!");
} else {
  console.log("The number is odd!");
}

let result2 = isEven(7);
if (result2) {
  console.log("The number is even!");
} else {
  console.log("The number is odd!");
}

//_______________
// numero 7

/* 
Write a function named getAnimalDescription:
Take a parameter favoriteAnimal.
Use a switch statement to:
If "fox", return "Foxes are sly and smart!"
If "dog", return "Dogs are loyal friends."
If "cat", return "Cats are curious and independent."
For any other animal, return "All animals are awesome!"
Call the function with different animal names. 
*/

function getAnimalDescription(favoriteAnimal) {
  switch (favoriteAnimal) {
    case "fox":
      return "Foxes are sly and smart!";
    case "dog":
      return "Dogs are loyal friends.";
    case "cat":
      return "Cats are curious and independent.";
    default:
      return "All animals are awesome!";
  }
}

// Call the function with different animal names
console.log(getAnimalDescription("fox")); // Expected: "Foxes are sly and smart!"
console.log(getAnimalDescription("dog")); // Expected: "Dogs are loyal friends."
console.log(getAnimalDescription("cat")); // Expected: "Cats are curious and independent."
console.log(getAnimalDescription("rabbit")); // Expected: "All animals are awesome!"

//_____________
// numero 8

/*
Write a function named canVote:
Take an age as a parameter.
Return true if the age is 18 or older, otherwise false.
Print "Eligible to vote" or "Not eligible to vote" based on the result of the function. 
*/

function canVote(age) {
  return age >= 18;
}

// Test the function
let result3 = canVote(20);
if (result3) {
  console.log("Eligible to vote");
} else {
  console.log("Not eligible to vote");
}

let result4 = canVote(16);
if (result4) {
  console.log("Eligible to vote");
} else {
  console.log("Not eligible to vote");
}

//__________
//numero 9
/* 
Write a function named canEnterEvent:
Take two parameters: age and hasID.
If age is 18 or older AND hasID is true, return "You can enter the event."
Otherwise, return "You cannot enter."
Call the function with different combinations of age and hasID. 
*/
