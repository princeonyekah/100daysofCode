// Q10 - Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
function add(a,b){
    const sum = a + b //adds two numbers together
    return sum
    }

function substract(a,b){
    const sub = a - b // substract two numbers
    return sub
    }


// Q11 - Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

const friends_name = ["Olivia Parker", "Ethan Ramirez", "Mia Thompson","Noah Patel", "Ava Johnson"];

function name_list(){
    for (let i = 0; i < friends_name.length; i++) {
        result = friends_name[i]
       console.log(result)
      }
}
console.log(name_list())

// Q12 - Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

function message(){
    for (let i = 0; i < friends_name.length; i++) {
        result = friends_name[i]
        msg_person = `Congratulations, ${result},on your new role!`
        console.log(msg_person)
      }
}
console.log(message())