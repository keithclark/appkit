const sheet$a = new CSSStyleSheet();sheet$a.replaceSync(":root{--ui-color-base:#eee;--ui-color-base-contrast:#000;--ui-color-base-muted:#777;--ui-color-base-dark:color-mix(in srgb,var(--ui-color-base),#000 5%);--ui-color-accent:color-mix(in srgb,hotpink,#000 10%);--ui-color-accent-contrast:#fff;--ui-color-accent-dark:color-mix(in srgb,var(--ui-color-accent),#000 15%);--ui-color-separator:#0003;--ui-color-shadow:#0002;--ui-spacing-unit:4px;--ui-padding:calc(var(--ui-spacing-unit) * 6);--ui-spacing:calc(var(--ui-spacing-unit) * 8);--ui-radius:var(--ui-spacing-unit);--ui-transion-duration:300ms;--ui-icon-visibility:1;--ui-text-visibility:1;}@media (prefers-color-scheme:dark){:root{--ui-color-base:#22262d;--ui-color-base-contrast:#ddd;--ui-color-base-muted:#999;--ui-color-base-dark:color-mix(in srgb,var(--ui-color-base),#000 30%);--ui-color-accent:hotpink;--ui-color-accent-dark:color-mix(in srgb,var(--ui-color-accent),#000 20%);--ui-color-accent-contrast:#000;--ui-color-separator:#fff2;--ui-color-shadow:#0006;}}html{background-color:var(--ui-color-base);color:var(--ui-color-base-contrast);accent-color:var(--ui-color);background-size:var(--ui-spacing-unit) var(--ui-spacing-unit),8px 8px;background-repeat:repeat;letter-spacing:-0.03em;-webkit-text-size-adjust:none;font-family:Poppins,system-ui;font-size:14px;line-height:calc(var(--ui-spacing-unit) * 6);}input,select{line-height:inherit;font:inherit;background-color:var(--ui-color-base-dark);color:var(--ui-color-base-contrast);border:0;height:calc(var(--ui-padding) + 8px);border-radius:var(--ui-radius);-webkit-appearance:none;-moz-appearance:none;appearance:none;text-indent:var(--ui-spacing-unit);padding:0;}select{background:transparent;color:var(--ui-color-base-contrast);font:inherit;background-color:var(--ui-color-base-dark);background-image:url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='50' fill='rgba(128,128,128,.6)'><polygon points='0,0 100,0 50,50'/></svg>\");background-size:calc(var(--ui-spacing-unit) * 2);background-position:right calc(var(--ui-spacing-unit) * 2) center;background-repeat:no-repeat;padding-right:var(--ui-padding);}option::after{content:'x'}");

class UiElement extends HTMLElement {

  constructor(template, stylesheet) {
    super();
    this.attachShadow({ mode: 'open' });
    if (template) {
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    if (stylesheet) {
      this.shadowRoot.adoptedStyleSheets.push(stylesheet);
    }
  }

}

const sheet$9 = new CSSStyleSheet();sheet$9.replaceSync(":host(:not([hidden])){display:inline-block;width:24px;}svg{display:block;width:100%;aspect-ratio:1;}");

const x$8 = document.createElement('template');x$8.innerHTML = "<svg viewBox=\"0 -960 960 960\" width=\"24\"><path fill=\"currentColor\"></svg>";

var ICONS = {
  'openfile': "M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640H447l-80-80H160v480l96-320h684L837-217q-8 26-29.5 41.5T760-160H160Zm84-80h516l72-240H316l-72 240Zm0 0 72-240-72 240Zm-84-400v-80 80Z",
  "openurl": "M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H600v-80h160v-480H200v480h160v80H200Zm240 0v-246l-64 64-56-58 160-160 160 160-56 58-64-64v246h-80Z",
  "openpaneright": "M460-320v-320L300-480l160 160ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm440-80h120v-560H640v560Zm-80 0v-560H200v560h360Zm80 0h120-120Z",
  "closepaneright": "M300-640v320l160-160-160-160ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm440-80h120v-560H640v560Zm-80 0v-560H200v560h360Zm80 0h120-120Z",
  "search": "M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z",
  "close": "m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z",
  "info": "M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"
};

class UiIconElement extends UiElement {

  #name = '';

  /** @type {SVGPathElement} */
  #path;

