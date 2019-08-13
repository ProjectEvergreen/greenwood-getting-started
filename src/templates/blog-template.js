import { html, LitElement } from 'lit-element';
import '@evergreen-wc/eve-container';
import '../components/footer/footer';
import '../components/header/header';
import '../styles/theme.css';
import blogCss from '../styles/blog.css';

MDIMPORT;
METAIMPORT;
METADATA;

class BlogTemplate extends LitElement {

  constructor() {
    super();
  }

  render() {
    return html`
      <style>
        ${blogCss}
      </style>
      
      METAELEMENT

      <div class='wrapper'>
        <app-header></app-header>

        <eve-container fluid>
          <div class='page-template content single-column'>
            <entry></entry>
          </div>
        </eve-container>

        <app-footer></app-footer>
      </div>
    `;
  }
}

customElements.define('page-template', BlogTemplate);