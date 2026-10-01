// Exercise 3 - Arrays and Loops
// Pure logic, no browser needed - run with: node main.js

// Part 1 - Make an array of favorite fruits, then log each one with a for loop.
const fruits = ['Avocado', 'Banana', 'Blueberries'];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Part 2 - Function: take an array of numbers, return their average.
const numbers = [1, 2, 3];

function average(nums) {
  const sum = nums.reduce((acc, cur) => acc + cur, 0);
  return sum / nums.length;
}

// Test on two different arrays to show it works on any input
console.log(average(numbers)); // 2
console.log(average([1, 2, 3, 4, 5])); // 3

// Part 3 - Loop through an array of numbers to find and log the largest one.


// Part 4 - Make an array of words, join them into a sentence, log the sentence.


// Part 5 - Function: take an array of names + one name; return true/false if it's in the array.


// Part 6 - Use a for loop + if to collect even numbers from 1 to 20 into an array, then log it.