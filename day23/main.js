// Q67 - Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a string that represents a number (e.g., "5"). Return their sum as a number.
function mixedArth(num1, num2) {
    var convNumber = parseFloat(num2);
    if (isNaN(convNumber)) {
        throw new Error(" num2 must be a number in string");
    }
    var sum = num1 + convNumber;
    return sum;
}
console.log(mixedArth(5, "5"));
// Q68 - Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product. Round the result to two decimal places.
function multiplydec(num1, num2) {
    var product = num1 * num2;
    var result = parseFloat(product.toFixed(2));
    return result;
}
console.log(multiplydec(6.99, 8.99));
// Q69 - Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and the remainder. Use an object to return both values.
function longDivision(num1, num2) {
    var quotient = num1 / num2;
    var remainder = num1 % num2;
    return {
        quotient: quotient,
        remainder: remainder
    };
}
console.log(longDivision(10, 3));
