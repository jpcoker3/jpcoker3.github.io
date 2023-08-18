class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <style>
            footer {
                background-color: #333;
                color: white;
                text-align: center;
            }
            
            /* Styling for the navigation links */
            nav {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            }
            nav a {
                color: white;
                text-decoration: none;
                display: block;
                padding: 10px 30px;
                background-color: #555;
                border-radius: 5px;
            }
        </style>
        <footer>
            <h1>Footer</h1>
          <nav>
              <a href="../../index.html">Home</a>
              <a href="https://github.com/jpcoker3/jpcoker3.github.io">Documentation</a>
          </nav>
        </footer>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);