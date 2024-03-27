import UiElement from '../Element/UiElement.js';
import UiIconElement from '../Icon/UiIconElement.js';
import stylesheet from './styles.css';
import template from './template.html';

/**
 * 
 */
export default class UiDialogElement extends UiElement {

  /** @type {UiIconElement} */
  #iconElem;

  /** @type {HTMLDialogElement} */
  #dialogElem;

  constructor() {
    super(template, stylesheet);
    this.#iconElem = this.shadowRoot.querySelector('ui-iconlabel');
    this.#dialogElem = this.shadowRoot.querySelector('dialog');
  }

  static get observedAttributes() {
    return ['icon', 'disabled'];
  }

  /**
   * Sets or retrieves the icon displayed in the component. If the value is an 
   * empty string, no icon will be displayed.
   * @type {string} 
   */
  get icon() {
    return this.#iconElem.icon;
  }

  set icon(value) {
    this.#iconElem.setAttribute('icon', value);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'icon') {
      this.icon = newValue;
    }
  }

  show() {
    this.#dialogElem.showModal();
  }

  close() {
    this.#dialogElem.close();
  }

}
