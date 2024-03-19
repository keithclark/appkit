import UiElement from '../Element/UiElement.js';
import UiIconElement from '../Icon/UiIconElement.js';
import stylesheet from './styles.css';
import template from './template.html';

/**
 * Property | Inherts | Description 
 * -|-|-
 * `--ui-text-visibility` | No | `1` to show the text. `0` to hide it.
 * `--ui-icon-visibility` | No | `1` to show the icon. `0` to hide it.
 */
export default class UiButtonElement extends UiElement {

  /** @type {UiIconElement} */
  #iconElem;

  /** @type {HTMLButtonElement} */
  #buttonElem;

  constructor() {
    super(template, stylesheet);
    this.#iconElem = this.shadowRoot.querySelector('ui-icon');
    this.#buttonElem = this.shadowRoot.querySelector('button');
  }

  static get observedAttributes() {
    return ['icon'];
  }

  /**
   * Sets or retrieves the icon displayed in the button. If the  value is an 
   * empty string, no icon will be displayed.
   * @type {string} 
   */
  get icon() {
    return this.#iconElem.name;
  }

  set icon(value) {
    this.setAttribute('icon', value);
  }

  #updateIcon() {
    this.#buttonElem.style.setProperty('--has-icon', this.#iconElem.name ? 1 : 0);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'icon') {
      this.#iconElem.setAttribute('name', newValue);
      this.#updateIcon();
    }
  }

  connectedCallback() {
    this.#updateIcon();
  }
}
