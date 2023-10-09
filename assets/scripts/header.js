class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <style>
            header {
                background-color: #272727;
                color: #7728BD;
                padding: 5px;
                text-align: center;
            }
            img {
              width: 300px
            }
            
            /* Styling for the navigation links */
            nav {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            padding: 20px 80px;
            row-gap: 20px;
            column-gap: 10px;
            }
            nav a {
                color: #7728BD;
                text-decoration: none;
                display: block;
                padding: 10px 30px;
                background-color: #272727;
                border-color: #7728BD;
                border-style: solid;
            }

        </style>
        <header>
        <img src="../../assets/images/SafeStep.png" alt="Safe Step Logo">
          <nav>
              <a href="../../index.html">Home</a>
              <a href="../../pages/development.html">Development</a>
              <a href="../../pages/about.html">About</a>
              <a href="https://github.com/jpcoker3/jpcoker3.github.io">Documentation</a>
          </nav>
        </header>
      `;
    }
  }
  
  customElements.define('header-component', Header);