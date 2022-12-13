class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state *= 1.5;
    }

    set state(currentState) {
        if (currentState < 0) {
            this._state = 0;
          }
        else if (currentState > 100){
            this._state = 100;
        } else {
            this._state = currentState;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
  }

class FantasticBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}
  
class DetectiveBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

class Library{
    constructor(name){
      this.name = name
      this.books = [];
    }
  
    addBook(book){
      if (book.state > 30){
        this.books.push(book);
        }
    }

    findBookBy(type, value){
        const index = this.books.findIndex((element) => element[type] === value);
        return (index !== -1) ? this.books.splice(index,1)[0] : null;
      }

    giveBookByName(bookName) {
        const index = this.books.findIndex((element) => element.name === bookName);
        return (index !== -1) ? this.books.splice(index,1)[0] : null;
    }
}

class Student {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }

    addMark(mark, subject) {
        if (mark < 2 || mark > 5) {
            return console.log("Ошибка, оценка может быть только числом от 2 до 5"); 
        }
        if (this.marks[subject] === undefined) {
            this.marks[subject] = [];
        }
        this.marks[subject].push(mark);
    }

    getAverageBySubject(subject) {
        if (this.marks[subject] === undefined) return 0;
        return Array.from(this.marks[subject]).reduce((result, mark) => mark / Array.from(this.marks[subject]).length + result,0);
    }

    getAverage() {
        return Array.from(Object.keys(this.marks))
            .reduce((result, subject) => (this.getAverageBySubject(subject) / Object.keys(this.marks).length) + result,0);
    }
}

