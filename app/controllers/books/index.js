import Controller from "@ember/controller";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";

export default class ApplicationController extends Controller {
  @tracked sortProperty = "pages";
  @tracked isReversed = false;
  @tracked selectedBookIds = [];
  @tracked reservedBooksId = [1];

  get books() {
    return this.model;
  }

  get reservedBooks() {
    return this.sortedBooks.filter(book => {
      return this.reservedBooksId.includes(book.id);
    });
  }

  get shownBooks() {
    return this.sortedBooks.filter(book => {
      return !this.reservedBooksId.includes(book.id);
    });
  }

  get sortedBooks() {
    let books = this.books.sortBy(this.sortProperty);
    if (this.isReversed) {
      return books.reverse();
    } else {
      return books;
    }
  }

  get noBooksSelected() {
    return this.selectedBookIds.length === 0;
  }
  get allBooksSelected() {
    return this.selectedBookIds.length === this.books.length;
  }

  @action sortBooks(sortProperty) {
    if (this.sortProperty === sortProperty) {
      this.isReversed = !this.isReversed;
    } else {
      this.sortProperty = sortProperty;
      this.isReversed = false;
    }
  }

  @action toggleBookSelection(book) {
    if (this.selectedBookIds.includes(book.id)) {
      this.selectedBookIds.removeObject(book.id);
    } else {
      this.selectedBookIds.addObject(book.id);
    }
    this.notifyPropertyChange("selectedBookIds");
  }

  @action toggleBookReservation(book) {
    if (this.reservedBooksId.includes(book.id)) {
      this.reservedBooksId.removeObject(book.id);
    } else {
      this.reservedBooksId.addObject(book.id);
    }
    this.notifyPropertyChange("reservedBooksId");
    // make sure the book is not selected.
    this.selectedBookIds.removeObject(book.id);
    this.notifyPropertyChange("selectedBookIds");
  }

  @action reserveAll() {
    this.reservedBooksId.addObjects(this.selectedBookIds);
    this.notifyPropertyChange("reservedBooksId");
  }

  @action unreserveAll() {
    this.reservedBooksId.removeObjects(this.selectedBookIds);
    this.notifyPropertyChange("reservedBooksId");
  }

  @action selectAll() {
    this.selectedBookIds = this.books.mapBy("id");
  }
  @action unselectAll() {
    this.selectedBookIds = [];
  }

  columnDefinitions = [
    { name: "Title", fieldName: "title", minWidth: 50 },
    { name: "Publication Year", fieldName: "publicationYear", minWidth: 5 },
    { name: "Pages", fieldName: "pages", minWidth: 8 },
    { name: "Author", fieldName: "author", minWidth: 50 }
  ];

}
