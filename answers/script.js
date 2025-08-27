/****************************************************
 * PART 1: JavaScript Basics
 ****************************************************/

// Variable declarations
let userAge = 20;   // number type
let userName = "Bruce Wayne";  // string type
let isMember = true;    // boolean type

// Conditional example (if/else)
if (userAge >= 18 && isMember) {
  console.log(userName + " is an adult member.");
} else if (userAge >= 18) {
  console.log(userName + " is an adult but not a member.");
} else {
  console.log(userName + " is not an adult.");
}


/****************************************************
 * PART 2: Functions (Reusability)
 ****************************************************/

// Function 1: Calculate total price with tax
function calculateTotal(price, taxRate) {
  let total = price + (price * taxRate);
  return total;   // return allows reuse
}
console.log("Total price: $" + calculateTotal(100, 0.08));


// Function 2: Format a string into title case
function formatTitle(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
console.log(formatTitle("hello WORLD"));


/****************************************************
 * PART 3: Loops (Repetition)
 ****************************************************/

// Loop 1: for loop counting down
for (let i = 5; i > 0; i--) {
  console.log("Countdown: " + i);
}

// Loop 2: while loop iterating over an array
let fruits = ["Watermelon", "Banana", "Kiwi", "PassionFruit"];
let index = 0;
while (index < fruits.length) {
  console.log("Fruit: " + fruits[index]);
  index++;
}


/****************************************************
 * PART 4: DOM Manipulation
 ****************************************************/

// Select DOM elements
const output = document.getElementById("output");
const btnChangeText = document.getElementById("btnChangeText");
const btnToggleColor = document.getElementById("btnToggleColor");
const btnAddItem = document.getElementById("btnAddItem");
const itemList = document.getElementById("itemList");

// DOM Interaction 1: Change text content
btnChangeText.addEventListener("click", function() {
  output.textContent = "The text has been changed!";
});

// DOM Interaction 2: Toggle CSS class
btnToggleColor.addEventListener("click", function() {
  output.classList.toggle("highlight");
});

// DOM Interaction 3: Add a new list item
btnAddItem.addEventListener("click", function() {
  let newItem = document.createElement("li");
  newItem.textContent = "New Item";
  itemList.appendChild(newItem);
});
