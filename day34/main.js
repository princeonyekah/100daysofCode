// Question 100: Use the JavaScript Math object to find the square root of 144.

let result_1 = Math.sqrt(144)
console.log(result_1)

// Question 101: Generate a random integer between 1 and 10.

let result_2 = Math.floor(Math.random() * 10);

console.log(result_2)

// Question 102: Calculate and log the absolute difference between the number -5 and 5.

function absoluteDiff(num1, num2){

    let abs1 = Math.abs(num1)
    let abs2 = Math.abs(num2)
    return abs1 - abs2
}

console.log(absoluteDiff(-5,5))