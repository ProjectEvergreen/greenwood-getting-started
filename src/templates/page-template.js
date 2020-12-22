import { html, LitElement } from 'lit-element';
import '../components/footer/footer';
import '../components/header/header';
import '../styles/theme.css';

class PageTemplate extends LitElement {

  constructor() {
    super();
  }

  render() {
    return html`
      <style>
      .content {
        flex: 1;
        max-width: 50em;
        height: 100%;
        overflow: scroll;
        margin: auto;
        font-size: 1.2rem;
        padding: 2rem;
      }
      .content h3 {
        color: #0b6623;
        font-size: 2rem;
        margin: 5px 0;
      }
      .content a {
        color: #1d337a;
      }
      </style>

      <div>
        <app-header></app-header>

          <div class='content'>
            <entry></entry>
          </div>

        <app-footer></app-footer>
      </div>
    `;
  }
}

customElements.define('page-template', PageTemplate);