  constructor() {
    super(x$8, sheet$9);
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

const sheet$8 = new CSSStyleSheet();sheet$8.replaceSync(":host(:not([hidden])){--secondary-size:20em;--direction:row;--collapse-behavior:auto;display:block;overflow:hidden}.splitView,.splitView__pane{display:flex;flex-direction:var(--direction);overflow:hidden;}.splitView{height:100%;width:100%;--primary-flex:1 1 calc(100% - var(--secondary-size));--secondary-flex:0 0 var(--secondary-size);}.splitView__pane{min-width:0;min-height:0;}#secondary{transition-timing-function:ease-in-out;}#primary,#primary > div{flex:var(--primary-flex)}#secondary{flex:var(--secondary-flex);}#secondary > div{flex:var(--secondary-flex);}.splitView.collapse #secondary{flex-basis:0;}.wrap{display:grid;overflow:auto;}@media not (prefers-reduced-motion){.animate{transition:var(--ui-transion-duration) flex-basis;}}");

const x$7 = document.createElement('template');x$7.innerHTML = "<div class=\"splitView\"> <div id=\"primary\" class=\"splitView__pane\"> <div class=\"wrap\"> <slot name=\"primary\"></slot> </div> </div> <div id=\"secondary\" class=\"splitView__pane\"> <div class=\"wrap\"> <slot name=\"secondary\"></slot> </div> </div> </div> ";

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
class UiSplitViewElement extends UiElement {

  /** @type {HTMLDivElement} */
  #rootElem;
  /** @type {HTMLDivElement} */
  #secondaryElem;
  /** @type {ToggleOptions?} */
  #transitionOptions;

  constructor() {
    super(x$7, sheet$8);
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

const sheet$7 = new CSSStyleSheet();sheet$7.replaceSync(":host(:not([hidden])){display:inline-block;//height:var(--ui-spacing);border-radius:var(--ui-radius);-webkit-tap-highlight-color:transparent;background-color:color-mix( in srgb,transparent,var(--ui-color-accent) calc(100% * (1 - var(--invert,0))) );color:color-mix( in srgb,var(--ui-color-accent),var(--ui-color-accent-contrast) calc(100% * (1 - var(--invert,0))) );}@media(hover){:host(:not([disabled]):hover){background-color:color-mix( in srgb,var(--ui-color-base-dark),var(--ui-color-accent-dark) calc(100% * (1 - var(--invert,0))) );}}:host([disabled]){--ui-color-accent:var(--ui-color-base-muted);}button{display:block;font:inherit;background:transparent;border:0;color:inherit;padding:calc(2 * var(--ui-spacing-unit));height:inherit;-webkit-user-select:none;user-select:none;}");

const x$6 = document.createElement('template');x$6.innerHTML = "<button> <ui-iconlabel><slot></slot></ui-iconlabel> </button> ";

/**
 * Property | Inherts | Description 
 * -|-|-
 * `--ui-text-visibility` | No | `1` to show the text. `0` to hide it.
 * `--ui-icon-visibility` | No | `1` to show the icon. `0` to hide it.
 */
class UiButtonElement extends UiElement {

  /** @type {UiIconElement} */
  #iconElem;

  /** @type {HTMLButtonElement} */
  #buttonElem;

  constructor() {
    super(x$6, sheet$7);
    this.#iconElem = this.shadowRoot.querySelector('ui-iconlabel');
    this.#buttonElem = this.shadowRoot.querySelector('button');
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
    } else if (name === 'disabled') {
      this.#buttonElem.disabled = newValue !== null;
    }
  }

}

const sheet$6 = new CSSStyleSheet();sheet$6.replaceSync(":host([pressed]){--invert:0}:host(:not([pressed])){--invert:1}");

/**
 *
 */
class UiToggleButtonElement extends UiButtonElement {

  #clickHandler;

  constructor() {
    super();
    this.shadowRoot.adoptedStyleSheets.push(sheet$6);
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

const x$5 = document.createElement('template');x$5.innerHTML = "<div><slot></slot></div>";

const sheet$5 = new CSSStyleSheet();sheet$5.replaceSync(":host(:not([hidden])){display:block;}div{display:flex;gap:calc(var(--ui-spacing-unit) * 2);justify-content:space-between;align-items:center;flex-wrap:wrap;padding:calc(var(--ui-spacing-unit) * 2);width:100%;box-sizing:border-box;}::slotted(:not(ui-toolbox):not(ui-separator))::before{display:none;}::slotted(ui-separator){display:block;width:1px;height:var(--ui-padding);background:var(--ui-color-separator);align-self:center;// margin:auto var(--ui-spacing-unit);}");

class UiToolbarElement extends UiElement {

  constructor() {
    super(x$5, sheet$5);
  }

}

const x$4 = document.createElement('template');x$4.innerHTML = "<div><slot></slot></div>";

const sheet$4 = new CSSStyleSheet();sheet$4.replaceSync(":host(:not([hidden])){display:inline-flex;}div{display:flex;gap:calc(var(--ui-spacing-unit) * 2);}::slotted(ui-button){--invert:1;}");

class UiToolboxElement extends UiElement {

  constructor() {
    super(x$4, sheet$4);
  }

}

class UiSeparatorElement extends UiElement {

}

const x$3 = document.createElement('template');x$3.innerHTML = "<label> <ui-iconlabel></ui-iconlabel> <slot></slot> </label> ";

const sheet$3 = new CSSStyleSheet();sheet$3.replaceSync(":host(:not([hidden])){display:inline-grid;grid-template-columns:subgrid;grid-column:1 / span 2;gap:calc(var(--ui-spacing-unit) * 2);}label{align-items:center;display:grid;grid-template-columns:inherit;grid-column:inherit;align-items:baseline;}ui-iconlabel{color:var(--ui-color-base-muted);}");

class UiPropertyElement extends UiElement {

  #labelElem;

  constructor() {
    super(x$3, sheet$3);
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

const x$2 = document.createElement('template');x$2.innerHTML = "<div><slot></slot></div> ";

const sheet$2 = new CSSStyleSheet();sheet$2.replaceSync(":host(:not([hidden])){display:block;}::slotted(:not(ui-property):not(ui-separator)){display:none;}::slotted(ui-separator){border-top:1px solid var(--ui-color-separator);margin-top:calc(var(--ui-spacing-unit) * 2 - .5px);margin-bottom:calc(var(--ui-spacing-unit) * 2 - .5px);grid-column:1 / span 2;}div{display:grid;grid-template-columns:1fr 1fr;gap:calc(var(--ui-spacing-unit) * 2);}");

class UiPropertyListElement extends UiElement {

  #labelElem;

  constructor() {
    super(x$2, sheet$2);
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

const sheet$1 = new CSSStyleSheet();sheet$1.replaceSync(":host(:not([hidden])){display:inline-block;}div{display:inline-flex;--show-text:min(var(--ui-text-visibility,1),1);--show-icon:min(var(--ui-icon-visibility,1) * var(--has-icon,1),1);--font-size:calc(var(--show-text) * 1rem );--icon-size:calc(var(--has-icon) * var(--show-icon) * var(--ui-padding));--gap-size:calc(var(--show-text) * var(--show-icon) * var(--ui-spacing-unit));align-items:center;gap:var(--gap-size);white-space:nowrap;vertical-align:bottom;}ui-icon{flex:0 0 var(--icon-size);width:var(--icon-size);}span{display:block;font-size:var(--font-size);white-space:nowrap;text-overflow:ellipsis;overflow:hidden;min-width:0;max-width:100%;}");

const x$1 = document.createElement('template');x$1.innerHTML = "<div> <ui-icon></ui-icon> <span><slot></slot></span> </div> ";

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
class UiIconLabelElement extends UiElement {

  /** @type {UiIconElement} */
  #iconElem;

  /** @type {HTMLDivElement} */
  #rootElem;

  constructor() {
    super(x$1, sheet$1);
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

const sheet = new CSSStyleSheet();sheet.replaceSync("dialog[open]{border:0;box-shadow:0px 4px 12px 1px #000;background:var(--ui-color-base);color:var(--ui-color-base-contrast);border-radius:calc(var(--ui-radius) * 2);padding:0;min-width:min(30em,calc(100vw - var(--ui-spacing)));max-width:calc(100vw - var(--ui-spacing));padding:var(--ui-padding);box-sizing:border-box;display:flex;flex-direction:column;}dialog > *{gap:calc(var(--ui-spacing-unit) * 2);}.title{display:grid;align-items:center;grid-template-columns:1fr auto;border-bottom:1px solid var(--ui-color-separator);padding-bottom:calc(var(--ui-padding));}.title ui-button{--ui-text-visibility:0;}.actions{border-top:1px solid var(--ui-color-separator);display:flex;justify-content:center;padding-top:calc(var(--ui-padding));}.body{flex-shrink:1;overflow:auto;}::backdrop{background-color:#0008;}");

const x = document.createElement('template');x.innerHTML = "<dialog> <div class=\"title\"> <ui-iconlabel icon=\"openUrl\">Dialog</ui-iconlabel> <!--<ui-button icon=\"close\">Close</ui-button>--> </div> <div class=\"body\"> <slot></slot> </div> <div class=\"actions\"> <slot name=\"actions\"></slot> </div> </dialog> ";

/**
 * 
 */
class UiDialogElement extends UiElement {

  /** @type {UiIconElement} */
  #iconElem;

  /** @type {HTMLDialogElement} */
  #dialogElem;

  constructor() {
    super(x, sheet);
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

/**
 * Initializes App Kit. Registers the Web Components and adds the base 
 * stylesheet to the current document.
 */
const init = () => {
  // Add the global stylesheet to the document
  document.adoptedStyleSheets.push(sheet$a);
  /*
  for (const rule of globalStyles.rules) {
    if (rule.type === 4) {
      console.log(rule.media.mediaText = '(prefers-color-scheme: light)')
      
    }
  }
  */

  // Register the custom elements
  customElements.define('ui-icon', UiIconElement);
  customElements.define('ui-splitview', UiSplitViewElement);
  customElements.define('ui-button', UiButtonElement);
  customElements.define('ui-togglebutton', UiToggleButtonElement);
  customElements.define('ui-toolbar', UiToolbarElement);
  customElements.define('ui-toolbox', UiToolboxElement);
  customElements.define('ui-separator', UiSeparatorElement);
  customElements.define('ui-property', UiPropertyElement);
  customElements.define('ui-propertylist', UiPropertyListElement);
  customElements.define('ui-iconlabel', UiIconLabelElement);
  customElements.define('ui-modaldialog', UiDialogElement);
};

export { UiButtonElement, UiIconElement, UiIconLabelElement, UiDialogElement as UiModalDialogElement, UiPropertyElement, UiPropertyListElement, UiSeparatorElement, UiSplitViewElement, UiToggleButtonElement, UiToolbarElement, UiToolboxElement, init };
