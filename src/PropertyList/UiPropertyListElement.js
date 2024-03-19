import UiElement from '../Element/UiElement.js';
import template from './template.html';
import stylesheet from './styles.css';



export default class UiPropertyListElement extends UiElement {

  #labelElem;

  constructor() {
    super(template, stylesheet);
    this.#labelElem = this.shadowRoot.querySelector('span');
  }

  static get observedAttributes() {
    return ['label'];
  }

  get label() {
    return this.#labelElem.textContent;
  }

  set label(value) {
    this.#labelElem.textContent = value;
  }



  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'label') {
      this.label = newValue;
    }
  }

}
