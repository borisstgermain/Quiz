import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '../Button';
import '../Button/Button.css';

storiesOf('Button', module)
  .add('Simple button', () => (
    <Button
      label={'Button'}
      onClickHandler={action('clicked')}
    />
  ))
  .add('Full-Width Button', () => (
    <Button
      label={'Full-width Button'}
      onClickHandler={action('clicked')}
      fullWidth
    />
  ));
