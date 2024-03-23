import UiElement from '../Element/UiElement.js';
import CSS from './styles.css';
import HTML from './template.html';
import ICONS from './icons.js';

export default class UiIconElement extends UiElement {

  #name = '';

  /** @type {SVGPathElement} */
  #path;

  constructor() {
    super(HTML, CSS);
    this.#path = this.shadowRoot.querySelector('path');
    this.setAttribute('aria-hidden', 'true');
  }

  static get observedAttributes() {
    return ['name'];
  }

  /**
   * 
   * @param {string} name The name to use when referencing the icon
   * @param {string} path The SVG path data, used on the `d` attribute.
   */
  static registerIcon(name, path) {
    ICONS[name] = path;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    const icon = newValue.toLowerCase();
    if (icon in ICONS) {
      this.#name = icon;
    } else {
      this.#name = '';
    }
    this.#path.setAttribute('d', ICONS[icon]);
  }

  /**
   * The name of the icon to show.
   * @type {string}
   */
  get name() {
    return this.#name;
  }

  set name(value) {
    this.setAttribute('name', value);
  }

}
