import UiElement from '../Element/UiElement.js';
import template from './template.html';
import stylesheet from './styles.css';



export default class UiPropertyElement extends UiElement {

  #labelElem;

  constructor() {
    super(template, stylesheet);
    this.#labelElem = this.shadowRoot.querySelector('ui-iconlabel');
  }

  static get observedAttributes() {
    return ['label', 'icon'];
  }

  /**
   * Sets or retrieves the text displayed in the component. If the value is an 
   * empty string, no text will be displayed.
   * @type {string} 
   */
  get label() {
    return this.#labelElem.textContent;
  }

  set label(value) {
    this.#labelElem.textContent = value;
  }

  /**
   * Sets or retrieves the icon displayed in the component. If the value is an 
   * empty string, no icon will be displayed.
   * @type {string} 
   */
  get icon() {
    return this.#labelElem.icon;
  }

  set icon(value) {
    this.#labelElem.setAttribute('icon', value);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'label') {
      this.label = newValue;
    } else if (name === 'icon') {
      this.icon = newValue;
    }
  }

}
