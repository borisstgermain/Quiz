import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

storiesOf('Button', module)
  .add('Simple button', () => (
    <button onClick={action('click')}>Hello button</button>
  ));
