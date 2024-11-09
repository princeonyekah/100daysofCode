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
var circle = {
    kind: "circle",
    radius: 5
};
var rectangle = {
    kind: "rectangle",
    width: 10,
    height: 5
};
console.log(circle);
console.log(rectangle);
