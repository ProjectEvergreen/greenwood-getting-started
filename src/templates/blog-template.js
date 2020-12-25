import { html, LitElement } from 'lit-element';
import '../components/footer/footer';
import '../components/header/header';
import '../styles/theme.css';

class BlogTemplate extends LitElement {

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
      .content h2 {
        color: #0b6623;
      }
      .content h2, & h3 {
        font-size: 2rem;
        margin: 5px 0;
      }
      .content a {
        color: #1d337a;
      }
      </style>

      <div>
        <app-header></app-header>

          <div class='page-template content'>
            <entry></entry>

            <h3>More Posts</h3>
            <nav>
              <ul>
                <li><a href="/blog/second-post">My Second Post</a></li>
                <li><a href="/blog/first-post">My First Post</a></li>
              </ul>
            </nav>
          </div>

        <app-footer></app-footer>
      </div>
    `;
  }
}

customElements.define('page-template', BlogTemplate);
