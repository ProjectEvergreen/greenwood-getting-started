const template = document.createElement('template');

import * as d3 from 'd3';

console.log({ d3 });

export default class HeaderComponent extends HTMLElement {
  connectedCallback() {
    if (!this.shadowRoot) {
      template.innerHTML = `
        <style>
          .header {
            background-color: var(--color-bg);;
            min-height: 30px;
            padding: 10px;
            font-size: 1.2rem;

            & h4 {
              margin: 0 auto;
              padding: 4px 0 0 10px;
              display: inline-block;
              color: #efefef;
            }

            & .head-wrap {
              display: flex;
              align-items: center;
              flex-wrap: wrap;
            }

            & .brand {
              justify-items: left;
              padding: 10px;
            }

            & .brand img {
              float:left;
              height: 30px;
              width: 30px;
            }
          }
        </style>

        <header class="header">
          <div class="head-wrap">
            <div class="brand">
              <a href="/">
                <img src="/assets/greenwood-logo.png" alt="Greenwood logo"/>
                <h4>My Blog</h4>
              </a>
            </div>
          </div>
        </header>
      `;
      
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }
}

customElements.define('app-header', HeaderComponent);