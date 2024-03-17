import UiElement from '../Element/UiElement.js';
import stylesheet from './styles.css';
import template from './template.html';

/**
 * @typedef ToggleOptions
 * @property {'auto'|'smooth'|'instant'} behavior Determines whether the transition is instant or animates smoothly.
 */

/**
 * Element with a primary and secondary content area. The visibility of the
 * secondary area can be toggled.
 * 
 * The CSS `--collapse-behavior` custom property can be used to control how the
 * secondary content transitions between the expanded and collapsed states. 
 * `smooth` will cause the content to animate into position. `instant` will 
 * result in content appearing and disappearing. _Note: If the user has 
 * configured their browsing device to use reduced motion then animations will 
 * always be behave as `instant`._
 * 
 * Orientation can be controlled with `--direction`, which maps to the 
 * `flex-direction` property. Any valid flex values can be used to control
 * vertical / horizonal and reverse layouts.
 * 
 * Size of the secondary element can be controlled with `--secondary-size`. 
 * 
 * @example
 * <ui-splitview collapse>
 *   <div slot="primary">
 *     Primary Content
 *   </div>
 *  <div slot="secondary">
 *     Secondary Content
 *   </div>
 * </ui-splitview>
 */
export default class extends UiElement {

  /** @type {HTMLDivElement} */
  #rootElem;
  /** @type {HTMLDivElement} */
  #secondaryElem;
  /** @type {ToggleOptions?} */
  #transitionOptions;

  constructor() {
    super(template, stylesheet);
    this.#rootElem = this.shadowRoot.querySelector('.splitView');
    this.#secondaryElem = this.shadowRoot.querySelector('#secondary');
  }

  static get observedAttributes() {
    return ['collapse', 'reverse', 'vertical'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'reverse') {
      this.#rootElem.classList.toggle('reverse', newValue === '');
    } else if (name === 'vertical') {
      this.#rootElem.classList.toggle('vertical', newValue === '');
    } else if (name === 'collapse') {
      this.#setTransitionOptions(this.#transitionOptions);
      this.#transitionOptions = null;
      this.#rootElem.classList.toggle('collapse', newValue === '');
    }
  }

  /**
   * Applies the CSS classes and transition events required to enable smooth
   * transition between collapse / expanded states.
   */
  #applyTransitionStyleRules() {
    this.#secondaryElem.classList.add('animate');
    this.#secondaryElem.addEventListener('transitionend', () => {
      this.#secondaryElem.classList.remove('animate');
    });
  }

  /**
   * 
   * @param {ToggleOptions} options 
   */
  #setTransitionOptions(options = {}) {
    let { behavior = 'auto' } = options;

    if (behavior === 'instant') {
      return;
    }

    if (behavior === 'smooth') {
      this.#applyTransitionStyleRules();
      return;
    }

    // Fall back to `auto`. For this case we need to resolve the computed value
    // of `--collapse-behavior`. If it resolves to `smooth`, apply the CSS 
    // transition styles.
    if (getComputedStyle(this).getPropertyValue('--collapse-behavior') === 'smooth') {
      this.#applyTransitionStyleRules();
    }
  }

  /**
   * Toggle the secondary panel between the collapsed and expanded states
   * 
   * @example <caption>Toggle the secondary panel using the default transition</caption>
   * Element.toggle();
   * @example <caption>Toggle the panel visibily using a smooth transition</caption>
   * Element.toggle({ behavoir: 'smooth' });
   * @example <caption>Force the secondary panel to show</caption>
   * Element.toggle(true);
   * 
   * @param {boolean} [force] If not specified, the panel will toggle. If `true`, the panel will collapse. If `false` the panel will expand.
   * @param {ToggleOptions} [options] Options for controlling how the panel expands and collapses.
   */
  toggle(force, options) {
    if (typeof force === 'object') {
      options = force;
      force = undefined;
    }
    this.#transitionOptions = options;
    this.toggleAttribute('collapse', force);
  }

  /**
   * Collapses the secondary panel, hiding its content
   * 
   * @param {ToggleOptions} [options] Options for controlling how the panel collapses.
   */
  collapse(options) {
    this.toggle(true, options);
  }

  /**
   * Expands the secondary panel, revealing its content
   * 
   * @param {ToggleOptions} [options] Options for controlling how the panel expands.
   */
  expand(options) {
    this.toggle(false, options);
  }
}
