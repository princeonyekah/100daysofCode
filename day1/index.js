// Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

const firstName = "Joseph"
const lastName = "Onyekah"

console.log(firstName + " " + lastName)
console.log(`Welcome ${firstName}, we are glad to have you around.`)

//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let fullName = "dOyiN PhiLPs"

const lowerCase = fullName.toLowerCase()
const upperCase = fullName.toUpperCase()

console.log(lowerCase)
console.log(upperCase)


//titleCase

function titleCase(str){
    var str = str.toLowerCase()
    var strSplit = str.split(" ")
    var titleCasedWords = [];
    for (var i = 0; i < strSplit.length; i++){
        var word = strSplit[i]
        var letter = word.charAt(0)
        var letterUpper = letter.toUpperCase()
        var titleCasedWord= letterUpper + word.slice(1);
        titleCasedWords.push(titleCasedWord);
    }
    return titleCasedWords.join(" ")
}

result = titleCase("welcome Home HaBio")
console.log(result)



