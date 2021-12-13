import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import withThemeProvider from './withThemeProvider';

import WarningLabel from '../components/WarningLabel'

storiesOf('WarningLabel', module)
    .addDecorator(withKnobs)
    .addDecorator(withThemeProvider)
    .add('WarningLabel', () => (
        <WarningLabel label="WarningLabel for Storybook"/>
    ));

