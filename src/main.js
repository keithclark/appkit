export { default as IconElement } from './Icon/IconElement.js';
export { default as SplitViewElement } from './SplitView/SplitViewElement.js';
export { default as ButtonElement } from './Button/ButtonElement.js';
export { default as ToolbarElement } from './Toolbar/ToolbarElement.js';
export { default as ToolboxElement } from './Toolbox/ToolboxElement.js';
export { default as SeparatorElement } from './Separator/SeparatorElement.js';
export { default as PropertyElement } from './Property/PropertyElement.js';
export { default as PropertyListElement } from './PropertyList/PropertyListElement.js';

customElements.define('ui-icon', IconElement);
customElements.define('ui-splitview', SplitViewElement);
customElements.define('ui-button', ButtonElement);
customElements.define('ui-toolbar', ToolbarElement);
customElements.define('ui-toolbox', ToolboxElement);
customElements.define('ui-separator', SeparatorElement);
customElements.define('ui-property', PropertyElement);
customElements.define('ui-propertylist', PropertyListElement);
