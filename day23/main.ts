// Q67 - Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a string that represents a number (e.g., "5"). Return their sum as a number.

function mixedArth(num1: number, num2: string): number {
  const convNumber = parseFloat(num2);

  if (isNaN(convNumber)) {
    throw new Error(" num2 must be a number in string");
  }

  const sum = num1 + convNumber;

  return sum;
}

console.log(mixedArth(5, "5"));

// Q68 - Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product. Round the result to two decimal places.

function multiplydec(num1: number, num2: number): number {
  const product = num1 * num2;
 const result = parseFloat(product.toFixed(2));
  return result;
}


console.log(multiplydec(6.99, 8.99))
// Q69 - Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and the remainder. Use an object to return both values.

function longDivision (num1: number, num2: number):{quotient:number,remainder:number}{
    const  quotient = num1/num2
    const remainder = num1%num2

    return {
        quotient,remainder
    }
}


console.log(longDivision(10,3))