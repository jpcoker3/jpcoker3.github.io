class ImageWithText extends HTMLElement {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return ['image-src', 'click-link','link-text'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'image-src') {
      this.imageSrc = newValue;
      this.render();
    }
    if (name === 'link-text') {
      this.linkText = newValue;
      this.render();
    }
    if (name === 'click-link') {
      this.clickLink = newValue;
      this.render();
    }
  }

  connectedCallback() {
    this.imageSrc = this.getAttribute('image-src') || '#'; // Default image source
    this.clickLink = this.getAttribute('click-link') || '#'; // Default link
    this.linkText = this.getAttribute('link-text') || 'NAME_MISSING'; // Default link text
    
      
    this.render();
  }

  render() {
    this.innerHTML = `
      <style>
        .image-with-text {
          display: inline-block;
          text-align: center;
          margin: 10px;
        }
        .image-with-text img {
          height: 400px;
          width: 400px;
        }
      </style>
      <div class="image-with-text">
        <img 
          src="${this.imageSrc}"
          alt="${this.linkText}">
        <p></p>
        <a href="${this.clickLink}" class="button">${this.linkText}</a>
      </div>
    `;
  }
}

customElements.define('image-with-button', ImageWithText);
