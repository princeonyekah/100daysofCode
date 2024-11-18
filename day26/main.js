// var createCounter = function(n) {
//     let counter = 0
//     return function() {

//        let currentValue =  n + counter
//         counter++
//         return currentValue
//     };
// };

//  const counter = createCounter(10)
//  console.log(counter()) // 10
//  console.log(counter()) // 11
//  console.log(counter()) // 12

//  Question 76: Function Parameters and Return Values: Create a function that takes two numbers as parameters, adds them together, and returns the result. Show how you can call this function and log the result.

function AddNum(num1, num2) {
  sum = num1 + num2;

  return sum;
}

console.log(AddNum(5, 6));

// Question 77: Default Parameters: Write a function that greets a user. It should take the user's name as a parameter and say hello. If no name is given, it should greet an anonymous user.

function greetUser(name) {
  if (name) {
    return `Hello ${name}`;
  }
  return "Welcome";
}

console.log(greetUser())

// Question 78: Function Expressions vs. Function Declarations: Compare function expressions and declarations by creating one of each that performs the same task, such as squaring a number.

//Function Expression

function squareNum(num){
let square = num**2
return square
}

console.log(squareNum(5))


//Function Expression

const square = function (num){
    return num**2
}

console.log(square(8))


//Arrow Function

const  squares = (num)=>{
    return num**2
}

console.log(squares(7))



