//Q4 - Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
//Albert Einstein once said, “A person who never made a mistake never tried anything new.”

//const quote = ""I've always loathed the necessity of sleep. Like death, it puts even the most powerful men on their backs.""
const quote = " Frank Underwood once said, \"I've always loathed the necessity of sleep. Like death, it puts even the most powerful men on their backs.\"";

console.log(quote)

///Q5 - Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
const message = "\"I've always loathed the necessity of sleep. Like death, it puts even the most powerful men on their backs.\"";
const famous_person = "Frank Underwood"

result = `${famous_person} once said, ${message}`

console.log(result)

///Q6 - Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

const name_one = "\t James Almond \n "
console.log(name_one)
var strippedName = name_one.trim()
console.log(strippedName)