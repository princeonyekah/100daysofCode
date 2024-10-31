// Q49 - Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.

function myListHobbies(...args){
    args.forEach(element => {
        console.log(`I love ${element}`)
    });

}

myListHobbies("Playing","Singing")

// Q50 - Multiline Template Literals: Use template literals to create a multiline string that describes your ideal day. Include at least three different activities.

const myidealday = `On a regular day, I love to do the following:
1. I love to play.
2. I love to dance.
3. I love to sing.`


console.log(myidealday)
// Q51 - Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.

function rectangle(length, breadth){
const area = length * breadth
return area
}

const area = rectangle(5,7)

console.log(area)


const rect = (l,b)=>{
    const A = l * b

    return A
}

console.log(rect(4, 6))
