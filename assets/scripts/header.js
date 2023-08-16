class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <style>
            header {
                background-color: #333;
                color: white;
                padding: 5px;
                text-align: center;
            }
            
            /* Styling for the navigation links */
            nav {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            padding: 10px;
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
        <header>
          <h1>Senior Design</h1>
          <nav>
              <a href="/index.html">Home</a>
              <a href="#">FILLER1</a>
              <a href="#">About</a>
              <a href="https://github.com/jpcoker3/jpcoker3.github.io">Github</a>
          </nav>
        </header>
      `;
    }
  }
  
  customElements.define('header-component', Header);