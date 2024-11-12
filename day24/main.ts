// Q22 - Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.


let newArray = ["one", "two", "three","four","five","six"]

console.log(newArray[7])


// Q23 - Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')
// Look closely at your results, and make sure you understand why each line evaluates to True or False.

// Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

let country = "Nigeria"
console.log("is country == 'Nigeria'? I predict True")
console.log(country === "Nigeria")


let age = 16

console.log("Is Person and Adult? >= 18? I predict false ")
console.log(age >= 18)

let food = "amala"
console.log(food === "beans")

// Q24 - More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// Tests for equality and inequality with strings

let president = "Trump"

console.log(president == "trump")
console.log(president != "Trump")
console.log(president === "Trump")

// Tests using the lower case function


let brand = "SAMSUNG"
console.log(brand.toLowerCase() == "samsung")



// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to


let team_players = 11

console.log(team_players >= 18)
console.log(team_players <= 18)
console.log(team_players === 18)
console.log(team_players === 11)
console.log(team_players != 18)

// Tests using "and" and "or" operators

// Using "and" (&&) operator
let isSunny = true;
let isWarm = false;

console.log("Is it sunny AND warm? I predict False.");
console.log(isSunny && isWarm); // False

let hasUmbrella = true;
let isRaining = false;

console.log("Do I have an umbrella AND is it raining? I predict False.");
console.log(hasUmbrella && isRaining); // False

let isWeekend = true;
let hasPlans = true;

console.log("Is it the weekend AND do I have plans? I predict True.");
console.log(isWeekend && hasPlans); // True

let isAdult = true;
let hasID = false;

console.log("Am I an adult AND do I have an ID? I predict False.");
console.log(isAdult && hasID); // False

let canDrive = true;
let hasLicense = true;

console.log("Can I drive AND do I have a license? I predict True.");
console.log(canDrive && hasLicense); // True

// Using "or" (||) operator
let isHungry = false;
let wantsSnack = true;

console.log("Am I hungry OR do I want a snack? I predict True.");
console.log(isHungry || wantsSnack); // True

let isWeekday = true;
let hasHomework = false;

console.log("Is it a weekday OR do I have homework? I predict True.");
console.log(isWeekday || hasHomework); // True

let canSwim = false;
let canFloat = true;

console.log("Can I swim OR can I float? I predict True.");
console.log(canSwim || canFloat); // True

let likesCoffee = false;
let likesTea = false;

console.log("Do I like coffee OR tea? I predict False.");
console.log(likesCoffee || likesTea); // False

let isTired = true;
let wantsToSleep = false;

console.log("Am I tired OR do I want to sleep? I predict True.");
console.log(isTired || wantsToSleep); // True

// Test whether an item is in a array

let dog:string[] = ["Roger", "Kind", "Pitbull"]

console.log(dog.includes("Roger"))

// Test whether an item is not in a array