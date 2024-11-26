// Question 91: Create an array of your three favorite fruits and add a new fruit to the end of the array.

let favFruit = ["Avocado", "pineapples","Banana","lemon"]

favFruit.push("Pear")

console.log(favFruit)

// Question 92: Write a function to remove the last element from an array and return the removed element.

let temp1 = favFruit.pop()

console.log(favFruit)

console.log(temp1)

// Question 93: Find the index of "Banana" in an array of fruits and replace it with "Mango".

let bananaIndex = favFruit.indexOf("Banana")
console.log(bananaIndex)

favFruit[2] = "Mango"

console.log(favFruit)
