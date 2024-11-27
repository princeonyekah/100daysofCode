// Question 94: Use the .map() method to create a new array that contains the length of each word from an array of words.

words = ["People", "Culture", "Tradition"]

newWord = words.map(function(word){
    return(word.length)
})

console.log(newWord)

// Question 95: Write a function that uses the .filter() method to return an array of numbers greater than 10.

numero = [10, 6]

greaterThanTen = numero.filter(numGreaterThanTen)

function numGreaterThanTen(numArray){
    return numArray > 10
}

console.log(greaterThanTen)

// Question 96: Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.



let aggregate = (accumulator, currentValue) =>{
    return accumulator + currentValue
}

let sum = numero.reduce(aggregate, 0)


console.log(sum)