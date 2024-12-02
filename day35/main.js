// Question 103: Write a function that returns a random boolean value, true or false.

function randBool(){
    let res = Math.random() >= 0.5
    return res
}

console.log(randBool())
// Question 104: Create a function that generates a random hexadecimal color code.
function randomHex (){
    let rand = Math.floor(Math.random() * 16777215).toString(16)
    console.log(`#${rand}`)
}

console.log(randomHex())
// Question 105: Simulate a dice roll using JavaScript and return a random integer between 1 and 6.

function diceRoll(){
    let numero = Math.floor(Math.random() * 6 )+1
    return numero
}

console.log(diceRoll())