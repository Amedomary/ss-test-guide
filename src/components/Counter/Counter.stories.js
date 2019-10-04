import React from 'react';
import { storiesOf } from '@storybook/react';
import Demo from './demo';
import md from './Counter.md';

const stories = storiesOf('Components|Counter', module);

stories.addParameters({
  readme: {
    // Show readme before story
    content: `# Button`,
    // Show readme at the addons panel
    sidebar: md,
  },
})
  .add('Default', () => (
    <div className="row-gap">
      <Demo />
      <Demo />
    </div>
  ));
