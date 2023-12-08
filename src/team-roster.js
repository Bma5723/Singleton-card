import { LitElement, html, css } from 'lit';
import "./singleton-card.js";
import "./search-widget.js";

export class TeamRoster extends LitElement {
    static get tag() {
        return 'team-roster';
    }
    static get properties() {
        return {
          players: { type: Array },
          team: { type: String },
        }
    }

    constructor() {
        super();
        this.players = [];
        this.team = 'Penn State';
        this.getSearchResults().then((results) => {
            this.players = results;
        });
    }
    
    static get styles() {
        return css`
        :host {
            display: block;
        }
        .wrapper {
            border: 2px solid black;
            display: flex;
        }
        .item {
            display: inline-flex;
        }
    `;
    }

    async getSearchResults(value = '') {
        const address = `/api/roster?search=${value}`;
        const results = await fetch(address).then((response) => {
            if (response.ok) {
                return response.json()
            }
            return [];
        })
        .then((data) => {
            return data;
        });

        return results;
    }

    async _handleSearchEvent(e) {
        const term = e.detail.value;
        this.players = await this.getSearchResults(term);
    }

    render() {
        return html`
        <h2>${this.team}</h2>
        <search-widget @value-changed="${this._handleSearchEvent}"></search-widget>
        <div class="wrapper">
            ${this.players.map(player => html`
            <div class="item">
                <singleton-card name="${player.name}" position="${player.position}" top="${player.top}" statsLabel="${player.statsLabel}" image="${player.image}"></singleton-card>
            </div>
            `)}
        </div>
        `;
    }
}
customElements.define(TeamRoster.tag, TeamRoster);