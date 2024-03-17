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



/*  
  "openurl": "M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H600v-80h160v-480H200v480h160v80H200Zm240 0v-246l-64 64-56-58 160-160 160 160-56 58-64-64v246h-80Z",
  "openpaneright": "M460-320v-320L300-480l160 160ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm440-80h120v-560H640v560Zm-80 0v-560H200v560h360Zm80 0h120-120Z",
  "closepaneright": "M300-640v320l160-160-160-160ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm440-80h120v-560H640v560Zm-80 0v-560H200v560h360Zm80 0h120-120Z",
}
*/

export {
  SplitViewElement
};
