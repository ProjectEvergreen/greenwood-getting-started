import footerCss from './footer.css';

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
    const year = new Date().getFullYear();

    return `
      <style>
        ${footerCss}
      </style>

      <footer class="footer">
        <h4>
          <a href="https://www.greenwoodjs.io/">My Blog &copy; ${year}</a>
        </h4>
      </footer>
    `;
  }
}

customElements.define('app-footer', FooterComponent);