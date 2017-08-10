import { configure } from '@storybook/react';

function loadStories() {
  require('../client/src/components/stories/Button.jsx');
}

configure(loadStories, module);
