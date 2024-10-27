// Day-15 of 100-Days-Of-Code Challenge
// Q43 - Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

function make_album(artist, album){
    this.artist = artist,
    this.album = album
}

const first_artist = new make_album("Burna Boy", "Love Damini")
console.log(`Have you listened to ${first_artist.artist}? He has an album called ${first_artist.album}`)

function make_albums(artist, album){
    let song_artist = {
       "artist": artist,
       "album": album
    }
    return song_artist
}

console.log(make_albums("Burna Boy","Love Damini"))

magician_name = ["harry","potter","jane","julius","Lady Peril"]

const show_magicians = (magician_name) =>{
    magician_name.forEach(element => {

    });
return magician_name
}

console.log(show_magicians(magician_name))



const make_great = (magician_name)=>{
    new_magicians = []
    magician_name.forEach(element => {
       new_magicians.push(`The great ${element}`)
    })
    return new_magicians;
}
console.log(make_great(magician_name))


// Q44 - Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

const sandwich_condiments = (...new_item)=>{
console.log(`You have ordered ${new_item.join(',')}.`)
}

sandwich_condiments("sugar",'flour')

// Q45 - Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.