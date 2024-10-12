"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var guests = ["Joel", "Lola", "Pelumi", "Kay", "Jide"];
console.log("I am inviting ".concat(guests.length, " people to dinner."));
var food_items = ["Cassava", "Garri", "Ewa", "Crayfish"];
// Join the food items into a comma-separated string
var message = "I would love to eat ".concat(food_items.join(", "));
console.log(message);
var books = {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    yearPub: 1937
};
console.log("Book Info: ".concat(books.title, " by ").concat(books.author, ", published in ").concat(books.yearPub));
