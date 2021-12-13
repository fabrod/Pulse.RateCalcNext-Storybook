import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs} from '@storybook/addon-knobs';

import withThemeProvider from './withThemeProvider';

import GrayLabel from '../components/GrayLabel'

storiesOf('GrayLabel', module)
    .addDecorator(withKnobs)
    .addDecorator(withThemeProvider)
    .add('GrayLabel', () => (
        <GrayLabel label="GrayLabel for Storybook"/>
    ));

