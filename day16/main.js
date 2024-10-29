// Q46 - Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop.

function LaptopDescription (make,model,year){
    this.make = make;
    this.model = model;
    this.year = year
}

LaptopDescription.prototype.describe = function(){
    return`I love a laptop with ${this.make} ${this.model} ${this.year}`
}

laptop.describe();
const laptop = new LaptopDescription("Jack","Goal","2001")

console.log(laptop)

console.log(laptop.describe())

var laptops = {
    make: "Dell",
    model: "New Elite Series",
    year: 2024,
    describe: function () {
        console.log("This laptop is a ".concat(this.year, " ").concat(this.make, " ").concat(this.model, "."));
    },
};




// Q47 - Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.

const first_laptop = new LaptopDescription("Toyota","GLK",2004)
const second_laptop = new LaptopDescription("BMW","Golf",2005)

console.log(first_laptop)
console.log(second_laptop)


new_laptops= [  { make: "Dell", model: "XPS 15", year: 2021 },
    { make: "Apple", model: "MacBook Pro", year: 2020 },
    { make: "HP", model: "Spectre x360", year: 2021 },
]


firstpc = new_laptops[0]
secondpc = new_laptops[1]

console.log(firstpc)
console.log(secondpc)

// Q48 - Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.


priceList1 = [200, 680, 430, 240, 60]
priceList2 = [900, 40, 89, 67, 56, 45, 3]

combinePrice = [...priceList1,...priceList2]

console.log(combinePrice.sort((a,b)=> a-b))


