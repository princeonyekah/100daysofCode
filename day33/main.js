// Question 97: Write a function that returns the current date in the format "DD-MM-YYYY".

function todayDate() {
  let date = new Date();

  day = date.getDate();
  month = date.getMonth() + 1;
  year = date.getFullYear();
  return `${day}-${month}-${year}`;
}

module.exports = todayDate;
// Question 98: Create a JavaScript snippet that calculates and logs how many days are left until New Year.

function dayLeftUntilNY() {
  let today = new Date();

  console.log(today);
  let day = today.getDate();
  let month = today.getMonth();
  let currentYear = today.getFullYear();

  let newYear = new Date(currentYear + 1, 0, 1);
  console.log(newYear);

  let diffInMilliSec = newYear - today;

  let millisecondsInADay = 1000 * 60 * 60 * 24;

  let daysLeft = Math.ceil(diffInMilliSec / millisecondsInADay);

  console.log(`There are ${daysLeft} days left until New Year!`);
}

dayLeftUntilNY();
// Question 99: Generate a date object representing your next birthday and log it to the console.

function birthday(birthMonth, birthDate) {
  let today = new Date();
  let currentYear = today.getFullYear();
  let birthdayThisYear = new Date(currentYear, birthMonth - 1, birthDate);

  if (birthdayThisYear > today) {
    return birthdayThisYear;
  }
  return new Date(currentYear + 1, birthMonth - 1, birthDate);
}

console.log(birthday(2, 20));
