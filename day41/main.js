// Question 121: Implement a for loop that counts from 1 to 10 but skips number 5 using the continue statement.

for(i = 1;i <= 10; i++){

    if (i === 5) {
        continue;
    }
    // console.log(i)
}
// Question 122: Use a while loop to count down from 10 to 1 and breaks the loop when it reaches 5.

// let num = 10
// while(num>0){
//     console.log(num)
//     if(num===5){
//         break;
//     }
//     num--
// }

// Question 123: Create a loop that iterates through a string and stops when it finds the first vowel.
let vowels = ["a", "e", "i", "o","u"]

let word = ""

function newWord (word){
    for(let char of word){
        console.log(char)
        if(vowels.includes(char.toLowerCase())){
            console.log(`You have reached your first vowel ${char}`)
            break;
        }
    }
}


newWord("bGgapple")