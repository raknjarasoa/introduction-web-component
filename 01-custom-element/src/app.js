import CustomElement from './custom-element.js';
import CustomAnchor from './custom-anchor.js';

class Main {
  constructor() {
    window.customElements.define('custom-element', CustomElement);
    window.customElements.define('custom-anchor', CustomAnchor, { extends: 'a' });
    
    const $p = document.getElementById('simple-p');
    
    // console.dir($p);
    
    const ce = document.createElement('custom-element');
    
    setTimeout(() => {
      document.body.appendChild(ce);
    }, 250);


    const a = document.createElement('a');

    a.href='https://www.google.com';
    a.text = 'Got to google';
    a.setAttribute('is', 'custom-anchor');
    
    setTimeout(() => {
      document.body.appendChild(a);
    }, 250);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new Main();
});
