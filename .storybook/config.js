import { configure } from '@storybook/react';

function loadStories() {
  require('../client/src/components/stories/index.jsx');
}

configure(loadStories, module);
