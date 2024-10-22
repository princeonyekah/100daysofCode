// Q37 - Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirt(size = "large", message = "I love typescript") {
    if (size === "small"){
        console.log(`The shirt size is ${size} and the message printed on it is: "${message}"`);
} else if ( size === "medium"){
    console.log(`The shirt size is ${size} and the message printed on it is: "${message}"`);
}
else {  console.log(`The shirt size is ${size} and the message printed on it is: "${message}"`);
}
}


make_shirt("small", "Big 30")

// Q38 - Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.

const describe_city = (city, country = "Nigeria") =>{
return `${city} is in ${country}`
}


console.log(describe_city("Lagos"))
console.log(describe_city("PortHarcourt"))
console.log(describe_city("New York"))

// Q39 - City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value that’s returned.

const city_country = (city, country)=>{
    return`${city}, ${country}`
}

console.log(city_country("Lagos","Nigeria"))
console.log(city_country("Sydney","Australia"))
