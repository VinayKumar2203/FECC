// question 10----------------------;
class Book {
    constructor(title, author, year, genre) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.genre = genre;

    }
    bookDetails() {
        return `${this.author} ${this.title} ${this.year} ${this.genre}`;
    }
}

class Library {
    constructor() {
        this.books = [];
    }
    addBooks(book) {
        return this.books.push(book);
    }
    filter(){
       return this.books.filter((item)=>item.year<=2012)
        .map((arr)=>arr.title)
        .reduce((acc,curr)=>acc +' '+ curr,'')
    }
}

let b1 = new Book("rich and poor", "vinay", 2022, "how to rich");
console.log(b1);
let a1 = new Library();
// console.log(a1.filter(b1))
a1.addBooks(b1);
console.log(a1.filter());
let b2 = new Book("jay ", "Tulsidas", 2010, "history");
a1.addBooks(b2); 
console.log(a1.filter());
