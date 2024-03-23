import UiElement from '../Element/UiElement.js';
import UiIconElement from '../Icon/UiIconElement.js';
import stylesheet from './styles.css';
import template from './template.html';

/**
 * A component for rendering text alongside an icon
 * 
 * The `--ui-show-text` and `--ui-show-icon` custom properties can be used to 
 * control the visibility of the components text and icon content. These 
 * propertie are particualarly usefull for CSS authors who wish to control the 
 * appearance of the component with media queries, for example hiding the text
 * on small viewports.
 * 
 * Property | Inherts | Description | Default
 * -|-|-|-
 * `--ui-show-text` | No | `1` to show the text. `0` to hide it. | `1`
 * `--ui-show-icon` | No | `1` to show the icon. `0` to hide it. | `1`
 */
export default class UiIconLabelElement extends UiElement {

  /** @type {UiIconElement} */
  #iconElem;

  /** @type {HTMLDivElement} */
  #rootElem;

  constructor() {
    super(template, stylesheet);
    this.#iconElem = this.shadowRoot.querySelector('ui-icon');
    this.#rootElem = this.shadowRoot.querySelector('div');
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
    this.#rootElem.style.setProperty('--has-icon', this.#iconElem.name ? 1 : 0);
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
