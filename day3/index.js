// Q7 - Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.

function add(a,b){
const sum = a + b
return sum
}

function substract(a,b){
    const sub = a - b
    return sub
    }

function multiply(a,b){
    const mult = a * b
    return mult
    }


function divide(a,b){
const div = a / b
return div
}

console.log(add(5,3))
console.log(substract(10,2))
console.log(multiply(4,2))
console.log(divide(16,2))


// Q8 - You should create four lines that look like this: console.log(5 + 3) Your output should simply be four lines with the number 8 appearing once on each line.

console.log(5 + 3)
console.log(10 - 2)
console.log(4 * 2)
console.log(16 / 2)

// Q9 - Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

favorite_num = 7
message = `My favourite number is ${favorite_num}`
console.log(message)