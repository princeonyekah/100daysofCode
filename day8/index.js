// Q22 - Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

let arr = [1, 2, 3];

try {
    console.log(arr[7]); // Attempting to access an out-of-bounds index
} catch (e) {
    console.error("Caught an error: " + e.message);
}

// Q23 - Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// Look closely at your results, and make sure you understand why each line evaluates to True or False.

var car = "subaru";
console.log("Is car == 'subaru'? I predict true");
console.log(car == "subaru");
console.log("Is car == 'toyota'? I predict false");
console.log(car == "toyota");
// Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

var moon = "black"

console.log(moon == "white") //false
console.log(moon == "black")


// Q24 - More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// Tests for equality and inequality with strings

var drama = "Tales of Two Cities"

console.log(drama == "Tale")
console.log(drama != "Truth")



// Tests using the lower case function

small_letters = drama.toLowerCase()

console.log(small_letters == "tales of two cities")


// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

console.log(5 > 9)
console.log("next")
// Tests using "and" and "or" operators
console.log(true && true)
console.log(true || false)
console.log(false || false)
// Test whether an item is in a array
const array = [1,2,3,4]

console.log(array.includes(2))
// Test whether an item is not in a array
console.log(array.includes(8))