// Question 106: Determine if a given year is a leap year using comparison operators.

function isLeapYear(year){
    return (year % 4 === 0  && year % 100 !== 0) || year % 400 === 0
}


console.log(isLeapYear(2000))


// Question 107: Write a condition using logical operators that checks if a number is divisible by both 2 and 3.

function divisibleBy2and3(num){
    return num % 2 === 0 && num % 3 === 0
}

console.log(divisibleBy2and3(5))

// Question 108: Compare two strings to check if they are identical, ignoring case sensitivity.

function compareString (string1, string2){
    return string1.toLowerCase() === string2.toLowerCase()
}

console.log(compareString("ResultF", "resulTf"))