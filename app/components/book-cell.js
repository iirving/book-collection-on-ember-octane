import Component from '@glimmer/component';
import { htmlSafe } from '@ember/string';

export default class BookCellComponent extends Component {
  get displayValue(){
    let fieldNameValue = this.args.fieldName
    let book = this.args.book
    return book[fieldNameValue]
  }

  get columnStyle() {
    let widthValue = this.args.width;
    return htmlSafe(`width: ${widthValue}`);
  }

}
