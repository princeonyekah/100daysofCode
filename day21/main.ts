// Q61 - Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.

enum Vehicle {
  CAR,
  TRUCK,
  MOTORCYCLES,
}

console.log(Vehicle.CAR)

enum Browser{
    Firefox,
    Safari,
    Edge,
    Chrome = getVersion('chrome'),
}

function getVersion(browserName:string):number{
    if(browserName === "chrome"){
        return 115
    }
    return -1;
}

console.log(Browser.Chrome)
// Q62 - Making a Student Template: Create a blueprint for student information, including their name, age, and the classes they're taking, and then fill in this blueprint with an example student.


interface Student {
    name: string,
    age: number,
    courses:string[];
}

let student: Student = {
    name: "Princewill",
    age: 22,
    courses: ["Maths", "Chemistry", "biology"]
}


console.log(student)
// Q63 - Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.
