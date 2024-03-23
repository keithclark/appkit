import UiButtonElement from '../Button/UiButtonElement.js';
import stylesheet from './styles.css';

/**
 *
 */
export default class UiToggleButtonElement extends UiButtonElement {

  #clickHandler;

  constructor() {
    super();
    this.shadowRoot.adoptedStyleSheets.push(stylesheet);
    this.#clickHandler = this.#handleClickEvent.bind(this);
  }


  /**
   * Sets or retrieves the pressed state of the button.
   * @type {boolean} 
   */
  get pressed() {
    return this.hasAttribute('pressed');
  }

  set pressed(value) {
    this.toggleAttribute('pressed', value);
  }

  connectedCallback() {
    this.addEventListener('click', this.#clickHandler);
  }

  /**
   * 
   * @param {MouseEvent} event 
   */
  #handleClickEvent(event) {
    if (event.defaultPrevented) {
      return;
    }
    this.pressed = !this.pressed;
  }
}
