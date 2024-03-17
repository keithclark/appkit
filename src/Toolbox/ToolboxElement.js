import UiElement from '../Element/UiElement.js';
import template from './template.html';
import stylesheet from './styles.css';

export default class extends UiElement {

  constructor() {
    super(template, stylesheet);
  }

}
