// Question 85: Finding the Position of a Substring: Write a function that locates the first occurrence of the word "code" within any given string and returns its position.

function positionString(sentence,searchTerm){
    let position = sentence.indexOf(searchTerm)

    return position

}

console.log(positionString("I love to eat rice", "to"))

// Question 86: Checking for Text Presence: Create a function that checks if the word "JavaScript" is present in a given string. It should return true if found, otherwise false.

// Question 87: Extracting a Substring: Demonstrate how to extract the first 10 characters from a string.