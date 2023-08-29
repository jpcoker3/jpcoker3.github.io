class PDFDisplay extends HTMLElement {
    constructor() {
      super();
    }
  
    static get observedAttributes() {
      return ['pdf-src'];
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'pdf-src') {
        this.pdfSrc = newValue;
        this.render();
      }
    }
  
    connectedCallback() {
      this.pdfSrc = this.getAttribute('pdf-src') || '#'; // Default pdf source
      this.render();
    }
  
    render() {
      this.innerHTML = `
        <style>
          #pdfContainer {
            border: 1px solid #ccc;
            margin-top: 20px;
            padding: 10px;
            max-width: 800px;
          }
          
          #pdfFrame {
            width: 100%;
            height: 600px;
          }
        </style>

        <div class="pdf-display">

            <embed src="${this.pdfSrc}" width="800px" height="2100px" />
        </div>
      `;
    }
  }
  
  customElements.define('pdf-display', PDFDisplay);
  