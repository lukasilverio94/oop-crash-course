class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
}

//We want to have a subclass called Magazine:
//Magazine Subclass:

class Magazine extends Book {
  constructor(title, author, year, month) {
    super(title, author, year);
    this.month = month;
  }
}

//Instantiate Magazine
const mag1 = new Magazine("Magazine One", "Neil Gaiman", "2014", "Jan");

console.log(mag1);
//If I want to use getSummary from Book class? We can do it:
console.log(mag1.getSummary());
