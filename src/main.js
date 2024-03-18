import IconElement from './Icon/IconElement.js';
import SplitViewElement from './SplitView/SplitViewElement.js';
import ButtonElement from './Button/ButtonElement.js';
import ToolbarElement from './Toolbar/ToolbarElement.js';
import ToolboxElement from './Toolbox/ToolboxElement.js';
import SeparatorElement from './Separator/SeparatorElement.js';
import PropertyElement from './Property/PropertyElement.js';
import PropertyListElement from './PropertyList/PropertyListElement.js';

customElements.define('ui-icon', IconElement);
customElements.define('ui-splitview', SplitViewElement);
customElements.define('ui-button', ButtonElement);
customElements.define('ui-toolbar', ToolbarElement);
customElements.define('ui-toolbox', ToolboxElement);
customElements.define('ui-separator', SeparatorElement);
customElements.define('ui-property', PropertyElement);
customElements.define('ui-propertylist', PropertyListElement);

export {
  IconElement,
  SplitViewElement,
  ButtonElement,
  ToolbarElement,
  ToolboxElement,
  SeparatorElement,
  PropertyElement,
  PropertyListElement
};
