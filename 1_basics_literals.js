// const s1 = "hello";
// console.log(typeof s1);

// const s2 = new String("Hello");
// console.log(typeof s2);

// console.log(window);
// window.alert(1);
// console.log(navigator.appVersion);

const book1 = {
  title: "Book One",
  author: "John Doe",
  year: "2013",
  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
};

const book2 = {
  title: "Book Two",
  author: "Jane Doe",
  year: "2016",
  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
};

// console.log(book2.getSummary());
console.log(Object.values(book2)); //get values of obj
console.log(Object.keys(book2)); //get keus from obj
