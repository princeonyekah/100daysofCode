// Q61 - Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.
var Vehicle;
(function (Vehicle) {
    Vehicle[Vehicle["CAR"] = 0] = "CAR";
    Vehicle[Vehicle["TRUCK"] = 1] = "TRUCK";
    Vehicle[Vehicle["MOTORCYCLES"] = 2] = "MOTORCYCLES";
})(Vehicle || (Vehicle = {}));
console.log(Vehicle.CAR);
var Browser;
(function (Browser) {
    Browser[Browser["Firefox"] = 0] = "Firefox";
    Browser[Browser["Safari"] = 1] = "Safari";
    Browser[Browser["Edge"] = 2] = "Edge";
    Browser[Browser["Chrome"] = getVersion('chrome')] = "Chrome";
})(Browser || (Browser = {}));
function getVersion(browserName) {
    if (browserName === "chrome") {
        return 115;
    }
    return -1;
}
console.log(Browser.Chrome);
var student = {
    name: "Princewill",
    age: 22,
    courses: ["Maths", "Chemistry", "biology"]
};
console.log(student);
// Q63 - Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.
