import { html, LitElement } from 'lit-element';
import '../components/footer';
import '../components/header';

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

      </style>
      
      METAELEMENT

      <div class='container'>
        <entry></entry>
      </div>
    `;
  }
}

customElements.define('page-template', BlogTemplate);