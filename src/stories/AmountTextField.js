import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import withThemeProvider from './withThemeProvider';

import AmountTextField from '../components/AmountTextField'

storiesOf('AmountTextField', module)
    .addDecorator(withKnobs)
    .addDecorator(withThemeProvider)
    .add('AmountTextField', () => (
        <AmountTextField />
    ));

