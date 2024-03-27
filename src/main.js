import globalStyles from './styles.css';

import UiIconElement from './Icon/UiIconElement.js';
import UiSplitViewElement from './SplitView/UiSplitViewElement.js';
import UiButtonElement from './Button/UiButtonElement.js';
import UiToggleButtonElement from './ToggleButton/UiToggleButtonElement.js';
import UiToolbarElement from './Toolbar/UiToolbarElement.js';
import UiToolboxElement from './Toolbox/UiToolboxElement.js';
import UiSeparatorElement from './Separator/UiSeparatorElement.js';
import UiPropertyElement from './Property/UiPropertyElement.js';
import UiPropertyListElement from './PropertyList/UiPropertyListElement.js';
import UiIconLabelElement from './IconLabel/UiIconLabelElement.js';
import UiModalDialogElement from './ModalDialog/UiModalDialogElement.js';

/**
 * Initializes App Kit. Registers the Web Components and adds the base 
 * stylesheet to the current document.
 */
const init = () => {
  // Add the global stylesheet to the document
  document.adoptedStyleSheets.push(globalStyles);
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
  customElements.define('ui-modaldialog', UiModalDialogElement);
}

export {
  init,
  UiIconElement,
  UiSplitViewElement,
  UiButtonElement,
  UiToggleButtonElement,
  UiToolbarElement,
  UiToolboxElement,
  UiSeparatorElement,
  UiPropertyElement,
  UiPropertyListElement,
  UiIconLabelElement,
  UiModalDialogElement
};
