export default class PreviewElement extends HTMLElement {

  #iframe;
  #slot;

  constructor() {
    super()
    this.attachShadow({mode: 'open'});
    this.#iframe = this.ownerDocument.createElement('iframe');
    this.shadowRoot.appendChild(this.#iframe);

    const f = this.ownerDocument.createElement('div');
    f.append(...this.childNodes)

    this.innerHTML = f.innerHTML

  }

  set innerHTML(value) {
    this.#iframe.srcdoc = value;
  }
}