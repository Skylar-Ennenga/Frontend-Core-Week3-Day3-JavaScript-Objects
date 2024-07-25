// 1. Exploring JavaScript Objects

// Objective: The aim of this assignment is to deepen understanding and proficiency in manipulating JavaScript objects, including creating objects, accessing properties and methods, using constructors, and working with prototypes.

// Problem Statement: You are tasked with creating a JavaScript program that simulates a digital library system. The program should allow users to add new books, search for books by title or author, and display information about the library's collection.

// Task 1: Create a constructor function for the Book object with properties for title, author, and pages.

// Task 2: Implement a method within the Book object to display book information.

// Task 3: Create an array to store book objects and implement functions to add new books and search for books by title or author.

// Task 4: Create functions that utilize the filter method to filter out books that contain more than 100 pages and the map method to add "Title: " and "Author: " to the book's title and author properties respectably.

// Constructor for book object
function  Book(title, author, pages,){
    this.title = title; 
    this.author = author; 
    this.pages = pages; 
    
}
// Set up the library array
library = []

// Create new book objects
let book1 = new Book("The Return of the King", "JRR Tolkien", 416) 
let book2 = new Book("Mistborn", "Brandon Sanderson", 672) 
let book3 = new Book("Thrawn", "Timothy Zahn", 448)  
let book4 = new Book("The Shadow of What Was Lost", "James Islington", 725)  

// Add the books to the library
library.push(book1, book2, book3, book4)

// function to display the book information
Book.prototype.displayInfo = function() {
    console.log(`Title: ${this.title}\nAuthor: ${this.author}\nNumber of Pages: ${this.pages}\n`);  
  }

// Funvtion to add a book to the library
function addBook(title, author, pages) {
    let newBook = new Book(title, author, pages);
    library.push(newBook);
}

//  Function to display all the books in the library
function displayAllBooksInfo(library) {
    library.forEach(library => library.displayInfo());
}

// Find book by title
function searchByTitle(title) {
    // The find() method returns the value of the first element in the provided array that satisfies the provided testing function.
    // Set the book variable to the book object that matches the title
    // If the book is found, display the book information
    // If the book is not found, display a message that it is not in the library
    // Its interesting not needing a for loop to iterate through the array
    const book = library.find(book => book.title.toLowerCase() === title.toLowerCase());
    if (book) {
        book.displayInfo();
    } else {
        console.log("Doesn't look like that book is in the Library.");
    }
}

function searchByAuthor(author) {
    // The filter() method creates a new array with all elements that pass the test implemented by the provided function.
    // Set the booksByAuthor variable to the books that match the author
    // If booksByAuthor is greater than 0, display the book information
    // If booksByAuthor is not greater than 0, display a message that the author is not in the library
    const booksByAuthor = library.filter(book => book.author.toLowerCase() === author.toLowerCase());
    if (booksByAuthor.length > 0) {
        booksByAuthor.forEach(book => book.displayInfo());
    } else {
        console.log("Doesn't look like we have a book by that Author");
    }
}

function filterBookPages() {
    const booksPages = library.filter(book => book.pages < 500);
    if (booksPages.length > 0) {
        booksPages.forEach(book => book.displayInfo());
    } else {
        console.log("Doesn't look like we have a book by that Author");
    }
}


// addBook("The Way of Kings", "Brandon Sanderson", 1007)
// displayAllBooksInfo(library)
// console.log()
// searchByTitle("Thrawn")
// console.log()
// searchByTitle("Thran")
// console.log()
// searchByAuthor("Brandon Sanderson")
// console.log()
// searchByAuthor("Brandon Sander")
// console.log()
// filterBookPages()



// 2. Exploring Objects and Math in JavaScript

// Objective: The objective of this assignment is to enhance proficiency in working with JavaScript objects and utilizing the Math class for mathematical operations.

// Problem Statement: You are tasked with developing a JavaScript program that simulates a simple banking application. The program should allow users to create accounts, deposit funds, withdraw funds, and calculate interest based on specified rates.

// Task 1: Create a constructor function for the Account object with properties for accountNumber, balance, and owner.

// Task 2: Implement methods within the Account object to deposit and withdraw funds.

// Task 3: Create a method to calculate compound interest based on the balance and specified interest rate. 
// Allow users to pass a year parameter to your method that represents the # of years the money has been invested and an interest rate. The output should be rounded up to the nearest whole number (perhaps using the Math.ceil()). The formula for compound interest is...


// Constructor for book object
function  Account(accountNumber, balance, owner){
    this.accountNumber = accountNumber; 
    this.balance = balance; 
    this.owner = owner; 
}



// Create new book objects
let account1 = new Account(6342, 739, "Brad") 
let account2 = new Account(3748, 2830, "Joe") 
let account3 = new Account(2843, 19243, "Stacy")  
let account4 = new Account(6483, 23, "Joanne") 


// function to display the book information
Account.prototype.displayInfo = function() {
    // Show information about the account
    console.log(`Name: ${this.owner}\nAccount #: ${this.accountNumber}\nCurrent Account Balance: $${this.balance}`);  
  }

Account.prototype.deposit = function(amount) {
    // Check if the amount is greater than 0
    // If the amount is greater than 0, add the amount to the balance
    // If the amount is less than or equal to 0, display a message that the deposit amount must be positive
    if (amount > 0) {
        this.balance += amount;
        console.log(`$${amount} has been deposited. \nNew balance: $${this.balance}.`);
    } else {
        console.log('You cant deposit negative money.');
    }
};

// Define the withdrawal method
Account.prototype.withdrawal = function(amount) {
    // Check if the amount is greater than 0 and less than or equal to the balance
    // If the amount is greater than 0 and less than or equal to the balance, subtract the amount from the balance
    // If the amount is greater than the balance, display a message that there are insufficient funds
    // If the amount is less than or equal to 0, display a message that the withdrawal amount must be positive
    if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`$${amount} has been withdrawn. \nNew balance: $${this.balance}.`);
    } else if (amount > this.balance) {
        console.log('Insufficient funds for this withdrawal.');
    } else {
        console.log('Withdrawal amount must be positive.');
    }
};


// Define the method to calculate compound interest
Account.prototype.calculateCompoundInterest = function(years, annualRate) {
    // A=P(1+nr​)^nt
    let principal = this.balance;
    let n = 1; // number of times interest is compounded per year
    let r = annualRate;
    let t = years;
    // Calculate the amount accumulated after n years, including interest
    // Math.pow() method returns the base to the exponent power, that is, base^exponent.
    // 1 + (r / n) is the interest rate per period
    // n * t is the number of periods
    // Round the amount up to the nearest whole number
    // Display the amount accumulated after n years at an annual interest rate of r%
    // Math.ceil() function returns the smallest integer greater than or equal to a given number.
    let amount = principal * Math.pow((1 + (r / n)), (n * t));
    let roundedAmount = Math.ceil(amount);

    console.log(`The amount of money accumlated after ${t} years at an annual interest rate of ${r * 100}% is $${roundedAmount}.`);
};


// account1.displayInfo()
// console.log()
// account1.deposit(60)
// console.log()
// account1.displayInfo()
// console.log()
// account1.withdrawal(15)
// console.log()
// account1.displayInfo()
// console.log()
// account1.calculateCompoundInterest(5, 0.05)
// console.log()
// account2.calculateCompoundInterest(5, 0.05)
// console.log()
// account3.calculateCompoundInterest(5, 0.05)
// console.log()
// account4.calculateCompoundInterest(5, 0.05)
// console.log()