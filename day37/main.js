// Question 109: Write an if statement that logs "Good Morning" if the current time is before 12 PM.

let today = new Date();

hours = today.getHours();
if (hours < 12) {
  console.log("Good Morning");
}

// Question 110: Create a function that assigns a grade (A, B, C, D, F) based on a student's score.

function grade(score) {
  if (score >= 70) {
    return "A";
  } else if (score >= 60 && score <= 69) {
    return "B";
  } else if (score >= 50 && score <= 59) {
    return "C";
  } else if (score >= 40 && score <= 49) {
    return "D";
  } else{
    return "F"
  }
}

console.log(grade(8));

// Question 111: Use an if-else-if chain to categorize a person's age group (child, teenager, adult).

let age = 50

if (age > 18) {
    category = "adult"
} else if (age <= 18 && age >= 13){
    category = "teenager"
} else {
    category = "child"
}




console.log(category)