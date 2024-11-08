const template = document.createElement('template');

export default class FooterComponent extends HTMLElement {
  connectedCallback() {
    const year = new Date().getFullYear();

    if (!this.shadowRoot) {
      template.innerHTML = `
        <style>
          .footer {
            position: fixed;
            bottom: 0;
            width: 100%;
            background-color: var(--color-bg);
            min-height: 30px;
            padding-top: 10px;

            & a {
              color: #efefef;
              text-decoration: none;
            }

            & h4 {
              width: 90%;
              margin: 0 auto;
              padding: 0;
              text-align: center;
            }
          }
        </style>
        <footer class="footer">
          <h4>
            <a href="https://www.greenwoodjs.dev/">My Blog &copy;${year} &#9672 Built with GreenwoodJS</a>
          </h4>
        </footer>
      `;
      
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }
}

customElements.define('app-footer', FooterComponent);