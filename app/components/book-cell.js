import Component from '@glimmer/component';

export default class BookCellComponent extends Component {
  get displayValue(){
    let fieldNameValue = this.args.fieldName
    let book = this.args.book
    return book[fieldNameValue]
  }
}
