// Q64 - Combine Strings and Numbers: Write a function that merges a piece of text with a number. For example, if provided with "Age: " and 30, it should give back "Age: 30".

import { loadEnvFile } from "process";

function mergeTextWithNumber(num: number, address: string): string {
    let homeAddress = `${num}, ${address}`; 
    return homeAddress;
}

const result = mergeTextWithNumber(6, "Odubanjo");
console.log(result);

// Q65 - Determine the Remainder: Make a function that gets two numbers and shows the leftover from dividing them using the % sign. For example, remainder(5, 2) should give 1.

function remainder(num1:number, num2: number): number{
    const leftover = num1 % num2
    return leftover
}

console.log(remainder(5,2))

// Q66 - Logical AND Verification: Create a function that checks two boolean (true or false) values. It should only say true if both are true, using the && operator. For instance, checkBothTrue(true, false) should be false.

function logic (logic1:boolean, logic2:boolean):boolean{
  return logic1 && logic2
}

console.log(logic(true,false))
console.log(logic(true,true))
console.log(logic(false,false))
