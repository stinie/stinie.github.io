// Exercise 7 - DOM Manipulation
// Runs in the browser (open index.html), not Node.

// Part 1 - Change the div's text when the button is clicked.
const changeTextButton = document.querySelector("#changeTextButton");
const textContainer = document.querySelector("#textContainer");

changeTextButton.addEventListener("click", () => {
  textContainer.textContent = "The text has changed!";
});

// Part 2 - Add a new <li> to a list when a button is clicked.
const addItemButton = document.querySelector("#addItemButton");
const todoList = document.querySelector("#todoList");

addItemButton.addEventListener("click", () => {
  const newItem = document.createElement("li"); // make a new <li> element
  newItem.textContent = "New item";             // put text inside it
  todoList.appendChild(newItem);                // attach it to the <ul>
});

// Part 3 - Change an image's source when a button is clicked.

// Part 4 - Validate a login form on submit; show a success/failure message.