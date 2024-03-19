import UiIconElement from './Icon/UiIconElement.js';
import UiSplitViewElement from './SplitView/UiSplitViewElement.js';
import UiButtonElement from './Button/UiButtonElement.js';
import UiToolbarElement from './Toolbar/UiToolbarElement.js';
import UiToolboxElement from './Toolbox/UiToolboxElement.js';
import UiSeparatorElement from './Separator/UiSeparatorElement.js';
import UiPropertyElement from './Property/UiPropertyElement.js';
import UiPropertyListElement from './PropertyList/UiPropertyListElement.js';

customElements.define('ui-icon', UiIconElement);
customElements.define('ui-splitview', UiSplitViewElement);
customElements.define('ui-button', UiButtonElement);
customElements.define('ui-toolbar', UiToolbarElement);
customElements.define('ui-toolbox', UiToolboxElement);
customElements.define('ui-separator', UiSeparatorElement);
customElements.define('ui-property', UiPropertyElement);
customElements.define('ui-propertylist', UiPropertyListElement);

export {
  UiIconElement,
  UiSplitViewElement,
  UiButtonElement,
  UiToolbarElement,
  UiToolboxElement,
  UiSeparatorElement,
  UiPropertyElement,
  UiPropertyListElement
};
