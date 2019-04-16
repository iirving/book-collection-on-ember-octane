import Component from '@glimmer/component';

export default class BookRowComponent extends Component {
  get isSelected(){
    return this.args.selectedBookIds.includes( this.args.book.id);
  }

  get isStriped(){
    return this.args.index % 2 === 1
  }

  get isBookReserved() {
    return this.args.reservedBooksId.includes( this.args.book.id);
  }
}
