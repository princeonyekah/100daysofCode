// Q40 - Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

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



// Q41 - Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

// Q42 - Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.