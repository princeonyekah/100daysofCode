// Q22 - Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
var newArray = ["one", "two", "three", "four", "five", "six"];
console.log(newArray[7]);
// Q23 - Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// Look closely at your results, and make sure you understand why each line evaluates to True or False.
// Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
var country = "Nigeria";
console.log("is country == 'Nigeria'? I predict True");
console.log(country === "Nigeria");
var age = 16;
console.log("Is Person and Adult? >= 18? I predict false ");
console.log(age >= 18);
var food = "amala";
console.log(food === "beans");
// Q24 - More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// Tests for equality and inequality with strings
var president = "Trump";
console.log(president == "trump");
console.log(president != "Trump");
console.log(president === "Trump");
// Tests using the lower case function
var brand = "SAMSUNG";
console.log(brand.toLowerCase() == "samsung");
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var team_players = 11;
console.log(team_players >= 18);
console.log(team_players <= 18);
console.log(team_players === 18);
console.log(team_players === 11);
console.log(team_players != 18);
// Tests using "and" and "or" operators
// Using "and" (&&) operator
var isSunny = true;
var isWarm = false;
console.log("Is it sunny AND warm? I predict False.");
console.log(isSunny && isWarm); // False
var hasUmbrella = true;
var isRaining = false;
console.log("Do I have an umbrella AND is it raining? I predict False.");
console.log(hasUmbrella && isRaining); // False
var isWeekend = true;
var hasPlans = true;
console.log("Is it the weekend AND do I have plans? I predict True.");
console.log(isWeekend && hasPlans); // True
var isAdult = true;
var hasID = false;
console.log("Am I an adult AND do I have an ID? I predict False.");
console.log(isAdult && hasID); // False
var canDrive = true;
var hasLicense = true;
console.log("Can I drive AND do I have a license? I predict True.");
console.log(canDrive && hasLicense); // True
// Using "or" (||) operator
var isHungry = false;
var wantsSnack = true;
console.log("Am I hungry OR do I want a snack? I predict True.");
console.log(isHungry || wantsSnack); // True
var isWeekday = true;
var hasHomework = false;
console.log("Is it a weekday OR do I have homework? I predict True.");
console.log(isWeekday || hasHomework); // True
var canSwim = false;
var canFloat = true;
console.log("Can I swim OR can I float? I predict True.");
console.log(canSwim || canFloat); // True
var likesCoffee = false;
var likesTea = false;
console.log("Do I like coffee OR tea? I predict False.");
console.log(likesCoffee || likesTea); // False
var isTired = true;
var wantsToSleep = false;
console.log("Am I tired OR do I want to sleep? I predict True.");
console.log(isTired || wantsToSleep); // True
// Test whether an item is in a array
var dog = ["Roger", "Kind", "Pitbull"];
console.log(dog.includes("Roger"));
// Test whether an item is not in a array
