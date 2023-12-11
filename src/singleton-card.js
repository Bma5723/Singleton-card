import { LitElement, html, css } from 'lit';

export class SingletonCard extends LitElement {
  static get properties() {
    return {
      image: { type: String },
    };
  }

  static get styles() {
    return css`
      .wrapper {
        width: 400px;
        border: 2px solid black;
        display: inline-flex;
      }

      .image {
        width: 400px;
      }
    `;
  }

  constructor() {
    super();
    this.image = 'https://www.inquirer.com/resizer/JVse2HXoMM-7NcrCYLy8QPlLBnY=/800x533/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/pmn/GPCW7HKIGBB35GT5JNSHOYPF7Y.jpeg'
  }

  render() {
    return html`
      <div class="wrapper">
        <img class="image" src=${this.image} alt="Singleton Image" />
        <slot/>
      </div>
    `;
  }
}

customElements.define('singleton-card', SingletonCard);
