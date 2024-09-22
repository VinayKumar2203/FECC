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
    addBooks(books) {
        return this.books.push(this.books);
    }
    filter(){
         if(this.item <=2012){
           return this.title;
         }
    }
}

let b1 = new Book("rich and poor", "vinay", 2022, "how to rich");
console.log(b1);
let a1 = new Library()
console.log(a1.addBooks())