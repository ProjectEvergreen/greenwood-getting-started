import headerCss from './header.css';
// import brand from '../../assets/brand.png';

class HeaderComponent extends HTMLElement {
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
    return `
      <style>
        ${headerCss}
      </style>

      <header class="header">
        <eve-container fluid>
          <div class="head-wrap">
            <div class="brand">
              <a href="https://www.greenwoodjs.io" target="_blank" rel="noopener noreferrer">
                <img src="" />
              </a>
              <h4 class="project-name">My Blog</h4>
            </div>
            <nav>
              <ul>
                <a href="/"><li>Home</li></a>
                <a href="/about-started"><li>About</li></a>
              </ul>
            </nav>
            <div class="social">
              <a href="">
                <a href="https://github.com/ProjectEvergreen/greenwood">
                  <img src="https://img.shields.io/github/stars/ProjectEvergreen/greenwood.svg?style=social&logo=github&label=github" />
                </a>
              </a>
            </div>
          </div>
        </eve-container>
      </header>
    `;
  }
}

customElements.define('app-header', HeaderComponent);