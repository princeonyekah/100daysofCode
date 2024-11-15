// Question 73: Assigning and Updating Variables: Create a function where you declare a variable using let and assign an initial value. Then, update its value within the same function and log both the initial and updated values.

function updateVariable(){
    let tables = "Wooden"
    console.log(tables)
    tables = "Metal"
    console.log(tables)

}

updateVariable()
// Question 74: Swapping Variables: Demonstrate how to swap the values of two variables. Start with variables a = 5 and b = 10, then swap their values so that a becomes 10 and b becomes 5.

let a = 5
let b = 10

let temp = a

a = b
b = temp

console.log(a)
console.log(b)

// Question 75: Compound Assignment Operators: Use compound assignment operators to simplify arithmetic operations. Start with x = 4 and perform a series of operations (addition, subtraction, multiplication, division) on x using compound operators.

let x = 4

x += 5

console.log (x)
x *= 5

console.log (x)
x/=4

console.log(x)

x -= 7

console.log(x)


