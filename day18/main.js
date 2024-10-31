// Q52 - Make a Smartphone Object: Create a simple way to keep track of a smartphone's details. Include its brand, model, and other key features like how much storage it has, the size of its screen, and how long its battery lasts.

const smartphone = {
    brand : "Samsung",
    model: "A20",
    specs:{
        storage: "256GB",
        screen_size:"6 x 8",
        battery:"5200mAh"
    }

}


// Q53 - Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.

console.log(smartphone.model)

const programmer = {
    lang: {
        first_lang: "Python",
        second_lang: "Javscript",
        third_lang: "Golang"
    },
    tools: {
        ide: "vscode",
        data: "PostgresSQL"
    },
    framework: {
        javascript: ["React", "Vue.js", "Node.js"],
        python: ["flask", "django"]
    }
};


const skills = [
    programmer.lang.first_lang,
    programmer.tools.ide,
    programmer.framework.javascript[0]
];

console.log(skills);

// Q54 - Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you need at that moment, like adjusting labels based on user choice


const dog = {
    pet1:"Roger",
    pet2:"Bristle"
}


dog["pet1"] = "Logos"

console.log(dog.pet1)