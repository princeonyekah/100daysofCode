// function Player(name, marker) {
//     this.name = name;
//     this.marker = marker;
//   }

// const player = new Player('steve', 'X');
// console.log(player.name); // 'steve'

function Player(name, marker) {
    this.name = name;
    this.marker = marker;
    this.sayName = function() {
      console.log(this.name)
    };
  }

  const player1 = new Player('steve', 'X');
  const player2 = new Player('also steve', 'O');
  player1.sayName(); // logs 'steve'
  player2.sayName(); // logs 'also steve'


console.log(Object.getPrototypeOf(player1) === Player.prototype); // returns true
console.log(Object.getPrototypeOf(player2) === Player.prototype); // returns true


// Write a constructor for making “Book” objects. We will revisit this in the next project. Your book objects should have the book’s title, author, the number of pages, and whether or not you have read the book.

const Book = {
    "title":"Tale of two cities",
    "author":"Charles Dickens",
    "number_of_pages": 89,
    "read_the_book": "Yes"
}

console.log(Book)


// //Using Object Constructor

function Book_Info (title,author,number_of_pages,read_the_book){
    this.title = title,
    this.author = author,
    this.number_of_pages = number_of_pages,
    this.read_the_book = read_the_book
    this.Info = function(){
     return `${title} by ${author}, ${number_of_pages}. Have you read the book:${read_the_book}`
    }
}


// const book1 = new Book_Info("Tale of Two Cities","Charles Darwin","60", "No")

// console.log(book1.Info())