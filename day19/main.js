// Q55 - Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.


var numbers = [2,4,5,6,7,8,9,10]
var double_num = []

numbers.forEach(e => {
 let number = 2 * e
 double_num.push(number)

});

console.log(double_num)

// Q56 - Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.

let items = [34, "big", "onion", 5, 9, false, "no", "lambogini"]
let newArray = []


items.forEach( e => {

    if(typeof e === 'string' ){
        newArray.push(e)
    }

});

console.log(newArray)


// Q57 - Find the Average Grade: Given a list of grades, calculate the average grade.


const number = [5,6,7,8,9,10]
 let sum = 0


number.forEach( num => {
    sum = num + sum
});

frequency = number.length

average = sum/frequency

console.log(average)