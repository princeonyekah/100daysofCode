"use strict";
// Q64 - Combine Strings and Numbers: Write a function that merges a piece of text with a number. For example, if provided with "Age: " and 30, it should give back "Age: 30".
Object.defineProperty(exports, "__esModule", { value: true });
function mergeTextWithNumber(num, address) {
    var homeAddress = "".concat(num, ", ").concat(address); // Added space after the comma
    return homeAddress;
}
var result = mergeTextWithNumber(6, "Odubanjo");
console.log(result);
// Q65 - Determine the Remainder: Make a function that gets two numbers and shows the leftover from dividing them using the % sign. For example, remainder(5, 2) should give 1.
function remainder(num1, num2) {
    var leftover = num1 % num2;
    return leftover;
}
console.log(remainder(5, 2));
// Q66 - Logical AND Verification: Create a function that checks two boolean (true or false) values. It should only say true if both are true, using the && operator. For instance, checkBothTrue(true, false) should be false.
function logic(logic1, logic2) {
    return logic1 && logic2;
}
console.log(logic(true, false));
console.log(logic(true, true));
console.log(logic(false, false));
