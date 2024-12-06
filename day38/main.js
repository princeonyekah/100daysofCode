// Question 112: Create a Map that stores the names of countries as keys and their capitals as values. Add three countries to the Map.


let maps = {
    "Nigeria": "Abuja",
    "Ghana":"Accra",
    "Angola": "Luanda",
    "Canada":"Ottawa",
    "Benin":"Port Novo",
    "Cameroon":"Yaounde",
}


let countries = new Map()

countries.set("Nigeria","Abuja")
countries.set("Ghana","Accra")
countries.set("Benin","Port Novo")
countries.set("Angola","Launda")
countries.set("Canada", "Ottawa")

console.log(countries.get("Nigeria"))

console.log(countries.size)
// Question 113: Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.

function mapContainsKey (countries){
    if(countries.has("Canada")){
        console.log(countries.get("Canada"))
    } else{
        console.log("e no get")
    }
}

mapContainsKey(countries)
// Question 114: Iterate over a Map of student IDs and names, and log each pair to the console.

let studentsRegister = new Map()

studentsRegister.set("17070","Prince" )
studentsRegister.set("17071","Kay" )
studentsRegister.set("17072","Kelly" )
studentsRegister.set("17073","Biodun" )
studentsRegister.set("17074","CJ" )

studentsRegister.forEach((id, name) => {
    console.log(`Student ID: ${id} , Name: ${name}`)

});