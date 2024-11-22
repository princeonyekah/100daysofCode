// Question 88: Converting Strings to Numbers: Write a function that takes a string representation of a number (e.g., "123") and converts it into an actual number type.

function convertString(someNumber) {
  let convSomeNumber = Number(someNumber);

  console.log(someNumber);
  console.log(typeof convSomeNumber);
}

convertString("1995");

// Question 89: Rounding Numbers: Create a function that takes a number with decimals (e.g., 3.14159) and rounds it to two decimal places.

function roundNumbers(decimal) {
  return decimal.toFixed(2);
}

console.log(roundNumbers(3.145679349495));

// Question 90: Generating Random Numbers: Write a function that generates a random number between 1 and 10, inclusive.

function genRandom() {
  let numberRand = Math.random() * 10;
  return numberRand.toFixed(1);
}

console.log(genRandom());
