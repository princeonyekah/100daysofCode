// Q58 - Write a simple program that can take lots of scores and find their average.
function average (num1, num2,...args){
    let sum = 0
    const num_list = [num1, num2, ...args]
    num_list.forEach(num => {
         sum += num;
    });
    frequency = num_list.length

    avg = sum /frequency

    return avg
}

console.log(average(5,6,8,9,10))

// Q59 - Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.

function specialNumber(num) {
return function magic(mag_num){
    return num + mag_num
}
}

let magic_number = specialNumber(4)

console.log(magic_number(6))


// Q60 - Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.

function aboutUser (name, age){
    return {"name": name,
         "age": age,
        userInfo:function (){
            return`Name: ${this.name}, Age: ${this.age}`
        }}}


let user = aboutUser("Funmi", 35);

console.log(user.userInfo());