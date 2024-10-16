// Q28 - Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:

// If the person is less than 2 years old, print a message that the person is a baby.

// If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

// If the person is at least 4 years old but less than 13, print a message that the person is a kid.

// If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

// If the person is at least 20 years old but less than 65, print a message that the person is an adult.

// If the person is age 65 or older, print a message that the person is an elder.

var age = 3;

if (age < 2){
    console.log("You are a baby")
} else if ( 1 < age < 5){
    console.log("You are a toddler")
} else if ( 3 < age < 14){
    console.log("You are a kid")
} else if ( 12 < age < 20){
    console.log("You are a teenager")
} else if ( 19 < age < 65){
    console.log("You are an adult")
} else {
    console.log("You are an elder")
}

// Q29 - Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

// Make a array of your three favorite fruits and call it favorite_fruits.

// Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

const favorite_fruits = ["Apple", "Pears", "Orange"]

if (favorite_fruits.includes("Apple")){
    console.log(`You really love ${favorite_fruits[0]}`)
}

if(favorite_fruits.includes("Pears")){
    console.log(`You really love ${favorite_fruits[1]}`)
}

if(favorite_fruits.includes("Orange")){
    console.log(`You really love ${favorite_fruits[2]}`)
}

if (favorite_fruits.includes("Grapes")) {
    console.log("You really like grapes!");
}


// Q30 - Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:

// If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

// Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

const username = ['admin','lizzy','mabel','onyekah','faith']

username.forEach(function(element){
if(element == 'admin'){
    console.log(`Hello ${element}, would you like to see a status report?`)
} else {
    console.log(`Hello ${element}, thank you for logging in again`)
}
}
);

