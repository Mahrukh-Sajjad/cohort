class Library {
  constructor() {
    this.books = [];
  }
  addBook(book) {
    this.books.push(...book);
  }
  listAllBooks() {
    //when we declare a function inside a class we dont  use function keyword which is wrong.
    this.books.forEach(function (book, index) {
      console.log(` ${index + 1} ) ${book.name} by ${book.author}`);
    });
  }
}

class Book {
  constructor(name, isbn, price, author) {
    this.name = name;
    this.author = author;
    this.price = price;
    this.isbn = isbn;
    this.readStatus = false;
  }
  info() {
    console.log(
      ` ${this.readStatus ? "✔" : "☹"}The name of the book is ${
        this.name
      } and the author of book is ${this.author} you have ${
        this.readStatus ? "read it" : "not read it"
      } `
    );
  }
  changeReadStatus() {
    this.readStatus = !this.readStatus; //changing readstatus of the book.
  }
}

let book1 = new Book("wealth is life", "fhdfhsj", 120, "Harsh Sharma");
let book2 = new Book("Adventure", "bcjhvj", 1000, "Harish Gupta");
let book3 = new Book("88", "bchcfvhc", 1200, "Kartik");
let jhansiLibrary = new Library();
// let bhopalLibrary = new Library();
// jhansiLibrary.addBook("Do epic shit");
// bhopalLibra4ry.addBook("Do epic shit");
// bhopalLibrary.addBook("Do something Great");
// bhopalLibrary.addBook("wealt");
// jhansiLibrary.addBook(book1); // here addBook is a function of libarary class that push elements in array which
// // is a property of Library class with the name books so books array will have an element book1.
// jhansiLibrary.addBook(book2);
// jhansiLibrary.addBook(book3);

jhansiLibrary.addBook([book1, book2, book3]);

class MobileShop {
  constructor() {
    this.mobiles = [];
  }

  addMobile(mobile) {
    this.mobiles.push(mobile);
  }
}

class Mobile {
  constructor(company, model, color, price) {
    this.id = Math.floor(Math.random() * 100000);
    this.model = model;
    this.color = color;
    this.company = company;
    this.price = price;
    this.sims = [];
  }
  getMobileInfo(id) {
    console.log(`${this.company}-${this.model}=${(this, price)}-${this.color}`);
  }

  insertSim(sim) {
    if (sim == 2) {
      console.log("You have already 2 sims");
      return;
    }

    this.sims.push(sim);
  }
}

class Sim {
  constructor(brand, balance) {
    this.brand = brand;
    this.balance = balance;
  }
}

let myMobileShop = new MobileShop();
let samsung = new Mobile("samsumg", "galaxy", 120000, "white");
let tatadocomo = new Sim("tataDocomo");
samsung.insertSim(tatadocomo);
myMobileShop.addMobile(samsung);
