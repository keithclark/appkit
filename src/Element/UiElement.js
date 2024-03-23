import globalStyles from './styles.css';

document.adoptedStyleSheets.push(globalStyles)

export default class UiElement extends HTMLElement {

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
