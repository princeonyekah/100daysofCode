// Question 127: Convert a traditional function expression to an arrow function.

//Traditional Function

function addNumbers(a, b) {
  return a + b;
}

//arrow function

const addNumber = (a, b) => {
  return a + b;
};

console.log(addNumber(6,8))
console.log(addNumbers(6,8))

// Question 128: Create an arrow function that takes multiple parameters and returns the product of all parameters.


var multiply = function(){
    number = []
    for (let i = 0; i < arguments.length; i++){
        number[i] = arguments[i]
    }
    return number.reduce(mult,1)
}

var mult = function(total, num){
    return total * num
}

console.log(multiply(4,5,6))

const product = (...args) =>{
    return args.reduce(mult,1)
}

console.log(product(5,6))

// Question 129: Explain how this behaves differently in arrow functions compared to traditional functions.
