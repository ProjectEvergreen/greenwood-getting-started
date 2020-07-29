import { html, LitElement } from 'lit-element';
import '@evergreen-wc/eve-container';
import '../components/footer/footer';
import '../components/header/header';
import '../styles/theme.css';
import pageCss from '../styles/home.css';

class PageTemplate extends LitElement {

  constructor() {
    super();
  }

  render() {
    return html`
      <style>
        ${pageCss}
      </style>

      <div class='wrapper'>
        <app-header></app-header>

        <eve-container fluid>
          <div class='content'>
            <entry></entry>
          </div>
        </eve-container>

        <app-footer></app-footer>
      </div>
    `;
  }
}

customElements.define('page-template', PageTemplate);