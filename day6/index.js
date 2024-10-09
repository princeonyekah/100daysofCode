//
// Q16 - More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner:

// Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// Add one new guest to the beginning of your array.

// Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.

// Print a new set of invitation messages, one for each person in your list.

let invitees = ["Angela", "Osunlola", "Jimoh"]

invitees.forEach(function(invite){
    console.log(invite)
})

absent = "Osunlola"
newInvite = "Patricia"
console.log(`${absent} can't make it to the dinner`)

invitees[invitees.indexOf(absent)] = newInvite

invitees.forEach(function(invite){
    console.log(invite)
})

console.log("We found a bigger table")

invitees.unshift("Yemisi") //adds element to the beginning
console.log(invitees)

invitees.splice(2,0,"Divine")
console.log(invitees) //puts the element at the middle

invitees.push("Gabriel")

console.log(invitees)

invitees.forEach(function(invite){
    console.log(`${invite}, you are invited to attend the dinner.`)
})

// Q17 - Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

// Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

console.log("We can only invite two persons for dinner")

// Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

if (invitees.length > 2) {
    // Remove elements until there are 2 left
    while (invitees.length > 2) {
        removedInvite = invitees.pop(); // Remove the last element
        console.log(`We are sorry we can't invite you, ${removedInvite}`)
    }
}

console.log(invitees)

// Print a message to each of the two people still on your list, letting them know they’re still invited.

for (invite of invitees){
    console.log(`${invite}, you are invited.`)
}

// Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

while(invitees.length > 0){
    invitees.pop();
}

console.log(invitees)

// Q18 - Seeing the World: Think of at least five places in the world you’d like to visit.

// Store the locations in a array. Make sure the array is not in alphabetical order.

locations = ["Beach","Park", "Netflix","Jaekel House","Eiffel Tower"]

// Print your array in its original order.

locations.forEach(function(place){
    console.log(place)
})

// Print your array in alphabetical order without modifying the actual list.

sortedLocation = [...locations] //copy an array
sortedLocation.sort()
sortedLocation.forEach(function(place){
    console.log(place)
})


// Show that your array is still in its original order by printing it.
console.log(locations)
// Print your array in reverse alphabetical order without changing the order of the original list.

reversedLocation = [...locations]
reversedLocation.sort().reverse()
reversedLocation.forEach(function(place){
    console.log(place)
})

// Show that your array is still in its original order by printing it again.
console.log(locations)
// Reverse the order of your list. Print the array to show that its order has changed.

// Reverse the order of your list again. Print the list to show it’s back to its original order.

// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed. -->

