export default class CustomElement extends HTMLElement {
  constructor() {
    super();
    console.log('MyCustomElement is constructed');
  }

  connectedCallback() {
    console.log('MyCustomElement added on the DOM');
  }

  static get observedAttributes() {
    return ['demo', 'njara'];
  }
  attributeChangedCallback(name, oldValue, newValue) {
    console.log('Attribute Changed! ', name, oldValue, newValue);
  }

  disconnectedCallback() {
    console.log('MyCustomElement removed from ');
  }
}
