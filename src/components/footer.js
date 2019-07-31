class FooterComponent extends HTMLElement {
  constructor() {
    super();

		// create a Shadow DOM
    this.root = this.attachShadow({ mode: 'closed' });
  }

	// run some code when the component is ready
  connectedCallback() {
    this.root.innerHTML = this.getTemplate();
  }

  // create templates that interpolate variables and HTML!
  getTemplate() {
    return `<footer>This is the footer component.</footer>`;
  }
}

customElements.define('app-footer', FooterComponent);
