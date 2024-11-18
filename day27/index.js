// Question 79: Creating and Accessing Object Properties: Construct an object representing a car with properties for make, model, and year. Then, show how you can access the model property of the car.

let car = {
    make:"Ford",
    model:"Mustang",
    year:2022,
}

console.log(`The name of my car is ${car.make}, ${car.model},${car.year}`)

// Question 80: Updating Object Properties: Add a property named color to the existing car object, and then update the year property to 2021. Show how to perform these operations.
car.color = "blue"
car.owner = "Elon Musk"
car.year = 2021

console.log(car)

// Question 81: Iterating Over Object Properties: Write a function that takes an object as an argument and logs all of its properties and values.

function takesObjects(obj){
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            console.log(`${key}, ${obj[key]}`)
        }
    }
}


takesObjects(car)