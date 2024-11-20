// Question 82: Find the Length of a String: Write a function that takes a string as an argument and returns the number of characters in the string.

function lengthString(letters){
    let count = 0
    for(let i  = 0; i < letters.length; i++){
        count++

    }
    return count
}

console.log(lengthString("house once"))
// Question 83: Converting to Upper and Lower Case: Create a function that takes a string, converts it to uppercase, then to lowercase, and logs both.

function toNewCase(letters){
    upper = letters.toUpperCase()
    console.log(upper)
    lower = letters.toLowerCase()
    console.log(lower)

}

toNewCase("HouseG")

// Question 84: Replacing Text in a String: Write a function that takes a sentence and replaces all instances of the word "JavaScript" with "TypeScript".

function replaceText(sentence){
   const newSentence = sentence.replaceAll("JavaScript", "TypeScript")

   return newSentence
}

console.log(replaceText("Fish in JavaScript can JavaScript"))