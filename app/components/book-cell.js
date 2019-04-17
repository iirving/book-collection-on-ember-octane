import Component from '@glimmer/component';
import { htmlSafe } from '@ember/string';

export default class BookCellComponent extends Component {
  get displayValue(){
    let fieldNameValue = this.args.columnDefinition.fieldName
    let book = this.args.book
    return book[fieldNameValue]
  }

  get columnClassName() {
    let className = this.args.columnDefinition.className;
    return className ? htmlSafe(className) : "";
  }

}
