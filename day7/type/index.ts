export {}; // Prevents global scope conflicts

const guests: string[] = ["Joel", "Lola", "Pelumi", "Kay", "Jide"];
console.log(`I am inviting ${guests.length} people to dinner.`);

var food_items: string[] = ["Cassava", "Garri", "Ewa", "Crayfish"];

// Join the food items into a comma-separated string
var message = `I would love to eat ${food_items.join(", ")}`;
console.log(message);