// Question 115: Use a switch statement to log the days of the week based on a number (1-7).

let day = new Date().getDay();
let days = 1;

function dayNumber(day){
    switch (day) {
        case 0:
          dayOfWeek = "Sunday";
          return dayOfWeek

        case 1:
          dayOfWeek = "Monday"
          return dayOfWeek

        case 2:
          dayOfWeek = "Tuesday"
          return dayOfWeek

      }
}


console.log(dayNumber(2))


// Question 116: Create a switch case that matches several cases to the same code block, representing seasons.

function seasonality(month){
    let season
    switch(month){
        case 12:
        case 1:
        case 2:
            season = "Winter"
        break;
        case 3:
        case 4:
        case 5:
            season = "Spring"
        break
        case 6:
        case 7:
        case 8:
            season = "Summer"
        break
        case 9:
        case 10:
        case 11:
            season = "Auttum"
        break
}
return season
}

console.log(seasonality(4))



// Question 117: Implement a switch statement that evaluates an expression and uses the default case if none of the cases match.

let trafficLight = "Green"
let message = " "

function detectTraffic(trafficLight){
    switch(trafficLight){
        case "Green":
            message = "You can go"
            break
        case "Yellow":
            message = "Hang on"
            break
        case "Red":
            message = "Stop there!"
            break
        default:
            message = "Invalid color code"
    }
    return message
}

console.log(detectTraffic("Yelow"))
