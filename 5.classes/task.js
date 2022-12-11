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
        let book = this.books.filter(element => element[type] === value);
        return book.length === 0 ? null : book[0];
      }

    giveBookByName(bookName) {
        const index = this.books.findIndex((element) => element.name === bookName);
        return (index !== -1) ? this.books.splice(index,1)[0] : null;
    }
}

class Student {
    constructor(name) {
        this.name = name;
    }
    addMark(mark, subject) {
        if (mark < 2 || mark > 5) return console.log("Ошибка, оценка может быть только числом от 2 до 5");

        if (this.subjects === undefined) {
            this.subjects = new Map;
            this.subjects.set(subject, [mark]);
            return;
        }
        if (this.subjects.get(subject) === undefined) {
            this.subjects.set(subject, [mark]);
            return;
        }
        let marks = this.subjects.get(subject);
        marks.push(mark);
        this.subjects.set(subject, marks);
    }

    getAverageBySubject(subject) {
        if (this.subjects === undefined) return console.log("У студента нет оценок ни по одному предмету");
        if (this.subjects.get(subject) === undefined) return console.log("Нет данного предмета");
        return this.subjects.get(subject).reduce((result,mark) => (mark / this.subjects.get(subject).length) + result,0);
    }

    getAverage() {
        if (this.subjects === undefined) return console.log("У студента нет оценок ни по одному предмету");
        let listKeys = this.subjects.keys();
        return listKeys.reduce((result, subject) => (getAverageBySubject(subject) / listKeys.length) + result,0);
    }
}
