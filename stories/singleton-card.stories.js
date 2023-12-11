import { html } from 'lit';
import '/src/singleton-card.js';

export default {
  title: 'SingletonCard',
  component: 'singleton-card',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <singleton-card
      style="--singleton-card-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </singleton-card>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};