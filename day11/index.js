// Q31 - No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

// If the list is empty, print the message We need to find some users!

// Remove all of the usernames from your array, and make sure the correct message is printed.


const username = []

if (username.length === 0) {
    console.log("We need to find some users");
} else(username.forEach(function(element){
    if(element == 'admin'){
       console.log(`Hello ${element}, would you like to see a status report?`)
   } else {
       console.log(`Hello ${element}, thank you for logging in again`)
   }
   }
   )
)


// Q32 - Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

// Make a list of five or more usernames called current_users.

// Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

const current_users = ["ruth", "Love","kendrick","paul","Matthew2"]

const new_users = ["giddy","gbriel","paul","ruth","Kunle"]

new_users.forEach(newUser => {
const exists = current_users.some(function(oldUsers){
    return oldUsers.toLowerCase() === newUser.toLowerCase()
})
if (exists) {
    console.log(`You cannot use the username: ${newUser}.`);
} else {
    console.log(`You can proceed: ${newUser}`);
}
});


// Q33 - Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.

// Store the numbers 1 through 9 in a array.

// Loop through the array.

// Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.

numbers = [1,2,3,4,5,6,7,8,9]

numbers.forEach(num => {
    if(num == 1){
        console.log("1st")
    } else if (num == 2){
        console.log("2nd")
    }
    else if (num == 3){
        console.log("3rd")
    }
    else if (num == 4){
        console.log("4th")
    }
    else if (num == 5){
        console.log("5th")
    }
    else if (num == 6){
        console.log("6th")
    }
    else if (num == 7){
        console.log("7th")
    }
    else if (num == 8){
        console.log("8th")
    }
    else if (num == 9){
        console.log("9th")
    }

})

