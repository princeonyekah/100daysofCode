// Question 70: Understanding let in Loops: Write a function that uses a loop with the let keyword to print numbers from 1 to 5. Explain how the let keyword affects the visibility of the loop variable.


function printNumbers(){
    for(i = 1; i <= 5; i++){
        console.log(i)
    }
}

printNumbers()

// Question 71: Compare let and const: Create two examples where let allows reassignment but const does not. Try to reassign a const-declared variable and catch the error.

let votes = 1

console.log(`number of votes = ${votes}`)

votes = 10

console.log(`number of votes = ${votes}`)

const max_votes = 30

console.log(`The maximum vote is ${max_votes}`)

try {max_votes = 50

} catch (error) {
console.log("Wrong")
}


// Question 72: Block Scope with let and const: Demonstrate block scope by creating a code block with {} that uses both let and const. Show how variables declared inside the block are not accessible outside of it.

{
    let x = 10;
    const y = 20;
    console.log("Inside block:");
    console.log("x:", x);
    console.log("y:", y);
}

try {
    console.log("Outside block:");
    console.log("x:", x);
} catch (error) {
    console.error("Error accessing x:", error.message);
}

try {
    console.log("y:", y);
} catch (error) {
    console.error("Error accessing y:", error.message);
}