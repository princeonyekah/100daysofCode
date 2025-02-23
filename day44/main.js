// Question 130: Explain how to export a function from one JavaScript file and import it into another file.

export function add(a,b){
    return a + b
}

export function subtract(a,b){
    return a - b
}

// Question 131: Create two modules; one that exports a class, and another that imports the class and creates an instance.

export class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
    }
}

// Question 132: Discuss the difference between default and named exports in JavaScript modules.