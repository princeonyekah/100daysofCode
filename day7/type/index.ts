export {}; // Prevents global scope conflicts

const guests: string[] = ["Joel", "Lola", "Pelumi", "Kay", "Jide"];
console.log(`I am inviting ${guests.length} people to dinner.`);

var food_items: string[] = ["Cassava", "Garri", "Ewa", "Crayfish"];

// Join the food items into a comma-separated string
var message = `I would love to eat ${food_items.join(", ")}`;
console.log(message);

// Q21 - Then think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

interface Book {
    title: string;
    author: string;
    yearPub: number;
}

var books: Book = {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    yearPub: 1937
};

console.log(books);