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
    this.image = new URL('../src/assets/singleton.jpeg', import.meta.url).href;
  }

  render() {
    return html`
      <div class="wrapper">
        <img class="image" src="${this.image}" alt="Singleton Image" />
      </div>
    `;
  }
}

customElements.define('singleton-card', SingletonCard);
