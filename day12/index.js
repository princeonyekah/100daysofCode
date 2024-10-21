// Q34 - Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.

// Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

// Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

var fav_pizza = ["Margherita", "Pepperoni", "Hawaiian", "BBQ Chicken"]

for(let i = 0; i < fav_pizza.length; i++){
    console.log(fav_pizza[i])
}

for(let i = 0; i < fav_pizza.length; i++){
    console.log(`I love ${fav_pizza[i]} pizza!`)
}

var msg = "I love pizza that taste greaat with nice exquisite flavor \nYou should get a taste of BBQ pizza \nI do love pizza so much."

console.log(msg)

// Q35 - Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal.

// Modify your program to print a statement about each animal, such as A dog would make a great pet.
// Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

var similar_animals = ["owl","bats","hawk"]

similar_animals.forEach( animal => {
    console.log(animal)
});

similar_animals.forEach( animal => {
    console.log(`${animal} would make such a good sight`)
});

var msg = "These animals can fly!"

console.log(msg)
// Q36 - T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

function make_shirt(size, message) {
    console.log(`The shirt size is ${size} and the message printed on it is: "${message}"`);
}

make_shirt(42,"When we vote, we win!")