import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import withThemeProvider from './withThemeProvider';

import DatePicker from '../components/DatePicker'

storiesOf('DatePicker', module)
    .addDecorator(withKnobs)
    .addDecorator(withThemeProvider)
    .add('DatePicker', () => (
        <DatePicker />
    ));

