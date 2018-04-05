export default class CustomAnchor extends HTMLAnchorElement {
  connectedCallback() {
    this.addEventListener('click', (e) => {
      e.preventDefault();

      const result = confirm('Voulez vous vraiment vour rediriger vers cette page?');

      if (result) {
        window.location.href = e.currentTarget.href;
      }
    });
  }
}
